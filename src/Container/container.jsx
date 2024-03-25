import React from 'react';
import Navbar from './../Navbar/navbar';
import { Outlet } from 'react-router-dom';

const container = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default container;