import {CardfactionType} from "./cards-data-simple";

export const imgPathCardFn = (imageName : string) => `/generated/img/CardIcons/${imageName}.webp`;

export const imgPathFactionFn = (faction : CardfactionType) => {
 const factionNormalized = faction === "Crystal" ? "Colorless" : faction;
    return `/generated/img/FactionIcons/FactionIcon_${factionNormalized}.png`;
}