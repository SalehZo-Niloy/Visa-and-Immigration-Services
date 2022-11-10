import { Textarea } from 'flowbite-react';
import React from 'react';

const ReviewForm = ({ giveReview }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const reviewText = form.review.value;
        giveReview(reviewText, form);
    }

    return (
        <form onSubmit={handleSubmit} className='w-10/12 mx-auto mt-4 lg:mt-12'>
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