import { Avatar, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCards = ({ review, handleReviewDelete }) => {
    const { _id, userPhoto, userName, serviceTitle, userReview } = review;
    // console.log(review);

    const handleDelete = (id) => {
        handleReviewDelete(id);
    }

    return (
        <Card className='bg-emerald-400 mb-4'>
            <div className='flex items-center'>
                <Avatar
                    img={userPhoto}
                    rounded={true}
                />
                <p className='ml-2 text-lg font-medium text-zinc-800'>{userName}</p>
            </div>
            <h5 className="text-lg font-semibold tracking-tight text-zinc-800">
                Reviewed about {serviceTitle}
            </h5>
            <p className="font-medium text-black">
                {userReview}
            </p>
            <div className='flex justify-end'>
                <Link to={`/updateReview/${_id}`} className='bg-zinc-700 hover:bg-zinc-900 text-white px-3 py-1.5 rounded-lg' type="submit">Edit Review</Link>
                <button onClick={() => handleDelete(_id)} className='bg-zinc-700 hover:bg-zinc-900 text-white px-3 py-1.5 rounded-lg ml-4' type="submit">Delete Review</button>
            </div>
        </Card>
    );
};

export default MyReviewCards;