import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function SplinterIcon() {

    return <span title="Spliter" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                       <path
                           d="M227.7 25l-57.9 57.96L183.4 151h145.2l13.6-68.04-32.8-32.84L282.5 64l16.3-24.53L284.3 25h-56.6zM195 88.44L240 111l-4 17h-41V88.44zm122 0V128h-41l-4-17 32-16.05 13-6.51zM154 109.1l-22 11 10.6 17.1-24.1-10.4L73 149.6v16l91.8-13.1-10.8-43.4zm204 0l-10.8 43.4 91.8 13.1v-16l-81-40.5zm-152.4 60.1l-63.3 4.7-6.6 1-9.2 62.3 50.2 25.1 44.5-14.8 5.6 17-51.5 17.2-44.4-22.2 20.4 84.5 95.7 13.6V196.8l-41.4-27.6zm100.8 0L265 196.8v160.8l95.7-13.6 20.4-84.5-23.8 11.9-19.6 38.6-18.8-34.2-33.7-11.3 5.6-17 44.5 14.8 50.2-25.1-9.2-62.3-6.6-1-63.3-4.7zm-189.6 8.4l-61.32 8.7-30.04 40.1 3.64 25.5 25.38 10.4L33.09 280l6.47 45.3L103 312.7v-57.4l13.8-77.7zm278.4 0l13.8 77.6v57.4l52 10.4 13.7-13.7 11.9-82.9-30.1-40.1-28-4-4.2 17.9-9.9-19.9-19.2-2.7zM104.1 330.8L42.78 343l28 126 47.42-11.8-14.1-126.4zm303.8 0l-14.1 126.4 22.6 5.6 7.9-25.8 17.8 28.1L469.2 343l-61.3-12.2zm-256 31.4L138.1 487h80.3l37.6-75.1 37.6 75.1h30.8l11.6-23 11.5 23h26.4l-13.8-124.8L256 377.1l-41.9-6-6.1 34.4-15.3-37.5-40.8-5.8z"
                       ></path>
            </svg>
        </SvgIcon>
    </span>
}
