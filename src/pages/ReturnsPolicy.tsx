import React from 'react';
import { Link } from 'react-router-dom';
import { RotateCcw, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const ReturnsPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Returns & Refunds Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            {/* Return Policy Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <RotateCcw className="h-6 w-6 mr-2 text-blue-600" />
                Return Policy Overview
              </h2>
              <p className="text-gray-600 mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 30 days of delivery for most items.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Eligible Items</h3>
                    <p className="text-gray-600">
                      Most items are eligible for return if they are:
                      <ul className="list-disc pl-5 mt-2">
                        <li>Unused and in original condition</li>
                        <li>In original packaging</li>
                        <li>Include all accessories and tags</li>
                        <li>Accompanied by the original receipt</li>
                      </ul>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 mr-2" />
                  <div>
                    <h3 className="font-medium text-gray-900">Non-Returnable Items</h3>
                    <p className="text-gray-600">
                      The following items cannot be returned:
                      <ul className="list-disc pl-5 mt-2">
                        <li>Personal care items</li>
                        <li>Customized or personalized products</li>
                        <li>Downloadable software products</li>
                        <li>Gift cards</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Process */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-600" />
                Return Process
              </h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">1</span>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Initiate Return</h3>
                    <p className="text-gray-600">
                      Log into your account and go to your order history. Select the item you wish to return and follow the prompts to initiate the return process.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">2</span>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Package Your Return</h3>
                    <p className="text-gray-600">
                      Pack the item securely in its original packaging along with all accessories and tags. Include the return form in your package.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">3</span>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Ship Your Return</h3>
                    <p className="text-gray-600">
                      Use the provided return shipping label or send the package to our returns address. We recommend using a tracked shipping service.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">4</span>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Refund Processing</h3>
                    <p className="text-gray-600">
                      Once we receive and inspect your return, we'll process your refund within 5-10 business days. You'll receive an email confirmation when your refund is processed.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Refund Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Refund Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Refund Methods</h3>
                  <p className="text-gray-600">
                    Refunds will be issued to the original payment method used for the purchase:
                    <ul className="list-disc pl-5 mt-2">
                      <li>Credit/Debit Cards: 5-10 business days</li>
                      <li>Bank Transfer: 3-5 business days</li>
                      <li>Store Credit: Immediate</li>
                    </ul>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Refund Amount</h3>
                  <p className="text-gray-600">
                    Your refund will include:
                    <ul className="list-disc pl-5 mt-2">
                      <li>Original purchase price of the item</li>
                      <li>Original shipping charges (if applicable)</li>
                      <li>Taxes paid</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Need Assistance?</h2>
              <p className="text-blue-700 mb-4">
                If you have any questions about returns or refunds, our customer support team is here to help.
              </p>
              <div className="space-x-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Support
                </Link>
                <Link to="/faq" className="btn btn-outline">
                  View FAQ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;