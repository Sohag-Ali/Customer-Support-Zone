import React from "react";
import { FaGlobe, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-10 pb-5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-1.5 md:px-0">
          
          {/* Ticket System er part */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3">
              CS — Ticket System
            </h2>
            <p className="text-lg text-[#A1A1AA] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company er footer part */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3 ">Company</h3>
            <ul className="space-y-2 text-[#A1A1AA] text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services er part */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-[#A1A1AA] text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information er part */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">
              Information
            </h3>
            <ul className="space-y-2 text-[#A1A1AA] text-sm mb-4">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links er part */}
          <div className="space-y-2 text-[#A1A1AA] text-sm">
            <h3 className="text-white text-lg font-semibold mb-3 ">
              Social Links
            </h3>
            <div className="flex items-center space-x-2">
              <FaGlobe />
              <a href="#" className="hover:text-white">
                <span>Website</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaLinkedin />
              <a href="#" className="hover:text-white">
                <span>Linkedin</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaFacebook />
              <a href="#" className="hover:text-white">
                <span>Facebook</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <a href="#" className="hover:text-white">
                <span>Gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        {/* copyright part*/}
        <div className="text-center text-[#FAFAFA] text-gray-400">
          © 2025 Sohag — Ticket System. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
