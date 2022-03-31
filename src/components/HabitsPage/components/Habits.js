import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Habit from "./Habit.js";
import axios from "axios";
import CreateHabit from "./CreateHabit.js";
import TopMessage from "./TopMessage.js";
import NoHabitMessage from "./NoHabitMessage.js";
import * as S from "../../../styles/styles";

function Habits() {
    const [habits, setHabits] = useState([]);
    const navigate = useNavigate();

    const GET_HABITS_URL =
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    useEffect(() => {
        const promise = axios.get(GET_HABITS_URL, config);
        promise
            .then((response) => {
                const { data } = response;
                console.log(data);
                setHabits(data);
            })
            .catch((error) => {
                alert(error);
                navigate("../");
            });
    }, []);

    function checkHabitsList() {
        if (habits.length > 0) {
            return habits.map((habit) => {
                return (
                    <Habit
                        habit={habit}
                        removeTask={(habitId) => {
                            removeTask(habitId);
                        }}
                    />
                );
            });
        } else {
            return <NoHabitMessage />;
        }
    }
    const habitsContent = checkHabitsList();

    function removeTask(habitId) {
        const DELETE_HABIT_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
        axios.delete(DELETE_HABIT_URL, config);
        console.log("pssou aqui");
        const newHabits =habits.filter((habit, index) => {
            if (habit.id === habitId) {
                return false;
            } else {
                return true;
            }
        });
        setHabits(newHabits);
    }

    return (
        <>
            <S.Container>
                <TopMessage />
                <S.Habits>
                    {/* <CreateHabit /> */}
                    {habitsContent}
                </S.Habits>
            </S.Container>
        </>
    );
}

export default Habits;
