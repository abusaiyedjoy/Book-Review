import React from 'react';
import jsonData from './jsonData';
import BooksCard from './BooksCard';

const Books = () => {
    const {data, loading} = jsonData();
    return (
        <div>
            
            <h1 className='text-5xl font-bold text-center my-12'>Books</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data.map((item) =>( 
              <BooksCard key={item.id} item={item} />)
            )}
            </div>
        </div>
    );
};

export default Books;