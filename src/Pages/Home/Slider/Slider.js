import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../../../Assets/images/banner-1.jpg';
import banner2 from '../../../Assets/images/banner-2.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <div className="mt-6 w-11/12 lg:w-10/12 mx-auto h-52 lg:h-[35rem] relative">
            <div className='absolute w-3/5 left-20 lg:left-56 h-40 lg:h-96 z-10 rounded-lg'>
                <h1 className='text-3xl lg:text-6xl font-semibold lg:font-bold text-green-400 text-center mt-1 lg:mt-36'>Welcome <br /> to <br /> NVIS</h1>
                <h3 className='text-base lg:text-3xl text-white text-center font-normal lg:font-semibold mt-1 lg:mt-6'>Niloy's Visa and Immigration Services</h3>
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