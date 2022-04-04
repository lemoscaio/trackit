import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import TodayHabitsContext from "../../../contexts/TodayHabitsContext";
import UserLoggedInContext from "../../../contexts/UserLoggedInContext";
import * as S from "../../../styles/styles.js";
import TodayHabit from "./TodayHabit.js";
import TopMessage from "./TopMessage.js";

function TodayHabits() {
    const { todayHabits, setTodayHabits } = useContext(TodayHabitsContext);
    const { userLoggedIn, setUserLoggedIn } = useContext(UserLoggedInContext);
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    useEffect(() => {
        if (
            !(localStorage.getItem("userData") && localStorage.getItem("token"))
        ) {
            setUserLoggedIn(false);
            navigate("../");
        } else {
            setUserLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const GET_TODAY_HABITS_URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                Authorization: "Bearer " + token,
            },
        };

        if (userLoggedIn) {
            const promise = axios.get(GET_TODAY_HABITS_URL, config);
            promise
                .then((response) => {
                    const { data } = response;
                    setTodayHabits(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [todayHabits]);

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
