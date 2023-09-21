import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "../styles/register.css";
function Register() {
  const history=useNavigate();

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')

  async function submit(event){
    event.preventDefault();
    
    try {
      await axios.post("http://localhost:3000/register", {
        username,password
      }).then(res=>{
        if(res.data ==="exist"){
          alert("User already registered");
    
        }
        else if(res.data ==="registered"){
          alert("User has been registered successfully")
        }
       else if(res.data ==="notexist"){
        history("/", {state:{id:username}})
        }
      }).catch(e=>{
        alert("connection failed")
        console.log(event);
      })
    
    } catch (event) {
      console.log(event);
    }
     }
  return (
    <div className="register-box">
      <h1>Welcome!</h1>
      <p className="register-p">
        Please register to <br />
        begin your work!
      </p>
      <form>
        <input
          className="register-input"
          type="text"
          name="username"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button
          className="register-button"
          type="submit"
          name="submit"
          onClick={submit}
        >
          Register
        </button>
      </form>

      <div className="member">
        Already have an account?{" "}
        <Link to ="/"><span className="memberButton">
          Log in now!
        </span>
        </Link>
      </div>
      
    </div>
  );
}

export default Register;
