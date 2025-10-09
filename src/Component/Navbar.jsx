import React, { useState } from "react";
import Container from "./Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-10">
      <Container>
        <div className=" flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#130B2D]">
            CS — Ticket System
          </div>

          <div className=" flex justify-between items-center gap-6">
            {/* Hamburger mobile device er responsive er jonno */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            
            <div className="hidden md:flex space-x-6 text-[rgb(0,0,0,0.9)] font-medium">
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
              <a href="#" className="hover:text-blue-500">
                FAQ
              </a>
              <a href="#" className="hover:text-blue-500">
                Changelog
              </a>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
              <a href="#" className="hover:text-blue-500">
                Download
              </a>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </div>

          
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-80">
                + New Ticket
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col mt-3 space-y-2 text-[rgb(0,0,0,0.9)] font-medium">
         <a href="#" className="hover:text-blue-500">
                Home
              </a>
              <a href="#" className="hover:text-blue-500">
                FAQ
              </a>
              <a href="#" className="hover:text-blue-500">
                Changelog
              </a>
              <a href="#" className="hover:text-blue-500">
                Blog
              </a>
              <a href="#" className="hover:text-blue-500">
                Download
              </a>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition w-fit">
            + New Ticket
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
