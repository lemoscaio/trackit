import Header from "../Header.js";
import Footer from "../Footer.js";
import Habits from "./components/Habits.js";
import GlobalStyles from "../../styles/globalStyles";

export function HabitsPage() {
    return (
        <>
            <GlobalStyles />
            <Header />
            <Habits />
            <Footer />
        </>
    );
}

export default HabitsPage;
