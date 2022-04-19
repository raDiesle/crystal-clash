import {imgPathFactionFn} from "./img-utils";
import css from "./img-icon-wrappers.module.scss";
import {ECardFaction} from "../cards-game-data";

export function FactionImg({faction}: { faction: ECardFaction }) {
    return <img src={imgPathFactionFn(faction)} alt={faction} title={faction} className={css.imageFactionIcon}/>
}