import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyBooking from './MyBooking';

const MyBookings = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);



    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://furniture-server.vercel.app/mybookings/?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='mt-24 container mx-auto h-screen'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product Name</th>
                            <th>Meeting Location</th>
                            <th>Product Status</th>
                            <th>Phone Number</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBookings.map((myProduct, i) => <MyBooking
                                key={myProduct._id}
                                product={myProduct}
                                myBookings={myBookings}
                                i={i}
                                refetch={refetch}
                            ></MyBooking>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;