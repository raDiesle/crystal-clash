import css from "./img-icon-wrappers.module.scss";

export function SplashDamageImg() {
    return <img className={css.imageFromGameIcon} src={"/icons/game/Splash.png"} alt="Splash Damage"
                title="Splash Damage"/>
}