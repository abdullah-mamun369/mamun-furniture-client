import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mx-auto p-10 footer-bg'>
            <footer className="footer   text-base-content pb-20">
                <div className='mx-auto'>
                    <span className="footer-title text-xl">Services</span>
                    <Link to='/' className="link link-hover text-accent">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover text-accent">Deep Checkup</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title text-xl">Oral Health</span>
                    <Link to='/' className="link link-hover text-accent">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover text-accent">Cavity Filling</Link>
                    <Link to='/' className="link link-hover text-accent">Teath Whitening</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title text-xl">Our Address</span>
                    <p className="link link-hover text-accent">New York - 101010 Hudson</p>
                </div>

            </footer>
            <div className='text-center'>
                <p className=''>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>

        </div>
    );
};

export default Footer;