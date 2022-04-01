import React from "react";
import * as S from "./../../styles/styles";
import Logo from "./components/Logo.js";
import SignInForm from "./components/SignInForm.js";

function SignInPage() {
    return (
        <>
            <S.LoginContainer>
                <Logo />
                <SignInForm />
                <S.StyledLink to="/signup">
                    Não tem uma conta? Cadastre-se
                </S.StyledLink>
            </S.LoginContainer>
        </>
    );
}

export default SignInPage;
