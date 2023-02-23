import React, { useState } from "react";
import ai from "../assets/ai.jpg";
import iot from "../assets/iot.jpg";
import vr from "../assets/vr.jpg";
import crypto from "../assets/crypto.jpg";
import Article from "./Article";
import Sidebar from "./Sidebar";
import bg from "../assets/real.jpg";
import { BsSearch } from "react-icons/bs";
const imageMap = {
  "assets/ai.jpg": ai,
  "assets/iot.jpg": iot,
  "assets/vr.jpg": vr,
  "assets/crypto.jpg": crypto,
};

const Menu = ({ items, handle, showArticle }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (filteredItems.length === 0) {
    return (
      <div
        className="h-full min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {" "}
        <section className="w-full flex justify-center items-center">
          <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex justify-between items-center m-4">
            <input
              type="text"
              className=" p-2 rounded-lg outline-none  placeholder-black bg-transparent "
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            /><BsSearch className="mr-3"/>
          </div>
        </section>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-3xl font-bold text-white">No articles found</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className="h-full min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row">
        {showArticle ? (
          <div className="flex justify-center">
            <Article items={items} />
          </div>
        ) : (
          <>
            <main className="flex flex-col">
              <section className="w-full flex justify-center items-center">
              <div className="m-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full flex justify-between items-center">
            <input
              type="text"
              className=" p-2 rounded-lg outline-none  placeholder-black bg-transparent "
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            /><BsSearch className="mr-3 cursor-pointer"/>
          </div>
              </section>
              <div className="section-center w-full  md:w-3/4 lg:w-3/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => {
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
                    <main
                      key={id}
                      className="menu-item bg-purple-500 bg-opacity-50 rounded-lg flex flex-col border border-lg shadow-2xl border-black border-4"
                      onClick={() => handle(id)}
                    >
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          className="rounded-t-lg object-cover absolute inset-0 h-full w-full cursor-pointer hover:scale-110 duration-300 ease-in-out"
                          src={imgSrc}
                          alt="image"
                        />
                      </div>

                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div className="flex flex-col mb-2">
                          <h4
                            className="text-2xl font-bold mb-2 cursor-pointer"
                            onClick={() => handle(id)}
                          >
                            {title}
                          </h4>
                          <div className="border-b-2 border-purple-300 mb-2"></div>
                          <div className="flex justify-center md:justify-start space-x-3">
                            <span className="text-xs md:text-sm text-purple-200">
                              {description1}
                            </span>
                            <span className="text-xs md:text-sm text-purple-200">
                              {description2}
                            </span>
                            <span className="text-xs md:text-sm text-purple-200">
                              {description3}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <a href="#" onClick={() => handle(id)}>
                            Read More
                          </a>
                        </div>
                      </div>
                    </main>
                  );
                })}
              </div>
            </main>
            <div className="hidden md:block">
              <Sidebar />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
