import React from 'react';
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-zinc-800 p-16'>
            <div className='flex justify-center items-center'>
                <FaRegCopyright className='text-white' />
                <h1 className='text-white ml-1'> All Copyrights Reserved by Saleh Zohur Niloy. 2022</h1>
            </div>
            <div></div>

        </div>
    );
};

export default Footer;