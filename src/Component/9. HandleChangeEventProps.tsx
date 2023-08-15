import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const HandleChangeEventProps = (props: InputProps) => {
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }

  return (
    <div>
        <u style={{color: "red"}}>9. HandleChangeEventProps</u>
        <br/>
        <input type="text" value={props.value} onChange={handleInputChange}/>
    </div>
  )
}

export default HandleChangeEventProps