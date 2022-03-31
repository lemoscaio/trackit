import React from "react";
import * as S from "../../../styles/styles";

import trashIcon from "./../../../assets/images/icons/trash-icon.svg";

const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
const buttonsDaysOfWeek = daysOfWeek.map((day) => {
    return <S.DayButton key={day}>{day}</S.DayButton>;
});

function Habit(props) {
    const { id, name, days } = props;

    return (
        <S.Habit>
            <p>{name}</p>
            <div>{buttonsDaysOfWeek}</div>
            <S.RemoveTask>
                <img src={trashIcon} alt="Remove task Icon" />
            </S.RemoveTask>
        </S.Habit>
    );
}

export default Habit;
