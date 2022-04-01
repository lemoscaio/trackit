import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styles/styles";

function Header() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const { name, image } = userData;

    return (
        <S.Header>
            <S.HeaderLink to="../">
                <h1>TrackIt</h1>
            </S.HeaderLink>
            <img src={image} alt={`Ícone do usuário: ${name}`} />
        </S.Header>
    );
}

export default Header;
