import React, { useState } from 'react'

type UserProps = {
    name: string,
    email: string
}

const UseStateFutureHook = () => {
    const[user, setUser] = useState<UserProps | null>(null);
    const handleLogin = () => {
        setUser({
            name: "LeangSrouy",
            email: "leangsrouyang@gmail.com"
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <u style={{color: "red"}}>15. UseStateFutureHook</u><br/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>Username: {user?.name}, Email: {user?.email}</div>
    </div>
  )
}

export default UseStateFutureHook