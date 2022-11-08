import { Avatar, Card } from 'flowbite-react';
import React from 'react';

const ReviewCards = () => {
    return (
        <Card className='bg-emerald-400'>
            <div className='flex items-center'>
                <Avatar
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded={true}
                />
                <p className='ml-2 text-lg font-medium'>user name</p>
            </div>
            <h5 className="text-xl font-semibold tracking-tight text-black">
                Review about service
            </h5>
            <p className="font-medium text-zinc-800">
                review
            </p>
        </Card>
    );
};

export default ReviewCards;