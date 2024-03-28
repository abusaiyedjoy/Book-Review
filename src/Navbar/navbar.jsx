import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div className="menu menu-sm dropdown-content text-lg font-medium  mt-3 z-[1] rounded-box">
                    <NavLink to="/" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Home</NavLink>
                    <NavLink to="/Listed Books" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Listed-Books</NavLink>
                    <NavLink to="/Pages to Read" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Pages-to-Read</NavLink>
                    <NavLink to="/Bookmarks" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Favorites</NavLink>
                    <NavLink to="/Review_Container" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Reviews</NavLink>
                    </div>
                </div>
                <Link to="/" className=" text-2xl font-bold lg:text-4xl text-green-700">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex menu menu-horizontal text-xl gap-6 font-medium px-1">
                <NavLink to="/" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Home</NavLink>
                <NavLink to="/Listed Books" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Listed Books</NavLink>
                <NavLink to="/Pages to Read" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Pages to Read</NavLink>
                <NavLink to="/Bookmarks" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>My Favorites</NavLink>
                <NavLink to="/Review_Container" className={({isActive})=> isActive ? 'text-green-700 p-2 ring-1 ring-offset-2 rounded-lg ring-green-700' : ''}>Review Container</NavLink>
            </div>
            <div className="navbar-end gap-5">
                <Link class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span class="relative text-white">Sign In</span>
                    </Link>
                <Link class="hidden relative md:inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span class="relative text-white">Sign Up</span>
                    </Link>
            </div>
        </div>
    );
};

export default navbar;