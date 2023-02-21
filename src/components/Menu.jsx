import React, { useState } from "react";
import ai from "../assets/ai.jpg";
import iot from "../assets/iot.jpg";
import vr from "../assets/vr.jpg";
import crypto from "../assets/crypto.jpg";
import Article from "./Article";
import { TwitterTweetEmbed } from 'react-twitter-embed';
const imageMap = {
  "assets/ai.jpg": ai,
  "assets/iot.jpg": iot,
  "assets/vr.jpg": vr,
  "assets/crypto.jpg": crypto,
};

const Menu = ({ items, handle, showArticle }) => {
  const [showMenu, setShowMenu] = useState(false);
 
  return (
  
    <div>
      {showArticle ? (
        <div className="flex justify-center">
        <Article items={items}/></div>
      ) : (
        <div className="flex flex-row">
          <div className="section-center lg:w-4/5 sm:w-full ">
            {items.map((item) => {
              const {
                id,
                title,
                category,
                img,
                description1,
                description2,
                description3,
                content,
              } = item;
              const imgSrc = imageMap[img];

              return (
                <div className="flex lg:justify-center" key={id}>
                  <main className="menu-item lg:w-1/2  flex flex-col text-center  m-5 ">
                    <div className="flex">
                      <div className="img">
                        <img
                          className="rounded-lg object-cover h-32 md:h-48 lg:h-64 "
                          src={imgSrc}
                          alt="image"
                        />
                      </div>

                      <div className="title_and_desc  w-1/2">
                        <a href="#" onClick={() => handle(id)}>
                          {" "}
                          <h4 className="mb-4 md:text-2xl text-lg font-extrabold leading-none tracking-tight md:p-3 m-5">
                            {title}
                          </h4>
                        </a>
                        <div className="pl-3 space-x-3  flex justify-center border-2 border-cyan-300 rounded-full m-2 text-xs md:text-lg">
                          <div>{description1}</div>
                          <div>{description2}</div>
                          <div>{description3}</div>{" "}
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              );
            })}
          </div>
          <div className="hidden md:w-2">
         
          </div>
          <div className="hidden lg:block flex justify-center items-center p-10">
           <TwitterTweetEmbed tweetId="1626699992713818116" /></div>
        </div>
      )}
    </div>
  );
};

export default Menu;