
type PersonProps = {
    person: {
        name: string,
        age: number
    }
}

const ObjectProps = (props: PersonProps) => {
  return (
    <>
        <u style={{color: "red"}}>2. Object Props</u>
        <div>Hello Person <b>{props.person.name}</b> his age is <b>{props.person.age}</b></div>
    </>
  )
}

export default ObjectProps