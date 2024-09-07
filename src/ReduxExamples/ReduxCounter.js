import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Redux/action'

function ReduxCounter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="p-4 rounded bg-white w-25 shadow-lg">
                <h1 className="text-center text-dark mb-4">Counter</h1>
                <h4 className="text-center text-dark ">Counter : {count}</h4>
                <div className="d-flex justify-content-center gap-3 mt-5">
                    <button className="btn btn-dark " onClick={() => dispatch(increment())}>
                        Increment
                    </button>
                    <button className="btn btn-dark" onClick={() => dispatch(decrement())}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReduxCounter;
