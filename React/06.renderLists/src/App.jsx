
import List from "./List.jsx"

function App() {
  const fruits = [
    {id: 1, name: "apple", calorie: 67},
    {id: 2, name: "orange", calorie: 23},
    {id: 3, name: "banana", calorie: 45}
  ]
  const vegetables = [
    {id: 4, name: "tomato", calorie: 34},
    {id: 5, name: "potato", calorie: 46},
    {id: 6, name: "cucumber", calorie: 56}
  ]
  
  return (
    <>
      <List items = {fruits} category = "fruits"></List>
      <List items = {vegetables} category = "vegetables"></List>
      <List items = {vegetables}></List>
      <List></List>
    </>
  )
}

export default App
