'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function AddQuestion() {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [status, setStatus] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!question || !answer) {
            setStatus('Please enter a valid question and answer.')
            return
        }

        const { data, error } = await supabase
            .from('quizdata')
            .insert([{ question, answer }])
        
        if (error) {
            console.error('Insert error:', error)
            setStatus('Failed to submit result.')
        } else {
            setStatus('Result submitted!')
            setQuestion('')
            setAnswer('')
        }
    }

    return (
        <div>
            <h1>Submit Your Q & A</h1>
            <form onSubmit={handleSubmit} className="justify-center text-center p-4 m-4">
                <label>Question:</label><br />
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                /><br /><br />

                <label>Answer:</label><br />
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                /><br /><br />

                <button type="submit">Submit</button>
            </form>

            {status && <p className="m-4 p-4">{status}</p>}
        </div>
    )
}