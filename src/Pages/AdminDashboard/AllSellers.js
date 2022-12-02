import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../Context/AuthProvider';
import AllSeller from './AllSeller';

const AllSellers = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);



    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://furniture-server.vercel.app/users?role=Seller`);
            const data = await res.json();
            return data
        }

    })
    console.log(users);

    return (
        <div className='mt-24 container mx-auto h-screen'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            isLoading ? <Spinner></Spinner> :
                                users.map((myProduct, i) => <AllSeller
                                    key={myProduct._id}
                                    product={myProduct}
                                    myBookings={users}
                                    i={i}
                                    refetch={refetch}
                                ></AllSeller>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;