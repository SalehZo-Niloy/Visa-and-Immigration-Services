import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Loader from '../Shared/Loader/Loader';
import ServiceCards from '../Shared/ServiceCards/ServiceCards';

const Services = () => {
    const [services, setServices] = useState(null);
    // console.log(services);
    useTitle('Services');


    //----------------------------
    // fetching all service data
    //----------------------------
    useEffect(() => {
        fetch('https://assignment-11-server-five-beta.vercel.app/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
            .catch(e => console.error(e))
    }, [])

    //----------------------------
    // spinner
    //----------------------------
    if (!services) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className='text-3xl font-semibold text-zinc-800 text-center my-10'>All Provided Services</h1>
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <ServiceCards
                        key={service?._id}
                        service={service}
                    ></ServiceCards>)
                }
            </div>
        </div>
    );
};

export default Services;