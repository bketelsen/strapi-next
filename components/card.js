import React from "react";
import Link from "next/link";
import ImageWrapper from "./image";

const Card = ({ category,article }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-indigo-600">
          <a href={`/category/${category.slug}`} className="hover:underline">
           {category.name} 
          </a>
        </p>
        <a href={`/article/${article.slug}`} className="block mt-2">
          <p className="text-xl font-semibold text-gray-900">
            {article.title}
          </p>
          <p className="mt-3 text-base text-gray-500">
           {article.description}
          </p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href="#">
            <span className="sr-only">Brian Ketelsen  </span>
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </a>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">
            <a href="#" className="hover:underline">
              Brian
            </a>
          </p>
          <div className="flex space-x-1 text-sm text-gray-500">
            <time dateTime="2020-03-10">
              Mar 10, 2020
            </time>
            <span aria-hidden="true">
              &middot;
            </span>
            <span>
              4 min read
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>


  );
};

export default Card;
