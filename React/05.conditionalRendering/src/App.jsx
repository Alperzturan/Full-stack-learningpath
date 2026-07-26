import Greeting from "./Greeting.jsx"

function App() {
  return(
    <>
      <Greeting isLogged = {true} username = "Alper"></Greeting>
      <Greeting isLogged = {true}></Greeting>
      <Greeting></Greeting>
    </>
  )
  
  
}

export default App
