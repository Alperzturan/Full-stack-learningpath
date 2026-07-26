import propTypes from "prop-types"

function List({category = "Category", items = []}){
    return(
        <>
        <h1>{category}</h1>
        <ol>
            {items.map((item)=>{
                return <li key={item.id}>{item.name}: &nbsp; <b>{item.calorie}</b></li>
            })} 
        </ol>
        </>
    )
}

List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        calories: propTypes.number
    }))
}

export default List