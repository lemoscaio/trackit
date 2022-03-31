import React from "react";
import axios from "axios";
import * as S from "../../../styles/styles";

import trashIcon from "./../../../assets/images/icons/trash-icon.svg";

function Habit({ habit: { id, name, days }, removeTask }) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
    const buttonsDaysOfWeek = daysOfWeek.map((day, index) => {
        return days.includes(index) ? (
            <S.DayButtonOn key={index}>{day}</S.DayButtonOn>
        ) : (
            <S.DayButton key={index}>{day}</S.DayButton>
        );
    });

    return (
        <S.Habit>
            <p>{name}</p>
            <div>{buttonsDaysOfWeek}</div>
            <S.RemoveTask onClick={() => removeTask(id)}>
                <img src={trashIcon} alt="Remove task Icon" />
            </S.RemoveTask>
        </S.Habit>
    );
}

export default Habit;
