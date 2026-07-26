function Button(props){
    const click = (e, name) => {
        e.target.textContent = `Ouch ${name}`
    }
    return(
        <button onClick= {(e) => {
            click(e,props.name)
        }}>Press Me {props.name}</button>
    )
}
export default Button