import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-800 flex justify-between items-center px-6 md:px-10 py-4">
      
      <Link to="/" className="text-xl md:text-2xl font-bold text-white">
        AeSearch <span className="text-blue-500">Media</span>
      </Link>

      <div className="flex gap-3 md:gap-6">
        <Link
          to="/"
          className="px-4 py-1.5 rounded-lg text-sm md:text-base bg-gray-800 text-white hover:bg-blue-600 transition"
        >
          Search
        </Link>

        <Link
          to="/collection"
          className="px-4 py-1.5 rounded-lg text-sm md:text-base bg-gray-800 text-white hover:bg-blue-600 transition"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;