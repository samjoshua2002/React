import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import SimpleSlider from './components/SimpleSlider';

function Dashboard() {
  return (
    <div>

    <SimpleSlider/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
      <div className="bg-white border border-dark p-4 rounded shadow-sm">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-dark">Go to Login page</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
