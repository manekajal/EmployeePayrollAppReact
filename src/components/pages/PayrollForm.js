import React, { useState , useEffect, useCallback} from "react"
import axios from "axios";
import { Link } from "react-router-dom";

const PayrollForm = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUser(result.data);
    }


    return (
        <div className="container" >
            <div className="py-4">
                <h1>Employee payroll List</h1>
                <table class="table border shadow">
          <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Profile Image</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Start Date</th>
         <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.profileimage}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.department}</td>
                <td>{user.salary}</td>
                <td>{user.startdate}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PayrollForm;