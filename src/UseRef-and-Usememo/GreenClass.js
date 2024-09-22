import React, { useMemo, useRef, useState } from 'react';
import { FaPlus, FaCalculator } from 'react-icons/fa'; // Importing icons from react-icons

const GreenClass = () => {
  const [value, setValue] = useState(0);
  const inc = useRef(0);

  const increment = () => {
    inc.current += 1; // Increment the useRef value
    console.log("useRef increment:", inc.current);
  };

  // Factorial calculation using useMemo to avoid unnecessary recalculation
  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      if (n <= 0) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(value);
  }, [value]);


  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-white rounded-lg shadow-lg p-6">
        
        {/* useRef Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">useRef Increment</h1>
          <button 
            onClick={increment} 
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all flex items-center gap-2 mb-4"
          >
            <FaPlus /> Increment useRef
          </button>
          <p className="text-lg font-semibold mt-[57px] text-gray-800">
            useRef Value: <span className="text-gray-600">{inc.current}</span>
          </p>
        </div>
        
        {/* useMemo Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold  text-gray-800 mb-6">useMemo Factorial</h2>
          <div className="w-full bg-gray-50 p-6 pb-1 rounded-2xl border border-gray-400 mb-4 flex items-center gap-3">
            <FaCalculator className="text-gray-800 mb-4 " size={30} />
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-full bg-gray-100 text-gray-800"
              placeholder="Enter a number"
            />
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Factorial of {value}: <span className="text-gray-600">{factorial}</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default GreenClass;
