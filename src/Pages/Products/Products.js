import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import banner1 from '../../assets/banner1.png'

const Products = () => {

    const products = useLoaderData();
    const categoryName = products[0].category;

    return (
        <div className='mt-24 container mx-auto'>
            <div>
                <img className='w-full' src={banner1} alt="" />
            </div>
            <h1 className='text-5xl text-accent font-bold text-center mt-12 mb-8'>{categoryName}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:mb-[130px] mb-20 mx-3'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;
