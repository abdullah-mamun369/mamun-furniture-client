import React from 'react';
import Category from './Category';



const Categories = ({ categories }) => {

    return (
        <div>
            <h1 className='text-center text-5xl lg:mt-16 mt-8 lg:mb-8 mb-5 font-semibold'>Categories</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-[130px] mb-20 mx-3'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>

    );
};

export default Categories;