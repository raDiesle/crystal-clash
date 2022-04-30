import {Card, CardContent, Container} from "@mui/material";
import {Editor} from "../../../editor/editor";
import {useParams} from "react-router-dom";
import {Cards, ICard, TAbilities} from "../../../components/cards-game-data";
import {imgPathCardFn} from "../../../components/img-wrappers/img-utils";
import {UNIT_ABILITY_HINT} from "../../../components/card-abilities-data";
import {assert} from "../../../components/typescript-utils";
import React from "react";
import {CARD_DESCRIPTIONS, CARD_Short_Descriptions, ICardDescription} from "../../../components/cards-description-data";
import {NavigateHistoryBack} from "../../../header/navigate-history-back";
import {generateInferredAbilitiesExplanationsToJsx} from "./prepare-data/inferred-abilities";
import {
    generateTemplatingAndJsxVisualTransformations,
    IAbilitiesKeyObjectStrict
} from "./prepare-data/templating-and-jsx-styling";
import {templateCompilePercentages, templateCompileTextNames} from "./prepare-data/templating";
import {newLineToBrJsx} from "./prepare-data/jsx-styling";


const getAbilitiesKeyObject = (abilities: TAbilities[] = []): IAbilitiesKeyObjectStrict[] => {
    return abilities.map(abilityKeyEn => {
        const matchedAbilityHint = UNIT_ABILITY_HINT.find(({keyEn}) => keyEn === abilityKeyEn);
        assert(matchedAbilityHint);
        const {key, en, propspercentage = {}, propsname = {}} = matchedAbilityHint;
        return {
            key,
            keyEn: abilityKeyEn,
            propspercentage,
            propsname,
            en
        };
    });
}

interface IRawCardData extends ICard {
    key: string;
    description: ICardDescription;
    descriptionShort: ICardDescription;
}

const getCurrentRawCardData = (cardName: string): IRawCardData => {
    const currentCardData = Cards.find(({name}) => name === cardName);
    assert(currentCardData);
    const calculatedCardKey = ["Blue", "Green", "White", "Black", "Colorless"].reduce((previousValue, currentValue) => previousValue.replace(currentValue.toLowerCase(), ""), currentCardData.image.toLowerCase());

    const cardDataShortDescription = CARD_Short_Descriptions.find(({key}) => key === calculatedCardKey) || "";
    assert(cardDataShortDescription);

    const cardDataDescription = CARD_DESCRIPTIONS.find(({key}) => key === calculatedCardKey) || "";
    assert(cardDataDescription);

    return {
        ...currentCardData,
        key: calculatedCardKey,
        description: cardDataDescription,
        descriptionShort: cardDataShortDescription
    };
}


const getDescriptionsJsx = (cardData: IRawCardData) => {

    const compiledResultPercentage = templateCompilePercentages(cardData.description.en, cardData.description.propspercentage);
    const compiledResultPandName = templateCompileTextNames(compiledResultPercentage, cardData.description.propsname);
    const descriptionJsxNewLine = newLineToBrJsx(compiledResultPandName, "description_long");

    return {
        short: <>.</>,
        long: <div>{descriptionJsxNewLine}</div>
    }
};


const getCompleteCardData = (cardName: string) => {
    const cardData = getCurrentRawCardData(cardName);

    const cardDescriptionsJsx = getDescriptionsJsx(cardData);

    // @ts-ignore
    const abilitiesKeyObject = getAbilitiesKeyObject(cardData.abilities);

    const abilityExplanationsAndDirectAbilitiesJsx = generateTemplatingAndJsxVisualTransformations(abilitiesKeyObject);


    const getInferredAbilityKeys = (en : string) : string[] =>  {

        // @ts-ignore
        const foundInferredAbilities = en.match(/keyword\s([a-z]*)/gi);
        const foundInferredAbilitiesNormalized = Array.isArray(foundInferredAbilities) ? foundInferredAbilities.map(match => match.replace("keyword ", "")) : []

        const removedDuplicatesOfInferred = [...Array.from(new Set(foundInferredAbilitiesNormalized))];

        // const abilitiesJsx = abilityExplanationsAndDirectAbilitiesJsx.map(object => object.abilityExplanationsAndDirectAbilitiesJsx);

        return removedDuplicatesOfInferred;
    }

    const allInferredAbilityKeys = abilitiesKeyObject.reduce((previous : string[], current) => [...previous, ...getInferredAbilityKeys(current.en)], []);

    const allAbilityKeysNoDuplicates: string[] = [...Array.from(new Set(allInferredAbilityKeys))];

    return {
        ...cardData,
        cardDescriptionsJsx,
        abilitiesKeyObject,
        abilitiesJsx : abilityExplanationsAndDirectAbilitiesJsx,
        inferredAbilitiesExplanationsJsx: generateInferredAbilitiesExplanationsToJsx(allAbilityKeysNoDuplicates)
    };
}

export function CardDetails() {
    const {cardName = ""} = useParams();
    const getCurrentCardData = getCompleteCardData(cardName);

    const nameAsKey = cardName.replace(" ", "").replace(",", "").toLowerCase();

    // @ts-ignore
    const image: string = Cards.find(({name}) => name === cardName).image;
    return <>
        <NavigateHistoryBack/>
        {/* @ts-ignore */}
        <Container>

            <Card>
                <CardContent>
                    <img src={imgPathCardFn(image)} alt={image}/>
                    {getCurrentCardData.cardDescriptionsJsx.long}
                    {getCurrentCardData.abilitiesJsx}
                    {getCurrentCardData.inferredAbilitiesExplanationsJsx}
                </CardContent>

            </Card>

            <Editor pageTitle={cardName} categoryPath="card-details" editorPath={nameAsKey}/>
        </Container></>
}