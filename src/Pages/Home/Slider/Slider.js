import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../../../Assets/images/banner-1.jpg';
import banner2 from '../../../Assets/images/banner-2.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div className="mt-6 w-11/12 lg:w-10/12 mx-auto h-44 lg:h-[35rem] relative">
            <div className='absolute w-3/5 left-16 lg:left-56 h-32 lg:h-96 z-10 rounded-lg'>
                <h1 className='text-2xl lg:text-6xl font-bold text-emerald-400 text-center mt-3 lg:mt-40'>Welcome to <br /> NVIS</h1>
                <h3 className='text-sm lg:text-3xl text-white text-center font-normal lg:font-semibold mt-1 lg:mt-8'>Niloy's Visa and Immigration Services</h3>
            </div>
            <Carousel slideInterval={10000} className='overflow-hidden'>
                <div className='bg-black'>
                    <img
                        src={banner2}
                        alt="..."
                        className='w-full opacity-40'
                    />
                </div>
                <div className='bg-black'>
                    <img
                        src={banner1}
                        alt=""
                        className='w-full opacity-40'
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;