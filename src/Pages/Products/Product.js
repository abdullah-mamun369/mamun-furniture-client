import React from 'react';
import { BsPatchCheckFill } from "react-icons/bs";

const Product = ({ product }) => {

    const { name, image, pickLocation, resalePrice, originalPrice, yearsOfUse, postDate, seller, verifySeller, condition } = product
    console.log(verifySeller);

    return (
        <div>
            <div className="card bg-base-200 shadow-xl p-5">
                <div className='flex justify-between mb-2'>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <h1 className='text-3xl font-bold text-primary'>{resalePrice}tk</h1>
                </div>

                <img src={image} alt="" className="rounded-xl" />

                <p className='badge badge-primary text-white mt-3'>Condition: {condition}</p>

                <div className='mt-3 flex'>
                    <p className='text-xl font-semibold text-accent'>Seller: {seller}</p>
                    {
                        verifySeller ?
                            <p> < BsPatchCheckFill color="cornflowerblue" /> </p> : <p> </p>
                    }
                </div>
                <p className='text-sm text-slate-400'>Posted on {postDate}</p>

                <div className="mt-3">
                    <p><span className=' font-semibold'>Pick Up Point:</span> {pickLocation}</p>
                    <p><span className=' font-semibold'>Original Price:</span> {originalPrice}tk</p>
                    <p><span className=' font-semibold'>Years of use:</span> {yearsOfUse}</p>
                </div>
            </div>
        </div >
    );
};

export default Product;
