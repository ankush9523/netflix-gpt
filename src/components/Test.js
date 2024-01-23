import React, { useEffect, useState } from 'react'
import { useReducer,useMemo } from 'react';

function Test() {
    const [inputdata,setInputData]=useState("");
    const [disabled,setDisabled]=useState(true);
    const[hours,sethours]=useState(0);
    const[min,setMin]=useState(0);
    const[sec,setSec]=useState(0);
    const[stop,setStop] = useState(false);
    const [time,setTime]=useState("");
    const ReducerFunction = (state,action) =>
    {
        if(action.type=='increment'){
            return state+1
        }
        if(action.type=='decrement')
        {
           return state-1
        }
       
    }
    const Function1 =(data,action)=>{
        if(action.type==="multiply")
        {
           return data*2
        }

    }

    const[state,dispatch]= useReducer(ReducerFunction,0)
    const[data,setData]= useReducer(Function1,2)
    
    const clickDataHandler =()=>{
        setData({type:"multiply"});

    }
    
    const clickHandler = ()=>{
        //setCount(count+1);
        dispatch({ type: 'increment' });
    }
    const clickDecHandler = ()=>{
        //setCount(count-1)
        dispatch({type:'decrement'})
        
    }

    const handleInputEvent =(e)=>{
      setInputData(e.target.value);
      setDisabled(false);
    }
    
    
    const starthandler=()=>{
        setStop(true);
    }
    
    const stophandler=()=>{
        setStop(false);
    }
    const resethandler=()=>{
        sethours(0);
        setMin(0);
        setSec(0);
    }
    
    useEffect(()=>{
        let interval=null;

        if(stop){
            interval = setInterval(()=>{
              if(min>59){
                sethours(hours+1);
                setMin(0);
                clearInterval(interval);
              }
              if(sec>59){
                setMin(min+1);
                setSec(0);
                clearInterval(interval);
              }
              if(sec<=59){
                setSec(sec+1);
              }
              else{
                clearInterval(interval);
              }
            },1000)
        }
        else{
            clearInterval(interval)
        }

        return(()=>{
            clearInterval(interval);
        })
    })
  
   
{/*setInterval(() => {
    let time = new Date().toLocaleTimeString();
    setTime(time)
}, 1000); */}

    //let time = new Date().toLocaleTimeString();

    
   
  return (
    <div className='px-[40%] font-bold  '>
        <h1 className=' text-3xl py-[10%]  text-red-600'> UseReducer testing</h1>
        <h1 className=''>Count:{state}</h1>
        <h1 className=''>Data:{data}</h1>
       
        <button  onClick={clickHandler} className=' bg-green-500'>Increase</button>
        <button  onClick={clickDecHandler} className=' bg-red-400'>Decrease</button>
        <button  onClick={clickDataHandler} className=' bg-red-400'>Multiply</button>

        <button className=' bg-yellow-500'>Stop</button>
        <h1 className=''>InputData: {inputdata}</h1>
        <input type='text' placeholder='enter keywords to test' required onChange={handleInputEvent} />
      
            <button  disabled={disabled} className=''>Submit</button>

            <h1>{hours}:{min}:{sec}</h1>
            <h1>{time}</h1>

            <br/><br/>
            <button  onClick={starthandler} className=' bg-green-500'>Start</button>
            <button  onClick={stophandler} className=' bg-red-400'>Stop</button>
            <button  onClick={resethandler} className=' bg-blue-500'>Reset</button>

            

    </div>
  )
}

export default Test