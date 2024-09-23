import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

import toast from 'react-hot-toast';

function Home() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:8080/api/print/")
      .then((response) => {
        setUsers(response.data); 
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  
  function Delete(id) {
    axios.delete(`http://localhost:8080/api/del/${id}`)
      .then((response) => {
        setUsers(users.filter(user => user._id !== id));
        toast.success("User deleted successfully");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete the user");
      });
  }

  return (
    <div className='HomeDiv'>
      <div className="TableDiv">
        <div className="AddData">
          <Link  to="/add">+</Link>
        </div>

        <table className='MainTable' border={1}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user,index) => (
                <tr key={index+1}>
                  <td>{index + 1}</td>
                  <td>{user.fname + " " + user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update/${user._id}`}>Update</Link>
                    <button onClick={() => Delete(user._id)} className="delete">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
