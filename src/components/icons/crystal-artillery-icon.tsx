import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function CrystalArtilleryIcon() {

    return <span title="Crystal Artillery" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                           <path
                               d="M196.844 14.125l-8.75 2.906-43.22 13.44-3.5 1.155-1.75 2.938L30.75 206.593l-14 21.032 5.344 15.156L41.5 308.47l2.344 7 7.594-.595 74.156-4.687 6.437-.563 1.75-5.844 77.095-239.436 1.156-2.938-1.155-2.906-11.125-35.625-2.03-6.094-.032-.25h-.032l-.812-2.405zm123.812 5.25l-2.906 5.844-18.125 40.874-1.75 3.5 1.188 4.094L383.156 274l1.75 4.656 4.657 1.188 64.843 14.03 7.594 1.157V295l2.906-7 26.875-60.72 1.75-4.092-1.75-4.094L390.157 28.688l-2.343-4.657-5.25-.592-55.47-3.5-6.437-.563zM184.594 37.47l7.562 23.936-.906 2.844-89.594 174.125 23.625 31.094-6.874 21.31-32.78-42.5-42.563-.842L38 230.188l1-1.563 46.094.938L183.72 37.75l.874-.28zm147.156 1.75l16.47.874 76.343 153.22 36.5 8.374 11.53 21.718-48.468-10.656-7.22 53.438-18.436-3.844L407.093 201l-77.53-156.72 2.186-5.06zm-79.437 85.28l-5.25 3.5-37.375 25.094-3.5 2.344-.594 4.093L166.47 416.5l-.564 5.25 4.063 3.5 76.53 63.656 6.406 5.282 5.844-5.282 75.344-66.562 4.094-2.938-.594-4.656-28.625-251.125-.564-4.094-4.093-2.342-46.72-29.782-5.28-2.906zm.562 22.53l19.5 12.095 12.25 202.406 30.844 24.908 2.843 24.812-.875.78-40.594-32.905-75.156 48.188-15.094-12.47 79.437-50.687-13.155-217.125zm108.438 148.345l-7.5 37.563 32.218 94 33.595 14.968 19.438-39.375-48.094-85.155-29.657-22zM108.625 350.5l-29.687 10.813L32 431.47l2.625 34.593 31.188-12.75 46.937-70.188-4.125-32.625z"
                           ></path>
            </svg>
        </SvgIcon>
    </span>
}
