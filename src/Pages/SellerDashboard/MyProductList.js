import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MyProductList = ({ product, i }) => {

    const { image, name, category } = product;
    // console.log("rnq checking", product);

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
                <button className="btn btn-ghost btn-xs">Available</button>
            </td>
            <td>
                <button className="btn btn-ghost btn-xs">Advertise</button>
            </td>
            <th>
                <Link className=""><AiFillDelete color="red" fontSize="30px" /></Link>
            </th>
        </tr>
    );
};

export default MyProductList;