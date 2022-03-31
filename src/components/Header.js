import React from 'react'
import * as S from "../styles/styles"


import testImage from './../assets/images/teste.png' 


function Header() {
    return (
        <S.Header>
            <h1>TrackIt</h1>
            <img src={testImage} alt={testImage}/>
        </S.Header>
    )
}

export default Header