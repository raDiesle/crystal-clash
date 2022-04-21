import {SvgIcon} from "@mui/material";
import css from "./icon.module.scss";

export function MonumentalIcon() {
    return <span title="Monumental" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}><path
            d="M452.798 479.462L59.205 481.31s154.378-369.683 151.153-379.303l-46.12-.224 93.677-71.09 95.207 72.397-50.263.224z"
        ></path>
        </SvgIcon>
    </span>
}