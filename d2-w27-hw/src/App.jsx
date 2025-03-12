import { useState } from 'react'
import './App.css'

function App() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  if (register) {
    return (
      <div>
        <h3>Register Form</h3>
        <input type="email" placeholder="Email" /><br />
        <input type="password" placeholder="Құпия сөз" /><br />
        <button onClick={() => setRegister(false)}>
          Register
        </button>
      </div>
    );
  }
  return (
    <>
      {login ? 
        <h3>Бастапқы бетке қош келдіңіз</h3>
        : 
        <h3>Жүйеге кіру қажет</h3> 
      }
      <button onClick={()=> setLogin(!login)}>{login ? "Log out" : "Login"}</button>

      {!login && (
          <button onClick={() => setRegister(true)}>
            Register
          </button>
      )}
     </>
  )
}

export default App
