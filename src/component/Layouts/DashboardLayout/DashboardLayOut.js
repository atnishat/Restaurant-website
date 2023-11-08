import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import UseAdmin from '../../../hooks/UseAdmin';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayOut = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side border-r-2 border-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/dashboard">My Reservations</Link></li>
                        {/* <li><Link to="/dashboard/allusers">All users</Link></li> */}
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All Users</Link></li>
                                <li><Link to="/dashboard/allbookings">All Reservations</Link></li>
                                <li><Link to="/dashboard/allpayments">All Payments</Link></li>
                                <li><Link to="/dashboard/addmenu">Add Menu</Link></li>
                                <li><Link to="/dashboard/specialmenu">Special Menu</Link></li>
                                
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;