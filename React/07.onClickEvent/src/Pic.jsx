
const pic = "src/assets/react.svg"
function Pic(){
    const image = (e) => {
        console.log(e);
        e.target.style.display = "none"
    }
    return(
        <img src={pic} alt="pic" onDoubleClick={image}/>
    )
}
export default Pic