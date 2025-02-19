import {useState} from 'react'
import './App.css' 
function App() {
  const [height,setHeight]= useState("");
  const [weight,setWeight]= useState("");
  const  [bmi,setBmi]= useState(null)
  const [bmiStatus,setBmiStatus]= useState("")
  const [errorMessage,setErrorMessage]= useState("");
  
  const calculateBmi=()=>{
    const isVaildHieght = /^\d+$/.test(height);
    const isVaildWeight = /^\d+$/.test(weight);
    if(isVaildHieght && isVaildWeight){
      const hieghtInMeters=height/100;
      const bmiValue=weight/(hieghtInMeters*hieghtInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue<18.5){
        setBmiStatus("You are Underweight");
      }
      else if(bmiValue>=18.5 && bmiValue<=24.9){
        setBmiStatus("You are Normal");
      }
      else if(bmiValue>=25 && bmiValue<=29.9){
        setBmiStatus("You are Overweight");
      }
      else{
        setBmiStatus("You are Obese");
      }
      setErrorMessage("");
    }
    else{
      setBmi(null);
      setBmiStatus("");
     setErrorMessage("please enter vaild numeric  values for height  and weight.")
    }
  }
  function allClear(){
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  }


  return (
    <>
     <div className='bmi-calculator'>
      <div className="box">
        </div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor='height' >height cm:</label>
            <input type="text" id='height' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor='weight'  >weight kg:</label>
            <input type="text" id='weight'value={weight} onChange={(e)=>setWeight (e.target.value) } />
          </div>
          <div className="button-container">
          <button onClick={calculateBmi}>bmi-Calculate</button>
          <button onClick={allClear}>Clear</button>
          </div>
    {bmi!==null && (<div className="result">
          <p>BMI IS :{bmi} </p>
          <p> status: {bmiStatus}</p>
        </div>)}
      
        </div>
     </div>

    </>
  )
}

export default App
