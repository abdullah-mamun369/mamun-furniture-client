import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import Spinner from '../../../Components/Spinner/Spinner';
import { AuthContext } from '../../../Context/AuthProvider';
import { useUserVerify } from '../../../Hooks/useUserVerify';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut, loader } = useContext(AuthContext);

    if (loader) {
        <Spinner></Spinner>
    }

    const [isSeller, isBuyer, isAdmin, isUserLoading] = useUserVerify(user);
    // console.log(user);

    const menuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>

        {/* seller Dashboard===================================== */}
        {
            isSeller &&
            <li tabIndex={0}>
                <Link>
                    Seller-Dashboard
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24 "><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-base-100 rounded-md shadow-xl">
                    <li><Link to='/addproduct'>Add Product</Link></li>
                    <li><Link to='/myproducts'>My Products</Link></li>
                </ul>
            </li>}

        {/* Buyer Dashboard===================================== */}
        {
            isBuyer &&
            <li tabIndex={0}>
                <Link>
                    Buyer-Dashboard
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24 "><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-base-100 rounded-md shadow-xl">
                    <li><Link to='/mybookings'>My Booking</Link></li>
                    <li><Link to='/mywishlist'>My Wishlist</Link></li>
                </ul>
            </li>}

        {/* Admin Dashboard===================================== */}
        {
            isAdmin &&
            <li tabIndex={0}>
                <Link>
                    Admin-Dashboard
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24 "><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-base-100 rounded-md shadow-xl">
                    <li><Link to='/buyers'>All Buyers</Link></li>
                    <li><Link to='/sellers'>All Sellers</Link></li>
                </ul>
            </li>}
        {
            user ?
                <li onClick={() => { logOut() }}><Link>Log Out</Link></li>
                :
                <>
                    <li><Link to='/login'>login</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                </>
        }
    </React.Fragment>

    return (

        <div className='' >
            <div className='nav-custom shadow fixed top-0 left-0 right-0 z-50'>
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <Link to='/'><img className='h-10' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;