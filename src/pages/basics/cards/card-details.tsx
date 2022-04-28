import {CcBreadcrumbs} from "../../../header/cc-breadcrumbs";
import {Card, CardContent, Container} from "@mui/material";
import {Editor} from "../../../editor/editor";
import {useParams} from "react-router-dom";
import {Cards, TAbilities} from "../../../components/cards-game-data";
import {imgPathCardFn} from "../../../components/img-wrappers/img-utils";
import {CARD_ABILITIES, UNIT_ABILITY_HINT} from "../../../components/card-abilities-data";
import reactStringReplace from "react-string-replace";
import template from "lodash.template";
import {assert} from "../../../components/typescript-utils";
import React from "react";


interface IAbilitiesKeyObject {
    key: string;
    keyEn: TAbilities;
    description: string;
    propspercentage?: any;
    propsname?: any;

}

const getAbilitiesKeyObject = (abilities: TAbilities[] = []): IAbilitiesKeyObject[] => {
    return abilities.map(abilityKeyEn => {
        const matchedAbilityHint = UNIT_ABILITY_HINT.find(({keyEn}) => keyEn === abilityKeyEn);
        assert(matchedAbilityHint);
        const {key, en, propspercentage, propsname} = matchedAbilityHint;
        return {
            key,
            keyEn : abilityKeyEn,
            propspercentage,
            propsname,
            description: en
        };
    });
}

const getCurrentCardData = (cardName: string) => Cards.find(({name}) => name === cardName);


const CARD_ABILITIES_PREPARED = CARD_ABILITIES.map(({key, en}) => {
    const matches = en.match(/[\s\"][a-z]*\"/gi);
    const matchesNormalized = Array.isArray(matches) ? matches[0].trim().replace("\"", "").replace("\\\"", "") : "FAILED";

    return {
        key,
        classKey: matchesNormalized,
        en,
    }
});

const getCompleteCardData = (cardName: string) => {
    const cardData = getCurrentCardData(cardName);
    // @ts-ignore
    const abilitiesKeyObject = getAbilitiesKeyObject(cardData.abilities);

    const abilitiesJsx = abilitiesKeyObject.map((abilitiesKeyObject: IAbilitiesKeyObject) => {

        const compile = template(abilitiesKeyObject.description, {interpolate: /%\(([a-z_]+?)\)/g})
        const compiledResult = compile(abilitiesKeyObject.propspercentage);
        // /{{([\s\S]+?)}}

        // @ts-ignore
        const matches = compiledResult.match(/keyword\s([a-z]*)/gi);
        const matchesNormalized = Array.isArray(matches) ? matches.map(match => match.replace("keyword ", "")) : []

        const descriptionJsxKeyword = reactStringReplace(compiledResult, /\<span.*?\>(.*?)\<\/span\>/ig, ((match, i) => {
            return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
        }));
        const descriptionJsx = reactStringReplace(descriptionJsxKeyword, /(\\n)/ig, ((match, pos, offset) => {
            return <br key={`${abilitiesKeyObject.key}_br_${pos}_${offset}`}/>;
        }));


        const inferredCardAbilityJsx = matchesNormalized.map(cardAbilityKey => {
            /* @ts-ignore */
            const mappedCardAbility: ({ en: string, key: string, classKey: string }) = CARD_ABILITIES_PREPARED.find(({classKey}) => (classKey === cardAbilityKey));
            const theJsx = reactStringReplace(mappedCardAbility.en, /\<span.*?\>(.*?)\<\/span\>/ig, ((match, i) => {
                return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
            }));
            return <div key={cardAbilityKey}>{theJsx}</div>;
        });

        return <div key={abilitiesKeyObject.key}>
            <div style={{fontWeight: "bold", paddingTop: "10px"}}>- {abilitiesKeyObject.keyEn} -</div>
            <span>{descriptionJsx}</span>
            <div style={{paddingTop: "30px"}}>
                {inferredCardAbilityJsx.map((jsx, pos) => <React.Fragment key={"ability" + pos }>{jsx}</React.Fragment>)}
            </div>
        </div>;
    });


    return {
        ...cardData,
        abilitiesKeyObject,
        abilitiesJsx
    }
}

export function CardDetails() {
    const {cardName = ""} = useParams();
    const getCurrentCardData = getCompleteCardData(cardName);

    const nameAsKey = cardName.replace(" ", "").replace(",", "").toLowerCase();

    // @ts-ignore
    const image: string = Cards.find(({name}) => name === cardName).image;
    return <>
        <CcBreadcrumbs/>
        {/* @ts-ignore */}
        <Container>

            <Card>
                <CardContent>
                    <img src={imgPathCardFn(image)} alt={image}/>
                    {getCurrentCardData.abilitiesJsx}
                </CardContent>

            </Card>

            <Editor pageTitle={cardName} categoryPath="card-details" editorPath={nameAsKey}/>
        </Container></>
}