import { Textarea } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const ReviewUpdate = () => {
    const review = useLoaderData();
    // console.log(review);
    const { _id, serviceTitle, userReview } = review;
    useTitle('Edit Review');

    const handleSubmit = event => {
        event.preventDefault();
        const userReview = event.target.review.value;
        // console.log(userReview);

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ userReview })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    notify();
                }
            })
            .catch(e => console.error(e))
    }

    const notify = () => toast.success('Successfully updated review');

    return (
        <div className='min-h-[90vh]'>
            <h1 className='text-2xl font-semibold text-zinc-800 text-center my-4'>Edit your review about {serviceTitle}</h1>
            <form onSubmit={handleSubmit} className='w-10/12 mx-auto mt-12'>
                <Textarea
                    defaultValue={userReview}
                    type='text'
                    name='review'
                    required={true}
                    rows={4}
                />
                <div className='mt-4 flex justify-end'>
                    <button className='bg-emerald-400 text-black hover:bg-zinc-700 hover:text-white px-3 py-1.5 text-lg font-semibold rounded-lg' type="submit">Edit Review</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewUpdate;