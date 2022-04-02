import React from "react";

import Footer from "./../../components/Footer";
import Header from "./../../components/Header";
import History from "./components/HistoryPage/components/History.js";
import GlobalStyles from "../../styles/globalStyles";

function HistoryPage() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <History />
            <Footer />
        </>
    );
}

export default HistoryPage;
