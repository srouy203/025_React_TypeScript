
type ChildComProps = {
    children: React.ReactNode
}

const ChildComponent = (props: ChildComProps) => {
  return (
    <div>
        <u style={{color: "red"}}>6. ChildComponentProps</u>
        <div>{props.children}</div>
    </div>
  )
}

export default ChildComponent;