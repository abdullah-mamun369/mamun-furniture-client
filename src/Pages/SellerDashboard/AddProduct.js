import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    /*
    user,
        createUser,
        signIn,
        updateUserInfo,
        logOut,
        loader
    */

    const todayDate = new Date();
    const postDate = format(todayDate, 'PP')

    console.log(postDate);
    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const pickLocation = form.pickLocation.value;
        const description = form.description.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const resalePrice = form.resalePrice.value;
        const category = form.category.value;
        const originalPrice = form.originalPrice.value;
        const yearsOfUse = form.yearsOfUse.value;

        // console.log(postDate, slot, name, phone, email);


        const product = {
            name: name,
            seller: user.displayName,
            email: user.email,
            image,
            condition,
            postDate,
            phone,
            pickLocation,
            description,
            yearOfPurchase,
            resalePrice,
            category,
            status: true,
            adStatus: false,
            verifySeller: false,
            originalPrice,
            yearsOfUse,
        }

        fetch('https://furniture-server.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("???? The Product is successfully added", { autoClose: 5000, });
                    e.target.reset();
                    navigate('/myproducts')
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container mx-auto mt-24 lg:w-6/12 w-9/12 mb-12'>
            <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-4'>
                <input name="name" type="text" placeholder="Product Name" className="input input-bordered w-full" />
                <input name="image" type="text" placeholder="Place your product image link" className="input input-bordered w-full" />
                <select name='condition' className="select select-bordered w-full" required>
                    <option disabled selected>Select your product condition</option>
                    <option>Excelent</option>
                    <option>Good</option>
                    <option>Fair</option>
                </select>
                <input name="phone" type="number" placeholder="Enter your phone number" className="input input-bordered w-full" />
                <input name="pickLocation" type="text" placeholder="Enter the pick-up location" className="input input-bordered w-full" />
                <input name="description" type="text" placeholder="Product description" className="input input-bordered w-full" />
                <input name="yearOfPurchase" type="number" placeholder="Purchase year" className="input input-bordered w-full" />
                <input name="resalePrice" type="number" placeholder="Selling price" className="input input-bordered w-full" />
                <select name='category' className="select select-bordered w-full" required>
                    <option disabled selected>Select the category</option>
                    <option>Living Room</option>
                    <option>Dining Room</option>
                    <option>Bed Room</option>
                </select>
                <input name="originalPrice" type="number" placeholder="Buying price" className="input input-bordered w-full" />
                <input name="yearsOfUse" type="number" placeholder="Year of use" className="input input-bordered w-full" />
                <button className='btn btn-primary text-white'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;