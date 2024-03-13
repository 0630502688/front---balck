// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex">
          <li className="mr-6">
            <NavLink 
              to="/product" 
              activeClassName="text-white"
              className="text-black-500 hover:text-red-500"
            >
              สินค้า
            </NavLink>
          </li>
          <li className="mr-6">
            <NavLink 
              to="/heart" 
              activeClassName="text-white"
              className="text-black-500 hover:text-red-500"
            >
              รายการสั่งซื้อ
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center">
          <input type="text" placeholder="ค้นหา" className="border border-gray-400 px-2 py-1 rounded-md" />
          <button className="bg-blue-500 text-white py-1 px-4 ml-2 rounded-md hover:bg-blue-600 transition duration-300">ค้นหา</button>    
          {/* <span className="text-black hover:text-black mr-4">ติดต่อโทร +999999</span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
