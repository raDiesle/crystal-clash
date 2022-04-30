import {Card, CardContent, Container} from "@mui/material";
import {Editor} from "../../../editor/editor";
import {useParams} from "react-router-dom";
import {Cards, ICard, TAbilities} from "../../../components/cards-game-data";
import {imgPathCardFn} from "../../../components/img-wrappers/img-utils";
import {UNIT_ABILITY_HINT} from "../../../components/card-abilities-data";
import {assert} from "../../../components/typescript-utils";
import React from "react";
import {
    CARD_DESCRIPTIONS,
    CARD_Short_Descriptions,
    ICardDescriptionRaw
} from "../../../components/cards-description-data";
import {NavigateHistoryBack} from "../../../header/navigate-history-back";
import {
    findInferredSingleAbilityKeys,
    generateInferredAbilitiesExplanationsToJsx,
    generateInferredAbilityKeys
} from "./prepare-data/inferred-abilities";
import {
    generateTemplatingAndJsxVisualTransformations,
    IAbilitiesKeyObjectStrict
} from "./prepare-data/templating-and-jsx-styling";

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

interface ICardDescription extends ICardDescriptionRaw{
    keyEn: string;
    description?: ICardDescriptionRaw;
    descriptionShort?: ICardDescriptionRaw;
}

interface IRawCardData extends ICard, Partial<ICardDescription> {
    key: string;
}

const getCurrentRawCardData = (cardName: string): IRawCardData => {
    const currentCardData = Cards.find(({name}) => name === cardName);
    assert(currentCardData);
    const calculatedCardKey = ["Blue", "Green", "White", "Black", "Colorless"].reduce((previousValue, currentValue) => previousValue.replace(currentValue.toLowerCase(), ""), currentCardData.image.toLowerCase());


    const cardDataDescription = CARD_DESCRIPTIONS.find(({key}) => key === calculatedCardKey) || undefined;
    const description = typeof cardDataDescription !== "undefined" ? {
        ...cardDataDescription,
        keyEn: "Description",
    } : cardDataDescription;

    const cardDataShortDescription = CARD_Short_Descriptions.find(({key}) => key === calculatedCardKey) || undefined;
    const descriptionShort = typeof cardDataShortDescription !== "undefined" ? {
        ...cardDataShortDescription,
        keyEn: "Description",
    } : cardDataShortDescription;

    return {
        ...currentCardData,
        key: calculatedCardKey,
        description,
        descriptionShort
    };
}


const getCompleteCardData = (cardName: string) => {
    const cardData = getCurrentRawCardData(cardName);
    const cardDescriptionsJsx = typeof cardData.description !== "undefined" ? generateTemplatingAndJsxVisualTransformations([cardData.description]) : <></>;

    const abilitiesKeyObject = getAbilitiesKeyObject(cardData.abilities);

    const abilityExplanationsAndDirectAbilitiesJsx = generateTemplatingAndJsxVisualTransformations(abilitiesKeyObject);

    const allAbilityKeysNoDuplicatesOfDescription: string[] = typeof cardData.description !== "undefined" ? [...Array.from(new Set(findInferredSingleAbilityKeys(cardData.description.en)))] : [];
    const allAbilityKeysNoDuplicates: string[] = [...Array.from(new Set([...generateInferredAbilityKeys(abilitiesKeyObject), ...allAbilityKeysNoDuplicatesOfDescription]))];
    const inferredExplanatonsJsx = allAbilityKeysNoDuplicates.length > 0 ? generateInferredAbilitiesExplanationsToJsx(allAbilityKeysNoDuplicates) : <></>;

    return {
        ...cardData,
        cardDescriptionsJsx,
        abilitiesKeyObject,
        abilitiesJsx : abilityExplanationsAndDirectAbilitiesJsx,
        inferredAbilitiesExplanationsJsx: inferredExplanatonsJsx
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
                    {getCurrentCardData.cardDescriptionsJsx}
                    {getCurrentCardData.abilitiesJsx}
                    {getCurrentCardData.inferredAbilitiesExplanationsJsx}
                </CardContent>

            </Card>

            <Editor pageTitle={cardName} categoryPath="card-details" editorPath={nameAsKey}/>
        </Container></>
}