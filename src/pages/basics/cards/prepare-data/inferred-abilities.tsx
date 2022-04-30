import reactStringReplace from "react-string-replace";
import React from "react";
import {CARD_ABILITIES} from "../../../../components/card-abilities-data";


const CARD_ABILITIES_PREPARED = CARD_ABILITIES.map(({key, en}) => {
    const matches = en.match(/[\s"][a-z]*"/gi);
    const matchesNormalized = Array.isArray(matches) ? matches[0].trim().replace("\"", "").replace("\\\"", "") : "FAILED";

    return {
        key,
        classKey: matchesNormalized,
        en,
    }
});



export const findInferredSingleAbilityKeys = (en : string) : string[] =>  {

    // @ts-ignore
    const foundInferredAbilities = en.match(/keyword\s([a-z]*)/gi);
    const foundInferredAbilitiesNormalized = Array.isArray(foundInferredAbilities) ? foundInferredAbilities.map(match => match.replace("keyword ", "")) : []

    const removedDuplicatesOfInferred = [...Array.from(new Set(foundInferredAbilitiesNormalized))];

    // const abilitiesJsx = abilityExplanationsAndDirectAbilitiesJsx.map(object => object.abilityExplanationsAndDirectAbilitiesJsx);

    return removedDuplicatesOfInferred;
}

interface Itext {
    en: string;
}

export const generateInferredAbilityKeys = (object : Itext[]) => {
    const allInferredAbilityKeys = object.reduce((previous : string[], current) => [...previous, ...findInferredSingleAbilityKeys(current.en)], []);
    return allInferredAbilityKeys;
}


export const generateInferredAbilitiesExplanationsToJsx = (abilityKeys: string[]) => {
    // @ts-ignore
    const inferredCardAbilityJsx = abilityKeys.map((cardAbilityKey: string) => {
        /* @ts-ignore */
        const mappedCardAbility: ({ en: string, key: string, classKey: string }) = CARD_ABILITIES_PREPARED.find(({classKey}) => (classKey === cardAbilityKey));
        const theJsx = reactStringReplace(mappedCardAbility.en, /<span.*?>(.*?)<\/span>/ig, ((match, i) => {
            return <span key={match} style={{color: "#c5717f", fontWeight: "bold"}}>{match}</span>;
        }));
        return <div key={cardAbilityKey}>{theJsx}</div>;
    });

    const inferredAbilitiesExplanationsJsx = <div>
        <hr/>
        {inferredCardAbilityJsx.map((jsx, pos) => <React.Fragment
            key={"ability" + pos}>{jsx}</React.Fragment>)}
    </div>;
    return inferredAbilitiesExplanationsJsx;
}

