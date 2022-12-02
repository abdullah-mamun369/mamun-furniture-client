import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AllSeller = ({ product, i, myProducts, refetch }) => {

    const { _id, name, email, verified } = product;


    // Delete Product=========================================================
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this user');
        if (proceed) {
            fetch(`https://furniture-server.vercel.app/users/${id}`, {
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
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="text-sm"> {email}</div>
            </td>

            <th>
                <Link onClick={() => handleDelete(_id)} className=""><AiFillDelete color="red" fontSize="30px" /></Link>
            </th>
        </tr>
    );
};

export default AllSeller;