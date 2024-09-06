// src/Redux/actions/authActions.js
import axios from 'axios';
import { authRequest, authSuccess, authFailure, logout } from '../slices/authSlice';
import Cookies from 'js-cookie';
const bURL= "http://localhost:5001"

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch(authRequest());
    
    const response = await axios.post(bURL+'/api/auth/login', formData); // Call your login API
    const { token, user } = response.data;

    Cookies.set('token', token, { expires: 7 }); // Set token to expire in 7 days (example)

    
    dispatch(authSuccess({ token, user }));  // Save user and token in Redux state
  } catch (error) {
    dispatch(authFailure(error.response.data.message || 'Login failed'));
  }
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    dispatch(authRequest());

    const response = await axios.post(bURL+'/api/auth/register', formData); // Call your register API
    const { token, user } = response.data;

    Cookies.set('token', token, { expires: 7 });
    dispatch(authSuccess({ token, user }));
  } catch (error) {
    dispatch(authFailure(error.response.data.message || 'Registration failed'));
  }
};

export const logoutUser = () => (dispatch) => {
  Cookies.remove('token');
  dispatch(logout());
};
