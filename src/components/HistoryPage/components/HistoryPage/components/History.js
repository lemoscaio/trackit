import React, { useContext, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import * as S from "../../../../../styles/styles";
import UserLoggedInContext from "./../../../../../contexts/UserLoggedInContext";
import HistoryTopMessage from "./HistoryTopMessage.js";



function History() {
    const { setUserLoggedIn } = useContext(UserLoggedInContext);
    const navigate = useNavigate()

    useEffect(() => {
        if (!(localStorage.getItem("userData") && localStorage.getItem("token"))) {
            setUserLoggedIn(false)
            navigate("../");
        }
    }, []);

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
