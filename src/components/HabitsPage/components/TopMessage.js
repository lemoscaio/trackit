import React from "react";

import * as S from "../../../styles/styles";

function TopMessage({ toggleCreateTaskContainer }) {
    return (
        <S.TopMessage>
            <p>Meus hábitos</p>
            <button onClick={() => toggleCreateTaskContainer(true)}>+</button>
        </S.TopMessage>
    );
}

export default TopMessage;
