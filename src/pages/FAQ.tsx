import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {/* Orders & Shipping */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Orders & Shipping</h2>
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">How long will my order take to arrive?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Standard shipping typically takes 3-5 business days within the country. International shipping can take 7-14 business days. Express shipping options are available at checkout for faster delivery.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">How can I track my order?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Returns & Refunds */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Returns & Refunds</h2>
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">What is your return policy?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some restrictions apply to certain products.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">How long do refunds take to process?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Once we receive your return, refunds typically take 5-10 business days to process. The time it takes for the money to appear in your account depends on your payment method and bank.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Payment & Security */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment & Security</h2>
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">What payment methods do you accept?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      We accept all major credit cards, debit cards, UPI, net banking, and popular digital wallets through our secure payment gateway, Razorpay.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">Is my payment information secure?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Yes, all payments are processed through Razorpay's secure payment gateway. We never store your payment information on our servers.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Account & Orders */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account & Orders</h2>
              <div className="space-y-4">
                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">How do I create an account?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Click the "Sign Up" button in the top right corner and follow the prompts. You'll need to provide your email address and create a password.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-lg shadow-sm">
                  <summary className="cursor-pointer p-6 flex justify-between items-center">
                    <span className="font-medium">Can I modify or cancel my order?</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      Orders can be modified or cancelled within 1 hour of placing them. After that, please contact our customer support team for assistance.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-900 mb-2">Still have questions?</h2>
            <p className="text-blue-700 mb-4">
              Our customer support team is here to help you with any questions or concerns.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;