import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, Globe, Shield } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            {/* Shipping Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-blue-600" />
                Shipping Methods
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Standard Shipping</h3>
                  <p className="text-gray-600">
                    • Delivery within 3-5 business days<br />
                    • Free shipping on orders over $50<br />
                    • $4.99 for orders under $50
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Express Shipping</h3>
                  <p className="text-gray-600">
                    • Delivery within 1-2 business days<br />
                    • $9.99 flat rate<br />
                    • Available for select locations
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">International Shipping</h3>
                  <p className="text-gray-600">
                    • Delivery within 7-14 business days<br />
                    • Rates calculated at checkout<br />
                    • Import duties and taxes may apply
                  </p>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-600" />
                Processing Time
              </h2>
              <p className="text-gray-600 mb-4">
                Orders are typically processed within 1-2 business days after payment confirmation. During peak seasons or promotional periods, processing times may be slightly longer.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Orders placed before 2 PM EST on business days are processed the same day</li>
                <li>Orders placed after 2 PM EST will be processed the next business day</li>
                <li>Orders placed on weekends or holidays will be processed the next business day</li>
              </ul>
            </div>

            {/* Shipping Restrictions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="h-6 w-6 mr-2 text-blue-600" />
                Shipping Restrictions
              </h2>
              <p className="text-gray-600 mb-4">
                We currently ship to most countries worldwide. However, there are some restrictions on certain products and destinations.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Some products may not be available for international shipping due to regulations</li>
                <li>Certain remote locations may have limited shipping options</li>
                <li>Additional restrictions may apply to specific products or regions</li>
              </ul>
            </div>

            {/* Tracking & Insurance */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Tracking & Insurance
              </h2>
              <p className="text-gray-600 mb-4">
                All orders include tracking information and basic insurance coverage.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Tracking information is provided via email once your order ships</li>
                <li>All shipments are insured against loss or damage during transit</li>
                <li>Additional insurance coverage is available for purchase at checkout</li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h2>
              <p className="text-blue-700 mb-4">
                If you have any questions about our shipping policy or need assistance tracking your order, our customer support team is here to help.
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

export default ShippingPolicy;