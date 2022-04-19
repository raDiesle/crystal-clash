import React from "react";
import {SvgIcon} from "@mui/material";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export type FontAwesomeScalableIconProps = {
    icon: IconDefinition;
};

class FontAwesomeScalableIcon extends React.PureComponent<FontAwesomeScalableIconProps> {
    render(): JSX.Element {
        return (
            // the className is required!!!
            <SvgIcon {...this.props}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 20"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <FontAwesomeIcon icon={this.props.icon} color={"#B8FDFF"}/>
                </svg>
            </SvgIcon>
        );
    }
}

export default FontAwesomeScalableIcon;
