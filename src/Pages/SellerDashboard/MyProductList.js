import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyProductList = ({ product, i, myProducts, refetch }) => {

    const { _id, image, name, category, resalePrice, status, adStatus } = product;
    // console.log("rnq checking", product);

    // Status Product==============================================================
    const handleStatusUpdate = id => {
        const proceed = window.confirm('Are you sure, the Product is sold?');
        if (proceed) {
            fetch(`http://localhost:7000/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ status: !status })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        toast.success(' 🦄 The Product is marked as sold')
                        window.location.reload(true);
                    }
                })
        }

    }


    // Delete Product=========================================================
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

    // Advertise Product=========================================================
    const handleAdvertise = (id, status) => {
        const proceed = window.confirm('Do you want advertise your product in the front page?');

        if (proceed) {
            fetch(`http://localhost:7000/advertise/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ adStatus: !status })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Product is now featured in the homepage!');
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
                {
                    status === true ?
                        <button onClick={() => handleStatusUpdate(_id, status)} className="btn btn-ghost btn-xs">Available</button>
                        :
                        <button className="btn btn-ghost btn-xs" disabled>Sold</button>

                }

            </td>
            <td>
                {
                    status === true && adStatus === false ?
                        <button onClick={() => { handleAdvertise(_id, adStatus) }} className="btn btn-primary btn-xs text-white">Advertise</button>
                        :
                        <button className="btn btn-primary btn-xs text-white" disabled>Advertise</button>
                }
            </td>
            <th>
                <Link onClick={() => handleDelete(_id)} className=""><AiFillDelete color="red" fontSize="30px" /></Link>
            </th>
        </tr>
    );
};

export default MyProductList;