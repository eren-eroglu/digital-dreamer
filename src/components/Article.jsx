import React from "react";

const Article = ({ items }) => {
  return (
    <div className="flex justify-center">
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

        return (
          <div key={id} className="flex  flex-col justify-center items-center">
            <h4 className="mb-4 md:text-2xl text-lg font-extrabold leading-none tracking-tight md:p-3 m-5 text-center text-purple-300">
              {title}
            </h4>
            <div className="w-8/10 md:w-4/8 flex justify-center ">
              <div className="text-white bg-black bg-opacity-75 rounded-lg p-10 lg:w-1/2" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
