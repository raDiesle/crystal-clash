import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function WarpStrikeIcon() {

    return <span title="Warp Strike" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                     <path
                         d="M274.663 63.02L90.792 80.26l154.193 19.273c5.063-13.339 12.952-24.341 22.541-31.828a52.072 52.072 0 017.137-4.683zm19.832 12.803c-5.092.166-10.492 2.296-15.879 6.502-7.835 6.118-15.009 16.575-18.83 29.688-3.821 13.112-3.477 26.099-.289 35.927 3.188 9.829 8.73 16.071 15.633 18.395 6.903 2.324 14.766.596 22.601-5.522 7.835-6.117 15.01-16.574 18.83-29.687 3.822-13.113 3.48-26.1.292-35.928-3.189-9.828-8.73-16.07-15.633-18.394a19.017 19.017 0 00-6.725-.98zm166.85 9.485c-24.113 13.949-46.193 20.298-87.233 17.252L340.48 228.452c-.675 2.682-.318 6 1.922 10.87 2.243 4.876 6.355 10.89 11.836 17.607 9.99 12.242 24.527 27.16 39.573 44.238 14.56-5.5 28.23-12.828 38.972-20.19 11.841-8.113 20.234-16.95 21.965-19.939l42.027-118.22c-16.748-14.613-29.471-33.974-35.43-57.51zm-288.07 51.261L23.652 158.331l89.309 12.988 2.158-5.052zm286.265 2.325l16.941 6.078-39.123 109.037-37.212 19.181-8.247-15.998 30.913-15.933zm-259.842 4.394l-70.586 36.043-29.222 68.422 19.218 8.809 24.905-57.764 59.299-22.973-14.702 75.955-.963 1.477c-32.725 50.18-71.654 93.41-118.464 134.28L42.722 432.98l17.021 7.245 31.875-43.989 1.38-.906c45.476-29.872 75.93-62.333 112.255-94.492l4.533-4.012 5.426 2.686c23.365 11.571 42.934 24.117 62.107 37.705l8.924 6.324-69.006 65.643 24.649 39.794 17.67-10.308-20.078-28.477 8.224-5.004c29.884-18.186 49.986-39.43 71.938-66.039-23.653-35.6-42.006-49.433-71.592-71.267l9.908-7.227c34.703-25.312 38.132-54.476 41.61-79.449-9.203 4.441-19.498 5.772-29.473 2.414-13.488-4.54-22.924-16.472-27.465-30.473-.17-.522-.321-1.054-.479-1.584zm116.62 45.04c-1.355 7.027-3.324 14.17-6.092 21.349l14.056 9.666 5.938-22.223zm-174.243 97.476l-126.85 17.953 99.67 14.105a598.987 598.987 0 0027.18-32.058zm91.781 82.73l-95.892 21.432 59.406 13.277z"
                     ></path>
            </svg>
        </SvgIcon>
    </span>
}
