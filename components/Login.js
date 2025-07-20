'use client'

import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        await signIn('credentials', {
            email,
            password,
            callbackUrl: '/dashboard'
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit">
                Sign In
            </button>
        </form>
    );
}