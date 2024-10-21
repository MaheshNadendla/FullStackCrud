import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import axios from "axios";

function Add() {
  const nav = useNavigate();
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

    const { fname, lname, email, password } = user;

    if (!fname || !lname || !email || !password) {
      toast.error("Enter valid details", {
        position: "top-right", // You can change this to your preferred position
      });
    }

    else{

        axios.post("https://basicapp1-pync.onrender.com/api/create/",user).then(
          (response)=>{
              console.log(response);
              toast.success("User is Added Sucessfully", {
                position: "top-right", // You can change this to your preferred position
              });
              nav("/home");
          }
        ).catch((err)=>{console.log(err)
          toast.error("Internal server Error", {
            position: "top-right", // You can change this to your preferred position
          });
        });

    }


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

export default Add;
