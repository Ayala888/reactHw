import React, { useEffect, useReducer, useState } from 'react';

const initialState = {
  inputValue: '',
  savedName: '',
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_input':
      return {
        ...state,
        inputValue: action.payload,
      };
    case 'start_saving':
      return {
        ...state,
        loading: true,
      };
    case 'save_name':
      return {
        ...state,
        savedName: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default function Name() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const lastSaved = localStorage.getItem('name');
    if (lastSaved) {
      dispatch({ type: 'save_name', payload: lastSaved });
    }
  }, []);

  const handleSave = () => {
    dispatch({ type: 'start_saving' });


    setTimeout(() => {
      localStorage.setItem('name', state.inputValue);
      dispatch({ type: 'save_name', payload: state.inputValue });
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Есімді сақтау</h2>
      <input
        type="text"
        placeholder="Есіміңізді жазыңыз"
        value={state.inputValue}
        onChange={(e) =>
          dispatch({ type: 'change_input', payload: e.target.value })
        }
      />
      <button onClick={handleSave} disabled={state.loading}>
        {state.loading ? 'Сақталуда...' : 'Сақтау'}
      </button>
      <p>
        Соңғы сақталған есім: <span>{state.savedName}</span>
      </p>
    </div>
  );
}

