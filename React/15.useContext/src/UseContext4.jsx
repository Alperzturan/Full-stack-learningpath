import { useState, useContext} from 'react'
import { UserContext } from './UseContext1' //kullanmak istediğin yere import et

function UseContext4(){
    const user = useContext(UserContext)
    return (
        <>
            <div className='box'>
                <h1>Component 4</h1>
                <h2>{user}</h2>
            </div>
        </>
    )
}
export default UseContext4