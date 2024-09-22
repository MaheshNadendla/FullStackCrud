import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

// import "./Signup.css";

function Update() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    // const { fname, lname, email, password } = user;

  //   if (!fname || !lname || !email || !password) {
  //     console.log("error");
  //   }

  //   try {
  //     const url = "http://localhost:8080/api/create";
  //     const response = await fetch(url , {
  //       method : "POST",
  //       headers : {

  //         'Content-Type' : 'application/json'
  //       },
  //       body : JSON.stringify(user)
  //     });
  //     const result = await response.json();
  //     console.log("sucess",result);
  // } catch (error) {
  //     console.log("error here");
  // }

  axios.post("http://localhost:8080/api/create/",user).then(
    (response)=>{
        console.log(response);
    }
  ).catch((err)=>console.log(err));


  };

  console.log(user);

  return (
    <>
      <div className="SignUpBox">
        <label className="SignUp">Add User</label>

        <label htmlFor="">FName</label>
        <input
          value={user.fname}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, fname: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <label htmlFor="">LName</label>
        <input
          value={user.lname}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, lname: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <label htmlFor="">Email</label>
        <input
          value={user.email}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <label htmlFor="">Password</label>
        <input
          value={user.password}
          onChange={(e) => {
            setUser((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
          type="text"
          name=""
          id=""
        />

        <button onClick={handleSignup} >Submit</button>
      </div>
    </>
  );
}

export default Update;
