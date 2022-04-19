import {useTimer} from "react-timer-hook";


export const MINUTES_TO_EXPIRE_EDITING_SESSION = 10 * 3;
export const calculateExpiryTimestamp = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60 * MINUTES_TO_EXPIRE_EDITING_SESSION);
    return expiryTimestamp;
}

interface ITimerLeft {
    expiryDate: Date;
}

export function TimerLeft({expiryDate}: ITimerLeft) {

    // @ts-ignore
    const expiryToDisplay = expiryDate === "" ? calculateExpiryTimestamp() : expiryDate;


    const {
        seconds,
        minutes,
    } = useTimer({expiryTimestamp: expiryToDisplay, onExpire: () => console.warn('onExpire called')});

    return <span><span>{("00" + minutes).slice(-2)}</span>:<span>{("00" + seconds).slice(-2)}</span></span>;
}