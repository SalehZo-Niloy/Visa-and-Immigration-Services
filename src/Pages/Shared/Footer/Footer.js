import React from 'react';
import { FaRegCopyright, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-zinc-800 p-16 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='flex justify-center items-start lg:items-center'>
                <FaRegCopyright className='text-white' />
                <h1 className='text-white text-xs lg:text-base ml-1'> All Copyrights Reserved by Saleh Zohur Niloy. 2022</h1>
            </div>
            <div className='flex justify-center items-center gap-8'>
                <a className='text-zinc-100 text-3xl' href="https://www.facebook.com/msnniloy/" target='blank'>
                    <FaFacebook />
                </a>
                <a className='text-zinc-100 text-3xl' href="https://github.com/SalehZo-Niloy?tab=repositories" target='blank'>
                    <FaGithub />
                </a>
                <a className='text-zinc-100 text-3xl' href="https://www.linkedin.com/in/saleh-zohur-niloy-941332237/" target='blank'>
                    <FaLinkedin />
                </a>
            </div>

        </div>
    );
};

export default Footer;