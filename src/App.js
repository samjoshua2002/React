import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Login from './Login'; // Import your components
import Dashboard from './Dashboard';
import Validation from './Validation';
import ValidationPractice from './ValidationPractice';
import Shakeen from './Shakeen';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AppNavbar from './components/NavBar'; // Import the AppNavbar component
import DemoSass from './DemoSass';
import Calculation from "./ReduxExamples/Main";
import UseEffectApi from "./API/UseEffectApi";
import Practice from "./API/Practice";






export const sanjay =createContext();

function App() {
  const [values, setValues] = useState('SAM JOSHUA');
  return (
    <sanjay.Provider value={{ values, setValues }}>
    <Router>
      <div>
        <AppNavbar/>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/validation' element={<Validation />} />
            <Route path='/validationpractice' element={<ValidationPractice />} />
            <Route path='/shakeen' element={<Shakeen />} />
            <Route path='/sass' element={<DemoSass />} />
            <Route path='/redux' element={<Calculation/>} />
            <Route path='/useeffect' element={<UseEffectApi/>} />
            <Route path='/demo' element={<Practice/>} />
          </Routes>
        </div>
      </div>
    </Router>
  </sanjay.Provider>
  
  );
}

export default App;
