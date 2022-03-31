import React from "react";
import * as S from "../../../styles/styles";

function TodayHabit() {
    return (
        <S.TodayHabit>
            <div>
                <h3>Ler 1 capítulo de livro</h3>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <button>
                <ion-icon name="checkmark-outline"></ion-icon>
            </button>
        </S.TodayHabit>
    );
}

export default TodayHabit;
