import Link from "next/link";
import { useContext } from "react";

import { GlobalContext } from "../pages/_app";
import {getStrapiMedia} from "../lib/media";
import { useRouter } from "next/router";


const Navigation = (props) => {
    const {global,categories} = useContext(GlobalContext);
    const router = useRouter();
    const activeStyle = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
    const inactiveStyle="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    return(

        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src={getStrapiMedia(global.favicon)} alt="Brian Ketelsen" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">

                                <a href="/" className={router.asPath === "/"?activeStyle:inactiveStyle}>Home</a>
                                {categories.map((category) => {
                                    return (
                                        <Link key={category.id} as={`/category/${category.slug}`} href="/category/[id]">
                                            <a className={router.asPath.includes(category.slug)?activeStyle:inactiveStyle}>{category.name}</a>
                                        </Link>
                                    );
                                })}
                                
                                <a href="/about" className={router.asPath === "/about"?activeStyle:inactiveStyle}>About Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="hidden md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {categories.map((category) => {
                        return (
                            <Link key={category.id} as={`/category/${category.slug}`} href="/category/[id]">
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{category.name}</a>
                            </Link>
                        );
                    })}
                    <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                </div>
            </div>
        </nav>

    )
}

export default Navigation;
