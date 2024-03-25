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
                        <Link to="/Listed Books" className="px-8 py-3 text-lg font-semibold rounded bg-green-500 text-gray-50">View The List</Link>
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