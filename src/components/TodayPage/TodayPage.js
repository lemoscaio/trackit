import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header.js";
import Footer from "../Footer.js";
import TodayHabits from "./components/TodayHabits.js";

export function TodayPage() {
    const [todayHabits, setTodayHabits] = useState(null);

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
                setTodayHabits(todayHabits);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Header />
            <TodayHabits />
            <Footer />
        </>
    );
}

export default TodayPage;
