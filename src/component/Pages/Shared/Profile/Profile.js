import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import './Profile.css'
import image from '../../../asset/MainDiningRoom1.jpg'
// import image from  '../../../asset/ahbab.jpg'

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className=' bg-slate-600'>
            <h3 className='font-serif font-thin text-4xl text-center text-white pt-20'>Users Profile</h3>

            <div className='design'>
                <div className="card bg-slate-50 shadow-xl maincard">
                    <figure className='image'>
                        <img className='' src={image} alt="Shoes" />

                    </figure>
                    <div className="content">
                        <div className='details'>
                            <h2 className='font-serif text-2xl font-semibold text-black'>Name: {user.displayName}</h2>
                            <h2 className='font-serif text-2xl font-semibold text-black'>Email: {user.email}</h2>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Profile;