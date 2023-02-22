import React from "react";
import Home from "./Menu";
import logo from "../assets/logo.svg";
import { useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import items from "../data";
import { IoCloudyNightSharp } from "react-icons/io5";
import { IoCloudyNightOutline } from "react-icons/io5";
import { AiOutlineRobot } from "react-icons/ai";
import { SiSmartthings } from "react-icons/si";
import { Gi3DGlasses } from "react-icons/gi";
import { SiEthereum } from "react-icons/si";
import bgImg from "../assets/1876.jpg";
import mobileNavbar from "../assets/mobilenavbar.jpg"
const Navbar = ({ filterItems }) => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
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
    <section
      className="flex  "
    
    >
      {/*Nav Container */}
      <nav className="flex  p-12  lg:w-full w-full navbar-bg"style={{ backgroundImage: `url(${bgImg})` }}>
        <main className="flex flex-1 justify-between">
          <div className="flex">
            <div
              className="logo font-comforter text-4xl md:text-4xl  md:text-left w-100 absolute md:relative flex-1 hover:border-purple-400  hover:text-pink-500	 transition-colors duration-200 ease-in-out "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
             
            >
             
              <div className="text-white" onClick={() => window.location.reload()} style={{cursor:'pointer'}}>{logoText}</div>

              
            </div>
          
          </div>
          <div className="md:hidden ">
            <button
              id="menu-btn"
              className="z-30 block md:hidden focus:outline-none hamburger"
              type="button"
              ref={btnRef}
              onClick={navToggle}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </main>
        {/* Mobile Menu */}
        <div
          id="menu"
          className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full   px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500    backdrop-blur-lg transition-all duration-200 ease-in-out bg-center space-y-4"
          ref={menuRef} style={{ backgroundImage: `url(${mobileNavbar})` }}
        >
          <div className="w-full  py-3 text-center hover:text-pink-200 bg-black rounded-full bg-opacity-50 ">
            <a
              href="#features"
              className="block"
              onClick={() => {
                filterItems("ai");
                navToggle();
              }}
            >
              Artificial Intelligence
            </a>
          </div>
          <div className="w-full py-3 text-center bg-black rounded-full bg-opacity-50  hover:text-pink-200">
            <a
              href="#features"
              className="block"
              onClick={() => {
                filterItems("iot");
                navToggle();
              }}
            >
              IoT
            </a>
          </div>
          <div className="w-full py-3 text-center  bg-black rounded-full bg-opacity-50 hover:text-pink-200">
            <a
              href="#features"
              className="block"
              onClick={() => {
                filterItems("vr");
                navToggle();
              }}
            >
              VR / AR
            </a>
          </div>
          <div className="w-full py-3 text-center hover:text-pink-200 bg-black rounded-full bg-opacity-50">
            <a
              href="#features"
              className="block"
              onClick={() => {
                filterItems("crypto");
                navToggle();
              }}
            >
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
            className="hidden bg-purple-500 bg-opacity-70 md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 text-white hover:border-black px-3  transition-colors duration-200 ease-in-out flex flex-row"
            onClick={() => filterItems("ai")}
          >
            <div className="flex">
              <AiOutlineRobot className="m-1 hidden lg:block" /> Artificial
              Intelligence
            </div>
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 text-white hover:border-black px-3  transition-colors duration-200 ease-in-out bg-purple-500 bg-opacity-70"
            onClick={() => filterItems("iot")}
          >
            <div className="flex">
              <SiSmartthings className="m-1 hidden lg:block" />
              IoT
            </div>
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 text-white hover:border-black px-3  transition-colors duration-200 ease-in-out bg-purple-500 bg-opacity-70"
            onClick={() => filterItems("vr")}
          >
            <div className="flex">
              <Gi3DGlasses className="m-1 hidden lg:block" /> VR / AR
            </div>
          </a>
          <a
            href="#"
            className="hidden md:block border-2 border-purple-400 p-1 rounded-lg hover:bg-purple-500 text-white hover:border-black px-3  transition-colors duration-200 ease-in-out bg-purple-500 bg-opacity-70"
            onClick={() => filterItems("crypto")}
          >
            <div className="flex">
              <SiEthereum className="m-1 hidden lg:block" />
              Crypto
            </div>
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
