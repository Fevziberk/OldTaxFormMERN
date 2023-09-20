import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../styles/login.css";
function Login() {

  const history = useNavigate();


  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

 async function submit(e){
e.preventDefault();

try {
  await axios.post("http://localhost:3000/", {
    username,password
  })
  .then(res=>{
    if(res.data ==="exist"){
      history("/page1", {state:{id:username}})

    }
   else if(res.data ==="notexist"){
      alert("User not found");
    }
  }).catch(e=>{
    console.log(e);
    alert("wrong details")
    
  })
} catch (event) {
  console.log(e);
}
 }
  



  return (
    <div>
      <div className="login-box">
        <h1 className="login-h1">Welcome Again!</h1>
        <p className="login-p">
          Please log in to <br />
          continue your work!
        </p>
        <form action = "POST">
          <input
            className="login-input"
            type="username"
            name="username"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="login-button"
            type="button"
            name="submit"
            onClick ={submit}
          >
            Sign in
          </button>
        </form>

        <div className="notMember">
          Not have an account?{" "}
          <Link to= "/register" ><span className="notMemberButton">
            Register Now!
          </span></Link>
        </div>
        
      </div>
    </div>
  );
}

export default Login;
