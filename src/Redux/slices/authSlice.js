// src/Redux/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Cookies from  'js-cookie';

const token = Cookies.get('token');
const initialState = {
  user: null,         // Store user details after authentication
  token: token || null,        // Store JWT token
  isAuthenticated: false,  // Keep track of authentication state
  loading: false,     // Show loading state during API calls
  error: null         // Handle errors during login/registration
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to start login or register
    authRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Action for successful authentication
    authSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); // Store token in localStorage
    },
    // Action for failed authentication
    authFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    // Logout action
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');  // Remove token from localStorage
    },
  },
});

export const { authRequest, authSuccess, authFailure, logout } = authSlice.actions;
export default authSlice.reducer;
