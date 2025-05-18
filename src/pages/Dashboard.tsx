import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Notification from '../components/ui/Notification';
import { User, Package, Heart, Settings, ShoppingBag } from 'lucide-react';
import NotFound from './NotFound';
import Profile from './dashboard/Profile';
import Orders from './dashboard/Orders';
import OrderDetail from './dashboard/OrderDetail';
import Wishlist from './Wishlist';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state: RootState) => state.auth);
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Notification />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">My Account</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {user?.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="p-2">
                <ul className="space-y-1">
                  <li>
                    <Link
                      to="/dashboard"
                      className={`flex items-center px-3 py-2 rounded-md ${
                        isActive('/dashboard') && !isActive('/dashboard/orders') && !isActive('/dashboard/wishlist')
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <User className="h-5 w-5 mr-3" />
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/orders"
                      className={`flex items-center px-3 py-2 rounded-md ${
                        isActive('/dashboard/orders')
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Package className="h-5 w-5 mr-3" />
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/wishlist"
                      className={`flex items-center px-3 py-2 rounded-md ${
                        isActive('/wishlist')
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Heart className="h-5 w-5 mr-3" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      <ShoppingBag className="h-5 w-5 mr-3" />
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/settings"
                      className={`flex items-center px-3 py-2 rounded-md ${
                        isActive('/dashboard/settings')
                          ? 'bg-blue-50 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout><Profile /></DashboardLayout>} />
      <Route path="/orders" element={<DashboardLayout><Orders /></DashboardLayout>} />
      <Route path="/orders/:id" element={<DashboardLayout><OrderDetail /></DashboardLayout>} />
      <Route path="/settings" element={<DashboardLayout><div>Settings Page (Under Construction)</div></DashboardLayout>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Dashboard;