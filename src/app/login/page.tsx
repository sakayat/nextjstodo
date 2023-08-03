"use client"
import { signIn } from "next-auth/react"

const LoginPage = () => {
  return (
    <div>
        <button onClick={() => signIn("google")}>login</button>
    </div>
  )
}

export default LoginPage