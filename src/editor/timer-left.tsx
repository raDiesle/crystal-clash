import {useTimer} from "react-timer-hook";


export const calculateExpiryTimestamp = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60 * 10 * 3);
    return expiryTimestamp;
}

interface ITimerLeft {
    expiryDate : Date;
}

export function TimerLeft({expiryDate } : ITimerLeft){

    const expiryToDisplay = !!expiryDate ? expiryDate : calculateExpiryTimestamp();

    const {
        seconds,
        minutes,
    } = useTimer({ expiryTimestamp: expiryToDisplay, onExpire: () => console.warn('onExpire called') });

    return <p>
        Save before timer will perform automatic logout: <span>{("00" + minutes).slice(-2)}</span>:<span>{("00" + seconds).slice(-2)}</span> or press "Cancel"
    </p>
}