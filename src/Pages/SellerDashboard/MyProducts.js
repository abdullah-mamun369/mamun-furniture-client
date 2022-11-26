import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:7000/products/?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='mt-32'>
            <h1 className='text-3xl'> Product length is {myProducts.length}</h1>
        </div>
    );
};

export default MyProducts;