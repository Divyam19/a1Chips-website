// Login.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Bottombar from './components/Bottombar';

const MyAccount = () => {
  return (
    <>
    <Navbar/>
    {Login()}
    <Bottombar/>
    </>
  )
}

export default MyAccount


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <>
    <p className='items-center font-bold font-serif pl-auto pr-auto'>Welcome back! Sign back in your account</p>
    <div className="pt-8 pb-8 flex items-center justify-center">
      <form className="bg-yellow-200 p-8 shadow-md rounded-md w-96" onSubmit={handleLogin}>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="w-full border rounded-md py-2 px-3"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-400 focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Login
        </button>
        
      </form>
    </div>
    </>
  );
};


