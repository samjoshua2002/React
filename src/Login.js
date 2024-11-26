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
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="border border-gray-700 rounded p-9 shadow-lg bg-white w-80">
        <h1 className="text-center text-2xl font-bold mb-4 text-gray-800">Counter</h1>
        
        {/* <Link to="/dashboard">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
            Move to Dashboard
          </button>
        </Link> */}
        
        <div className="text-center">
          <label className="block border border-blue-500 rounded text-center mx-auto mb-4 p-2 w-full bg-blue-50 text-blue-600 font-medium">
            Count: {count}
          </label>

          <div className="flex justify-between space-x-4">
            <button 
              className="flex items-center justify-center gap-2 w-1/2 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold"
              onClick={handleIncrement}
            >
              Increment <FaThumbsUp />
            </button>

            <button 
              className="flex items-center justify-center gap-2 w-1/2 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white font-semibold"
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
