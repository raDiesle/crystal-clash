import css from "./icon.module.scss";
import {SvgIcon} from "@mui/material";

export function GuardianLightIcon() {

    return <span title="Guardian Light" className={css.container}>
        <SvgIcon color="success" width={512} height={512} viewBox="0 0 512 512" fontSize={"small"}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{height: 512, width: 512}}
            >
                 <path
                     d="M17.488 17.883V27.1l31.72 13.17c-4.947 16.663-7.873 34.187-8.507 52.275L17.49 89.443v63.428l28.852-3.917a208.138 208.138 0 0017.527 47.068l-46.38 19.193v85.652l77.298-60.297a211.325 211.325 0 0036.154 31.762L17.487 419.047v74.812h79.15l80.544-197.33a208.04 208.04 0 0045.746 11.35l-24.914 185.98H299.93L275.055 308.18a208.085 208.085 0 0046.29-10.948l79.96 196.63h92.16v-58.548L368.043 273.34a211.248 211.248 0 0035.68-30.682l89.742 69.053V221.18l-57.643-23.737a208.188 208.188 0 0017.95-47.15l39.693 5.292v-68.31l-33.748 4.543a209.198 209.198 0 00-8.65-52.09l42.398-17.505v-4.338h-112.22l-42.282 32.527c-4.65-8.143-10.22-15.098-16.805-21.683l8.13-10.845H167.655l7.59 9.758c-6.94 6.73-12.477 14.34-17.346 22.767l-41.744-32.527H17.488zm416.22 29.012c4.37 15.116 6.913 31.006 7.392 47.43l-88.584 11.925c.04-1.177 0-2.065 0-3.254 0-7.216-.776-14.88-2.168-21.683l83.36-34.418zM66.57 47.48l78.856 32.747c-1.546 7.146-2.168 15.16-2.168 22.767 0 1.19-.04 2.075 0 3.254L59.31 95.03a190.52 190.52 0 017.262-47.55zm82.65 87.5c2.51 7.588 5.67 14.977 9.758 21.684l-77.84 32.21a189.539 189.539 0 01-16.204-42.446l84.287-11.448zm197.872 1.086l88.07 11.743a189.784 189.784 0 01-16.63 42.514l-81.74-33.658c3.9-6.395 7.833-13.4 10.3-20.6zm-171.852 41.74c5.61 5.437 11.178 10.017 17.89 14.096l-50.806 65.703a191.787 191.787 0 01-32.846-28.5l65.762-51.298zm144.203.003l69.49 53.47a191.682 191.682 0 01-32.296 27.33l-52.915-68.333c5.71-3.65 10.837-7.81 15.72-12.468zm-37.404 22.768l32.274 79.365a189.881 189.881 0 01-41.74 9.715L261.44 206.54c6.972-.943 14.133-3.712 20.6-5.962zm-66.138 1.084c6.534 2.07 13.58 4.128 20.6 4.88l-11.096 82.825a189.771 189.771 0 01-41.18-10.1l31.676-77.605z"
                 ></path>
            </svg>
        </SvgIcon>
    </span>
}