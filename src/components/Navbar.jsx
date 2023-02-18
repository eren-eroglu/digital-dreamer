import React from "react";
import Home from "./Menu";
import logo from "../assets/logo.svg";
import { useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import items from "../data";
const Navbar = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const [logoText, setLogoText] = useState("Digital Dreamer");
  const handleMouseEnter = () => {
    setLogoText("Eren Eroglu");
  };

  const handleMouseLeave = () => {
    setLogoText("Digital Dreamer");
  };

  const btnRef = React.createRef();
  const menuRef = React.createRef();

  function navToggle() {
    btnRef.current.classList.toggle("open");
    menuRef.current.classList.toggle("flex");
    menuRef.current.classList.toggle("hidden");
  }
  return (
    <section className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      {/*Nav Container */}
      <nav className="flex  p-12  lg:w-full w-full">
        <main className="flex flex-1 justify-between">
          <div>
            <h5
              className="logo font-comforter text-4xl md:text-4xl  md:text-left w-100 absolute md:relative flex-1 hover:border-purple-400  hover:text-pink-500	 transition-colors duration-200 ease-in-out select-none "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ userSelect: "none" }}
            >
              {logoText}
            </h5>
          </div>
          <div className="md:hidden ">
            <button
              id="menu-btn"
              class="z-30 block md:hidden focus:outline-none hamburger"
              type="button"
              ref={btnRef}
              onClick={navToggle}
            >
              <span class="hamburger-top"></span>
              <span class="hamburger-middle"></span>
              <span class="hamburger-bottom"></span>{" "}
            </button>
          </div>
        </main>
        {/* Mobile Menu */}
        <div
          id="menu"
          class="fixed inset-0 z-20 hidden flex-col items-center self-end w-full   px-6 py-1 pt-24 pb-4 tracking-widest text-black uppercase divide-y divide-gray-500 bg-opacity-50 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-200 ease-in-out"
          ref={menuRef}
        >
          <div class="w-full py-3 text-center hover:text-pink-200">
            <a href="#features" class="block">
              Artificial Intelligence
            </a>
          </div>
          <div class="w-full py-3 text-center hover:text-pink-200">
            <a href="#features" class="block">
              IoT
            </a>
          </div>
          <div class="w-full py-3 text-center hover:text-pink-200">
            <a href="#features" class="block">
              VR / AR
            </a>
          </div>
          <div class="w-full py-3 text-center hover:text-pink-200">
            <a href="#features" class="block">
              Crypto
            </a>{" "}
          </div>
          <div className="flex justify-center  bottom-0 absolute space-x-5">
            <a href="https://github.com/eren-eroglu">
              {" "}
              <AiFillGithub size={50} />
            </a>
            <a href="https://www.linkedin.com/in/eroglueren/">
              {" "}
              <AiFillLinkedin size={50} />
            </a>
            <a href="https://www.youtube.com/channel/UCotJX6uiRsp9zbqeP6KKTzQ">
              <AiFillYoutube size={50} />
            </a>
          </div>
        </div>
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
