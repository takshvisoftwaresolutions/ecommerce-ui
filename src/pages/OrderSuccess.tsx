import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

interface LocationState {
  orderId?: string;
}

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  
  // If no order ID is provided in location state, redirect to home
  if (!state || !state.orderId) {
    return <Navigate to="/" />;
  }
  
  const { orderId } = state;
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Order Number</p>
                <p className="font-medium">{orderId}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ol className="text-left text-sm space-y-2">
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0 mt-0.5">1</span>
                  <span>We're processing your order and will send you a confirmation email shortly.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0 mt-0.5">2</span>
                  <span>Your items will be prepared for shipping within 1-2 business days.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold mr-2 flex-shrink-0 mt-0.5">3</span>
                  <span>You'll receive tracking information once your order ships.</span>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/dashboard/orders"
              className="btn btn-primary py-3 w-full flex items-center justify-center"
            >
              View Order Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link
              to="/"
              className="btn btn-outline py-3 w-full"
            >
              Continue Shopping
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>
              Need help? <a href="#" className="text-blue-600 hover:text-blue-800">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;