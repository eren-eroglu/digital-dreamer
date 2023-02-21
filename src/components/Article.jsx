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
            <h4 className="mb-4 md:text-2xl text-lg font-extrabold leading-none tracking-tight md:p-3 m-5 text-center">
              {title}
            </h4>
            <div className="w-2/3 md:w-4/8 ">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Article;
