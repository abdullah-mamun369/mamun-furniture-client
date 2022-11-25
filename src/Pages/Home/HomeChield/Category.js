import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { image, heading, description } = category;


    return (
        <Link to={`/categories/${heading}`}>
            <div className="card card-side shadow-xl bg-primary text-white py-12 px-6">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{heading}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Category;