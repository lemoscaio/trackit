import axios from "axios";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserDataContext from "./../../../contexts/UserDataContext";

import * as S from "./../../../styles/styles";

function SignInForm(props) {
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userLoginData;
    const SIGNIN_POST_URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        let promise = axios.post(SIGNIN_POST_URL, userLoginData);
        promise
            .then((response) => {
                const {
                    data: { name, id, email, image, token },
                } = response;
                localStorage.setItem("token", token);
                const newUserData = {
                    name,
                    image,
                    id,
                    email,
                    isLoggedIn: true,
                };
                localStorage.setItem("userData", JSON.stringify(newUserData));
                navigate("../today");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <S.Form>
            <form
                onSubmit={(event) => {
                    handleSubmit(event);
                }}
            >
                <S.Input
                    type="text"
                    value={email}
                    onChange={(event) =>
                        setUserLoginData({
                            ...userLoginData,
                            email: event.target.value,
                        })
                    }
                    placeholder="email"
                    autoComplete="on"
                />
                <S.Input
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setUserLoginData({
                            ...userLoginData,
                            password: event.target.value,
                        })
                    }
                    placeholder="senha"
                    autoComplete="on"
                />
                <S.DefaultButton>Entrar</S.DefaultButton>
            </form>
        </S.Form>
    );
}

export default SignInForm;
