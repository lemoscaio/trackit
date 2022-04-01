import React, { useContext } from "react";
import * as S from "../../../styles/styles.js";
import dayjs from "dayjs";
import PercentageHabitsDoneContext from "../../../contexts/PercentageHabitsDoneContext";

function TopMessage({ todayHabits }) {
    const { percentage, setPercentage } = useContext(PercentageHabitsDoneContext);

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

    function getMonthAndDay() {
        return dayjs().format("DD/MM");
    }

    function getPercentageDone() {
        return percentage > 0 ? (
            <S.CounterHabitsDone>
                {percentage} % dos hábitos concluídos
            </S.CounterHabitsDone>
        ) : (
            <p>Nenhum hábito concluído ainda</p>
        );
    }

    return (
        <S.TodayTopMessage>
            <h2>
                {getDayOfWeek()}, {getMonthAndDay()}
            </h2>
            {getPercentageDone()}
        </S.TodayTopMessage>
    );
}

export default TopMessage;
