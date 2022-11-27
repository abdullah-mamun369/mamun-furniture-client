import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import banner1 from '../../assets/banner1.png'
import MyProductList from './MyProductList';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);



    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:7000/products/?email=${user?.email}`);
            const data = await res.json();
            return data
        }
    })


    return (
        <div className='mt-24 container mx-auto'>
            <div>
                <img className='w-full' src={banner1} alt="" />
            </div>
            <div className='mt-16'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>

                                <th>No</th>
                                <th>Product Name</th>
                                <th>Product Status</th>
                                <th>Create Ads</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProducts.map((myProduct, i) => <MyProductList
                                    key={myProduct._id}
                                    product={myProduct}
                                    i={i}
                                ></MyProductList>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div></div>
        </div>
    );
};

export default MyProducts;