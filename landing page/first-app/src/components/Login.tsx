import React, { useState } from 'react'
 import './Login.css';
import { Link } from 'react-router-dom';

 
function Login() {

    const [email, SetEmail] = useState<string>("");
    const [password, SetPassword] = useState<string>("");
    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const mail = "hunny14@gmail.com";
        const pass = "11111";

        if (email === mail && password === pass) {
            window.location.href = "./home";
        }

        else {
            alert("Email and Password Incorrect");
        }
    }
  return (
   <div className="Login">
          <div className="Login-box">
              <form onSubmit={handleSubmit}>
              <div className="Login-header"> Login Page</div>
              <div className="inputs">
                  

                  <input className='email' placeholder='Enter your Email' value={email} onChange={(e) => SetEmail(e.target.value)} required  />
                  

                  <input className='password' placeholder='Enter Your Password' type='password' value={password} onChange={ (e)=>SetPassword(e.target.value)}required  />
              </div>


              <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
                  <button className='Submit'>Login</button>
                  </div>
                  <span style={{fontFamily:"sans-serif", color:"white", textAlign:"center", marginLeft:"2.5rem"}}>Don't Have an Account? <Link to="./Register" style={{color:"wheat"}}>Register here</Link>
                  </span>
                  </form>
          </div>
          
              </div>
          
          
    
    
  )
}

export default Login




 