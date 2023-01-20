import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdowContext";


export function Countdown() {

    const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');




    return (
        <div>
            <div className="countdown-container">

                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className="countdown-button"

                >
                    Ciclo Encerrado
                </button>
            ) : (
                    <>

                        {isActive ? (
                            <button type="button"
                                className={`${"countdown-button"} ${"countdown-button-active"}`}
                                onClick={resetCountdown}
                            >
                                Abandonara Ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className="countdown-button"
                                    onClick={startCountdown}
                                >
                                    Iniciar um Ciclo
                                </button>
                            )}


                    </>

                )}





        </div>
    );
}