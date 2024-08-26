import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* You can add other routes and components here */}
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
