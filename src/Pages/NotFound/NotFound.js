import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {
    useTitle('404');

    //----------------------------
    // 404 page
    //----------------------------

    return (
        <div className='bg-zinc-800 min-h-screen pt-24 md:pt-36'>
            <h1 className='text-6xl font-bold text-emerald-400 text-center px-8'>Page Not Found!</h1>
            <h3 className='my-6 text-3xl font-bold text-emerald-400 text-center px-8'>The page you are looking for doesn't exist!!</h3>
            <h3 className='my-6 text-2xl font-bold text-emerald-400 text-center px-8'>Please try the below links.</h3>
            <div className='flex gap-4 justify-center bg-neutral p-6'>
                <Link to='/'><span className='text-white text-xl font-semibold underline hover:text-emerald-400'>Home</span></Link>
                <Link to='/services'><span className='text-white text-xl font-semibold underline hover:text-emerald-400'>Services</span></Link>
                <Link to='/blog'><span className='text-white text-xl font-semibold underline hover:text-emerald-400'>Blogs</span></Link>
            </div>
        </div>
    );
};

export default NotFound;