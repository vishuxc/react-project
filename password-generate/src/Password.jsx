import { useState } from 'react';
import './App.css';

export const Password = () => {
  const [length, setLength] = useState();
  const [upper, setUpper] = useState (); 
    const [lower, setLower] = useState (); 
  const [number, setNumber] = useState();  
  const [symbol, setSymbol] = useState();  
  const [password, setPassword] = useState("");
    

  const generate = () =>{
    let charSet="";
    if (upper) charSet +=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) charSet +="abcdefghijklmnopqrstuvwxyz";
    if (number) charSet +="0123456789";
    if (symbol) charSet +="!@#$%^&*()_+=<>/";
    let generatePassword ="";
    for(let i=0;i<length;i++){
        const random=Math.floor(Math.random()*charSet.length )
        generatePassword +=charSet[random];

    }
    setPassword(generatePassword);
 }

 const copyTo = () =>{
   navigator.clipboard.writeText(password);
   alert("Password copied ")
 };

  
  return (
    <div className="password-genrate">
      <h1>Password Generator</h1>

    
      <div className="input-group">
        <label htmlFor="num">Password Length</label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value) || 1)}
        />
      </div>

      
      <div className="checkbox-group">
        <input type="checkbox" id="upper" checked={upper}
            onChange={(e) => setUpper(e.target.checked) }
    
        />
        <label htmlFor="upper">Include Uppercase</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="lower"checked={lower}
            onChange={(e) => setLower(e.target.checked)} />
        <label htmlFor="lower">Include Lowercase</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="number" checked={number}
            onChange={(e) => setNumber(e.target.checked)} />
        <label htmlFor="number">Include Numbers</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="symbol" checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}/>
        <label htmlFor="symbol">Include Symbols</label>
      </div>

    
      <button className="generate-btn" onClick={generate}>Generate Password</button>

    
      <div className="generate-password">
        <input type="text" readOnly  value={password}/>
        <button className="copy-btn" onClick={copyTo}>Copy</button>
      </div>
    </div>
  );
};
