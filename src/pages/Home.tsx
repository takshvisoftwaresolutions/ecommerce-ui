import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchProducts } from '../store/slices/productSlice';
import ProductCard from '../components/products/ProductCard';
import Notification from '../components/ui/Notification';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter featured products
  const featuredProducts = products.filter(product => product.featured);
  
  // Group products by category
  const groupedByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen">
      <Notification />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Shop the Latest Products at Amazing Prices
            </h1>
            <p className="text-lg mb-8 text-blue-100">
              Discover our curated collection of high-quality products for every need. From electronics to home goods, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md font-medium">
                Shop Now
              </Link>
              <Link to="/products/featured" className="btn border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium">
                Featured Products
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Shopping" 
              className="rounded-lg shadow-xl w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
            <Link to="/products/featured" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-solid border-blue-500 border-r-transparent"></div>
              <p className="mt-4 text-gray-500">Loading products...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center bg-red-50 rounded-lg">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => dispatch(fetchProducts())} 
                className="mt-4 btn bg-red-600 text-white hover:bg-red-700"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="product-grid">
              {featuredProducts.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Categories Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedByCategory).slice(0, 3).map(([category, products]) => (
              <div key={category} className="relative overflow-hidden rounded-lg shadow-md group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={products[0]?.image} 
                    alt={category} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
                      <p className="text-white/80 mb-4">{products.length} Products</p>
                      <Link 
                        to={`/products/${category.toLowerCase()}`} 
                        className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded font-medium transition-colors"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Special Offer</h2>
          <p className="text-xl mb-8">Get 15% off on your first order with code: <span className="font-bold">WELCOME15</span></p>
          <Link to="/products" className="btn bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-md font-medium inline-block">
            Shop Now
          </Link>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">New Arrivals</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="product-grid">
            {products.slice(4, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
                rating: 5,
                comment: "Excellent product quality and fast shipping. The customer service was also very helpful when I had questions."
              },
              {
                name: "Michael Chen",
                avatar: "https://randomuser.me/api/portraits/men/41.jpg",
                rating: 4,
                comment: "I've ordered multiple times from ShopHub and have always been satisfied with the products and service. Highly recommend!"
              },
              {
                name: "Jessica Davis",
                avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                rating: 5,
                comment: "The variety of products is amazing. I found exactly what I was looking for, and it arrived sooner than expected."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-xl mx-auto">Stay updated with our latest products, exclusive offers, and discounts delivered directly to your inbox.</p>
          
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              />
              <button 
                type="submit" 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;