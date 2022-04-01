import React, { useState } from "react";
import Footer from "../Footer.js";
import Header from "../Header.js";
import TodayHabits from "./components/TodayHabits.js";
import PercentageHabitsDoneContext from "../../contexts/PercentageHabitsDoneContext";

export function TodayPage() {
    const [percentage, setPercentage] = useState(0);

    return (
        <>
            <PercentageHabitsDoneContext.Provider
                value={{ percentage, setPercentage }}
            >
                <Header />
                <TodayHabits />
                <Footer />
            </PercentageHabitsDoneContext.Provider>
        </>
    );
}

export default TodayPage;
