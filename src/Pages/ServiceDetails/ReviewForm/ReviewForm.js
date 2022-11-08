import { Textarea } from 'flowbite-react';
import React from 'react';

const ReviewForm = ({ giveReview }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const reviewText = event.target.review.value;
        giveReview(reviewText);
    }

    return (
        <form onSubmit={handleSubmit} className='w-10/12 mx-auto mt-12'>
            <div className="mb-4 block">
                <h1 className='text-2xl font-semibold text-zinc-800 text-center'>Give Your valuable Review of the Service</h1>
            </div>
            <Textarea
                placeholder="Give review of the service..."
                type='text'
                name='review'
                required={true}
                rows={4}
            />
            <div className='mt-4 flex justify-end'>
                <button className='bg-emerald-400 text-black hover:bg-zinc-700 hover:text-white px-3 py-1.5 text-lg font-semibold rounded-lg' type="submit">Submit Review</button>
            </div>
        </form>
    );
};

export default ReviewForm;