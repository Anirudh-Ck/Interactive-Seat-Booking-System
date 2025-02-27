import React from "react";
// import { FaGooglePlay, FaApple, FaUserCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
      <div className="flex items-center font-bold text-xl sm:text-2xl">
        <h1>Logo</h1>
      </div>

      <nav className="hidden md:flex space-x-6 text-lg font-medium text-black">
        <a href="/" className="hover:text-blue-600 text-sm sm:text-md">Home</a>
        <a href="#" className="hover:text-blue-600 text-sm sm:text-md">Movies</a>
        <a href="#" className="hover:text-blue-600 text-sm sm:text-md">Theatres</a>
        <a href="#" className="hover:text-blue-600 text-sm sm:text-md">Orders</a>
      </nav>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-blue-900 text-white px-3 py-1 rounded-full">
          <span className="text-sm mr-2">Hi, UserName</span>
          <FaUserCircle className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

