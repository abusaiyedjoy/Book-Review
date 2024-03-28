import React from 'react';
import Banner from '../Components/Banner';
import Books from '../Components/Books';
const home = () => {
    return (
        <div className='my-12'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default home;