import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-16">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-6 mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>
          <Link to="/products" className="btn btn-outline flex items-center justify-center">
            <Search className="mr-2 h-5 w-5" />
            Browse Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;