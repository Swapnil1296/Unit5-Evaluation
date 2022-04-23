import { useEffect, useState } from "react";


export const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [loading,setLoading] = useState(true);
    const [page , setPage] = useState(1);

    useEffect(() => {
      
        console.log("Mounted Todos")
        getData();
        
        //Curried function 
          return () => {
           
           // after unmounting  
            console.log("UnMounting Todos Done")
          }


    }, [page]);

    const getData = async () => {


        const data = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`).then((d) => d.json());

        setTodos(data);
        setLoading(false);
    };


    return loading ? ("Loading.....") : (

        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="enter todo" />
            <button onClick={() => {
                const payload = {
                    titel: text,
                    status: false
                };
                fetch("http://localhost:8080/todos", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }).then(() => {
                    getData();
                });
                // axios.post("http://localhost:8080/todos",payload)
            }}>Add todo</button>

            {
                todos.map((t) => (<div>{t.id} . {t.titel}</div>))
            }

            <button onClick={()=>{

             setPage(page - 1);

            }}>Prev</button>
            <button onClick={()=>{
                setPage(page + 1);
            }}>Next</button>

        </div>

    );


};