import {NavigateToHome} from "../../../header/navigate-to-home";
import {Card, CardContent, Container} from "@mui/material";
import {Editor} from "../../../editor/editor";
import {useParams} from "react-router-dom";
import {Cards, ICard, TAbilities} from "../../../components/cards-game-data";
import {imgPathCardFn} from "../../../components/img-wrappers/img-utils";
import {CARD_ABILITIES, UNIT_ABILITY_HINT} from "../../../components/card-abilities-data";
import reactStringReplace from "react-string-replace";
import template from "lodash.template";
import {assert} from "../../../components/typescript-utils";
import React from "react";
import {CARD_DESCRIPTIONS, CARD_Short_Descriptions, ICardDescription} from "../../../components/cards-description-data";
import {NavigateHistoryBack} from "../../../header/navigate-history-back";


interface IAbilitiesKeyObject {
    key: string;
    keyEn: TAbilities;
    description: string;
    propspercentage?: { [key: string]: number };
    propsname?: { [key: string]: string };
}

interface IAbilitiesKeyObjectStrict extends IAbilitiesKeyObject {
    propspercentage: { [key: string]: number };
    propsname: { [key: string]: string };
}


type TtemplateParams = { key: string, value: number | string } | {} | undefined;


const templateCompilePercentages = (textTemplate: string, params: TtemplateParams): string => {
    if (typeof params === "undefined") {
        return textTemplate;
    }
    const compile = template(textTemplate, {interpolate: /%\(([a-z\d_]+?)\)/gi});
    const compiledResult = compile(params);
    return compiledResult;
}

const templateCompileTextNames = (textTemplate: string, params: TtemplateParams): string => {
    if (!params) {
        return textTemplate;
    }
    const compile = template(textTemplate, {interpolate: /§\(([a-z_]+?)\)/g});
    const compiledResult = compile(params);
    return compiledResult;
}

const newLineToBrJsx = (input : any, childKey: string) => {
    return reactStringReplace(input, /(\\n)/ig, ((match, pos, offset) => {
        return <br key={`${childKey}_br_${pos}_${offset}`}/>;
    }));
}

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
            description: en
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

    return {...currentCardData, key: calculatedCardKey, description: cardDataDescription, descriptionShort: cardDataShortDescription};
}


const getDescriptionsJsx = (cardData: IRawCardData) => {

    // const propspercentageWithSymbol = Object.keys(cardData.description.propspercentage).reduce((accumulator, key) => {
    //     const currentValue = cardData.description.propspercentage[key];
    // });

    const compiledResultPercentage = templateCompilePercentages(cardData.description.en, cardData.description.propspercentage);
    const compiledResultPandName = templateCompileTextNames(compiledResultPercentage, cardData.description.propsname);
    const descriptionJsxNewLine = newLineToBrJsx(compiledResultPandName, "description_long");

    return {
        short: <>.</>,
        long: <div>{descriptionJsxNewLine}</div>
    }
};

