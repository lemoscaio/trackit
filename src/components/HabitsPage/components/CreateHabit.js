import React, { useState, useEffect } from "react";
import * as S from "../../../styles/styles";

function CreateHabit({ toggleCreateTaskContainer, saveHabit }) {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);

    const buttonsDaysOfWeek = daysOfWeek.map((day, dayIndex) => {
        if (!habitDays.includes(dayIndex + 1)) {
            return (
                <S.DayButton
                    onClick={() => {
                        if (!habitDays.includes(dayIndex + 1)) {
                            habitDays.push(dayIndex + 1);
                        } else {
                            habitDays.sort();
                            habitDays.splice(
                                habitDays.indexOf(dayIndex + 1),
                                1
                            );
                        }
                        habitDays.sort();
                        setHabitDays([...habitDays]);
                    }}
                >
                    {day}
                </S.DayButton>
            );
        }
        return (
            <S.DayButtonOn
                onClick={() => {
                    if (!habitDays.includes(dayIndex + 1)) {
                        habitDays.push(dayIndex + 1);
                    } else {
                        habitDays.sort();
                        habitDays.splice(habitDays.indexOf(dayIndex + 1), 1);
                    }
                    habitDays.sort();
                    setHabitDays([...habitDays]);
                }}
            >
                {day}
            </S.DayButtonOn>
        );
    });

    function handleSaveHabit() {
        saveHabit({ name: habitName, days: habitDays });
        setHabitName("");
        setHabitDays([]);
    }

    return (
        <S.CreateHabit>
            <S.Input
                value={habitName}
                onChange={(event) => setHabitName(event.target.value)}
                type="text"
                placeholder="nome do hábito"
            />
            <div>{buttonsDaysOfWeek}</div>
            <S.AddHabitButtons>
                <S.CancelButton
                    onClick={() => toggleCreateTaskContainer(false)}
                >
                    Cancelar
                </S.CancelButton>
                <S.DefaultButton onClick={handleSaveHabit}>
                    Salvar
                </S.DefaultButton>
            </S.AddHabitButtons>
        </S.CreateHabit>
    );
}

export default CreateHabit;
