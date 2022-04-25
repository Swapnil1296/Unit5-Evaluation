import {useEffect, useState} from "react";

import axios from "axios";
import {Link} from "react-router-dom";

export const EmployeeList = () => {
  const [Employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({data}) => {
      setEmployee(data);
    });
  }, []);
  return (
    <div className="list_container">
      <div className="employee_card">
        {Employee.map((employee) => (
          <div key={employee.id}>
            <Link to={`/employee/${employee.id}`}>
              {employee.id}

              <img src={employee.image} className="employee_image" alt="" />
              <span className="employee_name"> {employee.employee_name}</span>
              <span className="employee_title">{employee.title}</span>
            </Link>
          </div>
        ))}
      </div>
     
      {/* On clicking this card anywhere, user goes to user details */}
    </div>
  );
};
