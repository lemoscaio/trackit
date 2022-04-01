import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as S from "../../../styles/styles.js";
import TopMessage from "./TopMessage.js";
import TodayHabit from "./TodayHabit.js";
import TodayHabitsContext from "../../../contexts/TodayHabitsContext";

function TodayHabits() {
    const {todayHabits, setTodayHabits} = useContext(TodayHabitsContext);
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    function markAsDone(id) {
        const MARK_CHECKED_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const MARK_UNCHECKED_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

        const newHabits = todayHabits.map((todayHabit) => {
            if (todayHabit.id === id) {
                if (todayHabit.done === false) {
                    const promise = axios.post(MARK_CHECKED_URL, "", config);
                    promise
                        .then((response) => {})
                        .catch((error) => {
                            console.log(error);
                        });
                } else if (todayHabit.done === true) {
                    const promise = axios.post(MARK_UNCHECKED_URL, "", config);
                    promise
                        .then((response) => {})
                        .catch((error) => {
                            console.log(error);
                        });
                }
                return {
                    ...todayHabit,
                    done: !todayHabit.done,
                };
            } else {
                return todayHabit;
            }
        });
        setTodayHabits([...newHabits]);
    }

    function checkTodayHabitsList() {
        if (todayHabits.length > 0) {
            return todayHabits.map((todayHabit) => {
                return (
                    <TodayHabit
                        key={todayHabit.id}
                        todayHabit={todayHabit}
                        setHabitAsDone={(id) => markAsDone(id)}
                    />
                );
            });
        } else {
            return <></>;
        }
    }

    const todayHabitsContent = checkTodayHabitsList();

    return (
        <S.Container>
            <TopMessage todayHabits={todayHabits} />
            <S.TodayHabits>{todayHabitsContent}</S.TodayHabits>
        </S.Container>
    );
}

export default TodayHabits;
