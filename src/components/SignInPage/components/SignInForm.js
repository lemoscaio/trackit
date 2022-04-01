import axios from "axios";
import React, { useState, useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as S from "./../../../styles/styles";
import UserLoggedInContext from "./../../../contexts/UserLoggedInContext";

function SignInForm({ pageLoaded, setPageLoaded }) {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = userLoginData;
    const SIGNIN_POST_URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const navigate = useNavigate();

    function fillButtonContent() {
        return !pageLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />
        ) : (
            "Entrar"
        );
    }

    function disableWhileLoading() {
        return !pageLoaded ? "disabled" : "";
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPageLoaded(false);

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
                setUserLoggedIn(true);
                navigate("../today");
            })
            .catch((error) => {
                alert("Usuário e/ou senha inválido(s)");
                setPageLoaded(true);
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
                    required
                    disabled={disableWhileLoading()}
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
                    required
                    disabled={disableWhileLoading()}
                    placeholder="senha"
                    autoComplete="on"
                />
                <S.DefaultButton>{fillButtonContent()}</S.DefaultButton>
            </form>
        </S.Form>
    );
}

export default SignInForm;
