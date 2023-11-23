import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { authConfig } from '@/auth.config'
import { connectToDB } from '@/lib/utils'
import { User } from '@/lib/models'

type CredentialsProps = {
    username: string
    password: string
} & Partial<Record<string, unknown>>

export interface UserProps {
    username: string
    email: string
    password: string
    img: string
    phone: string
    address: string
    isAdmin: boolean
    isActive: boolean
}

const login = async (credentials: CredentialsProps) => {
    try {
        connectToDB()
        const user = await User.findOne({ username: credentials.username })
        if (!user) throw new Error('Wrong credentials')

        const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
        )
        if (!isPasswordCorrect) throw new Error('Wrong credentials')

        return user
    } catch (e) {
        console.log(e)
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const user = await login(credentials as any)
                    return user
                } catch (e) {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.img = user.img
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.username = token.username as string
                session.user.img = token.img as string
            }
            return session
        },
    },
})
