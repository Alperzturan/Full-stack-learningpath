import { useState, createContext} from 'react'
import UseContext4 from './UseContext4'

function UseContext3(){
    return (
        <>
            <div className='box'>
                <h1>Component 3</h1>
                <UseContext4></UseContext4>
            </div>
        </>
    )
}
export default UseContext3