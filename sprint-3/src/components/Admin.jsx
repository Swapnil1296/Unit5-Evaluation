import { useState, useEffect } from "react";

export const Admin = () => {

  const [formData, setFormdata] = useState({
    id: "",
    employee_name: "",
    employee_id: "",
    title: "",
    salary:"",
    image: "",
    username: "",
    password: "",
    tasks: [""],
    status: "",
    team: "",
  });
  const handleChange = (e) => {
    const {id, value} = e.target;

    setFormdata({
      ...formData,
      [id]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(e);

    console.log(formData);

    //  axios
    //    .post("http://localhost:8080/employee", formData)
    //    .then((response) => setArticleId(response.data.id));

    fetch(" http://localhost:8080/employee", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {"Content-Type": "application/json"},
    });
  };
  return (
    <form onSubmit={handleSubmit} className="createEmployee">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee Name"
        id="employee_name"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Employee id"
        id="employee_id"
      />
      <select onChange={handleChange} id="title">
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        onChange={handleChange}
        type="number"
        placeholder="Salary"
        id="salary"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Image"
        id="image"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="User Name"
        id="username"
      />
      <input
        onChange={handleChange}
        type="password"
        placeholder="Password"
        id="password"
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter tasks separated by commas"
        id="tasks"
      />
      <select onChange={handleChange} name="status" id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select onChange={handleChange} name="team" id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
