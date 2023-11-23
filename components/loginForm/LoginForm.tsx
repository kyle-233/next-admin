'use client'

import { authenticate } from '@/lib/actions'
import styles from './LoginForm.module.css'
import { useState } from 'react'
import { useFormState } from 'react-dom'

export const LoginForm = () => {
    // const [err, setErr] = useState("")

    // const handleLogin = async (formData) => {
    //     const data = await authenticate(formData)
    //     data.error && setErr(data.error)
    // }

    const [state, formAction] = useFormState(authenticate, undefined)
    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state && state}
        </form>
    )
}
