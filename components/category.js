
import React from "react";

const Category = ({ title, description }) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                {title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                {description}
            </p>
        </div>
    );
};
export default Category;
