import React from "react";
import * as S from "../../../styles/styles";

function TodayHabit({
    todayHabit: { id, name, done, currentSequence, highestSequence },
}) {
    return (
        <S.TodayHabit>
            <div>
                <h3>{name}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <button>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </S.TodayHabit>
    );
}

export default TodayHabit;
