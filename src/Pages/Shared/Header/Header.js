import { Avatar, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/VIC-logo.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                console.log('log out successful');
            })
            .catch(e => console.error(e))
    }

    return (
        <Navbar
            fluid={true}
            className='bg-zinc-800'
        >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-3xl lg:text-5xl font-bold text-emerald-400">
                    N
                </span>
                <img
                    src={logo}
                    className="mt-1 lg:mt-2 h-6 sm:h-9 rounded-xl"
                    alt=""
                />
            </Navbar.Brand>
            <div className='flex items-center'>
                {
                    user?.email ?
                        <p className='text-white text-xs lg:text-base'>{user.email}</p>
                        :
                        undefined
                }
                {
                    user?.photoURL ?
                        <Avatar
                            img={user.photoURL}
                            rounded={true}
                            className='ml-2'
                        />
                        :
                        undefined

                }
            </div>
            <Navbar.Toggle className='text-emerald-400' />
            <Navbar.Collapse>
                <Link to='/home' className='text-white text-base hover:text-emerald-400 font-semibold'>Home</Link>
                <Link to='/services' className='text-white text-base hover:text-emerald-400 font-semibold'>Services</Link>
                <Link to='/blog' className='text-white text-base hover:text-emerald-400 font-semibold'>Blogs</Link>
                {
                    user?.email ?
                        <Link to='/myReviews' className='text-white text-base hover:text-emerald-400 font-semibold'>My Reviews</Link>
                        :
                        undefined
                }
                {
                    user?.email ?
                        <Link to='/addService' className='text-white text-base hover:text-emerald-400 font-semibold'>Add Service</Link>
                        :
                        undefined
                }
                {
                    user?.email ?
                        <Link onClick={handleLogout} className='text-white text-base hover:text-emerald-400 font-semibold'>Log Out</Link>
                        :
                        <Link to='/login' className='text-white text-base hover:text-emerald-400 font-semibold'>Login</Link>
                }
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;