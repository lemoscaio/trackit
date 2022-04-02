import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./components/SignUpForm.js";
import GlobalStyles from "../../styles/globalStyles";
import Logo from "./components/Logo.js";

import * as S from "../../styles/styles";

function SignUpPage() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "",
        image: "",
    });

    const [pageLoaded, setPageLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("userData") && localStorage.getItem("token")) {
            navigate("/today");
        }
        setTimeout(() => {
            setPageLoaded(true);
        }, 200);
    }, []);

    return (
        <>
            <GlobalStyles />
            <S.LoginContainer>
                <Logo />
                <SignUpForm
                    setUserData={setUserData}
                    userData={userData}
                    pageLoaded={pageLoaded}
                    setPageLoaded={setPageLoaded}
                />
                <S.StyledLink to="../">
                    Já tem uma conta? Faça login!
                </S.StyledLink>
            </S.LoginContainer>
        </>
    );
}

export default SignUpPage;
