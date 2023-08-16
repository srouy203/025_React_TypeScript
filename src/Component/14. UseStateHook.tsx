import { useState } from "react"


const UseStateHook = () => {

    const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
        <u style={{color: "red"}}>14. UseStateHook</u><br/>
        <button onClick={()=>setIsLogin(true)}>Login</button>
        <button onClick={()=>setIsLogin(false)}>Logout</button>
        <div>Use is {isLogin ? "Login" : "Logout"}</div>
    </div>
  )
}

export default UseStateHook