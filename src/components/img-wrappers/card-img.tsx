import {imgPathCardFn} from "./img-utils";
import css from "./img-icon-wrappers.module.scss";

export function CardImg({name}: { name: string }) {
    return <img src={imgPathCardFn(name)} alt={name} className={css.imageCardIcon} title={name}/>
}
