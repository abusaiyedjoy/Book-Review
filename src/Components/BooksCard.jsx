import React from 'react';
import { IoStarHalf } from "react-icons/io5";
const BooksCard = ({ item }) => {
    const { author, category, bookName, image, rating, tags } = item || {};
    return (
        <div>
            <div className=" p-6 border border-gray-300 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-900">
                <div className='flex justify-center h-64 items-center py-8 w-full rounded-lg bg-[#F3F3F3]'>
                    <img src={image} alt="" className="object-cover object-center  " />
                </div>
                <div className="mt-6 mb-2">
                    <div className='grid grid-cols-3 gap-3'>
                    {tags.map(tag =>
                        <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 bg-green-100 text-center rounded-full text-green-500 ">#{tag}</a>
                    )}
                    </div>
                    <h2 className="text-2xl my-2 font-semibold tracking-wide">{bookName}</h2>
                </div>
                <p className="text-gray-800">{author}</p>
                <hr className='my-4' />
                <div className='flex justify-between items-center'>
                    <div>
                        <h1>{category}</h1>
                    </div>
                    
                    <div className='flex justify-center items-center gap-2 '>
                        <h1>{rating}</h1>
                        <IoStarHalf />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;