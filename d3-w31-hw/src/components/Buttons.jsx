import React from 'react'
import { useContext } from 'react'
import MessageContext from './MessageContext'

export default function Buttons() {
    const {dispatch} = useContext(MessageContext)

 
  return (
    <div>
        <button style={{backgroundColor: 'green', color:'white'}} onClick={(e)=> dispatch({type: 'success'})}>Сәтті хабарлама</button>
        <button style={{backgroundColor: 'red', color:'white'}} onClick={(e)=> dispatch({type: 'error'})}>Қате хабарлама</button>
        <button style={{backgroundColor: 'grey', color:'white'}} onClick={(e)=> dispatch({type: 'clear'})}>Тазарту</button>
      
    </div>
  )
}
