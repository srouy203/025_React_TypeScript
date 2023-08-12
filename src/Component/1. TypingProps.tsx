
type PersonProps = {
    name: string;
    age: number;
    logStatus: boolean;
}

const TypingProps = (props: PersonProps) => {
  
  return (
    <>
        <u style={{color: "red"}}>1. Typing Props</u>
        {props.logStatus ? <div>Hello <b>{props.name}</b>, Your age is <b>{props.age}</b> </div> : <div>Please login!</div>}
    </>
  )
}

export default TypingProps