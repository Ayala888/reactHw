import React, { useEffect, useReducer } from 'react'

const initialState = {
    backgroundColor: "white"
}

function reducer(state, action){
    switch(action.type){
        case 'white' :
            return {
                ...state,
                backgroundColor: "white"
             }
        case 'black' : 
        return {
            ...state,
            backgroundColor: "black"
        }
        case 'blue':
            return {
                ...state,
                backgroundColor: "blue"
            }
        default :
            return state
    }
}

export default function BackgrounColor() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        document.body.style.backgroundColor = state.backgroundColor;
      }, [state.backgroundColor]);

  return (
    <div style={{
        color: state.backgroundColor === 'black' ? 'white' : 'black',
    }}>
        <h1>Current theme: {state.backgroundColor}</h1>
        <button onClick={()=>dispatch({type: "white"})}>White</button>
        <button onClick={()=>dispatch({type: "black"})}>Black</button>
        <button onClick={()=>dispatch({type: "blue"})}>Blue</button>
    </div>
  )
}



