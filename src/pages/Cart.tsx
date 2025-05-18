import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, updateQuantity, clearCart } from '../store/slices/cartSlice';
import Notification from '../components/ui/Notification';
import { Trash2, ShoppingCart, ArrowRight, Plus, Minus } from 'lucide-react';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  
  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };
  
  const handleQuantityChange = (id: string, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };
  
  const handleCouponApply = () => {
    // Simulate coupon application for demo
    if (couponCode.toUpperCase() === 'WELCOME15') {
      setCouponApplied(true);
      setCouponDiscount(15);
    } else {
      alert('Invalid coupon code');
    }
  };
  
  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login', { state: { from: '/checkout' } });
    }
  };
  
  // Calculate totals
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = couponApplied ? (subtotal * couponDiscount / 100) : 0;
  const tax = (subtotal - discount) * 0.1; // Assuming 10% tax
  const shipping = subtotal > 50 ? 0 : 10; // Free shipping over $50
  const total = subtotal - discount + tax + shipping;
  
  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Notification />
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <ShoppingCart className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
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
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-5 gap-4 p-4 border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
                <div className="col-span-2">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>
              
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b border-gray-200 last:border-0">
                  <div className="md:grid md:grid-cols-5 md:gap-4 md:items-center">
                    {/* Product info */}
                    <div className="flex md:col-span-2 mb-4 md:mb-0">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex flex-col justify-between">
                        <div>
                          <Link to={`/product/${item.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                            {item.name}
                          </Link>
                        </div>
                        <button 
                          onClick={() => handleRemove(item.id)}
                          className="text-red-600 hover:text-red-800 text-sm flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:text-center mb-2 md:mb-0">
                      <span className="md:hidden inline-block w-24 font-medium">Price:</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:text-center mb-2 md:mb-0">
                      <span className="md:hidden inline-block w-24 font-medium">Quantity:</span>
                      <div className="inline-flex items-center border border-gray-300 rounded-md">
                        <button 
                          onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 text-gray-600 hover:text-gray-900"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-1 border-l border-r border-gray-300">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:text-gray-900"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="md:text-right font-medium">
                      <span className="md:hidden inline-block w-24 font-medium">Total:</span>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-4 bg-gray-50 flex flex-wrap justify-between items-center">
                <button 
                  onClick={() => dispatch(clearCart())}
                  className="text-red-600 hover:text-red-800 text-sm flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear Cart
                </button>
                
                <Link to="/products" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {couponApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount ({couponDiscount}%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
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
              
              {/* Coupon code */}
              {!couponApplied ? (
                <div className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-1">
                    Promo Code
                  </label>
                  <div className="flex">
                    <input
                      id="coupon"
                      type="text"
                      className="input rounded-r-none"
                      placeholder="Enter code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      onClick={handleCouponApply}
                      className="btn btn-outline rounded-l-none px-4"
                    >
                      Apply
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Try "WELCOME15" for 15% off</p>
                </div>
              ) : (
                <div className="bg-emerald-50 p-3 rounded-md mb-6 flex items-start">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-emerald-800">
                      Coupon "{couponCode}" applied!
                    </p>
                    <p className="text-xs text-emerald-600">
                      You saved ${discount.toFixed(2)} with this coupon.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setCouponApplied(false);
                      setCouponDiscount(0);
                      setCouponCode('');
                    }}
                    className="text-emerald-700 hover:text-emerald-900 text-xs underline"
                  >
                    Remove
                  </button>
                </div>
              )}
              
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full py-3 flex items-center justify-center"
              >
                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Secure checkout powered by Razorpay</p>
                <p className="mt-1">All transactions are encrypted and secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;