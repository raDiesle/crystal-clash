import template from "lodash.template";


export type TtemplateParams = { key: string, value: number | string } | {} | undefined;


export const templateCompilePercentages = (textTemplate: string, params: TtemplateParams): string => {
    if (typeof params === "undefined") {
        return textTemplate;
    }
    const compile = template(textTemplate, {interpolate: /%\(([a-z\d_]+?)\)/gi});
    const compiledResult = compile(params);
    return compiledResult;
}

export const templateCompileTextNames = (textTemplate: string, params: TtemplateParams): string => {

    if (!params) {
        return textTemplate;
    }
    const compile = template(textTemplate, {interpolate: /§([a-z_]+)/g});

    const compiledResult = compile(params);
    return compiledResult;
}