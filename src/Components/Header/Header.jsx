import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between max-w-[1450px] mx-auto'>
            <div>
                <h1 className="font-bold text-3xl">logo</h1>
            </div>
            <div className='space-x-10 font-semibold text-black'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/books'>Books</Link>
            </div>
        </div>
    );
};

export default Header;