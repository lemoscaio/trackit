import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as S from "../../../styles/styles";

function SignUpForm(props) {
    const {
        setUserData,
        userData,
        userData: { email, password, name, image },
    } = props;
    const SIGNUP_POST_URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        let promise = axios.post(SIGNUP_POST_URL, userData);
        promise
            .then((response) => {
                const { data } = response;
                console.log(response);
                console.log(data);
                navigate("../");
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
                    value={email}
                    onChange={(event) =>
                        setUserData({ ...userData, email: event.target.value })
                    }
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
                    type="password"
                    placeholder="senha"
                    autoComplete="on"
                />
                <S.Input
                    value={name}
                    onChange={(event) =>
                        setUserData({ ...userData, name: event.target.value })
                    }
                    type="text"
                    placeholder="nome"
                    autoComplete="on"
                />
                <S.Input
                    value={image}
                    onChange={(event) =>
                        setUserData({ ...userData, image: event.target.value })
                    }
                    type="url"
                    placeholder="foto"
                    autoComplete="on"
                />
                <S.DefaultButton type="submit">Cadastrar</S.DefaultButton>
            </form>
        </S.Form>
    );
}

export default SignUpForm;
