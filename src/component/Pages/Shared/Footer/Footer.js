import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../asset/footer.png'
import Design from '../../design/Design';

const Footer = () => {
    return (
       <div className='bg-white pt-24'>
         <footer
        style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
            
        }}
    className="p-10 ">
        <div className='footer text-center text-cyan-500'>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
        </div>
        <div className='text-center mt-32'>
            <p>Copyright © 2022 - All right reserved by Tasnim Cuisine. Developed By Nishat & Sanji</p>
        </div>
    </footer>
    {/* <Design></Design> */}
       </div>
    );
};

export default Footer;