import React from "react";
import * as S from "../../../styles/styles.js";
import TopMessage from "./TopMessage.js";
import TodayHabit from "./TodayHabit.js";

function TodayHabits() {
    return (
        <S.Container>
            <TopMessage />
            <S.TodayHabits>
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
            </S.TodayHabits>
        </S.Container>
    );
}

export default TodayHabits;
