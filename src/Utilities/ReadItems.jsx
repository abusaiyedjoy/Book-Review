import React from 'react';
import { Link } from 'react-router-dom';

const ReadItems = ({ item }) => {
    const { bookId, author, yearOfPublishing, category, publisher, image, rating, tags, totalPages, bookName } = item || {};
    return (
        <div className="mt-12">
            <div className="container border-2 rounded-xl border-gray-200 p-4 grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center rounded-xl col-span-12 align-middle bg-[#F3F3F3] bg-no-repeat bg-cover lg:col-span-3">
                    <div className="flex  flex-col justify-center items-center p-6 ">
                        <img style={{ objectFit: 'cover', filter: 'brightness(80%)' }} src={image} alt="" />
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-4 divide-y lg:col-span-9 lg:p-6 dark:divide-gray-300">
                    <div className="pt-6 pb-4 space-y-2">
                        <h1 className="text-4xl font-bold">{bookName}</h1>
                        <p className='text-lg font-medium'>{author}</p>
                        <div className='flex justify-start items-center gap-8 py-3'>
                            <p>
                                <span className='font-bold'>Tags:  </span>
                                {tags && tags.map(tag =>
                                    <a key={tag} className="px-3 py-1 bg-green-100 mr-2 text-center rounded-full text-green-500"> #{tag}</a>
                                )}
                            </p>
                            <p>Year of publishing: {yearOfPublishing}</p>
                        </div>
                        <div className='flex justify-start items-center gap-6 pb-2'>
                            <p>Publisher: {publisher}</p>
                            <p>Pages: {totalPages}</p>
                        </div>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <Link to={`/card Details/${bookId}`}>

                            <span className="px-4 py-2 bg-teal-100 mr-2 text-center rounded-full text-teal-500">Category:{category}</span>
                        </Link>
                        <Link to={`/card Details/${bookId}`}>

                            <span className="px-4 py-2 bg-orange-100 mr-2 text-center rounded-full text-orange-500">Rating:{rating}</span>
                        </Link>
                        <Link to={`/card Details/${bookId}`}
                            class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:via-emerald-500">
                            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span class="relative text-white">View Details</span>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadItems;