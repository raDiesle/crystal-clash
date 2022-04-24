import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function CleaveIcon() {

    return <span title="Cleave" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                    <path
                        d="M296.625 25.406c-63.794.388-135.81 14.683-206.03 32.844-3.472 34.08 2.226 68.906 14.03 104.25C181.175 75.936 393.65 44.825 486.72 128 456.02 50.466 384.046 24.874 296.624 25.406zM65.655 61.438L27.906 71c5.643 78.022 28.546 132.393 60.44 174.47-16.54 10.348-40.693 19.673-68.782 26.843 5.664 6.597 14.25 16.18 30.53 18.53 24.846-4.33 39.912-14.982 53.75-26.593 76.24 85.145 190.22 118.955 253.126 224.22l49.436-.126C290.996 275.316 81.01 364.804 65.656 61.438z"
                    ></path>
            </svg>
        </SvgIcon>
    </span>
}
