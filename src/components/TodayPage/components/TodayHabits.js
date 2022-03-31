import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../../../styles/styles.js";
import TopMessage from "./TopMessage.js";
import TodayHabit from "./TodayHabit.js";

function TodayHabits() {
    const [todayHabits, setTodayHabits] = useState([]);

    useEffect(() => {
        const GET_TODAY_HABITS_URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };
        console.log(token);

        const promise = axios.get(GET_TODAY_HABITS_URL, config);
        promise
            .then((response) => {
                const { data } = response;
                console.log(data);
                setTodayHabits(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function checkTodayHabitsList() {
        if (todayHabits.length > 0) {
            return todayHabits.map((todayHabit) => {
                return <TodayHabit todayHabit={todayHabit} />;
            });
        } else {
            return <></>;
        }
    }

    const todayHabitsContent = checkTodayHabitsList();

    return (
        <S.Container>
            <TopMessage />
            <S.TodayHabits>
                {todayHabitsContent}
                {/* <TodayHabit /> */}
            </S.TodayHabits>
        </S.Container>
    );
}

export default TodayHabits;
