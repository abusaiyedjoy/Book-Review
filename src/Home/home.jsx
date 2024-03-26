import React from 'react';
import Banner from '../Components/Banner';
import Books from '../Components/Books';
const home = () => {
    return (
        <div className='mt-12'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default home;