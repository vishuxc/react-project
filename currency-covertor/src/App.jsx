import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const[amount,setAmount]=useState();
  const[fromCurrency,setFromCurrency]=useState('USD');
  const[toCurrency,setToCurrency]=useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchange,setExchange]= useState(null);
  
useEffect(() =>{
  const getExchange =async () =>{
    try{
      let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
      const response=await axios.get(url);
      setExchange(response.data.rates[toCurrency])
    } 
    catch(error){
      console.error("error fetching exchange rate:",error)
    }
  }
  getExchange();
} ,[fromCurrency,toCurrency]);
useEffect(()=>{
  if(exchange !== null){
    setConvertedAmount((amount * exchange).toFixed(2));
  }

},[amount,exchange])
const handleAmount =(e) =>{
  const value=parseFloat(e.target.value);
  setAmount(isNaN(value)? 0: value);
}
const fromCurrencyHandle=(e) =>{
  setFromCurrency(e.target.value);
}
const toCurrencyHandle=(e) =>{
  setToCurrency(e.target.value);
}
   return (
    <>
    <div className="currency-container">
      <div className="box"></div>
        <div className="data">
        <h1>Currency Converter</h1>
       <div className="label container">
       <label htmlFor='amt' >Amount</label>
       <input type='number' id='amt' value={amount} onChange={handleAmount}/>
       </div>
       <div className="label container">
       <label htmlFor='fromcurrency'>from-currency</label>
       <select id='fromCurrency' value={fromCurrency}  onChange={fromCurrencyHandle}>
         <option value="USD">USD-United States Dollar</option>
          <option value="EUR">EUR Euro</option>
         <option value="GBP">GB British Pound Sterling</option>
          <option value="JPY">JPY -Japanese Yen</option>
          <option value="AUD">AUD -Australian Dollar</option>
          <option value="CAD">CAD-Canadian Dollar</option>
           <option value="CNY">CNY-Chinese Yuan</option>
           <option value="INR">INR-Indian Rupee</option>
           <option value="BRL">BRL-Brazilian Real</option>
          <option value="ZAR">ZAR-South AfricanRand</option>
       </select>
       </div>
       <div className="label container">
       <label htmlFor='tocurrency'>To-currency</label>
       <select id='toCurrency' value={toCurrency} onChange={toCurrencyHandle}>
         <option value="USD">USD-United States Dollar</option>
          <option value="EUR">EUR Euro</option>
         <option value="GBP">GB British Pound Sterling</option>
          <option value="JPY">JPY -Japanese Yen</option>
          <option value="AUD">AUD -Australian Dollar</option>
          <option value="CAD">CAD-Canadian Dollar</option>
           <option value="CNY">CNY-Chinese Yuan</option>
           <option value="INR">INR-Indian Rupee</option>
           <option value="BRL">BRL-Brazilian Real</option>
          <option value="ZAR">ZAR-South AfricanRand</option>
       </select>
       </div>
      </div>
      <div className="result">
        <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency} </p>
       </div>
    
    </div>
         </>
  )
}

export default App
