import reactStringReplace from "react-string-replace";
import React from "react";
import {TAbilities} from "../../../../components/cards-game-data";
import {templateCompilePercentages, templateCompileTextNames, TtemplateParams} from "./templating";
import {newLineToBrJsx} from "./jsx-styling";


export interface IAbilitiesKeyObject {
    key: string;
    keyEn?: TAbilities | string;
    en: string;
    propspercentage?: { [key: string]: number };
    propsname?: { [key: string]: string };
}

export interface IAbilitiesKeyObjectStrict extends IAbilitiesKeyObject {
    en: string;
    propspercentage: { [key: string]: number };
    propsname: { [key: string]: string };
}


interface ITransformationConfig {
    rule: (value: string) => boolean,
    transformation: (value: number) => string
}


enum SPECIAL_STYLING_FLAGS {
    "#DAMAGE_" = "#DAMAGE_",
    "#HEALTH_" = "#HEALTH_",
    "#ENERGY_" = "#ENERGY_"
}

export const generateTemplatingAndJsxVisualTransformations = (abilitiesKeyObject : IAbilitiesKeyObject[]) => {

    const abilitiesJsx = abilitiesKeyObject.map((abilitiesKeyObject: IAbilitiesKeyObject) => {

        const {key: abilityKey, en, propspercentage = {}, propsname = {}, keyEn= "###"} = abilitiesKeyObject;

        const propspercentageWithSymbol: TtemplateParams = Object.keys(propspercentage).reduce((accumulator, key) => {
            const currentValue = propspercentage[key];

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

        const compiledResultPercentage = templateCompilePercentages(en, propspercentageWithSymbol);
        const compiledResultPandName = templateCompileTextNames(compiledResultPercentage, propsname);

        const specialStylingJsx = reactStringReplace(compiledResultPandName, /(#[A-Z]+_[\d]+)/ig, ((match, i) => {
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
            };
            if (matchedFlag) {
                return <React.Fragment
                    key={match}>{matchedFlagRenderingConfig[matchedFlag as SPECIAL_STYLING_FLAGS]}</React.Fragment>;
            }
            return <span key={match} style={{color: "grey", fontWeight: "bold"}}>{match}</span>;
        }));

        const abilityExplanationJsxKeyword = reactStringReplace(specialStylingJsx, /<span.*?>(.*?)<\/span>/ig, ((match, i) => {
            return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
        }));
        const abilityExplanationJsx = newLineToBrJsx(abilityExplanationJsxKeyword, abilitiesKeyObject.key);

        return <div>
            <div key={abilityKey}>
                <div style={{fontWeight: "bold", paddingTop: "10px"}}>- {keyEn} -</div>
                <span>{abilityExplanationJsx}</span>
            </div>
        </div>;
    });

    return <>
        {abilitiesJsx}
    </>
};
