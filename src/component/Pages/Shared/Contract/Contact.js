import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Contact = () => {
    return (
        <div className='bg-white'>
            <h2>contract</h2>
            <section id="hero">
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__left" data-aos="fade-left">
                            <div className="hero__left__wrapper">

                                <h1 className="hero__heading text-5xl">The flavor of tradition</h1>
                                <p className="hero__info text-sm mt-5">
                                    We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
                                    dining
                                    environment.
                                </p>
                                <div className="button__wrapper">
                                    <a href="/specialmenu" className="btn primary-btn  text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500">Special Menu</a>
                                    <a href="/reservation" className="btn ml-5  text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500">Book Table</a>
                                </div>
                            </div>
                        </div>
                        <div className="hero__right" data-aos="fade-right">
                            <div className="hero__imgWrapper">
                               <img src='/' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default Contact;