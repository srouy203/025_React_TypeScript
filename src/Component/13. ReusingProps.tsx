import { Person } from "./12. PersonType"

type PersonProp = {
    person: Person[]
}

const ReusingProps = ({person}: PersonProp) => {
  return (
    <div>
        <u style={{color: "red"}}>13. ReusingProps</u>
        {
            person.map((val) => (
                <ul key={val.fname}>
                    <li>{val.fname} {val.lname}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default ReusingProps