
import './App.css'
import MessageContext from './components/MessageContext'
import Text from './components/Text'
import Buttons from './components/Buttons'
import { useReducer } from 'react'

const initialState={
  message: "",
  type: ""
}

function reducer(state, action) {
  switch (action.type) {
    case 'success':
      return { 
        ...state, 
        message: '✅ Сәтті!', 
        type: 'success' 
      }
    case 'error':
      return {
        ...state, 
        message: '❌ Қате!', 
        type: 'error' 
      }
    case 'clear':
      return {
        ...state, 
        message: '', 
        type: ''
      }
    default:
      return state
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <MessageContext.Provider value={{state, dispatch}}>
      <Text/>
      <Buttons/>
    </MessageContext.Provider>


  )
}

export default App
