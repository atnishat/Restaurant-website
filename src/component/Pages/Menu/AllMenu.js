import React from 'react';

const AllMenu = ({ user }) => {
    const { name, price, description, image,menufor } = user
    return (
        <div>
            <div className="card w-96 bg-blue-900 shadow-xl ml-6">
                <figure className=" pt-10">
                    <img className="mask mask-decagon w-80 h-52 border-black border-2" src={image} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white font-serif">{name}</h2>
                    <p className='text-white font-serif'>{description}</p>
                    <div className="card-actions justify-center ">
                        <div className="badge badge-outline text-md text-black font-serif bg-slate-200">Price:{price}</div>
                        <div className="badge badge-outline text-md text-black font-serif bg-slate-200">{menufor} Item</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMenu;