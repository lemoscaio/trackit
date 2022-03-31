import React, { useState } from "react";

import SignInForm from "./components/SignInForm.js";
import Logo from "./components/Logo.js";

import * as S from "./../../styles/styles";

function SignInPage() {
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: "",
    });

    return (
        <>
            <S.LoginContainer>
                <Logo />
                <SignInForm
                    setUserLoginData={setUserLoginData}
                    userLoginData={userLoginData}
                />
                <S.StyledLink to="/signup">
                    Não tem uma conta? Cadastre-se
                </S.StyledLink>
            </S.LoginContainer>
        </>
    );
}

export default SignInPage;
