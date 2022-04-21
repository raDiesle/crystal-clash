import {SvgIcon} from "@mui/material";
import css from "./icon.module.scss";

export function LimitedGadgetIcon() {
    return <span title="Limited: Gadget" className={css.container}>
         <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
             <path
                 d="M130.72 61C106 61.11 106 62.875 106 91H76l-15 30v60l15 30h30c0 30 0 30 30 30h120c30 0 30 0 30-30h15l15-30h180v-60H316l-15-30h-15c0-30 0-30-30-30H136c-1.875 0-3.633-.007-5.28 0zM166 271a15 15 0 00-15 15v45a15 15 0 0015 15h60a15 15 0 0015-15v-45a15 15 0 00-15-15h-60zm-15 105c-30 0-45 30-45 30-15 0-30 0-30 15l-60 15v15h360v-15l-60-15c0-15-15-15-30-15 0 0-15-30-45-30h-90z"
             ></path>
         </SvgIcon>
    </span>
}