import css from "./img-icon-wrappers.module.scss";
import {EArmor} from "../cards-game-data";


export function ArmorImg({armor}: { armor: EArmor }) {
    return <img className={css.imageFromGameIcon} src={`/icons/game/Armorat${armor}.png`} alt={armor} title={armor}/>
}