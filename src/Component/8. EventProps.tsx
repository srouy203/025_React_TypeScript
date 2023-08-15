
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const EventProps = (props: ButtonProps) => {
  return (
    <div>
        <u style={{color: "red"}}>8. Event Props</u>
        <div>
            <button onClick={(event) => props.handleClick(event, 1)}>Click to console</button>
        </div>
    </div>
  )
}

export default EventProps