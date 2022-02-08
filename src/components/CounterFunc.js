import React, { useState } from 'react';
import Button from './Button';

export default function CounterFunc() {
    const [count,setCount]= useState(0)

    const increase = ()=>{
        // setCount(count+1)
        setCount(value => value+1)
    }

    const decrease = ()=>{
        // setCount(count-1)
        setCount(value => value-1)
        }

    console.log(count)
  return <div className='card'>

  <h1>{count}</h1>

  <Button buton={increase} buton1={decrease}/>

  </div>;
}
