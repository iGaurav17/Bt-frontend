import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400">Bug Tracker</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          <Link to="/bugs" className="hover:text-gray-400">Bugs</Link>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
        </div>
        <div className="space-x-4 text-[#fff]">
          <Link to="/login" className=" border-2 border-blue-400 rounded-full px-4 py-2 hover:bg-blue-400">Login</Link>
          <Link to="/Register" className="bg-blue-400 border-2 border-blue-400 rounded-full px-4 py-2 hover:bg-gray-800">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
