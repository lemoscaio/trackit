import React from "react";

import HistoryTopMessage from "./HistoryTopMessage.js";

import * as S from "./../../../../../styles/styles";

function History() {
    return (
        <S.Container>
            <S.History>
                <HistoryTopMessage />
                <p>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
                </p>
            </S.History>
        </S.Container>
    );
}

export default History;
