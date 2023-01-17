import React from 'react';
import banner from '../../asset/banner-1.jpg'

const Banner = () => {
    return (
        <div className=" banner hero min-h-screen mt-5" style={{ backgroundImage: `url(${banner})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold w-80 ml-20 text-yellow-600">Hello There</h1>
            <p className="mb-5 w-3/6 ml-20 text-yellow-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iste impedit non libero repellendus nulla minima! Consequatur quia facilis, nostrum maiores quibusdam rem atque ab est laudantium adipisci eligendi deserunt, excepturi autem blanditiis vero modi harum quidem molestias nihil minus fuga maxime animi! Libero illo cumque quae, asperiores inventore nulla.</p>
            <button className="pl-10 pr-10 btn text-white bg-gradient-to-r from-yellow-600 to-black hover:from-black hover:to-yellow-500 ... ml-20">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;