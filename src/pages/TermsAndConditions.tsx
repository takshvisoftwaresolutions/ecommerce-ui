import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-blue max-w-none">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-blue-600" />
                Introduction
              </h2>
              <p className="text-gray-600 mb-4">
                These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use our website if you do not accept all of the terms and conditions stated on this page.
              </p>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            {/* Definitions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Definitions</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>
                  <strong>"User"</strong> refers to any person accessing or using our website.
                </li>
                <li>
                  <strong>"Services"</strong> refers to all products, services, and content provided through our website.
                </li>
                <li>
                  <strong>"Content"</strong> includes text, images, audio, video, and all other forms of information or data.
                </li>
              </ul>
            </div>

            {/* License to Use */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">License to Use Website</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Unless otherwise stated, we own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
                </p>
                <p>
                  You may view and/or print pages from the website for your own personal use subject to restrictions set in these terms and conditions.
                </p>
                <p>
                  You must not:
                </p>
                <ul className="list-disc pl-5">
                  <li>Republish material from this website</li>
                  <li>Sell, rent, or sub-license material from this website</li>
                  <li>Reproduce, duplicate, or copy material from this website</li>
                  <li>Redistribute content from this website</li>
                </ul>
              </div>
            </div>

            {/* User Account */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-blue-600" />
                User Account
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account and password, including but not limited to restricting access to your computer and/or account.
                </p>
                <p>
                  You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
                </p>
              </div>
            </div>

            {/* Products and Services */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Products and Services</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  All products and services are subject to availability. We reserve the right to discontinue any product or service at any time.
                </p>
                <p>
                  Prices for products and services are subject to change without notice. We reserve the right to modify or discontinue any product or service without notice.
                </p>
                <p>
                  We shall not be liable to you or any third party for any modification, price change, suspension, or discontinuance of any product or service.
                </p>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
                Prohibited Activities
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  You may not access or use the Site for any purpose other than that for which we make the Site available.
                </p>
                <ul className="list-disc pl-5">
                  <li>Systematic retrieval of data or content to create a collection</li>
                  <li>Trick, defraud, or mislead us or other users</li>
                  <li>Circumvent, disable, or interfere with security features</li>
                  <li>Engage in unauthorized framing of or linking to the website</li>
                  <li>Upload or transmit viruses or any other malicious code</li>
                  <li>Interfere with or disrupt the website or servers</li>
                </ul>
              </div>
            </div>

            {/* Disclaimer and Limitation of Liability */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Disclaimer and Limitation of Liability</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms of service at any time. We do so by posting and drawing attention to the updated terms on the Site. Your decision to continue to visit and make use of the Site after such changes constitutes your agreement to all such changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">Questions About the Terms?</h2>
              <p className="text-blue-700 mb-4">
                If you have any questions about these Terms and Conditions, please contact us.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;