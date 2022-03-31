import React from "react";
import * as S from "../../../styles/styles";

const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
const buttonsDaysOfWeek = daysOfWeek.map((day) => {
    return <S.DayButton>{day}</S.DayButton>;
});

function CreateHabit() {
    return (
        <S.CreateHabit>
            <S.Input type="text" placeholder="nome do hábito" />
            <div>{buttonsDaysOfWeek}</div>
            <S.AddHabitButtons>
                <S.CancelButton>Cancelar</S.CancelButton>
                <S.DefaultButton>Salvar</S.DefaultButton>
            </S.AddHabitButtons>
        </S.CreateHabit>
    );
}

export default CreateHabit;
