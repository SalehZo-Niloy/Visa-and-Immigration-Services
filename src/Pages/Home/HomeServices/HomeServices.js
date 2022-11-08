import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ServiceCards from '../../Shared/ServiceCards/ServiceCards';
import { FaArrowRight } from "react-icons/fa";

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeService')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
            .catch(e => console.error(e))
    }, [])


    return (
        <div className='w-11/12 mx-auto mt-12'>
            <h3 className='text-center text-3xl font-bold text-zinc-800 mb-8'>Services</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCards
                        key={service?._id}
                        service={service}
                    ></ServiceCards>)
                }
            </div>
            <div className='flex justify-center my-4'>
                <Button className='bg-emerald-400 text-black hover:bg-zinc-700 hover:text-white'>See All            <FaArrowRight /></Button>
            </div>
        </div>
    );
};

export default HomeServices;