import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/VIC-logo.png'

const Header = () => {
    return (
        <Navbar
            fluid={true}
            className='bg-zinc-800'
        >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-3xl lg:text-5xl font-bold text-green-400">
                    N
                </span>
                <img
                    src={logo}
                    className="mt-1 lg:mt-2 h-6 sm:h-9 rounded-xl"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Toggle className='text-green-400' />
            <Navbar.Collapse>
                <Link to='/' className='text-white text-base hover:text-green-400 font-semibold'>Home</Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;