import React from "react";

import logo from "./../../../assets/images/trackit-logo.svg";
import * as S from "../../../styles/styles"

function Logo() {
    return (
        <S.Logo>
            <img
                src={logo}
                alt="Logo do TrackIt: Uma seta azul na horizontal, com barras de gráfico em cima e escrito TrackIt embaixo"
            />
        </S.Logo>
    );
}

export default Logo;
