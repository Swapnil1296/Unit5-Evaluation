
// import { Hello } from "./components/hello";
import { Todos } from "./components/Todos";
import './App.css';
import { useEffect, useState } from "react";
import { Counter } from "./components/counter";


function App() {

  const [todos, setTodos] = useState([]);
  
  // const [age, setAge] = useState([]);
  // const [count, setCount] = useState([]);

  const [show , setShow] = useState(true);
 
  useEffect(()=>{

    fetch("http://localhost:8080/todos").then(d => d.json()).then((data) => {


      // console.log("Todos:", data);
  
      setTodos(data);
  
  
    });

  }, [] ); // empty array : call only once!


  // console.log("Before");

  // //...... effects are synchronous , at least once !....

  // useEffect(() => {

  //   console.log("Inside effect 1");


  // }, [age , counter ]);...... // only call when age and counter changes 
  // 

  // useEffect(() => {

  //   console.log("Inside effect 2");


  // });

  // console.log("After");

  return (<div className="App">
    {/* {show ? <Hello /> : null}
    <button on onClick={() => { setShow(!show) }}>Toggle component</button> */}

    <h1>Hello React </h1>
    {/* {todos.map((todo) => (<div>{todo.id}.{todo.titel}</div>))} */}


 {/* --------------------------------------------- */}

    {show ?  <Todos/> : null }
   
   <button onClick={()=>{
     setShow(!show);
   }}>{show ? "Hide" : "Show"} Todos </button>


   {/* ---------------------------- */}

   {show ?   <Counter/> : null }
  

  </div>);

}

export default App;


// npx json-server db.json --port 8080 

// npm create vite 
// go to react then react 
// open project in code 
// npm i
// npm run dev 


//  ----------


// create-react-app (project name)
// chenge react version to 17.0.2
// npm i
// npm i web-vitals
// npm run start