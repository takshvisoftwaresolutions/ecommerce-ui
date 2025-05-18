import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearCart } from '../store/slices/cartSlice';
import Notification from '../components/ui/Notification';
import { api } from '../services/api';
import { ShoppingBag, ArrowLeft, Check, CreditCard } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);
  
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });
  
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = subtotal > 50 ? 0 : 10; // Free shipping over $50
  const total = subtotal + tax + shipping;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setPaymentLoading(true);
      
      // In a real app, we would make an API call to create the order
      const orderData = {
        amount: Math.round(total * 100), // Razorpay expects amount in paise
        currency: 'INR',
        items: items,
        shipping: formData,
      };
      
      // For demo purposes, using a mock API response
      const orderResponse = await api.payments.createOrder(total);
      
      // Initialize Razorpay (this is mocked for demo)
      initializeRazorpayMock(orderResponse);
      
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentLoading(false);
    }
  };
  
  // Mock Razorpay integration for demo purposes
  const initializeRazorpayMock = (orderData: any) => {
    // Simulate Razorpay initialization and payment
    setTimeout(() => {
      // Simulate successful payment
      handlePaymentSuccess({
        razorpay_payment_id: `pay_${Date.now()}`,
        razorpay_order_id: orderData.id,
        razorpay_signature: 'mock_signature',
      });
    }, 2000);
  };
  
  const handlePaymentSuccess = async (paymentData: any) => {
    try {
      // In a real app, we would verify the payment and create the order
      await api.payments.verifyPayment(paymentData);
      
      // Create order in database
      const orderDetails = {
        items: items,
        shipping: formData,
        payment: {
          id: paymentData.razorpay_payment_id,
          status: 'completed',
        },
        total: total,
      };
      
      await api.orders.create(orderDetails);
      
      // Clear cart and redirect to success page
      dispatch(clearCart());
      navigate('/order-success', { 
        state: { 
          orderId: paymentData.razorpay_order_id,
        } 
      });
      
    } catch (error) {
      console.error('Payment verification error:', error);
      setPaymentLoading(false);
    }
  };
  
  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">You need to add items to your cart before checking out.</p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Notification />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/cart" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to cart
          </Link>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-bold mb-4">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Country */}
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="input"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                  
                  {/* Address */}
                  <div className="col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={3}
                      required
                      className="input"
                      value={formData.address}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      className="input"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State / Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      className="input"
                      value={formData.state}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {/* Zip Code */}
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      className="input"
                      value={formData.zipCode}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <h2 className="text-lg font-bold mb-4 border-t border-gray-200 pt-6">Payment Method</h2>
                <div className="mb-6">
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <div className="flex items-center">
                      <input
                        id="razorpay"
                        name="paymentMethod"
                        type="radio"
                        checked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label htmlFor="razorpay" className="ml-3 block">
                        <div className="flex items-center">
                          <CreditCard className="h-6 w-6 text-blue-600 mr-2" />
                          <span className="font-medium">Razorpay</span>
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            Recommended
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          Safe and secure payments via Razorpay. Credit/Debit cards, UPI, and more payment methods available.
                        </p>
                      </label>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    By proceeding, you agree to our <Link to="/terms" className="text-blue-600 hover:text-blue-800">Terms of Service</Link> and acknowledge our <Link to="/privacy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link>.
                  </p>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <button
                    type="submit"
                    disabled={paymentLoading}
                    className="w-full btn btn-primary py-3 flex items-center justify-center"
                  >
                    {paymentLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>Place Order & Pay ${total.toFixed(2)}</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="mb-6">
                <div className="max-h-80 overflow-y-auto pr-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex py-3 border-b border-gray-200 last:border-0">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        <p className="text-gray-900 font-medium mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">${total.toFixed(2)}</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free shipping on orders over $50</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Secure checkout with Razorpay</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">30-day easy returns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;