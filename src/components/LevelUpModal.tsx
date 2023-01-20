import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

    return (
        <div className="overlay">
            <div className="Level-up-container">
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você Alcamçou um novo Level</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>

            </div>
        </div>
    )
}