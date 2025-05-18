import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AdminRoute: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.isAdmin) {
    // Redirect to home if authenticated but not admin
    return <Navigate to="/" replace />;
  }

  // User is authenticated and is an admin, render the child routes
  return <Outlet />;
};

export default AdminRoute;