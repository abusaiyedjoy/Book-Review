import React, { useState } from 'react';
import jsonData from '../Components/jsonData';
import ReviewCard from './ReviewCard';
import { Button } from '@material-tailwind/react';

const Review_Container = () => {
    const { data, loading } = jsonData();
    
    return (
        <div className='my-12'>
            <div className='rounded-xl my-8 py-3 text-center bg-[#F3F3F3]'>
                <h1 className=' text-3xl md:text-4xl font-bold'><i>Books Review</i></h1>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {data.map((item) => (
                        <ReviewCard key={item.id} item={item} />)
                    )}
                </div>
        </div>
    );
};

export default Review_Container;