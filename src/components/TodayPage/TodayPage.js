import React from "react";
import Footer from "../Footer.js";
import Header from "../Header.js";
import TodayHabits from "./components/TodayHabits.js";


export function TodayPage() {
    return (
        <>
            <Header />
            <TodayHabits />
            <Footer />
        </>
    );
}

export default TodayPage;
