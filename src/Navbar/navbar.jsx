import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div className="menu menu-sm dropdown-content text-lg  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to="/">Home</Link>
                    <Link to="/Listed Books">Listed Books</Link>
                    <Link to="/Pages to Read">Pages to Read</Link>
                    </div>
                </div>
                <a className=" text-2xl font-bold lg:text-4xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex menu menu-horizontal text-xl gap-6 font-medium px-1">
                <Link to="/">Home</Link>
                <Link to="/Listed Books">Listed Books</Link>
                <Link to="/Pages to Read">Pages to Read</Link>
            </div>
            <div className="navbar-end gap-5">
                <button type="button" className="px-8 py-3 font-semibold rounded-md bg-green-500 text-gray-100">Sign In</button>
                <button type="button" className="px-8 py-3 font-semibold hidden md:block rounded-md bg-green-500 text-gray-100">Sign Up</button>
            </div>
        </div>
    );
};

export default navbar;