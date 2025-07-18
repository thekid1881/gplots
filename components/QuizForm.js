'use client'

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useScore } from "@/context/ScoreContext"

export default function QuizForm() {
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState('')
    const [result, setResult] = useState(null)
    const [quizFinished, setQuizFinished] = useState(false)
    const { score, setScore } = useScore(0)

    useEffect(() => {
        const fetchQuestions = async () => {
            const { data, error } = await supabase
                .from('quizdata')
                .select('*')
                .order('id', { ascending: true })
            
            if (error) {
                console.error('Error fetching questions:', error)
            } else {
                setQuestions(data)
            }
        }

        fetchQuestions()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!selectedOption) return
        
        const currentQuestion = questions[currentIndex]
        const isCorrect = selectedOption === currentQuestion.answer

        if (isCorrect) {
            setResult('Correct!')
            setScore(prev => prev + 1)
        } else {
            setResult('Incorrect.')
            setScore(prev => prev * 1)
        }
        
        setTimeout(() => {
            setSelectedOption('')
            setResult(null)

            if (currentIndex + 1 < questions.length) {
                setCurrentIndex(currentIndex + 1)
            } else {
                setQuizFinished(true)
            }
        }, 1000)
    }

    if (questions.length === 0) return <div>Loading...</div>
    if (quizFinished) return <div>Quiz Complete</div>

    const currentQuestion = questions[currentIndex]

    return (
        <div>
            <h1>Quiz</h1>
            <form onSubmit={handleSubmit}>
                <p>{currentQuestion.question}</p>
                {currentQuestion.options.map((opt, idx) => (
                    <label key={idx} className="border-solid border-2 border-gray-600 p-4">
                        <input
                            type="radio"
                            name="option"
                            value={opt}
                            checked={selectedOption === opt}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        {opt}
                    </label>
                ))}

                <button type="submit" className="text-centered p-4 rounded-md">
                    Submit
                </button>
            </form>

            {result && (
                <div className="m-4 p-4 font-bold">
                    {result}
                </div>
            )}
        </div>
    )
}