import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards/MyReviewCards';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user, logout } = useContext(AuthContext);
    useTitle('My Reviews');

    //----------------------------
    // fetching users reviews
    //----------------------------
    useEffect(() => {
        fetch(`https://assignment-11-server-five-beta.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('nvis-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
            .catch(e => console.error(e))
    }, [user, user?.email])

    //----------------------------
    // deleting a review
    //----------------------------
    const handleReviewDelete = (id) => {
        const proceed = window.confirm('Do you want to delete This review?');
        if (!proceed) {
            return;
        }
        fetch(`https://assignment-11-server-five-beta.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    notify();
                    const remainingReviews = reviews.filter(review => review._id !== id);
                    setReviews(remainingReviews);
                }
            })
            .catch(e => console.error(e))
    }

    const notify = () => toast.success('Successfully deleted review');


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
                        <p className='text-center text-lg font-medium'>No reviews were added <br /> or data loading!! Please wait a bit!!</p>
                }
            </div>
        </div>
    );
};

export default MyReviews;