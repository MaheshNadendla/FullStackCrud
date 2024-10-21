import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


import toast from 'react-hot-toast';

function Home() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios.get("https://basicapp1-pync.onrender.com/api/print/")
      .then((response) => {
        setUsers(response.data); 
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);

  
  function Delete(id) {
    axios.delete(`https://basicapp1-pync.onrender.com/api/del/${id}`)
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
          <Link  to="/add"><i class="fa-regular fa-address-card fa-2xl"></i></Link>
        </div>

        <table className='MainTable' border={1}>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Asction</th>
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
                    <Link to={`/update/${user._id}`}><i class="fa-solid fa-pen-to-square fa-xl"></i></Link>
                    <button onClick={() => Delete(user._id)} className="delete"> <i class="fa-solid fa-trash fa-xl"></i> </button>
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
