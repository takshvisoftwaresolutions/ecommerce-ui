import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Users, Truck, DollarSign, TrendingUp, ArrowUpRight, Package, Layers } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Overview of your store's performance</p>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Total Sales</h3>
              <div className="bg-blue-100 p-2 rounded-md">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900">$12,426</p>
                <div className="flex items-center mt-2 text-xs">
                  <span className="flex items-center text-emerald-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    12.5%
                  </span>
                  <span className="text-gray-500 ml-2">vs. last month</span>
                </div>
              </div>
              <div className="w-24 h-12">
                <div className="flex h-full items-end space-x-1">
                  <div className="bg-blue-500 w-2 rounded-t h-4"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-6"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-4"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-7"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-5"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-9"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-6"></div>
                  <div className="bg-blue-500 w-2 rounded-t h-10"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
              <div className="bg-amber-100 p-2 rounded-md">
                <ShoppingBag className="h-5 w-5 text-amber-600" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900">243</p>
                <div className="flex items-center mt-2 text-xs">
                  <span className="flex items-center text-emerald-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    8.3%
                  </span>
                  <span className="text-gray-500 ml-2">vs. last month</span>
                </div>
              </div>
              <div className="w-24 h-12">
                <div className="flex h-full items-end space-x-1">
                  <div className="bg-amber-500 w-2 rounded-t h-6"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-4"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-5"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-8"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-7"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-5"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-9"></div>
                  <div className="bg-amber-500 w-2 rounded-t h-7"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Total Customers</h3>
              <div className="bg-emerald-100 p-2 rounded-md">
                <Users className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900">1,893</p>
                <div className="flex items-center mt-2 text-xs">
                  <span className="flex items-center text-emerald-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    24.2%
                  </span>
                  <span className="text-gray-500 ml-2">vs. last month</span>
                </div>
              </div>
              <div className="w-24 h-12">
                <div className="flex h-full items-end space-x-1">
                  <div className="bg-emerald-500 w-2 rounded-t h-3"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-5"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-6"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-7"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-8"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-10"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-9"></div>
                  <div className="bg-emerald-500 w-2 rounded-t h-11"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
              <div className="bg-purple-100 p-2 rounded-md">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-2xl font-bold text-gray-900">3.24%</p>
                <div className="flex items-center mt-2 text-xs">
                  <span className="flex items-center text-emerald-600 font-medium">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    1.2%
                  </span>
                  <span className="text-gray-500 ml-2">vs. last month</span>
                </div>
              </div>
              <div className="w-24 h-12">
                <div className="flex h-full items-end space-x-1">
                  <div className="bg-purple-500 w-2 rounded-t h-7"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-5"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-6"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-5"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-6"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-7"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-6"></div>
                  <div className="bg-purple-500 w-2 rounded-t h-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Orders and Popular Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="font-semibold text-lg">Recent Orders</h2>
              <Link to="/admin/orders" className="text-blue-600 hover:text-blue-800 text-sm">
                View All
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { id: 'order-125', customer: 'Michael Johnson', date: '2 hours ago', total: 149.99, status: 'processing' },
                  { id: 'order-124', customer: 'Sarah Williams', date: '5 hours ago', total: 89.99, status: 'shipped' },
                  { id: 'order-123', customer: 'David Lee', date: '1 day ago', total: 239.99, status: 'delivered' },
                  { id: 'order-122', customer: 'Emily Clark', date: '1 day ago', total: 59.99, status: 'processing' },
                ].map((order, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`rounded-full h-2 w-2 mr-2 ${
                        order.status === 'processing' ? 'bg-yellow-500' : 
                        order.status === 'shipped' ? 'bg-blue-500' : 
                        'bg-green-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-500">{order.customer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="font-semibold text-lg">Popular Products</h2>
              <Link to="/admin/products" className="text-blue-600 hover:text-blue-800 text-sm">
                View All
              </Link>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {[
                  { name: 'Premium Wireless Earbuds', category: 'Electronics', stock: 45, sold: 256 },
                  { name: 'Ultra-Thin Smart Watch', category: 'Electronics', stock: 32, sold: 187 },
                  { name: 'Premium Coffee Maker', category: 'Kitchen', stock: 38, sold: 156 },
                  { name: 'Ergonomic Office Chair', category: 'Furniture', stock: 24, sold: 120 },
                ].map((product, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Layers className="h-5 w-5 text-gray-500" />
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{product.sold} sold</p>
                      <p className="text-xs text-gray-500">{product.stock} in stock</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link to="/admin/products" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-md">
                <Package className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Manage Products</h3>
                <p className="text-sm text-gray-500">Add, edit, delete products</p>
              </div>
            </div>
          </Link>
          
          <Link to="/admin/orders" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-md">
                <ShoppingBag className="h-6 w-6 text-amber-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Manage Orders</h3>
                <p className="text-sm text-gray-500">View and process orders</p>
              </div>
            </div>
          </Link>
          
          <Link to="/admin/customers" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-emerald-100 p-3 rounded-md">
                <Users className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Manage Customers</h3>
                <p className="text-sm text-gray-500">View customer details</p>
              </div>
            </div>
          </Link>
          
          <Link to="/admin/shipping" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-md">
                <Truck className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Manage Shipping</h3>
                <p className="text-sm text-gray-500">Track and manage shipping</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;