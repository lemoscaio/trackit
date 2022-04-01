import React from "react";
import * as S from "../../../styles/styles";
import trashIcon from "./../../../assets/images/icons/trash-icon.svg";


function Habit({ habit: { id, name, days }, removeHabit }) {
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
            <S.RemoveHabit onClick={() => removeHabit(id)}>
                <img src={trashIcon} alt="Remove task Icon" />
            </S.RemoveHabit>
        </S.Habit>
    );
}

export default Habit;
