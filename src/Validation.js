import React, { useState } from "react";
import "./Login"


function Validation() {
  const [inputValue, setinputValue] = useState('');
  const [pwd, setpwd] = useState('');
  const [errMsg, seterrMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent automatic refresh of the page
    if (inputValue.trim() === '') {
      seterrMsg("This field can't be empty");
    } else if (pwd.trim() === '' ) {
      seterrMsg("Password field can't be empty");
      
    }else if (pwd.length < 8) {
      seterrMsg(" it should be greater than 8 character");
      
    } else {
      seterrMsg('');
      console.log("Username:", inputValue);
      console.log("Password:", pwd);
      window.location.href = "/";
    }
  }
  const clear =()=>{
    setinputValue('');
    setpwd('')
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#333' }}>
      <form onSubmit={handleSubmit}>
        <div className='border rounded p-4 shadow-sm' style={{ backgroundColor: '#222', borderColor:"#444" }}>
          <div className='d-flex flex-column mb-3'>
            <label style={{ color: '#fff' }}>User Name:</label>
            <input 
              type='text' 
              value={inputValue} 
              onChange={(e) => setinputValue(e.target.value)} 
              style={{ backgroundColor: '#555', color: '#fff', borderColor: '#444' }} 
            />
          </div>

          <div className='d-flex flex-column mb-3'>
            <label style={{ color: '#fff' }}>Password:</label>
            <input 
              type='password' 
              value={pwd} 
              onChange={(e) => setpwd(e.target.value)} 
              style={{ backgroundColor: '#555', color: '#fff', borderColor: '#444' }} 
            />
          </div>

          <div className='text-align-center text-center mt-4 '>
            <button className="me-5 px-5" type='submit' style={{ backgroundColor: '#777', color: '#fff', borderColor: '#444' }}>Submit</button>
            <button  className=' px-5'type='button' onClick={clear} style={{ backgroundColor: '#777', color: '#fff', borderColor: '#444' }}>Clear</button>
          </div>

          <div className='text-center  mt-2' style={{ color: '#ff4d4d' }}>
            {errMsg? <p>{errMsg}</p>:null}
          </div>
        </div>
      </form>
     
    </div>
  );
}

export default Validation;
