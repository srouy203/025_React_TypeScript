import React, { useState } from 'react'

type UserProps = {
    name: string,
    email: string
}

const UseStateTypeAssertion = () => {
    const[user, setUser] = useState<UserProps>({} as UserProps);
    const handleLogin = () => {
        setUser({
            name: "LeangSrouy",
            email: "leangsrouyang@gmail.com"
        })
    }
  return (
    <div>
        <u style={{color: "red"}}>16. UseStateTypeAssertion</u><br/>
        <button onClick={handleLogin}>Login</button>
        <div>Username: {user.name}, Email: {user.email}</div>
    </div>
  )
}
export default UseStateTypeAssertion