const CARD_ABILITIES_PREPARED = CARD_ABILITIES.map(({key, en}) => {
    const matches = en.match(/[\s\"][a-z]*\"/gi);
    const matchesNormalized = Array.isArray(matches) ? matches[0].trim().replace("\"", "").replace("\\\"", "") : "FAILED";

    return {
        key,
        classKey: matchesNormalized,
        en,
    }
});

interface ITransformationConfig {
    rule: (value: string) => boolean,
    transformation: (value: number) => string
}

const getCompleteCardData = (cardName: string) => {
    const cardData = getCurrentRawCardData(cardName);
    const cardDescriptionsJsx = getDescriptionsJsx(cardData);

    // @ts-ignore
    const abilitiesKeyObject = getAbilitiesKeyObject(cardData.abilities);

    enum SPECIAL_STYLING_FLAGS {
        "#DAMAGE_" = "#DAMAGE_",
        "#HEALTH_" = "#HEALTH_",
        "#ENERGY_" = "#ENERGY_"
    }

    const abilitiesAndExplanations = abilitiesKeyObject.map((abilitiesKeyObject: IAbilitiesKeyObjectStrict) => {

        const propspercentageWithSymbol: TtemplateParams = Object.keys(abilitiesKeyObject.propspercentage).reduce((accumulator, key) => {
            const currentValue = abilitiesKeyObject.propspercentage[key];

            const specialStylingFlagTransformationConfig: ITransformationConfig[] = [
                {
                    rule: key => key.endsWith("percentage"),
                    transformation: (value) => value + "%"
                },
                {
                    rule: value => value.includes("damage"),
                    transformation: (value) => SPECIAL_STYLING_FLAGS["#DAMAGE_"] + value.toString()
                },
                {
                    rule: value => value.includes("health"),
                    transformation: (value) => SPECIAL_STYLING_FLAGS["#HEALTH_"] + value.toString()
                },
                {
                    rule: value => value.includes("energy"),
                    transformation: (value) => SPECIAL_STYLING_FLAGS["#ENERGY_"] + value.toString()
                }
            ];

            const possibleMatchedSpecialStylingConfig = specialStylingFlagTransformationConfig.find(ruleset => ruleset.rule(key));
            const valueToProceed = possibleMatchedSpecialStylingConfig ? possibleMatchedSpecialStylingConfig.transformation(currentValue) : currentValue;

            return {...accumulator, [key]: valueToProceed};
        }, {});

        const compiledResult = templateCompilePercentages(abilitiesKeyObject.description, propspercentageWithSymbol);

        const specialStylingJsx = reactStringReplace(compiledResult, /(#[A-Z]+_[\d]+)/ig, ((match, i) => {
            // @ts-ignore
            const matchedFlag = match.match(/#[A-Z]+_/ig)[0];
            const valueWithNoFlag = match.replace(/#[A-Z]+_/ig, "");
            const matchedFlagRenderingConfig = {
                [SPECIAL_STYLING_FLAGS["#HEALTH_"]]: <span
                    style={{color: "green", fontWeight: "bold"}}>{valueWithNoFlag}</span>,
                [SPECIAL_STYLING_FLAGS["#DAMAGE_"]]: <span
                    style={{color: "red", fontWeight: "bold"}}>{valueWithNoFlag}</span>,
                [SPECIAL_STYLING_FLAGS["#ENERGY_"]]: <span
                    style={{color: "yellow", fontWeight: "bold"}}>{valueWithNoFlag}</span>
            }
            if (matchedFlag) {
                return <React.Fragment
                    key={match}>{matchedFlagRenderingConfig[matchedFlag as SPECIAL_STYLING_FLAGS]}</React.Fragment>;
            }
            return <span key={match} style={{color: "grey", fontWeight: "bold"}}>{match}</span>;
        }));

        const abilityExplanationJsxKeyword = reactStringReplace(specialStylingJsx, /\<span.*?\>(.*?)\<\/span\>/ig, ((match, i) => {
            return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
        }));
        const abilityExplanationJsx = newLineToBrJsx(abilityExplanationJsxKeyword, abilitiesKeyObject.key);


        // @ts-ignore
        const matches = compiledResult.match(/keyword\s([a-z]*)/gi);
        const matchesNormalized = Array.isArray(matches) ? matches.map(match => match.replace("keyword ", "")) : []

        const removedDuplicatesOfInferred = [...Array.from(new Set(matchesNormalized))];


        return {
            abilityExplanationsAndDirectAbilitiesJsx : <div>
                <div key={abilitiesKeyObject.key}>
                    <div style={{fontWeight: "bold", paddingTop: "10px"}}>- {abilitiesKeyObject.keyEn} -</div>
                    <span>{abilityExplanationJsx}</span>
                </div>
            </div>,
            inferredAbilityKeys : removedDuplicatesOfInferred
        }
    });


    // @ts-ignore
    const allAbilityKeys = abilitiesAndExplanations.reduce((previous, current) => {
        return ([...previous, ...current.inferredAbilityKeys]);
    }, []);
    // @ts-ignore
    const allAbilityKeysNoDuplicates = [...Array.from(new Set(allAbilityKeys))];

    // @ts-ignore
    const inferredCardAbilityJsx = allAbilityKeysNoDuplicates.map((cardAbilityKey : string )  => {
        /* @ts-ignore */
        const mappedCardAbility: ({ en: string, key: string, classKey: string }) = CARD_ABILITIES_PREPARED.find(({classKey}) => (classKey === cardAbilityKey));
        const theJsx = reactStringReplace(mappedCardAbility.en, /\<span.*?\>(.*?)\<\/span\>/ig, ((match, i) => {
            return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
        }));
        return <div key={cardAbilityKey}>{theJsx}</div>;
    });




    return {
        ...cardData,
        cardDescriptionsJsx,
        abilitiesKeyObject,
        abilitiesJsx : abilitiesAndExplanations.map(object => object.abilityExplanationsAndDirectAbilitiesJsx),
        inferredAbilitiesExplanationsJsx:   <div style={{paddingTop: "30px"}}>
            {inferredCardAbilityJsx.map((jsx, pos) => <React.Fragment
                key={"ability" + pos}>{jsx}</React.Fragment>)}
        </div>
    }
}

export function CardDetails() {
    const {cardName = ""} = useParams();
    const getCurrentCardData = getCompleteCardData(cardName);

    const nameAsKey = cardName.replace(" ", "").replace(",", "").toLowerCase();

    // @ts-ignore
    const image: string = Cards.find(({name}) => name === cardName).image;
    return <>
        <NavigateHistoryBack />
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