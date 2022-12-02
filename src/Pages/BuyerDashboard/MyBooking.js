import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyBooking = ({ product, i, myProducts, refetch }) => {

    const { _id, productName, productPrice, meetingLocation, phoneNumber, availableStatus } = product;
    // console.log("rnq checking", product);




    // Delete Product=========================================================
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this bookings');
        if (proceed) {
            fetch(`https://furniture-server.vercel.app/mybookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        // const remainingProducts = myProducts.filter(itm => itm._id !== id);
                        // myProducts(remainingProducts);
                        refetch()
                    }
                })
        }
    }

    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{productPrice}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm"> {meetingLocation}</div>
            </td>
            <td>
                {
                    availableStatus === true ?
                        <p>Available</p>
                        :
                        <p>Sold</p>

                }

            </td>
            <td>
                <p>{phoneNumber}</p>
            </td>

            <th>
                <Link onClick={() => handleDelete(_id)} className=""><AiFillDelete color="red" fontSize="30px" /></Link>
            </th>
        </tr>
    );
};

export default MyBooking;