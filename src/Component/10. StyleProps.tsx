
type StyleProp = {
    style: React.CSSProperties
}

const StyleProps = (props: StyleProp) => {
  return (
    <div>
        <u style={{color: "red"}}>10. StyleProps</u>
        <div style={props.style}>This is a style props!</div>
    </div>
  )
}

export default StyleProps