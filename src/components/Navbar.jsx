import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-[#10105e] flex justify-between items-center p-4 shadow-md">
      <div className="text-white font-extrabold text-2xl md:text-3xl lg:text-4xl">
        NotesApp
      </div>
      <div className="flex gap-10 text-white text-lg md:text-xl lg:text-2xl font-semibold">
        <Link to="/" className="hover:text-gray-300 transition duration-300">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-gray-300 transition duration-300">
          About Us
        </Link>
        <Link to="/contactus"><div className="hover:text-gray-300 transition duration-300">
          Contact Us
        </div></Link>
        <Link to="/createNotes" className="hover:text-gray-300 transition duration-300">
          Create Notes
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
