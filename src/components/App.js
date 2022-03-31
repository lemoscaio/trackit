import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "../styles/globalStyles";
import UserContext from "../contexts/UserContext";

import HabitsPage from "./HabitsPage/HabitsPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TodayPage from "./TodayPage/TodayPage";
import HistoryPage from "./HistoryPage/HistoryPage";

function App() {
    
    const [token, setToken] = useState("tokenTeste");

    return (
        <>
            <UserContext.Provider value={{ token, setToken }}>
                <GlobalStyles />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route path="/habits" element={<HabitsPage />} />
                        <Route path="/today" element={<TodayPage />} />
                        <Route path="/history" element={<HistoryPage />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;
