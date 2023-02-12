import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBookings = () => {
    const url = `http://localhost:5000/bookings`

    // const { data: bookings = []} = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async () => {
    //         const res = await fetch('');
    //         const data = await res.json();
    //         console.log(data)
    //         return data;
    //     }
    // });

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    })
    

    return (
        <div>
            <h2 className="text-3xl">All Reservation</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>People</th>
                            <th>Reservation Date</th>
                            <th>Time</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                    {/* <td>{bookings.reservedBy}</td> */}
                    { 
                    bookings &&
                            bookings?.map((book, i) =>
                                <tr key={book._id}>
                                    <th>{i + 1}</th>
                                    <td>{book.reservedBy}</td>
                                    <td>{book.email}</td>
                                    <td>{book.numberOfPeople}</td>
                                    <td>{book.reservationDate}</td>
                                    <td>{book.slot}</td>
                                    {/* <td>{book?.role !== 'admin' && <button onClick={() => handleMakeAdmin(book._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td> */}
                                    {/* <td><button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button></td> */}
                                    {/* <td><button className='btn btn-xs btn-danger'>Delete</button></td> */}
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBookings;