import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleMobileMenu, toggleSearch } from '../../store/slices/uiSlice';
import { logout } from '../../store/slices/authSlice';
import { Search, ShoppingCart, Heart, Menu, X, User, Package, LogOut, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const { mobileMenuOpen, searchOpen } = useSelector((state: RootState) => state.ui);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      dispatch(toggleSearch(false));
      setSearchTerm('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    setDropdownOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">ShopHub</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
            <Link to="/products/electronics" className="text-gray-700 hover:text-blue-600 transition-colors">Electronics</Link>
            <Link to="/products/clothing" className="text-gray-700 hover:text-blue-600 transition-colors">Clothing</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => dispatch(toggleSearch())} 
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-blue-600 transition-colors" aria-label="Wishlist">
              <Heart className="h-5 w-5" />
            </Link>
            
            <Link to="/cart" className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <span className="mr-1">{user.name.split(' ')[0]}</span>
                  <User className="h-5 w-5" />
                </button>
                
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 fade-in">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Link>
                    {user.isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="p-2 text-gray-600 relative" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2 text-gray-600"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md slide-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => dispatch(toggleMobileMenu(false))}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => dispatch(toggleMobileMenu(false))}
            >
              Products
            </Link>
            <Link 
              to="/products/electronics" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => dispatch(toggleMobileMenu(false))}
            >
              Electronics
            </Link>
            <Link 
              to="/products/clothing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => dispatch(toggleMobileMenu(false))}
            >
              Clothing
            </Link>
            <Link 
              to="/wishlist" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
              onClick={() => dispatch(toggleMobileMenu(false))}
            >
              Wishlist
            </Link>
            
            <div className="pt-4 pb-3 border-t border-gray-200">
              {user ? (
                <>
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800">{user.email}</p>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                    onClick={() => dispatch(toggleMobileMenu(false))}
                  >
                    <User className="h-5 w-5 mr-2" />
                    Dashboard
                  </Link>
                  {user.isAdmin && (
                    <Link 
                      to="/admin" 
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                      onClick={() => dispatch(toggleMobileMenu(false))}
                    >
                      <Settings className="h-5 w-5 mr-2" />
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      dispatch(logout());
                      dispatch(toggleMobileMenu(false));
                      navigate('/');
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <div className="px-3 py-2">
                  <Link 
                    to="/login" 
                    className="block btn btn-primary w-full justify-center"
                    onClick={() => dispatch(toggleMobileMenu(false))}
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 fade-in">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium">Search products</h2>
              <button 
                onClick={() => dispatch(toggleSearch(false))}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="input pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;