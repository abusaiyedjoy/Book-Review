import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className="flex justify-center items-center bg-gray-100 h-[600px] md:h-[500px] p-16 rounded-xl text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col gap-12 justify-center p-6 text-center rounded-sm lg:text-left">
                    <div className=' lg:w-[592px]'>
                        <h1 className="title text-4xl font-bold w-full lg:text-6xl">Books to freshen up your bookshelf</h1>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to="/Listed Books" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:via-emerald-500">
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span className="relative text-white">View The List</span>
                    </Link>
                    </div>
                    
                </div>
                <div className="flex items-center justify-center p-6">
                    <img src="https://i.ibb.co/pQWRc6L/pngwing-1.png" alt="" className="object-contain h-64 sm:h-72 lg:h-96 w-72 lg:w-80" />
                </div>
            </div>
        </section>
    );
};

export default Banner;