'use client'

import { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export function ScoreProvider({ children }) {
    const [score, setScore] = useState(0);

    const incrementScore = () => setScore((prev) => prev + 1);
    const sameScore = () => setScore((prev) => prev + 0);

    return (
        <ScoreContext.Provider value={{ score, incrementScore, sameScore }}>
            {children}
        </ScoreContext.Provider>
    );
}

export function useScore() {
    return useContext(ScoreContext);
}