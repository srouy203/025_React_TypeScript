
type OptionalPerson = {
    name: string,
    sex: string,
    age?: number,
}

const OptionalProps = (props: OptionalPerson) => {
    const {age = 0} = props
  return (
    <div>
        <u style={{color: "red"}}>7. OptionalProps</u>
        <div>{props.name} {props.sex} {age}</div>
    </div>
  )
}

export default OptionalProps