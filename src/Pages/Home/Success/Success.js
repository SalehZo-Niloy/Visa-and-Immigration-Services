import { Card } from 'flowbite-react';
import React from 'react';

const Success = () => {

    //----------------------------
    // a unique section
    //----------------------------

    return (
        <div className='bg-zinc-600 w-11/12 lg:w-10/12 mx-auto mt-12 pt-4 pb-8 rounded-lg'>
            <h1 className='text-center text-emerald-400 text-3xl font-semibold'>Successful Clients</h1>
            <p className='text-center text-sm lg:text-base text-white w-3/4 mx-auto mt-4'>These are my most successful clients living abroad now. By taking the services it was much easier for them to migrate to other countries.</p>
            <div className='w-11/12 lg:w-5/6 mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div>
                    <Card
                        className='border-none bg-zinc-300 min-h-[12rem]'
                        horizontal={true}
                        imgSrc="https://i.ibb.co/wp9M4vL/310317041-3311986205744919-4296449563688039137-n.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                            Jafar Sadique Jahan
                        </h5>
                        <p className="font-normal text-gray-700">
                            Living in Texas, U.S.A. Have multiple businesses there.
                        </p>
                    </Card>
                </div>
                <div>
                    <Card
                        className='border-none bg-zinc-300 min-h-[12rem]'
                        horizontal={true}
                        imgSrc="https://i.ibb.co/1ZCsc1g/279517207-3309961299236947-7858382178045980516-n.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                            Nazmul Rony
                        </h5>
                        <p className="font-normal text-gray-700">
                            Living in Montreal, Canada. Works in a multinational company.
                        </p>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default Success;