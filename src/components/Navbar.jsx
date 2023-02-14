import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
const Navbar = () => {
  const [logoText, setLogoText] = useState('Digital Dreamer');
  const handleMouseEnter = () => {
    setLogoText('Dedicated Developer');
  };

  const handleMouseLeave = () => {
    setLogoText('Digital Dreamer');
  };
  return (
    <section className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      {/*Nav Container */}
      <nav className="flex text-center justify-around content-center p-12  lg:w-full w-full">
        <h5 className="logo font-comforter text-4xl md:text-4xl text-center md:text-left w-100 absolute md:relative flex-1 hover:border-purple-400  hover:text-pink-500	 transition-colors duration-200 ease-in-out select-none "  onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} style={{ userSelect: "none" }}>
          {logoText} 
        </h5>
        <div className="group navbar-menus flex space-x-5 hidden md:flex font-vt text-3xl ">
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 hover:text-white hover:border-black px-3  transition-colors duration-200 ease-in-out "
          >
            Artificial Intelligence
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 hover:text-white hover:border-black px-3  transition-colors duration-200 ease-in-out "
          >
            IoT
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 hover:text-white hover:border-black px-3  transition-colors duration-200 ease-in-out "
          >
            VR / AR
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 hover:text-white hover:border-black px-3  transition-colors duration-200 ease-in-out "
          >
            Crypto
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
