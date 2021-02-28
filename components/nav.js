import Link from "next/link";
import { useContext } from "react";

import { useRouter } from "next/router";
import { useState } from 'react'



const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    const activeStyle = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
    const inactiveStyle = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

    const mactiveStyle = "bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium";
    const minactiveStyle = "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium";
    return (

        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="/img/main/bri.png" alt="Brian Ketelsen" />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">

                                <a href="/" className={router.asPath === "/" ? activeStyle : inactiveStyle}>Home</a>
                                <Link  href="/blog">
                                    <a className={router.asPath.includes("blog") ? activeStyle : inactiveStyle}>Blog</a>
                                </Link>

                                <Link  href="/bytes">
                                    <a className={router.asPath.includes("bytes") ? activeStyle : inactiveStyle}>Bytes</a>
                                </Link>
                                <Link  href="/projects">
                                    <a className={router.asPath.includes("projects") ? activeStyle : inactiveStyle}>Projects</a>
                                </Link>
                                    <Link  href="/lpt">
                                    <a className={router.asPath.includes("lpt") ? activeStyle : inactiveStyle}>LPT</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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

            <div className={isOpen ? "" : "hidden"} >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="/" onClick={() => setIsOpen(!isOpen)} className={router.asPath === "/" ? mactiveStyle : minactiveStyle}>Home</a>
                    <a href="/about" onClick={() => setIsOpen(!isOpen)} className={router.asPath === "/about" ? mactiveStyle : minactiveStyle}>About Me</a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                </div>
            </div>
        </nav>

    )
}

export default Navigation;
