import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sticky top-0   flex flex-col space-y-10 mt-10 justify-end m-5 border border-white p-5 rounded-full shadow-lg shadow-purple-500">
      <a href="mailto:ereneroglu.dev@egmail.com">
        <AiFillMail
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
          size={50}
        />
      </a>

      <a href="https://mobile.twitter.com/ErenEroglu_Eng">
        <AiFillTwitterCircle
          size={50}
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/eroglueren/">
        <AiFillLinkedin
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
          size={50}
        />
      </a>
      <a href="https://github.com/eren-eroglu">
        <AiFillGithub
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
          size={50}
        />
      </a>
      <a href="https://www.youtube.com/channel/UCotJX6uiRsp9zbqeP6KKTzQ">
        <AiFillYoutube
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
          size={50}
        />
      </a>
      <a href="https://medium.com/@ereneroglu">
        <AiFillMediumCircle
          className="text-white transition-colors duration-300 hover:text-purple-500 hover:cursor-pointer"
          size={50}
        />
      </a>
    </div>
  );
};

export default Sidebar;
