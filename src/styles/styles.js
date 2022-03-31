import styled from "styled-components";
import { Link } from "react-router-dom";

// HEADER

export const Header = styled.header`
    @import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&family=Playball&display=swap");

    position: fixed;
    height: 70px;
    width: 100%;
    background-color: #126ba5;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 20px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        color: white;
        font-size: 39px;

        font-family: "Playball", cursive;
    }

    img {
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const Container = styled.main`
    padding: 70px 30px;
    background-color: #e5e5e5;

    height: 100vh;
`;

export const LoginContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 70px 30px;

    height: 100vh;
`;

// INPUT

export const Input = styled.input`
    width: 100%;
    margin: 0 auto 15px;

    color: #666666;
    font-size: 20px;

    border: 1px solid #d5d5d5;
    border-radius: 5px;

    padding: calc((45px - 20px) / 2) 10px;

    &::placeholder {
        color: #dbdbdb;
        font-family: "Lexend Deca", sans-serif;
        font-size: 20px;
    }
`;

// BUTTONS

export const DefaultButton = styled.button`
    background-color: #52b6ff;

    color: white;
    font-size: 16px;

    padding: 10px;

    border-radius: 5px;
    border: none;

    cursor: pointer;
`;

// ANCHORS

export const StyledLink = styled(Link)`
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;

    cursor: pointer;
`;

// SIGN IN PAGE

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.div`
    form {
        display: flex;
        flex-direction: column;

        margin: 40px 0;
    }
`;

// HABITS PAGES

export const TopMessage = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding: 20px 0;

    color: #126ba5;

    p {
        font-size: 22.976px;
        line-height: 29px;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;

        color: white;
        background-color: #52b6ff;
        vertical-align: middle;
        font-size: 26.976px;
        line-height: 34px;
        padding: 0;

        border: none;
        border-radius: 4.63636px;
    }
`;

export const Habits = styled.main`
    height: 100vh;
`;

export const CreateHabit = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    padding: 15px;
    margin: 10px auto;

    width: 100%;
    background-color: white;

    border-radius: 5px;

    div {
        display: flex;
        gap: 5px;
    }
`;

export const AddHabitButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    width: 100%;

    margin-top: 20px;
`;

export const DayButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #cfcfcf;
    /* WHEN NOT CHECKED */
    /* background-color: #FFFFFF; */

    color: white;
    font-size: 20px;
    vertical-align: middle;

    width: 30px;
    height: 30px;

    padding: 5px;
    margin: 10px 0 0;

    border-radius: 5px;
`;

export const CancelButton = styled.button`
    color: #52b6ff;
    background: none;
    border: none;
`;

export const Habit = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: relative;

    padding: 15px;
    margin: 10px auto;

    width: 100%;
    background-color: white;

    border-radius: 5px;

    p {
        color: #666666;
        font-size: 20px;
    }

    input {
        width: 100%;
        margin: 0 auto 15px;

        color: #666666;
        font-size: 20px;

        border: 1px solid #d5d5d5;
        border-radius: 5px;

        padding: calc((45px - 20px) / 2) 10px;

        &::placeholder {
            color: #dbdbdb;
            font-family: "Lexend Deca", sans-serif;
            font-size: 20px;
        }
    }

    div {
        display: flex;
        gap: 5px;
    }
`;

export const RemoveTask = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    width: 25px;
    height: 25px;

    margin: 13px 10px 0 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const NoHabitMessage = styled.div`
    width: 100%;
    margin: 20px auto;

    font-size: 17.98px;
    color: #666666;
    line-height: 22.47px;
`;

// TODAY PAGE

export const TodayTopMessage = styled.div`
    /* display: flex;

    justify-content: space-between;
    align-items: center; */

    padding: 20px 0;

    color: #126ba5;

    h2 {
        font-size: 22.976px;
        line-height: 29px;
    }

    p {
        color: #bababa;
        /* WHEN COMPLETED */
        /* color: #8FC549 */
        font-size: 17.976px;
        line-height: 22px;
    }
`;

// HISTORY PAGE

export const History = styled.section`
    h3 {
        padding: 20px 0;

        font-size: 22.976px;
        line-height: 29px;

        color: #126ba5;
    }

    p {
        font-size: 17.976px;
        line-height: 22px;

        color: #666666;
    }
`;

// FOOTER

export const Footer = styled.footer`
    position: fixed;
    height: 70px;
    bottom: 0;
    width: 100%;
    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;

    padding: 0 5px;
`;

export const TodayButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #52b6ff;

    width: 90px;
    height: 90px;

    border-radius: 50%;

    transform: translate(0, -25%);

    p {
        color: white;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
    }
`;

export const TodayHabits = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TodayHabit = styled.article`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 13px;

    border-radius: 5px;

    h3 {
        font-size: 19.976px;
        line-height: 25px;

        color: #666666;
    }

    p {
        font-size: 12.976px;
        line-height: 16px;

        color: #666666;

        /* WHEN COMPLETED */
        /* color: #8FC549; */
    }

    button {
        width: 69px;
        height: 69px;

        border-radius: 5px;
        border: none;

        background-color: #e7e7e7;
        /* WHEN COMPLETED */
        /* background-color: #8FC549; */

        ion-icon {
            font-size: 40px;
            color: white;
            --ionicon-stroke-width: 86px;
        }
    }
`;
