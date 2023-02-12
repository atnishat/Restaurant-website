import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import IsLoading from '../../Shared/Loading/IsLoading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
    // console.log(stripePromise)


const Payment = () => {

    const booking = useLoaderData();
    const navigation = useNavigation();
    const { numberOfPeople,phone, price, appointmentDate, reservationDate,reservedBy,email } = booking;

    // console.log(booking)
    // if(navigation.state === "loading"){
    //     return <IsLoading></IsLoading>
    // }

    

    return (
        <div className='ml-40 mt-20'>
        <h3 className="text-3xl">Payment for Reservation</h3>

        <p className="text-xl text-white font-serif mt-5">Please pay <strong className='text-red-700'>${price}</strong> for your Reservation in {reservationDate}</p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutForm
                    booking={booking}
                />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;