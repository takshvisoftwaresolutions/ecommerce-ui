import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Personal Information</h3>
                  <p className="text-gray-600">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2">
                    <li>Register an account</li>
                    <li>Place an order</li>
                    <li>Sign up for our newsletter</li>
                    <li>Contact us for support</li>
                    <li>Participate in promotions or surveys</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900">Automatically Collected Information</h3>
                  <p className="text-gray-600">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 mt-2">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Operating system</li>
                    <li>Access times</li>
                    <li>Pages viewed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-blue-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Processing and fulfilling your orders</li>
                <li>Sending order confirmations and updates</li>
                <li>Providing customer support</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Improving our website and services</li>
                <li>Detecting and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            {/* Information Security */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-blue-600" />
                Information Security
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-5">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure storage of personal information</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data security</li>
                </ul>
                <p>
                  However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
                <p>
                  We use the following types of cookies:
                </p>
                <ul className="list-disc pl-5">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how you use our website</li>
                  <li>Advertising cookies to provide relevant advertisements</li>
                  <li>Preference cookies to remember your settings</li>
                </ul>
              </div>
            </div>

            {/* Third-Party Disclosure */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Disclosure</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We may share your personal information with:
                </p>
                <ul className="list-disc pl-5">
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for secure payment handling</li>
                  <li>Shipping partners for order delivery</li>
                  <li>Marketing partners (with your consent)</li>
                  <li>Law enforcement when required by law</li>
                </ul>
                <p>
                  We require all third parties to respect the security of your personal information and to treat it in accordance with the law.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-5">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Withdraw consent for marketing communications</li>
                  <li>Request data portability</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Contact Us</h2>
              <p className="text-blue-700 mb-4">
                If you have any questions about this Privacy Policy or our practices, please contact us.
              </p>
              <div className="space-x-4">
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
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

export default PrivacyPolicy;