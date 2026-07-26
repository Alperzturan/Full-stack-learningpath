import * as PropTypes from 'prop-types'

function Student({
    name= "Guest", 
    age= 0,
    isStudent= false //bunları yazmazsan props gibi bir şey yaz bu bir objecttir karşıdan gönderilen değerleri alır props.name şeklinde kullanabilirsin
}){
    return(
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>IsStudent: {isStudent ? "Yes" : "No"} </p>
        </>
    )
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
export default Student