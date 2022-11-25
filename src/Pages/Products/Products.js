import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div className='mt-32 container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-[130px] mb-20 mx-3'>
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
