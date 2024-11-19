import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {

  const [count, setCount] = useState(0)

 let dataBase = {
  name: "akshay",
  age: 21
 }
  return (
    <>
      <h1 className=" bg-green-400 text-black p-4  rounded-xl">
        tailwind test
      </h1>
      <Card username = "Monika Chahar "  position = "developer" myObj={dataBase} />
      <Card username = "Monika Dhayal" position = "full stack" myObj={dataBase}/>
    </>
  );
}

export default App
