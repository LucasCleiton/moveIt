
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from "react";
import { CountdownContext } from '../contexts/CountdowContext';





export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {

        resetChallenge();
        resetCountdown();
    }


    return (
        <div className="challenge-box">
            {activeChallenge ? (
                <div className="challenge-active">
                    <header> Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className="challege-failed-button"
                            onClick={handleChallengeFailed}
                        >Falhei
                         </button>


                        <button
                            type="button"
                            className="challege-succede-button"
                            onClick={handleChallengeSucceeded}
                        >Completei
                        </button>


                    </footer>

                </div>
            ) : (

                    <div className="challenge-no-active">
                        <strong>Finalize um ciclo para receber desafios!!</strong>

                        <img src="icons/level-up.svg" alt="level up" />
                        <p> Avance de level completando desafios.</p>

                    </div>
                )}
        </div>
    )
}