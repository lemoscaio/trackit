import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../../styles/styles";
import CreateHabitContext from "./../../../contexts/CreateHabitContext";
import CreateHabit from "./CreateHabit.js";
import Habit from "./Habit.js";
import NoHabitMessage from "./NoHabitMessage.js";
import TopMessage from "./TopMessage.js";

function Habits() {
    const [habits, setHabits] = useState([]);
    const [toggleCreateTask, setToggleCreateTask] = useState(false);
    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        },
    };

    useEffect(() => {
        const GET_HABITS_URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
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

    function toggleCreateTaskContainer(value) {
        setToggleCreateTask(value);
    }

    function checkCreateHabitContainer() {
        return toggleCreateTask ? (
            <CreateHabitContext.Provider
                value={{ habitName, habitDays, setHabitName, setHabitDays }}
            >
                <CreateHabit
                    toggleCreateTaskContainer={(value) => {
                        toggleCreateTaskContainer(value);
                    }}
                    saveHabit={(habitData) => {
                        saveHabit(habitData);
                    }}
                />
            </CreateHabitContext.Provider>
        ) : (
            <></>
        );
    }

    function saveHabit(habitData) {
        const CREATE_HABIT_URL =
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.post(CREATE_HABIT_URL, habitData, config);
        promise
            .then((response) => {
                const { data } = response;
                console.log(data);
                habitData.id = data.id;
            })
            .catch((error) => {
                console.log(error);
            });
        setHabits([...habits, habitData]);
    }

    function removeTask(habitId) {
        const DELETE_HABIT_URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`;
        axios.delete(DELETE_HABIT_URL, config);
        console.log("pssou aqui");
        const newHabits = habits.filter((habit, index) => {
            if (habit.id === habitId) {
                return false;
            } else {
                return true;
            }
        });
        setHabits(newHabits);
    }

    const createHabitContent = checkCreateHabitContainer();
    const habitsContent = checkHabitsList();

    return (
        <>
            <S.Container>
                <TopMessage
                    toggleCreateTaskContainer={(value) => {
                        toggleCreateTaskContainer(value);
                    }}
                />
                <S.Habits>
                    {createHabitContent}
                    {habitsContent}
                </S.Habits>
            </S.Container>
        </>
    );
}

export default Habits;
