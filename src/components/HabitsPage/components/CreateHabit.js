import React, { useState, useEffect, useContext } from "react";
import * as S from "../../../styles/styles";
import CreateHabitContext from "./../../../contexts/CreateHabitContext";
import { ThreeDots } from "react-loader-spinner";

function CreateHabit({
    toggleCreateTaskContainer,
    saveHabit,
    componentLoaded,
    setComponentLoaded,
}) {
    useEffect(() => {
        setTimeout(() => {
            setComponentLoaded(true);
        }, 200);
    }, []);

    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

    const { habitName, setHabitName } = useContext(CreateHabitContext);
    const { habitDays, setHabitDays } = useContext(CreateHabitContext);

    const buttonsDaysOfWeek = daysOfWeek.map((day, dayIndex) => {
        if (!habitDays.includes(dayIndex)) {
            return (
                <S.DayButton
                    onClick={() => {
                        if (!habitDays.includes(dayIndex)) {
                            habitDays.push(dayIndex);
                        } else {
                            habitDays.sort();
                            habitDays.splice(habitDays.indexOf(dayIndex), 1);
                        }
                        habitDays.sort();
                        setHabitDays([...habitDays]);
                    }}
                >
                    {day}
                </S.DayButton>
            );
        } else {
            return (
                <S.DayButtonOn
                    onClick={() => {
                        if (!habitDays.includes(dayIndex)) {
                            habitDays.push(dayIndex);
                        } else {
                            habitDays.sort();
                            habitDays.splice(habitDays.indexOf(dayIndex), 1);
                        }
                        habitDays.sort();
                        setHabitDays([...habitDays]);
                    }}
                >
                    {day}
                </S.DayButtonOn>
            );
        }
    });

    function disableWhileLoading() {
        return !componentLoaded ? "disabled" : "";
    }

    function fillButtonContent() {
        return !componentLoaded ? (
            <ThreeDots color="#fff" height={40} width={40} />
        ) : (
            "Salvar"
        );
    }

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
                required
                disabled={disableWhileLoading()}
                placeholder="nome do hábito"
            />
            <div>{buttonsDaysOfWeek}</div>
            <S.AddHabitButtons>
                <S.CancelButton
                    onClick={() => {
                        toggleCreateTaskContainer(false);
                        setComponentLoaded(false);
                    }}
                >
                    Cancelar
                </S.CancelButton>
                <S.DefaultButton
                    onClick={handleSaveHabit}
                    disabled={disableWhileLoading()}
                >
                    {fillButtonContent()}
                </S.DefaultButton>
            </S.AddHabitButtons>
        </S.CreateHabit>
    );
}

export default CreateHabit;
