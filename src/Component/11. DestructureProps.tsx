import { DesProps } from "./12. PersonType"

const DestructureProps = ({name, age}: DesProps) => {
  return (
    <div>
        <u style={{color: "red"}}>11. DestructureProps</u>
        <div>{name} {age}</div>
    </div>
  )
}

export default DestructureProps