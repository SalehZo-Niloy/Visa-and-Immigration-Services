import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCards from './ReviewCards/ReviewCards';
import ReviewForm from './ReviewForm/ReviewForm';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(service);
    const { _id, title, image, fee, details } = service;

    const giveReview = (reviewText) => {
        const date = new Date();
        const isoDate = date.toISOString();
        console.log(reviewText, user?.displayName, user?.photoURL, user?.email, _id, title, isoDate);
        const reviewDetails = {
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            userEmail: user?.email,
            userReview: reviewText,
            serviceId: _id,
            serviceTitle: title,
            date: isoDate
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(e => console.error(e))
    }

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
            <div className='w-11/12 mx-auto'>
                <h1 className='text-2xl font-semibold text-zinc-800 text-center mt-12 mb-4'>Reviews of Clients</h1>
                <ReviewCards></ReviewCards>
            </div>
            <div>
                <ReviewForm giveReview={giveReview}></ReviewForm>
            </div>
        </div>
    );
};

export default ServiceDetails;