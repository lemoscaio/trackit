import React from "react";
import Footer from "../Footer.js";
import Header from "../Header.js";
import TodayHabits from "./components/TodayHabits.js";
import GlobalStyles from "../../styles/globalStyles";

export function TodayPage() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <TodayHabits />
            <Footer />
        </>
    );
}

export default TodayPage;
