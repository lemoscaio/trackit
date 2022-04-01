import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/styles";

function Header() {
    const navigate = useNavigate();
    useEffect(() => {
        if (
            !(localStorage.getItem("userData") && localStorage.getItem("token"))
        ) {
            navigate("/");
        }
    }, []);
    const userData = JSON.parse(localStorage.getItem("userData"));

    return userData ? (
        <S.Header>
            <S.HeaderLink to="../">
                <h1>TrackIt</h1>
            </S.HeaderLink>
            <img
                src={userData.image}
                alt={`Ícone do usuário: ${userData.name}`}
            />
        </S.Header>
    ) : (
        <></>
    );
}

export default Header;
