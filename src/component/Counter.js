import React from 'react'
import { useState } from 'react';

export default function IncCount(props) {
    
    let x = parseInt(props.count)
    const[counter,setCounter]=useState(2);
    const Increase=()=>{
        setCounter(counter +1);
       
        }
        const decrease=()=>{
          setCounter(counter -1);
         
          }
    
  return (
    <div>
    <div>
        <h1>Counter:{counter}</h1>
        <button onClick={Increase}>Increase</button><br/>

    </div>
    <div>
    <button onClick={decrease}>decrease</button>
    </div>
</div>
  )
}
