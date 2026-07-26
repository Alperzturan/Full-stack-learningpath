import { useState, createContext} from 'react' //create context importla
import UseContext2 from './UseContext2'

export const UserContext = createContext(); //exportla

function UseContext1(){
    const [user, setUser] = useState("dfuhjjud") // altta child componentleri 
    // UserContext.Provider etiketi içine al
    return (
        <>
            <div className='box'>
                <h1>Component 1</h1>
                <UserContext.Provider value={user}>
                    <UseContext2></UseContext2>
                </UserContext.Provider>
                
            </div>
        </>
    )
}
export default UseContext1