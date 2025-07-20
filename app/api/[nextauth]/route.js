import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail, verifyPassword } from '@/lib/auth';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const user = await getUserByEmail(credentials.email);
                if (!user) {
                    throw new Error('No user found with that email');
                }

                const isValid = await verifyPassword(credentials.password, user.password);
                if (!isValid) {
                    throw new Error('Invalid password');
                }

                return { id: user.id, name: user.name, email: user.email };
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            if (token) session.user.id = token.id;
            return session;
        }
    },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };