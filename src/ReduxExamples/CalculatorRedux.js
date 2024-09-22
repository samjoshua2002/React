import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addition, subtraction, multiplication, division, clear } from '../Redux/action';

function CalculatorRedux() {
  
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

   
    const result = useSelector((state) => state.result);
    
    const dispatch = useDispatch();
    const clears=()=>{
        dispatch(clear());
        setNum1(0);
        setNum2(0);
        
    }

   

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div 
                className="p-4 rounded bg-white shadow-lg" 
                style={{ width: '70%' }}
            >
                <h1 className="text-center text-dark mb-4">Calculator</h1>
                <h4 className="text-center text-dark">Result: {result}</h4>

               
                <div className="form-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={num1}
                        onChange={(e) => setNum1(Number(e.target.value))}
                        placeholder="Enter first number"
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        value={num2}
                        onChange={(e) => setNum2(Number(e.target.value))}
                        placeholder="Enter second number"
                    />
                </div>

              
                <div className="d-flex justify-content-center gap-3 mt-5">
                    <button className="btn btn-dark" onClick={() => dispatch(addition(num1, num2))}>
                        +
                    </button>
                    <button className="btn btn-dark" onClick={() => dispatch(subtraction(num1, num2))}>
                        -
                    </button>
                    <button className="btn btn-dark" onClick={() => dispatch(multiplication(num1, num2))}>
                        *
                    </button>
                    <button className="btn btn-dark" onClick={() => dispatch(division(num1, num2))}>
                        /
                    </button>
                    <button className="btn btn-secondary" onClick={clears}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CalculatorRedux;
