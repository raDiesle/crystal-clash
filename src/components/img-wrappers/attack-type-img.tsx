import css from "./img-icon-wrappers.module.scss";
import {EAttackType} from "../cards-game-data";

export function AttackTypeImg({attackType}: { attackType: EAttackType }) {
    return <img className={css.imageFromGameIcon} src={`/icons/game/Attack_dt${attackType}.png`} alt={attackType}
                title={attackType}/>
}