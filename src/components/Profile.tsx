import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
    const { level } = useContext(ChallengesContext);


    return (
        <div className="profile-container">
            <img src="https://pbs.twimg.com/profile_images/1203999783150608387/94DwiTox_400x400.jpg" alt="Lucas Cleiton" />
            <div>
                <strong>Lucas Cleiton</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>


        </div>

    );
}