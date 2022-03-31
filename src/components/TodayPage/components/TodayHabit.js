import React from "react";
import * as S from "../../../styles/styles";

function TodayHabit({
    todayHabit,
    todayHabit: { id, name, done, currentSequence, highestSequence },
    setHabitAsDone,
}) {
    return done ? (
        <S.TodayHabitDone>
            <div>
                <h3>{name}</h3>
                <p>
                    Sequência atual: <span>{currentSequence} dias</span>
                </p>
                <p>
                    Seu recorde: <span>{highestSequence} dias</span>
                </p>
            </div>
            <button onClick={() => setHabitAsDone(id)}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </S.TodayHabitDone>
    ) : (
        <S.TodayHabit>
            <div>
                <h3>{name}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <button onClick={() => setHabitAsDone(id)}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </S.TodayHabit>
    );
}

export default TodayHabit;
