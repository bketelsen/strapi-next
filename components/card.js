import React from "react";
import Link from "next/link";
import Image from 'next/image'


const Card = ({ article }) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <a href={article.data.category.toLowerCase()} className="hover:underline">
              {article.data.category}
            </a>
          </p>
          <a href={`/${article.data.category.toLowerCase()}/${article.filePath.replace(/\.mdx?$/, '')}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">
              {article.data.title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {article.data.description}
            </p>
            </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">Brian Ketelsen  </span>
              <Image
        src="/img/main/bri.png"
        alt="Brian Ketelsen"
        height="40"
        width="40"
        objectFit="contain"
        className="h-10 w-10 rounded-full object-contain"
      />
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
