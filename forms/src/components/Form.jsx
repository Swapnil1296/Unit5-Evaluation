import { useState } from "react"

export const Form = () => {

    const [formData, setFormdata] = useState({

        username: "",
        age: "",
        email: "",

    });

    const handleChange = (e) => {

        // if (e.target.id === "username") {
        //     setFormdata({
        //         ...formData, username: e.target.id,
        //     });
        // }
        // if (e.target.id === "age") {
        //     setFormdata({
        //         ...formData, age: e.target.id,
        //     });
        // }

        // ----optimise-way 


        // setFormdata({
        //      ...formData,
        //      [e.target.id] : e.target.value,
        // });


        //    -----

        const { id, value } = e.target;  //  its object destructuring 

        // const id = e.target.id;
        //const value = e.target.value;

        setFormdata({
            ...formData,
            [id]: value, // if [] is in key position then it is computed property
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault(e);

        // console.log(formData);

        fetch("  http://localhost:8080/users", {

            method: "POST",
            body : JSON.stringify(formData),
            headers : {"Content-Type" : "application/json"}

        });

        

    };



    return <form onSubmit={handleSubmit}>

        <input onChange={handleChange}
             value={formData.username} // change the value of input box from outside
            type="text" placeholder="Enter Username" id="username" />

        <input onChange={handleChange}
            // value={formData.age} 
            type="Number" placeholder="Enter Age" id="age" />

        <input onChange={handleChange}
            // value={formData.email} 
            type="email" placeholder="Enter email" id="email" />

        <input type="submit" value="submit" />

    </form>
}