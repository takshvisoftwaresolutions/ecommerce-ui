import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../../services/api';
import { ArrowLeft, Package, Truck, CheckCircle, AlertCircle } from 'lucide-react';

interface OrderDetail {
  id: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  total: number;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
}

const OrderDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<OrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        if (id) {
          const data = await api.orders.getById(id);
          setOrder(data);
        }
        setError(null);
      } catch (err) {
        setError('Failed to load order details. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrder();
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-500 border-r-transparent"></div>
        <p className="ml-4">Loading order details...</p>
      </div>
    );
  }
  
  if (error || !order) {
    return (
      <div className="bg-red-50 p-4 rounded-md flex items-start">
        <AlertCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
        <div>
          <p className="text-red-700 font-medium">Error</p>
          <p className="text-red-600">{error || 'Order not found'}</p>
          <Link
            to="/dashboard/orders"
            className="mt-2 text-red-700 hover:text-red-800 underline text-sm"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }
  
  const getStatusIcon = (status: OrderDetail['status']) => {
    switch (status) {
      case 'processing':
        return <Package className="h-5 w-5 text-yellow-500" />;
      case 'shipped':
        return <Truck className="h-5 w-5 text-blue-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getStatusBadgeClass = (status: OrderDetail['status']) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/dashboard/orders" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Orders
        </Link>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Order Details</h2>
        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(order.status)}`}>
          {getStatusIcon(order.status)}
          <span className="ml-1">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
        </span>
      </div>
      
      <div className="mb-8 bg-gray-50 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Order ID</p>
            <p className="font-medium">{order.id}</p>
          </div>
          <div>
            <p className="text-gray-500">Date Placed</p>
            <p className="font-medium">
              {new Date(order.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Total Amount</p>
            <p className="font-medium">${order.total.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-500">Payment Method</p>
            <p className="font-medium">{order.paymentMethod}</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order Items */}
        <div className="md:col-span-2">
          <h3 className="font-medium mb-4">Items Ordered</h3>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {order.items.map((item) => (
                <div key={item.id} className="flex p-4">
                  <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0"></div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <div className="flex justify-between mt-1">
                      <div>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 border-t border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${order.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Shipping Information */}
        <div>
          <h3 className="font-medium mb-4">Shipping Information</h3>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Shipping Address</h4>
            <address className="not-italic text-gray-600">
              {order.shippingAddress.name}<br />
              {order.shippingAddress.street}<br />
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
              {order.shippingAddress.country}
            </address>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">Shipping Method</h4>
              <p className="text-gray-600">Standard Shipping</p>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium text-gray-900 mb-2">Estimated Delivery</h4>
              <p className="text-gray-600">
                {new Date(new Date(order.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <button className="w-full btn btn-outline py-2">
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;