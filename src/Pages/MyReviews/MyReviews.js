import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards/MyReviewCards';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(e => console.error(e))
    }, [user, user?.email])

    const handleReviewDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    const remainingReviews = reviews.filter(review => review._id !== id);
                    setReviews(remainingReviews);
                }
            })
            .catch(e => console.error(e))
    }

    return (
        <div className='min-h-[90vh]'>
            <h1 className='text-2xl font-semibold text-zinc-800 text-center my-4'>Reviews Given by You</h1>
            <div className='w-10/12 mx-auto'>
                {
                    reviews.length > 0 ?
                        reviews.map(review => <MyReviewCards
                            key={review?._id}
                            review={review}
                            handleReviewDelete={handleReviewDelete}
                        ></MyReviewCards>)
                        :
                        <p className='text-center text-lg font-medium'>No reviews were added</p>
                }
            </div>
        </div>
    );
};

export default MyReviews;