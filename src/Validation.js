import React, { useContext, useState } from "react";
import "./Login";
import { sanjay } from "./App";
import { useNavigate } from "react-router-dom";

function Validation() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { values, setValues } = useContext(sanjay);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent automatic refresh of the page
    if (inputValue.trim() === "") {
      setErrMsg("This field can't be empty");
    } else if (pwd.trim() === "") {
      setErrMsg("Password field can't be empty");
    } else if (pwd.length < 8) {
      setErrMsg("It should be greater than 8 characters");
    } else {
      setErrMsg("");
      setValues(inputValue);
      console.log("Username:", inputValue);
      console.log("Password:", pwd);
      localStorage.setItem("key", values);
      navigate("/shakeen");
    }
  };

  const clear = () => {
    setInputValue("");
    setPwd("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl text-white text-center mb-6">
          Login To Enter Shakeen Page
        </h1>

        {/* Username Field */}
        <div className="mb-4">
          <label className=" text-white mb-2">User Name:</label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-white mb-2">Password:</label>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={clear}
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Error Message */}
        {errMsg? <p className="text-red-500  text-center mt-2">{errMsg}</p>:null}
      </form>
    </div>
  );
}

export default Validation;
