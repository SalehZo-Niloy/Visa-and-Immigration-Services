import { Card } from 'flowbite-react';
import React from 'react';

const UpcomingServices = () => {

    //----------------------------
    // a unique section
    //----------------------------

    return (
        <div className='bg-emerald-400 w-10/12 mx-auto mt-12 pt-4 pb-8 rounded-lg'>
            <h1 className='text-center text-zinc-800 text-3xl font-semibold'>Upcoming Services</h1>
            <p className='text-center text-zinc-800 w-3/4 mx-auto mt-4'>These services would be available soon. Contact for more info.</p>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 w-11/12 mx-auto'>
                <div>
                    <Card
                        className='bg-emerald-200 border-none'
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co/3yH2Pqg/blond-boy-smiles-holds-flag-south-korea-education-korea-134398-16257.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                            Migrate to South Korea
                        </h5>
                    </Card>
                </div>
                <div>
                    <Card
                        className='bg-emerald-200 border-none'
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co/xMmfMzT/240-F-314820811-YJv-BQ8x-BX4-Lq-Fa-ANMAhy-TB7-YNd-ULA0y-Y.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                            Student Visa for Finland
                        </h5>
                    </Card>
                </div>
                <div>
                    <Card
                        className='bg-emerald-200 border-none'
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        imgSrc="https://i.ibb.co/0nPz8Y0/young-tourist-great-sphinx-giza-dressed-red-with-hat-242111-17405.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-zinc-800">
                            Tourist Visa for Egypt
                        </h5>
                    </Card>
                </div>
            </div>
        </div >
    );
};

export default UpcomingServices;