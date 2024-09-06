import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import NavBar from './components/common/NavBar';
import Login from './pages/login';
import Register from './pages/Register';
import store from '../src/Redux/store';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Bugs from './pages/Bugs';


function App() {
  return (
    <Provider store={store}>  {/* Wrap the entire app with Provider and pass the store */}
    <Router>
      <div>
        <NavBar />
        {/* You can add other routes and components here */}
        <Routes>
          {/* Protected Route */}
          <Route path="/Dashboard" element={
                                              <ProtectedRoute> 
                                                <Dashboard/>
                                              </ProtectedRoute>
                                            }
          />
          <Route path="/Bugs" element={
                                        <ProtectedRoute> 
                                          <Bugs/>
                                        </ProtectedRoute>
                                      }
          />
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
