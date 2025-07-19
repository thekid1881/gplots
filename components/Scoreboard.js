'use client'

import { useScore } from "@/context/ScoreContext";

export default function Scoreboard() {
    const { score } = useScore();

    return (
        <h2 className="font-bold border-solid border-1 border-gray-800 bg-gray-200 p-4 rounded-md">Your Score: {score}</h2>
    );
}