import React from 'react'; // Import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Login from './Login'; // Import your components
import Dashboard from './Dashboard';
import Validation from './Validation';
import ValidationPractice from './ValidationPractice';
import Shakeen from './Shakeen';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AppNavbar from './components/NavBar'; // Import the AppNavbar component
import DemoSass from './DemoSass';

function App() {
  return (
    <Router> {/* Router should wrap the Routes */}
      <div>
        <AppNavbar /> {/* Your custom Navbar component */}
        <div > {/* Add margin top for spacing */}
          <Routes> {/* Define your routes */}
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/validation' element={<Validation />} />
            <Route path='/validationpractice' element={<ValidationPractice />} />
            <Route path='/shakeen' element={<Shakeen />} />
            <Route path='/sass' element={<DemoSass/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
