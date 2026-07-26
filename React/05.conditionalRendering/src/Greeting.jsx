import * as propTypes from "prop-types"

function Greeting({isLogged = false, username = "Guest"}) {
    const loggedIn = <h1 className="loggedIn">Welcome back {username}</h1>
    const loggedOut = <h1 className="loggedOut">Please login</h1>
    return (
        isLogged ? loggedIn : loggedOut
    )
}
Greeting.propTypes = {
    isLogged : propTypes.bool, 
    username : propTypes.string
}

export default Greeting