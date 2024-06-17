import React, { useState } from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import { text } from 'stream/consumers';
const Register = () => {
    const [fname, SetFname] = useState<string>("");
    const [email, SetEmail] = useState<string>("");
    const [password, SetPassword] = useState<string>("");
    const [cpassword, SetCPassword] = useState<string>("");

    
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const name = String;
        const mail = "hunny14@gmail.com";
        const pass = "111111";
        const cpass = "111111";

        if ( email === mail && password === pass && cpassword===cpass) {
            window.location.href = "./home";
        }

        else {
            alert("Please fill details correctly");
        }
    }
  return (
      <>
          <div className="register">
              <div className="register-box">
                 <form onSubmit={handleSubmit}>
                  <div className="register-header">Create an Account</div>
                  <div className="input">
                      
                      <input className="fname" placeholder='ENTER FULL NAME' type='text' value={fname} onChange={(e)=> SetFname(e.target.value)} required /> 
                      
                      <input className="mail" placeholder='ENTER E-MAIL' type='email'  value={email} onChange={(e)=> SetEmail(e.target.value)} required /> 
                    
                      <input className="Password" placeholder='ENTER PASSWORD' type='password'  value={password} onChange={(e)=> SetPassword(e.target.value)} required pattern='.{4}' /> 

                      <input className="fname" placeholder='CONFIRM PASSWORD' type='password'  value={cpassword} onChange={(e)=> SetCPassword(e.target.value)} required pattern='.{4}' />      
                        
                      
                  </div>
                  <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                      <button className='submit' type='submit'>
                          <a href ="/">  Register </a>  </button>
                  </div>
                  

                  <span style={{ fontFamily: "sans-serif", color: "white", textAlign: "center", marginLeft: "9rem", marginBottom: "5rem" }}>Have an Account? <Link to="/" style={{ color: "wheat" }}>Login here</Link> </span>
                 </form> 
              </div>
              
              
              
          </div>
          
      </>
  )
}

export default Register