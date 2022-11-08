import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    const { title, image, fee, details } = service;
    return (
        <div>
            <div className='w-full bg-zinc-600 p-16 grid grid-cols-2 gap-8'>
                <div>
                    <h1 className='text-white text-3xl font-semibold'>{title}</h1>
                    <p className='mt-4 text-white'><span className='font-semibold'>Details:</span> <br /> {details}</p>
                    <p className='text-white mt-4'>For details information and every thing you want to know please consult us.</p>
                    <p className='text-white font-bold mt-4'>Consultancy Fee: ${fee}</p>
                </div>
                <div>
                    <img src={image} className='w-full rounded' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;