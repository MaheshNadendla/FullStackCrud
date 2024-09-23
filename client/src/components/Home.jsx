import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

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

  return (
    <div className='HomeDiv'>
      <div className="TableDiv">
        <div className="AddData">
          <Link  to="/update">addData</Link>
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
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.fname + " " + user.lname}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/update/${user.id}`}>Update</Link>
                    <button className="delete">Delete</button>
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
