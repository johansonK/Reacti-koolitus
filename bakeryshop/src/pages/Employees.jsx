import { Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRef } from "react";





function Employees() {

const [users, setUsers] = useState([]);
const [message, setMessage] = useState("Add an employee!")
const idRef = useRef();
const firstNameRef = useRef();
const lastNameRef = useRef();
const emailRef = useRef();
const avatarRef = useRef();
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));
  }, []);

  const addEmployee = () => {
    if (idRef.current.value === "") {
      //setMessage;
      return
    } 
    if (/^[0-9]*$/.test(idRef.current.value) === false) {
      // setMessage()
     return;
   }
   
   if (firstNameRef.current.value === "") {
    // setMessage()
   return;
  }
  if (lastNameRef.current.value === "") {
    // setMessage()
   return;
  }

    users.push
    ({
      "id": idRef.current.value,
      "first_name": firstNameRef.current.value,
      "last_name": lastNameRef.current.value,
      "email": emailRef.current.value,
      "avatar": avatarRef.current.value}
      ) 
  }

  const deleteEmployee = (index) => {
    users.splice(index,1);
    setUsers(users.slice())
    
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
          <td><input type="number" ref={idRef} placeholder="ID" className="form-control"/></td>
          <td>
            <input type="text" ref={firstNameRef} placeholder="Fisrt Name" className="form-control"/>
            <input type="text" ref={lastNameRef} placeholder="Last Name" className="form-control"/>
          </td>
          <td><input type="text" ref={emailRef} placeholder="Email" className="form-control"/></td>
          <td><input type="file" ref={avatarRef} accept="image/*" className="form-control"/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee} >Add</Button></td>
        </tr>
        </tbody>                    
      </Table>
      <div>{message}</div>
    </div>

  </div>)
}

export default Employees;