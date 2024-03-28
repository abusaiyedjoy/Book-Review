import React from 'react';
import { useState } from 'react';
import { IoStarHalf } from "react-icons/io5";
import { Link } from 'react-router-dom';

const paragraphStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box'
}

const ReviewCard = ({ item }) => {
    const [ button, setButton ] = useState(false);
    const {author, review, bookName, image, rating } = item || {};
    return (
        <div>
            <div className="grid grid-cols-12 p-6 border border-gray-300 gap-5 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-900">
                <div className='flex flex-row justify-center items-center col-span-4 py-8 w-full rounded-lg bg-[#F3F3F3]'>
                    <img src={image} alt="" className="object-cover object-center  " />
                </div>
                <div className='col-span-8'>
                    <h2 className="text-2xl my-2 font-semibold tracking-wide">{bookName}</h2>
                    <p className="text-gray-800">{author}</p>
                    <hr className='my-4' />
                    <div className="flex justify-start items-center"><h1><span className='font-bold'>Rating:</span> {rating}</h1><IoStarHalf /></div>
                    <p style={button ? null : paragraphStyle}><span className='font-bold'>Review:</span> {review}</p>
                    <button className='text-green-500 font-medium' onClick={()=> setButton(!button)}>{button ? 'Read less...' : 'Read more...'}</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;