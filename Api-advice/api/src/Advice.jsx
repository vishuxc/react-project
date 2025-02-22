import {useEffect, useState} from 'react';
import "./Advice.css";

export const Advice = () => {
    const [Advice,setAdvice] = useState("please click the button to get advice");
    const [count,setCount] = useState(0);

    async function getAdvice(){
        const res=await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        setAdvice(data.slip.advice);
        setCount(count+1);
    }
    useEffect(()=>{
        getAdvice();
    },[]);
  return (
    <>
    <div>
        <h2>{Advice}</h2>
        <button onClick={getAdvice}>Get advice</button>
        <p>you have read<b>{count}</b> pieces of advice</p>
    </div>
    </>
  )
};