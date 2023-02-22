import React, { useState } from "react";
import ai from "../assets/ai.jpg";
import iot from "../assets/iot.jpg";
import vr from "../assets/vr.jpg";
import crypto from "../assets/crypto.jpg";
import Article from "./Article";
import Sidebar from "./Sidebar";
import bg from "../assets/real.jpg";
const imageMap = {
  "assets/ai.jpg": ai,
  "assets/iot.jpg": iot,
  "assets/vr.jpg": vr,
  "assets/crypto.jpg": crypto,
};

const Menu = ({ items, handle, showArticle }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="body md:bg-repeat h-full min-h-screen bg-center"
    >
      <div>
        {showArticle ? (
          <div className="flex justify-center">
            <Article items={items} />
          </div>
        ) : (
          <div className="flex flex-row">
            <div className="section-center lg:w-full  sm:w-full ">
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
                    <main className="menu-item lg:w-1/2 sm:w-full bg-purple-500 rounded-lg bg-opacity-50  flex flex-col text-center  m-5 ">
                      <div className="flex">
                        <div className="img">
                          <img
                            className="rounded-lg object-cover h-32 md:h-48 sm:block absolute hidden sm:relative lg:h-64 "
                            src={imgSrc}
                            alt="image"
                          />
                        </div>

                        <div className="title_and_desc  lg:w-1/2   rounded-lg">
                          <a href="#" onClick={() => handle(id)}>
                            {" "}
                            <h4 className="mb-4 md:text-2xl text-lg font-extrabold leading-none tracking-tight md:p-3 m-5">
                              {title}
                            </h4>
                          </a>
                          <div className="pl-3 space-x-3  flex justify-center border-2 border-cyan-300 rounded-full m-2 text-xs text-purple-200 md:text-lg">
                            <div>{description1}</div>
                            <div>{description2}</div>
                            <div>{description3}</div>{" "}
                            <div className="img"></div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                );
              })}
            </div>{" "}
            <div className="min-h-screen">
              <Sidebar />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
