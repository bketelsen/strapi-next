import React from "react";
import Card from "./card";

const Articles = ({ category,articles }) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    {articles.map((article, i) => {
      var cat;  
      if (category){
          cat = category; 
      } else {
        cat = article.category;   
      }
            return (
              <Card category={cat} article={article} key={`article__${article.slug}`} />
            );
          })}
    </div>

  );
};

export default Articles;
