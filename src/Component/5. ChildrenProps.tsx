
type HeaderProps = {
    children: string
}

const ChildrenProps = (props: HeaderProps) => {
  return (
    <div>
        <u style={{color: "red"}}>5. ChildrenProps</u>
        <div>{props.children}</div>
    </div>
  )
}

export default ChildrenProps