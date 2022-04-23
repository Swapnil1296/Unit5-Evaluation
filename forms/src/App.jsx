
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {

  const [counter, setCounter] = useState(0);

  const ref = useRef(10);     // {current : 10}

  const counterRef = useRef(null); // {current : null}

  const divRef = useRef();



  console.log("x i initally : ", ref);


  useEffect(() => {

    counterRef.current = setInterval(() => {
      setCounter((p) => p + 1)
    }, 300);

  }, []);

  return (
    <div  className="App">
      ---------------------------

      <Form />

      ------------------------------

      <h3 ref ={divRef} >Counter : {counter}</h3>

      <button onClick={() => {

        clearInterval(counterRef.current)

      }}>Pause</button>    
      {/* pause counter */}


      <button onClick={() => {
        counterRef.current = setInterval(() => {
          setCounter((p) => p + 1)
        }, 300);
      }}>Start</button>

      {/* start counter */}

      <button onClick={()=>{
        clearInterval(counterRef.current);
        setCounter(0);
      }} >Reset</button>

      {/* reset counter */}


      <button onClick={() => {
        setCounter(counter + 1)
      }}>Change Count</button>

      <button onClick={() => {
        ref.current += 1;
        console.log("x is changed", ref);
      }}>change x</button>


      <div className='blue'>1</div>
      <div className='tomato'>2</div>
      <div className='blue'>3</div>
      <div className='tomato'>4</div>
      <div className='blue'>5</div>
      <div className='tomato'>6</div>
      <div className='blue'>7</div>
      <div className='tomato'>8</div>
      <div className='blue'>9</div>
      <div className='tomato'>10</div>
      <div className='blue'>11</div>
      <div className='tomato'>12</div>
      
     <button onClick={()=>{
       divRef.current.scrollIntoView({
         behavior:"smooth"
       })
     }}>Scroll to top</button>

    </div>
  );
}

export default App;


//Benefits of Ref : 

// 1.store the value , and do note lose it, when component is re-rendering 
// 2. change in this value , should note cause rerender  