import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRef } from "react";
import config from "../data/config.json";
import validator from 'validator';

function Employees() {

const [users, setUsers] = useState([]);
const [dbUsers, setDbUsers] = useState([]); 
const [message, setMessage] = useState("Add an employee!")
const IDRef = useRef();
const firstNameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const avatarRef = useRef();


useEffect(() => {     
  fetch(config.employeesDbUrl)
    .then (response => response.json())   
    .then (json => {                      
      setDbUsers(json || []); 
    })   
}, []);

  // TODO: Load data from backend service
  //+ lastNameRef

  const addEmployee = () => {
    if (Number(IDRef.current.value) === "") {
      setMessage("ID is required!");      
    } 
    if ((firstNameRef + "" + lastNameRef) === "") {
      setMessage("Full name is required!")
    }
    if (!validator.isEmail(emailRef.current.value)) {
      setMessage("Invalid email format")
    }
    if (avatarRef.current.value === "") {
      setMessage("Avatar is required")
    } else {
      setMessage("Employee saved!");
      dbUsers.push
    ({
      "id": IDRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value}
      ) 
    // TODO: Add validations
    // TODO: Add an employee to the table
  }
  fetch(config.employeesDbUrl, {"method": "PUT", "body": JSON.stringify(dbUsers)});
}

  const deleteEmployee = (index) => {
    dbUsers.splice(index,1);
    //setDbUsers(employeesFromFile.slice())
    fetch(config.employeesDbUrl, {"method": "PUT", "body": JSON.stringify(dbUsers)});
    // TODO: Delete an employee from the table
  }
  
  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Actions</th>
        </tr>
        </thead>   
        <tbody>
        {users.map((user, index) => 
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name + " " + user.last_name}</td>
          <td>{user.email }</td>
          <td><img src={user.avatar} alt="avatar"/></td>
          <td><Button onClick={() => deleteEmployee (index)} type="button" variant="danger">Delete</Button></td>
        </tr>
        )}
       
        <tr className="input-row">
          <td><input ref={IDRef} type="number" placeholder="ID" className="form-control"/></td>
          <td><input ref={node => {firstNameRef.current=node; lastNameRef.current = node}} type="text" placeholder="Name" className="form-control"/></td>
          <td><input ref={emailRef}type="text" placeholder="Email" className="form-control"/></td>
          <td><input ref={avatarRef} type="file" accept="image/*" className="form-control"/></td>
          <td><Button onClick={addEmployee} type="submit" variant="success">Add</Button></td>
        </tr>
        </tbody>                    
      </Table>
      <div>{message}</div>
    </div>

  </div>)
}

export default Employees;