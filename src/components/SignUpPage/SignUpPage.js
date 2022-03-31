import React, { useState } from "react";

import SignUpForm from "./components/SignUpForm.js";
import Logo from "./components/Logo.js";

import * as S from "../../styles/styles";

function SignUpPage() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "",
        image: "",
    });

    return (
        <>
            <S.LoginContainer>
                <Logo />
                <SignUpForm setUserData={setUserData} userData={userData} />
                <S.StyledLink to="../">Já tem uma conta? Faça login!</S.StyledLink>
            </S.LoginContainer>
        </>
    );
}

export default SignUpPage;
