// Footer.js
import React from 'react';

const Bottombar = () => {
  return (
    <footer className="bg-gray-800 bottom-0 text-gray-300 py-8 ">
      <div className="container mx-auto bottom-0 flex justify-between">
        <div className="w-1/4">
          {/* Column 1 content */}
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <ul>
            <li className='text-x'>Head Office:</li>
            <li className='text-xs p-2'>A-1 Chips and Exports India Pvt Ltd,<br/>117, Chokkampudur Road,<br/>Krishna Nagar,<br/>Coimbatore-641001, Tamilnadu, India.</li>
            <li className="flex p-1 text-center bg-red-600 rounded-md">Corporate site: www.a1chips.in</li>
          </ul>
        </div>
        <div className="w-1/4">
          {/* Column 2 content */}
          <h3 className="text-lg font-bold mb-4">Feed Back</h3>
          <ul>
            <input type='label' placeholder='enter feed back' className='rounded-md text-black  '/>
          </ul>
        </div>
        <div className="w-1/4">
          {/* Column 3 content */}
          <h3 className="text-lg font-bold mb-4">My<br/>Accounts</h3>
          <ul>
            <li>My Accounts</li>
            <li>Wishlist</li>
            <li>Sign Up</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
        <div className="w-1/4">
          {/* Column 4 content */}
          <h3 className="text-lg font-bold mb-4">Follow us</h3>
          <ul>
            <li><img src="/src/assets/FSSAI.svg" className='flex w-20 bg-slate-100 rounded-xl'/></li>
            <br/>
            <li>Fassai no:<br/>123-8481-1518-155</li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
