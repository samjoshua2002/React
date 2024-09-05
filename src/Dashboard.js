import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import SimpleSlider from './components/SimpleSlider';
import Shakeen from './Shakeen';

function Dashboard() {
  return (
    <div>

    <SimpleSlider/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
      <div className="bg-white border border-dark p-4 rounded shadow-sm">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="text-center">
          <Link to="/shakeen">
            <button className="btn btn-dark">Go to Welcome page</button>
          </Link>
         {/* <Shakeen name="Sam"/> //this is the example for props  */}

        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
