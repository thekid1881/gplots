'use client'

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useScore } from "@/context/ScoreContext";

export default function QuizForm() {
    const [quizData, setQuizData] = useState(null)
    const [selectedOption, setSelectedOption] = useState('')
    const [question, setQuestion] = useState('')
    const [options, setOptions] = useState([])
    const [feedback, setFeedback] = useState('')
    const [loading, setLoading] = useState(true)
    const [index, setIndex] = useState(1)
    const { score, setScore } = useScore(0)

    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
                .from('quizdata')
                .select('*')
                .eq('id', index)
                .single()

            if (error) {
                console.log('Error fetching data:', error)
                setQuizData(null)
                setTimeout(() => {
                    setLoading(false)
                }, 1500);
            } else {
                setLoading(false)
                setQuizData(data)
                setQuestion(data.question)
                setOptions(data.options)
            }
            setSelectedOption('')
            setFeedback('')
        }
        fetchData()
    }, [index]);

    const handleNext = () => {
        if (index > data.length + 1) {
            <p>Quiz complete!</p>
        }
    }

    if (loading) return <p>Loading quiz...</p>;

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isCorrect = selectedOption === quizData.answer

        if (isCorrect) {
            setFeedback('Correct!')
            setScore(prev => prev +1)
            setIndex(prev => prev + 1);
        } else {
            setFeedback('Incorrect.')
            score();
        }
    }

    if (loading) return <p>Loading...</p>
    if (!quizData) {
        <p>No quiz data found.</p>
    }

    return (
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

                <button type="submit" onClick={handleNext} className="flex flex-row mt-4 border-solid border-1 border-gray-600 p-2 rounded-md" disabled={!selectedOption}>
                    Submit
                </button>

                {feedback && <p>{feedback}</p>}
            </form>
    );
}