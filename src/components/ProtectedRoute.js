import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; // Or Next.js router for navigation
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = token || Cookies.get('token');

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;