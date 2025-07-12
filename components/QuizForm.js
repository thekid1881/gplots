'use client'

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useScore } from "@/context/ScoreContext";

export default function QuizForm() {
    const [quizData, setQuizData] = useState(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(1)
    const { score, incrementScore } = useScore()

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('quizdata')
                .select('*')
                .eq('id', index)
                .single()
            
            if (error) {
                console.error('Error fetching data:', error)
                setQuizData(null)
            } else {
                setQuizData(data)
            }

            setSelectedOption('')
            setFeedback('')
            setLoading(false)
        }

        fetchData()
    }, [index])

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!selectedOption) return

        const isCorrect = selectedOption === quizData.answer

        if (isCorrect) {
            setFeedback('Correct!')
            incrementScore()
        } else {
            setFeedback('Incorrect.')
            score()
        }

        setTimeout(() => {
            setIndex(prev => prev + 1)
        }, 1000)
    }

    if (loading) return <p>Loading...</p>
    if (!quizData) return <p>No quiz data found.</p>

    const { question, options } = quizData

    return (
        <>
            <form onSubmit={handleSubmit} className="m-6 p-4 border-solid border-2 border-gray-600 rounded-md">
                <h2 className="mb-4 font-bold">{question}</h2>
                {options.map((opt, index) => (
                    <label key={index}>
                        <input
                            className="flex grid-cols-3 gap-4"
                            type="radio"
                            name="answer"
                            value={opt}
                            checked={selectedOption === opt}
                            onChange={handleChange}
                        />
                        {opt}
                    </label>
                ))}

                <button type="submit" className="flex flex-row mt-4 border-solid border-1 border-gray-600 p-2 rounded-md" disabled={!selectedOption}>
                    Submit
                </button>

                {feedback && <p>{feedback}</p>}
            </form>
        </>
    )
} 