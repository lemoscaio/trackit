import React from "react";
import * as S from "../../../styles/styles.js";
import dayjs from "dayjs";

function TopMessage() {
    function getDayOfWeek() {
        const dayNumber = dayjs().day();
        switch (dayNumber) {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda-Feira";
            case 2:
                return "Terça-Feira";
            case 3:
                return "Quarta-Feira";
            case 4:
                return "Quinta-Feira";
            case 5:
                return "Sexta-Feira";
            default:
                return "Sábado";
        }
    }

    function getMonthNumber() {
        return (dayjs().month() + 1).toString().padStart(2, "0");
    }

    return (
        <S.TodayTopMessage>
            <h2>
                {getDayOfWeek()}, {dayjs().date()}/{getMonthNumber()}
            </h2>
            <p>Nenhum hábito concluído ainda</p>
        </S.TodayTopMessage>
    );
}

export default TopMessage;
