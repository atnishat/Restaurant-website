import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }


    const menuItems = <React.Fragment>
        <li><Link to="/" className='font-bold'>Home</Link></li>
        <li><Link to="/reservation" className='font-bold'>Reservation</Link></li>
        <li><Link to="/about" className='font-bold'>About</Link></li>
        <li><Link to="/specialmenu" className='font-bold'>Special Menu</Link></li>
        <li><Link to="/contract" className='font-bold'>Contract</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard" className='font-bold'>Dashboard</Link></li>
                <li><Link to="/dashboard" className='font-bold'>Profile</Link></li>
                <li><button onClick={handleLogOut} className='font-bold'>Sign out</button></li>
            </>
            : <li><Link to="/login" className='font-bold'>Login</Link></li>}
    </React.Fragment>

// sticky top-0 z-30


    return (
        <div className="navbar bg-slate-800 text-black flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-yellow-600">Tasnim Cuisine</Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0 text-md text-yellow-600">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;