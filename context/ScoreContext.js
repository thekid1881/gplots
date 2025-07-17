'use client'

import { createContext, useContext, useState, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "@/lib/constants";

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScore = () => useContext(ScoreContext);