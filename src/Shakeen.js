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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
            <div style={{ padding: '20px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
                <h1 style={{ textAlign: 'center', color: '#000', marginBottom: '20px' }}>Shakeen</h1>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#000', fontWeight: 'bold' }}>First Name</label>
                    <input 
                        type='text' 
                        value={data.fname} 
                        onChange={change} 
                        name='fname' 
                        style={{ 
                            width: '100%', 
                            padding: '8px', 
                            marginTop: '5px', 
                            marginBottom: '10px', 
                            borderRadius: '4px', 
                            border: '1px solid #ccc', 
                            color: '#000', 
                            backgroundColor: '#f9f9f9'
                        }} 
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ color: '#000', fontWeight: 'bold' }}>Last Name</label>
                    <input 
                        type='text' 
                        value={data.lname} 
                        onChange={change} 
                        name='lname' 
                        style={{ 
                            width: '100%', 
                            padding: '8px', 
                            marginTop: '5px', 
                            marginBottom: '10px', 
                            borderRadius: '4px', 
                            border: '1px solid #ccc', 
                            color: '#000', 
                            backgroundColor: '#f9f9f9'
                        }} 
                    />
                </div>
                <div>
                    <button 
                        onClick={submit} 
                        style={{ 
                            width: '100%', 
                            padding: '10px', 
                            borderRadius: '4px', 
                            border: 'none', 
                            backgroundColor: '#000', 
                            color: '#fff', 
                            cursor: 'pointer' 
                        }}
                    >
                        Submit
                    </button>
                </div>
                {msg && <p style={{ marginTop: '15px', color: '#000', textAlign: 'center' }}>{msg}</p>}
            </div>
        </div>
    );
}

export default Shakeen;
