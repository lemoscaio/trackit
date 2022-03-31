import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header.js";
import Footer from "../Footer.js";
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
