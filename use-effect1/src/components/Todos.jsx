import { useEffect, useState } from "react";


export const Todos = () => {

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() => {

        getData();

    }, []);

    const getData = async () => {


        const data = await fetch("http://localhost:8080/todos").then((d) => d.json());

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
                todos.map((t) => (<div>{t.titel}</div>))
            }

        </div>

    );


};