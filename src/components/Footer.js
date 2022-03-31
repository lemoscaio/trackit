
import React from "react";
import * as S from "../styles/styles";

function Footer() {
    return (
        <S.Footer>
            <S.FooterAltLink to="/habits">
                <S.FooterLinkWrapper>
                    <p>Hábitos</p>
                </S.FooterLinkWrapper>
            </S.FooterAltLink>
            <S.FooterLink to="/today">
                <S.TodayButton>
                    <p>Hoje</p>
                </S.TodayButton>
            </S.FooterLink>
            <S.FooterAltLink to="/history">
                <S.FooterLinkWrapper>
                    <p>Histórico</p>
                </S.FooterLinkWrapper>
            </S.FooterAltLink>
        </S.Footer>
    );
}

export default Footer;
