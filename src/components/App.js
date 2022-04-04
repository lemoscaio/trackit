import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../styles/globalStyles";
import HabitsPage from "./HabitsPage/HabitsPage";
import HistoryPage from "./HistoryPage/HistoryPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TodayPage from "./TodayPage/TodayPage";
import "react-loader-spinner";
import PercentageHabitsDoneContext from "../contexts/PercentageHabitsDoneContext";
import TodayHabitsContext from "../contexts/TodayHabitsContext";
import UserLoggedInContext from "../contexts/UserLoggedInContext";
import axios from "axios";

function App() {
    const [percentage, setPercentage] = useState(0);
    const [todayHabits, setTodayHabits] = useState([]);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

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
    }, [userLoggedIn]);

    useEffect(() => {
        getPercentageDone();
    }, [todayHabits]);

    function getPercentageDone() {
        const countHabitsDone = todayHabits.filter(
            (todayHabit) => todayHabit.done
        ).length;
        const countTotalHabits = todayHabits.length;

        setPercentage(((countHabitsDone / countTotalHabits) * 100).toFixed(2));
    }

    return (
        <>
            <GlobalStyles />
            <UserLoggedInContext.Provider
                value={{ userLoggedIn, setUserLoggedIn }}
            >
                <TodayHabitsContext.Provider
                    value={{ todayHabits, setTodayHabits }}
                >
                    <PercentageHabitsDoneContext.Provider
                        value={{ percentage, setPercentage }}
                    >
                        <BrowserRouter>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <SignInPage
                                            setUserLoggedIn={(value) =>
                                                setUserLoggedIn(value)
                                            }
                                        />
                                    }
                                />
                                ;
                                <Route
                                    path="/signup"
                                    element={<SignUpPage />}
                                />
                                <Route
                                    path="/habits"
                                    element={<HabitsPage />}
                                />
                                <Route path="/today" element={<TodayPage />} />
                                <Route
                                    path="/history"
                                    element={<HistoryPage />}
                                />
                            </Routes>
                        </BrowserRouter>
                    </PercentageHabitsDoneContext.Provider>
                </TodayHabitsContext.Provider>
            </UserLoggedInContext.Provider>
        </>
    );
}

export default App;
