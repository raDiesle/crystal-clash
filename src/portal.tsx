import ReactDOM from "react-dom";
import React from "react";

export const Portal: React.FC = ({children}) => {
    return typeof document === 'object'
        ? ReactDOM.createPortal(children, document.body)
        : null
}