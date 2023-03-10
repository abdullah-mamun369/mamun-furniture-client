import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const ModalBooking = ({ product }) => {

    const { name, resalePrice } = product

    const { user } = useContext(AuthContext);

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const meetingLocation = form.meetingLocation.value;
        const phoneNumber = form.phoneNumber.value;


        const myBooking = {
            name,
            email,
            productName,
            productPrice,
            meetingLocation,
            phoneNumber,
            availableStatus: true
        }
        console.log(myBooking);

        fetch('https://furniture-server.vercel.app/mybooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("🦄 Congratulations! Your Booking is completed", { autoClose: 5000, });
                    e.target.reset();
                }
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle border-none text-white bg-primary absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='mt-10 grid grid-cols-1 gap-4'>
                        <div>
                            <label className="label"><span className="label-text">Your Name</span></label>
                            <input name="name" type="text" className="input w-full font-semibold" value={user?.displayName} disabled />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Your Email</span></label>
                            <input name="email" type="email" className="input input-bordered w-full" value={user?.email} disabled />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Product Name</span></label>
                            <input name="productName" type="text" className="input input-bordered w-full" value={name} disabled />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Price</span></label>
                            <input name="productPrice" type="number" className="input input-bordered w-full" value={resalePrice} disabled />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Meeting Location</span></label>
                            <input name="meetingLocation" type="text" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Phone Number</span></label>
                            <input name="phoneNumber" type="number" className="input input-bordered w-full" required />
                        </div>
                        <button className='btn border-none btn-primary text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalBooking;