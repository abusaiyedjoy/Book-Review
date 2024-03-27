import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
const Listed_Books = () => {
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div>
            <div className='rounded-xl my-8 py-3 text-center bg-[#F3F3F3]'>
                <h1 className=' text-4xl md:text-5xl font-bold'>Books</h1>
            </div>
            <div className="dropdown mb-12 dropdown-bottom flex justify-center items-center">
                <Link class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-white">Sort by</span>

                </Link>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 font-medium rounded-box">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Published year</a></li>
                </ul>
            </div>
            <div className="flex items-center w-full  overflow-hidden justify-start flex-nowrap">
                <Link to="" onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-60`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link to="Wishlist Books" onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0  ' : 'border-b w-full'}  rounded-t-lg border-gray-600 text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
            </div>
            <Outlet></Outlet>

        </div>
    );
};

export default Listed_Books;