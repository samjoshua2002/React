import React, { useState } from 'react';


function Shakeen() {
    const [data, setData] = useState({ fname: '', lname: '' });
    const [msg, setMsg] = useState('');

    const change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    const submit = (e) => {  
        e.preventDefault();
        if (data.fname.trim() !== '' && data.lname.trim() !== '') {
            setMsg(`Hello ${data.fname} ${data.lname}`);
        } else {
            setMsg("Both fields are required");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="p-4 rounded bg-white w-25 shadow">
                <h1 className="text-center text-dark mb-4 ">OXOX</h1>
                <div className="mb-3">
                    <label className="form-label text-dark fw-bold">First Name</label>
                    <input 
                        type="text" 
                        value={data.fname} 
                        onChange={change} 
                        name="fname" 
                        className="form-control" 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-dark fw-bold">Last Name</label>
                    <input 
                        type="text" 
                        value={data.lname} 
                        onChange={change} 
                        name="lname" 
                        className="form-control" 
                    />
                </div>
                <div>
                    <button 
                        onClick={submit} 
                        className="btn btn-dark w-100"
                    >
                        Submit
                    </button>
                </div>
                {msg && <p className="mt-3 text-dark text-center">{msg}</p>}
            </div>
        </div>
    );
}

export default Shakeen;
