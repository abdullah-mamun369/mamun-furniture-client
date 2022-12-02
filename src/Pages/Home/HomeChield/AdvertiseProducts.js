import React from 'react';
import { useQuery } from '@tanstack/react-query';
import AdvertiseProduct from './AdvertiseProduct';

const AdvertiseProducts = () => {

    const { data: myProducts = [] } = useQuery({
        queryKey: ['advertisedProducts',],
        queryFn: async () => {
            const res = await fetch(`https://furniture-server.vercel.app/advertised`);
            const data = await res.json();
            return data
        }
    })

    // console.log(typeof (myProducts.length));


    return (
        <div className='mt-24 container mx-auto'>
            <h1 className='text-center text-5xl lg:mt-16 mt-8 lg:mb-8 mb-5 font-semibold'>Featured Products</h1>
            {myProducts.length > 0 ?
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:mb-[130px] mb-20 mx-3'>
                    {
                        myProducts.map(product => <AdvertiseProduct
                            key={product._id}
                            product={product}
                        ></AdvertiseProduct>)
                    }
                </div>
                :
                <div>
                    <h1 className='text-center text-3xl lg:mt-8 mt-8 lg:mb-16 mb-5 text-primary'>No featured products is available. If you are a seller please go to dashboard and hit the advertise button!</h1>
                </div>
            }
        </div>
    );
};

export default AdvertiseProducts;