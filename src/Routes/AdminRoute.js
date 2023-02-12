import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import IsLoading from '../component/Pages/Shared/Loading/IsLoading';
import { AuthContext } from '../Contexts/AuthProvider';
import UseAdmin from '../hooks/UseAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <IsLoading></IsLoading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;