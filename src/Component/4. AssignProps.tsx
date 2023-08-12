type StatusProps = {
    status: "loading" | "success" | "error" 
}
const AssignProps = (props: StatusProps) => {
    let message;
    if(props.status === "loading") {
        message = "Data fetch is loading...!";
    }else if( props.status === "success") {
        message = "Data fetch is seccess!";
    }else if ( props.status === "error") {
        message = "Data fetch is error!";
    }
  return (
    <div>
        <u style={{color: "red"}}>4. Assign Props</u>
        <div>{message}</div>
    </div>
  )
}

export default AssignProps