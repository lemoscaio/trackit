import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./../../styles/styles";
import Logo from "./components/Logo.js";
import SignInForm from "./components/SignInForm.js";

function SignInPage() {
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
            <S.LoginContainer>
                <Logo />
                <SignInForm
                    pageLoaded={pageLoaded}
                    setPageLoaded={setPageLoaded}
                />
                <S.StyledLink to="/signup">
                    Não tem uma conta? Cadastre-se
                </S.StyledLink>
            </S.LoginContainer>
        </>
    );
}

export default SignInPage;
