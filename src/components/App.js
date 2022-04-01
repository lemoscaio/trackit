import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "../styles/globalStyles";
import HabitsPage from "./HabitsPage/HabitsPage";
import HistoryPage from "./HistoryPage/HistoryPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import TodayPage from "./TodayPage/TodayPage";
import "react-loader-spinner";

function App() {
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />;
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/habits" element={<HabitsPage />} />
                    <Route path="/today" element={<TodayPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
