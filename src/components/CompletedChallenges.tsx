import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className="completed-challenges-container">
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>

        </div>
    );
}