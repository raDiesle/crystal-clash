import {ECardFaction} from "../cards-game-data";

export const imgPathCardFn = (imageName: string) => `/generated/img/CardIcons/${imageName}.webp`;

export const imgPathFactionFn = (faction: ECardFaction) => {
    const factionNormalized = faction === "Crystal" ? "Colorless" : faction;
    return `/generated/img/FactionIcons/FactionIcon_${factionNormalized}.png`;
}