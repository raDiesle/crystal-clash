import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function FrostslimeIcon() {

    return <span title="Frostslime" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                   <path
                       d="M463.788 376c-22.562 39.09-132.242-79.382-171.32-56.815C253.394 341.752 301.123 496 256 496c-45.121 0 2.607-154.248-36.47-176.815C180.454 296.617 70.774 415.087 48.213 376 25.65 336.91 183.06 301.135 183.06 256c0-45.135-157.407-80.91-134.847-120 22.56-39.088 132.24 79.38 171.317 56.814C258.607 170.247 210.88 16 256 16c45.121 0-2.607 154.246 36.47 176.814C331.546 215.38 441.226 96.91 463.786 136c22.562 39.089-134.846 74.865-134.846 120 0 45.135 157.41 80.912 134.848 120z"
                   ></path>
            </svg>
        </SvgIcon>
    </span>
}
