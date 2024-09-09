import React from 'react';
import CalculatorRedux from './CalculatorRedux';
import ReduxCounter from './ReduxCounter';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Calculation() {
  return (
    <div className=" mb-4">
      <div className="row">
        {/* Calculator Component */}
        <div className="col-md-6 d-flex align-items-stretch mb-5">
          <div className="p-4 bg-white shadow rounded w-100">
            <CalculatorRedux />
          </div>
        </div>
        {/* Counter Component */}
        <div className="col-md-6 d-flex align-items-stretch mb-5">
          <div className="p-4 bg-white shadow rounded w-100">
            <ReduxCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculation;
