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
import axios from "axios";

function App() {
    const [percentage, setPercentage] = useState(0);
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

        const promise = axios.get(GET_TODAY_HABITS_URL, config);
        promise
            .then((response) => {
                const { data } = response;
                setTodayHabits(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
            <TodayHabitsContext.Provider
                value={{ todayHabits, setTodayHabits }}
            >
                <PercentageHabitsDoneContext.Provider
                    value={{ percentage, setPercentage }}
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SignInPage />} />;
                            <Route path="/signup" element={<SignUpPage />} />
                            <Route path="/habits" element={<HabitsPage />} />
                            <Route path="/today" element={<TodayPage />} />
                            <Route path="/history" element={<HistoryPage />} />
                        </Routes>
                    </BrowserRouter>
                </PercentageHabitsDoneContext.Provider>
            </TodayHabitsContext.Provider>
        </>
    );
}

export default App;
