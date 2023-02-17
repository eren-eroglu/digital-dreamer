import React from "react";
import ai from "../assets/ai.jpg";
import iot from "../assets/iot.jpg";
import vr from "../assets/vr.jpg";
import crypto from "../assets/crypto.jpg";

const imageMap = {
  "assets/ai.jpg": ai,
  "assets/iot.jpg": iot,
  "assets/vr.jpg": vr,
  "assets/crypto.jpg": crypto,
};

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, category, description, img } = item;
        const imgSrc = imageMap[img];

        return (
          <div className="flex lg:justify-center">
          <main
            key={id}
            className="menu-item lg:w-1/2  flex flex-col text-center  m-5 "
          >
            <div className="flex">
              <div className="img h-[200px] w-[200px]">
                <img className="rounded-lg" src={imgSrc} alt="image" />
              </div>

              <div className="title_and_desc  w-1/2">
                <h4 className="mb-4 md:text-2xl text-lg font-extrabold leading-none tracking-tight md:p-3 m-5">
                  {title}
                </h4>
                <p className="pl-3">{description} </p>
              </div>
            </div>
          </main>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
