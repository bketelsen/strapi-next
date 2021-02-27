import React from "react";
import Card from "./card";

const Articles = ({ posts }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    {posts.map((article, i) => {
            return (
              <Card  article={article} key={`article__${article.filePath}`} />
            );
          })}
    </div>

  );
};

export default Articles;
