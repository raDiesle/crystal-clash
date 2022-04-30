import reactStringReplace from "react-string-replace";
import React from "react";

export const newLineToBrJsx = (input: any, childKey: string) => {
    return reactStringReplace(input, /(\\n)/ig, ((match, pos, offset) => {
        return <br key={`${childKey}_br_${pos}_${offset}`}/>;
    }));
}