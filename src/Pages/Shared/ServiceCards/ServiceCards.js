import { Card } from 'flowbite-react';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';


const ServiceCards = ({ service }) => {
    const { _id, title, image, fee, details } = service;

    return (
        <div className="">
            <Card className='bg-emerald-400'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} className='rounded-md h-48 lg:h-56 cursor-pointer' alt="" title='Click to view full image' />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                    {title}
                </h5>
                <p className='text-zinc-900 font-medium'>Consultancy Fee: ${fee}</p>
                <p className="font-normal text-zinc-700 dark:text-gray-400">
                    {details.slice(0, 100)}...
                </p>
                <div className='flex justify-end'>
                    <Link to={`/services/${_id}`} className='bg-zinc-800 hover:bg-zinc-900 px-4 pb-2 pt-1.5 text-white rounded-lg'>View Details</Link>
                </div>
            </Card>
        </div>
    );
};

export default ServiceCards;