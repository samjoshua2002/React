import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";

function Login() {
  const [count, setCount] = useState(0);
  

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="border border-dark rounded p-4 shadow-sm bg-white">
        <h1 className="text-center mb-4">Counter</h1>
        {/* <Link to='/dashboard'>
          <button className="btn btn-primary mb-3 w-100">Move to Dashboard</button>
        </Link> */}
        
        <div className="text-center">
          <label className="border border-primary rounded w-75 text-center d-block mx-auto mb-3 p-2">
            Count: {count}
          </label>

          <div className="d-flex justify-content-around">
            <button 
              className="btn btn-success d-flex align-items-center gap-2 w-45 rounded-pill" 
              onClick={handleIncrement}
            >
              Increment <FaThumbsUp />
            </button>

            <button 
              className="btn btn-danger d-flex align-items-center gap-2 w-45 rounded-pill" 
              onClick={handleDecrement}
            >
              Decrement <FaThumbsDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
