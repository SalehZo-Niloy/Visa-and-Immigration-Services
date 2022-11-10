import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCards from './ReviewCards/ReviewCards';
import ReviewForm from './ReviewForm/ReviewForm';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const location = useLocation();
    useTitle('Details');
    // console.log(service);
    const { _id, title, image, fee, details } = service;

    //----------------------------
    // Loading reviews of the service
    //----------------------------
    useEffect(() => {
        fetch(`https://assignment-11-server-five-beta.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(e => console.error(e))
    }, [_id])

    const giveReview = (reviewText, form) => {
        // console.log(reviewText, user?.displayName, user?.photoURL, user?.email, _id, title);
        const reviewDetails = {
            userName: user?.displayName,
            userPhoto: user?.photoURL,
            userEmail: user?.email,
            userReview: reviewText,
            serviceId: _id,
            serviceTitle: title,
        }

        //----------------------------
        // posting a review
        //----------------------------
        fetch('https://assignment-11-server-five-beta.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    form.reset();
                    notify();

                    //----------------------------
                    // giving a random id only for server side rendering after submitting review to prevent component key error
                    //----------------------------
                    reviewDetails._id = Math.random();
                    setReviews([reviewDetails, ...reviews]);
                }
            })
            .catch(e => console.error(e))
    }

    const notify = () => toast.success('Review submitted Successfully!!');

    return (
        <div>
            <div className='w-full bg-zinc-600 p-4 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='order-last lg:order-1'>
                    <h1 className='text-white text-2xl lg:text-3xl font-semibold'>{title}</h1>
                    <p className='mt-4 text-white'><span className='font-semibold'>Details:</span> <br /> {details}</p>
                    <p className='text-white mt-4'>For details information and every thing you want to know please consult us.</p>
                    <p className='text-white font-bold mt-4'>Consultancy Fee: ${fee}</p>
                </div>
                <div className='order-1 lg:order-last'>
                    <img src={image} className='w-full rounded' alt="" />
                </div>
            </div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-2xl font-semibold text-zinc-800 text-center mt-12 mb-4'>Reviews of Clients</h1>
                {
                    reviews.length > 0 ?
                        reviews.map(review => <ReviewCards
                            key={review?._id}
                            review={review}
                        ></ReviewCards>)
                        :
                        <p className='text-center text-base lg:text-lg font-medium'>No reviews were added</p>

                }
            </div>
            <div>
                <div className="mt-12 mb-4 block">
                    <h1 className='w-5/6 mx-auto text-xl lg:text-2xl font-semibold text-zinc-800 text-center'>Give Your valuable Review of the Service</h1>
                </div>
                {
                    user ?
                        <ReviewForm giveReview={giveReview}></ReviewForm>
                        :
                        <div>

                            <h3 className='text-center text-lg font-medium w-5/6 mx-auto'><span className='text-red-600'>Currently you are not logged in!!</span> <br /> Please <Link to='/login' state={{ from: location }} replace className='text-blue-700 underline font-bold text-xl'>Login</Link> to give your review about the service.</h3>
                        </div>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;