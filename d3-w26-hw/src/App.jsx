import { useState } from 'react'
import './App.css'

function App() {
  const change = (e)=>{
    console.log(e.target.value.toUpperCase());  
  }

  const keyDown = (e)=>{
    if(e.key == "Enter"){
      alert("Submitted!")
    }
  }

  return (
    <>
        <form>
          <input onChange={change} onKeyDown={keyDown} type="text" placeholder='zhaz'/>
        </form>
    </>
  )
}

export default App
