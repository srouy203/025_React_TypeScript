
type ArrayProps = {
    personName: {
        fname: string,
        lname: string
    }[]
}

const ArrayListProps = (props: ArrayProps) => {
  return (
    <div>
        <u style={{color: "red"}}>3. Array List Props</u>
        {
            props.personName.map(val => (
                <ul key={val.fname}>
                    <li>{val.fname} {val.lname}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ArrayListProps