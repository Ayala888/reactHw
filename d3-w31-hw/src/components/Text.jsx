import React from 'react'
import { useContext } from 'react'
import MessageContext from './MessageContext'

export default function Text() {
    const getColor = () => {
        switch (state.type) {
          case 'success':
            return 'green'
          case 'error':
            return 'red'
          default:
            return 'black'
        }
      }

const {state} = useContext(MessageContext)
  return (
    <div>
        <h1>Хабарлама жүйесі</h1>
        <h2 style={{ color: getColor() }}>{state.message}</h2>
      
    </div>
  )
}


