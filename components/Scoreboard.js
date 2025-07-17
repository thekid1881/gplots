'use client'

import { useScore } from "@/context/ScoreContext";

export default function Scoreboard() {
    const { score } = useScore();

    return (
        <h2>Your Score: {score}</h2>
    );
}