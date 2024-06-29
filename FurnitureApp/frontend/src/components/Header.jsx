import React from 'react';
import logo from '../assets/react.svg'; 


const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Rentomojo" className="w-32" />
        <select className="ml-4 border rounded px-3 py-1">
          <option>Ahmedabad</option>
          <option>Bangalore</option>
          <option>Delhi</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="Search for products" className="border rounded px-4 py-2 mr-4" />
        <button className="bg-red-500 text-white px-4 py-2 rounded-full mr-4">Cart</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">LOGIN / SIGNUP</button>
      </div>
    </header>
  );
};

export default Header;
