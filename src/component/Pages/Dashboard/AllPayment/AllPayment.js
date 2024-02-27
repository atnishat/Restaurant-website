import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllPayment = () => {

    const { data: payment = [], refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/payment');
            const data = await res.json();
            return data;
        }
    });
        console.log(payment);
    return (
        <div>
            <h2 className="text-3xl ml-3">All Payment</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full pl-3">
                    <thead>
                        <tr>
                            <th></th>
                            <th>bookingId</th>
                            <th>Email</th>
                            <th>paid</th>
                            <th>TransactionId</th>
                            {/* <th>Paid</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((user, i) =>
                             <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.bookingId}</td>
                                <td>{user.email}</td>
                                <td >Paid : ${user.price}</td>
                                <td>{user.transactionId}</td>
                                {/* <td>{user.transactionId}</td> */}
                               
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

export default AllPayment;