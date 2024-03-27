import React from 'react';

const ReadItems = ({data}) => {
    return (
        <div className="mt-12 h-[400px] w-full">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center rounded-xl col-span-12 align-middle bg-[#F3F3F3] bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
                    <div className="flex flex-col justify-center items-center p-8 py-12 ">
                        <img style={{ hight: '40%', width: '80%', objectFit: 'cover', filter: 'brightness(80%)' }} src={image} alt="" />
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
                    <div className="pt-6 pb-4 space-y-2">
                        <h1 className="text-4xl font-bold">{bookName}</h1>
                        <p className='text-lg font-medium'>{author}</p>

                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <p className='font-medium'>{category}</p>
                    </div>
                    <div className="pt-6 pb-4 space-y-2">
                        <p><span className='font-bold '>Review: </span>{review}</p>
                        <p>
                            <span className='font-bold'>Tags:  </span>
                            {tags && tags.map(tag =>
                                <a key={tag} className="px-3 py-1 bg-green-100 mr-2 text-center rounded-full text-green-500"> #{tag}</a>
                            )}
                        </p>

                    </div>
                    <div className="pt-4 space-y-2">
                        <div className="flex justify-between">
                            <span className='font-bold'>Number of Pages:</span>
                            <span className='font-semibold mr-52'>{totalPages}</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <span className='font-bold'>Publisher:</span>
                                <span className='font-semibold mr-52'>{publisher}</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <span className='font-bold'>Year of Publishing:</span>
                                <span className="font-semibold mr-52">{yearOfPublishing}</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="flex justify-between">
                                <span className='font-bold'>Rating:</span>
                                <span className="font-semibold mr-52">{rating}</span>
                            </div>
                            <div className="flex gap-8">
                                <Link className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                    <span className="relative text-white">Read</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadItems;