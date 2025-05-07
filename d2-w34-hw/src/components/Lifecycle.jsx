import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Lifecycle() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('MOUNTED');

        const timer = setInterval(() =>{
            setCount(prev => prev + 1)
        }, 1000)
        
        return ()=>{
            console.log('Компонет өшірілді');
            clearInterval(timer)   
        }
    }, [])


    useEffect(() =>{
        console.log('Таймер...');
    }, [count])
    
  return (
    <div>
        <Link to={'/'}>Шығу</Link>
        <h1>Таймер</h1>
        <p>Count {count}</p>
    </div>
  )
}
