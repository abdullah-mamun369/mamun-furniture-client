import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyProductList = ({ product, i, myProducts }) => {

    const { _id, image, name, category, resalePrice, status } = product;
    // console.log("rnq checking", product);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:7000/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = myProducts.filter(itm => itm._id !== id);
                        myProducts(remainingProducts);
                    }
                })
        }
    }

    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm">{resalePrice}</div>
            </td>
            <td>
                <button className="btn btn-ghost btn-xs">{status ? status : 'Available'}</button>
            </td>
            <td>
                <button className="btn btn-primary btn-xs text-white">Advertise</button>
            </td>
            <th>
                <Link onClick={() => handleDelete(_id)} className=""><AiFillDelete color="red" fontSize="30px" /></Link>
            </th>
        </tr>
    );
};

export default MyProductList;