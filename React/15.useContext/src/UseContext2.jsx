import { useState, createContext} from 'react'
import UseContext3 from './UseContext3'


function UseContext2(){
    return (
        <>
            <div className='box'>
                <h1>Component 2</h1>
                <UseContext3></UseContext3>
            </div>
        </>
    )
}
export default UseContext2