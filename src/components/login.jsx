import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Ensure Link is imported here
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost/php-rest-api/login.php', {
      email: email,
      password: password,
    }, { withCredentials: true })
    .then((response) => {
        console.log(response.data.status)
      if (response.data.status === 'success') {
        // Set isLoggedIn to true
        localStorage.setItem('isLoggedIn', 'true');
        toast.success('Login successful!');
        navigate('/'); // Redirect to the home page or any other page
      } else {
        toast.error('Login failed: ' + response.data.message);
      }
    })
    .catch((error) => {
      toast.error('Error logging in: ' + error.message);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded">Login</button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">Don't have an account?</p>
          <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
