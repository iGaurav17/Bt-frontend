import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* You can add other routes and components here */}
      </div>
    </Router>
  );
}

export default App;
