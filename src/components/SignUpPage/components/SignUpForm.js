import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

import * as S from "../../../styles/styles";

function SignUpForm(props) {
    const {
        setUserData,
        userData,
        userData: { email, password, name, image },
        pageLoaded,
        setPageLoaded,
    } = props;

    const SIGNUP_POST_URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    const navigate = useNavigate();

    function fillButtonContent() {
        return !pageLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />
        ) : (
            "Cadastrar"
        );
    }

    function disableWhileLoading() {
        return !pageLoaded ? "disabled" : "";
    }

    function handleSubmit(event) {
        event.preventDefault();
        setPageLoaded(false);

        let promise = axios.post(SIGNUP_POST_URL, userData);
        promise
            .then((response) => {
                const { data } = response;
                navigate("../");
            })
            .catch((error) => {
                alert("Não foi possivel cadastrar! Verifique se o email já está cadastrado ou algum campo está errado")
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
                    value={email}
                    onChange={(event) =>
                        setUserData({ ...userData, email: event.target.value })
                    }
                    disabled={disableWhileLoading()}
                    required
                    type="email"
                    placeholder="email"
                    autoComplete="on"
                />
                <S.Input
                    value={password}
                    onChange={(event) =>
                        setUserData({
                            ...userData,
                            password: event.target.value,
                        })
                    }
                    disabled={disableWhileLoading()}
                    required
                    type="password"
                    placeholder="senha"
                    autoComplete="on"
                />
                <S.Input
                    value={name}
                    onChange={(event) =>
                        setUserData({ ...userData, name: event.target.value })
                    }
                    disabled={disableWhileLoading()}
                    required
                    type="text"
                    placeholder="nome"
                    autoComplete="on"
                />
                <S.Input
                    value={image}
                    onChange={(event) =>
                        setUserData({ ...userData, image: event.target.value })
                    }
                    disabled={disableWhileLoading()}
                    required
                    type="url"
                    placeholder="foto"
                    autoComplete="on"
                />
                <S.DefaultButton type="submit">
                    {fillButtonContent()}
                </S.DefaultButton>
            </form>
        </S.Form>
    );
}

export default SignUpForm;
