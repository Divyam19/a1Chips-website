// Navbar.js
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center h-11">
        {/* Logo */}
        <a href="/home">
          <div className="flex items-center">
            <img src="/src/assets/cropped-cropped-logo1.png" alt="Logo" className="h-13" />
          </div>
        </a>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a href="/home" className="hover:border-b-2 border-yellow-500 px-6 font-bold text-white">Home</a>

          {/* Products Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:border-b-2 border-yellow-500 font-bold text-white">
                         
            </a>

            <div className="absolute hidden bg-white border border-gray-300 mt-1 p-2 rounded-md z-10">
              {/* Dropdown content */}
              <select
                id="dropdown1"
                name="dropdown1"
                className="w-full p-2 border rounded"
                required
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option1">10 km</option>
                <option value="option2">25 km</option>
                <option value="option3">50 km</option>
                <option value="option1">100 km</option>
                <option value="option2">150 km</option>
                <option value="option3">200 km</option>
              </select>
            </div>
          </div>
          <br/>

          <a href="/myaccount" className="hover:border-b-2 border-yellow-500 font-bold px-6 text-white">My Account</a>
          <br/>
          <a href="/branches" className="hover:border-b-2 border-yellow-500 font-bold px-6 text-white ">Branches</a>
        </div>

        {/* Customer Support and Notification Box */}
        <div className="flex items-center space-x-4">
          <div className="text-white items-center hover:text-yellow-400  p-7">
            Customer Support: <br />
            <span className="font-bold items-center">1-800-123-4567</span>
          </div>

          {/* Notification Box */}
          <div className="relative">
            <div className="flex pt-3 pb-3 pl-10 pr-10  bg-yellow-400 rounded-md">
              Your cart Amt: Rs
              {/* Fetch and display the number from the backend */}
              {fetchNumberFromBackend()}/-
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Function to simulate fetching the number from the backend
const fetchNumberFromBackend = () => {
  // Replace this with actual logic to fetch the number from the backend
  const randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
};

export default Navbar;
