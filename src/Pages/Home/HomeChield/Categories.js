import React from 'react';
import Category from './Category';



const Categories = ({ categories }) => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:mb-[130px] mb-20 mx-3 mt-24'>
            {
                categories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;