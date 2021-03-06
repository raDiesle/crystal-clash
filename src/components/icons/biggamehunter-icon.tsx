import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function BiggamehunterIcon() {

    return <span title="Big Game Hunter" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                   <path
                       d="M324.55 177A69 69 0 01264 238v-29a40.7 40.7 0 01-16 .05v29a69.25 69.25 0 01-60.84-61h29a40.59 40.59 0 01.1-16h-29.1A69.67 69.67 0 01248 100.58v29a40.7 40.7 0 0116 .05v-29c32 3.68 56.87 29.42 60.55 60.42h-29.07a40.59 40.59 0 01.1 16h29zm120.31 79c0 131.42-84.72 238.33-188.86 238.33-104.14 0-188.86-106.91-188.86-238.33 0-131.42 84.72-238.33 188.86-238.33 104.14 0 188.86 106.91 188.86 238.33zm-228.7 39.53c0-10.7-17.85-19.38-39.87-19.38-22.02 0-39.87 8.68-39.87 19.38s17.85 19.38 39.87 19.38c22.02 0 39.87-8.67 39.87-19.38zM264 254.06A85.59 85.59 0 00340.64 177H364v-16h-23.36C336.84 121 304 88.29 264 84.49V64h-16v20.49A85.35 85.35 0 00171.07 161H146v16h25.07A85 85 0 00248 254.06V273h16v-18.94zm112.83 41.48c0-10.7-17.85-19.38-39.87-19.38-22.02 0-39.87 8.68-39.87 19.38s17.85 19.38 39.87 19.38c22.02 0 39.87-8.68 39.87-19.39z"
                   ></path>
            </svg>
        </SvgIcon>
    </span>
}
