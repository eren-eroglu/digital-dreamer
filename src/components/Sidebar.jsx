import React from "react";
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillMediumCircle} from "react-icons/ai"
const Sidebar = () => {
  return <div className="flex flex-col space-y-10 mt-10 justify-end m-5">
<AiFillTwitterCircle size={50} style={{ color: 'white' }}/>
<AiFillLinkedin size={50} style={{ color: 'white' }}/>
<AiFillGithub size={50} style={{ color: 'white' }}/>
<AiFillYoutube size={50}  style={{ color: 'white' }}/>
<AiFillMediumCircle size={50} style={{ color: 'white' }}/>
  </div>;
};

export default Sidebar;
