import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import toast from "react-hot-toast";

import axios from "axios";

function Update() {
    const nav = useNavigate();
    const {id} = useParams();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  useEffect(
    ()=>{

    axios.get(`http://localhost:8080/api/getone/${id}`,user).then(
        (response)=>{
            setUser(response.data);
            console.log(response);
        }
      ).catch((err)=>{console.log(err)
        toast.error("Internal server Error", {
          position: "top-right", // You can change this to your preferred position
        });
      });
    },[]

  )

  const handleSignup = async (e) => {
    e.preventDefault();

  axios.put(`http://localhost:8080/api/update/${id}`,user).then(
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


  };

  console.log(user);

  return (
    <>
      <div className="SignUpBox">
        <label className="SignUp">Update User</label>

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


        <button onClick={handleSignup} >Update User</button>
      </div>
    </>
  );
}

export default Update;
