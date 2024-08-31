
import React, { useState } from "react";
function PersonDetailForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setError("Enter your name to proceed");
    } else if (dob.trim() === "") {
      setError("Enter your date of birth to proceed");
    } else if (location.trim() === "") {
      setError("Enter your location to proceed");
    } else if (email.trim() === "") {
      setError("Enter your email to proceed");
    } else if (phone.trim() === "") {
      setError("Enter your phone number to proceed");
    } else {
      setError("");
      console.log("Form submitted successfully with:", {
        name,
        dob,
        location,
        email,
        phone,
      });
      window.location.href = "/";
    }
  };
  const handleClear = () => {
    setName("");
    setDob("");
    setLocation("");
    setEmail("");
    setPhone("");
    setError("");
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="rounded border p-5"
        style={{ backgroundColor: "white", color: "black", borderColor: "black" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column mb-3">
            <label style={{ color: "black" }}>
              Name
            </label>
            <input
              type="text"
              
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "1px",
                padding: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label  style={{ color: "black" }}>
              Date of Birth
            </label>
            <input
              type="date"
              
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "1px",
                padding: "8px ",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label style={{ color: "black" }}>
              Location
            </label>
            <input
              type="text"
              
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "1px",
                padding: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label  style={{ color: "black" }}>
              Email
            </label>
            <input
              type="email"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "1px",
                padding: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="d-flex flex-column mb-3">
            <label  style={{ color: "black" }}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                borderWidth: "1px",
                padding: "8px",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button
              type="submit"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Clear
            </button>
          </div>
          {error && (
            <div className="text-center mt-3" style={{ color: "red" }}>
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
export default PersonDetailForm;