import React from 'react';

const Product = ({ product }) => {

    const { category } = product

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default Product;