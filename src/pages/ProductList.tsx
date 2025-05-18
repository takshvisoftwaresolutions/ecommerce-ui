import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchProducts, setFilter } from '../store/slices/productSlice';
import { RootState } from '../store';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import Notification from '../components/ui/Notification';
import { Filter as FilterIcon, X, SlidersHorizontal } from 'lucide-react';

const ProductList: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { category } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const { products, loading, error, filters } = useSelector((state: RootState) => state.products);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [sortOption, setSortOption] = useState('newest');
  
  // Get search term from URL if present
  const searchTerm = searchParams.get('search') || '';
  
  useEffect(() => {
    if (searchTerm) {
      dispatch(setFilter({ key: 'search', value: searchTerm }));
    }
    
    if (category) {
      dispatch(setFilter({ key: 'category', value: category }));
    }
    
    dispatch(fetchProducts());
  }, [dispatch, category, searchTerm]);
  
  // Filter products based on criteria
  const filteredProducts = products.filter(product => {
    // Filter by search
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (filters.category && product.category !== filters.category) {
      return false;
    }
    
    // Filter by subcategory
    if (filters.subcategory && product.subcategory !== filters.subcategory) {
      return false;
    }
    
    // Filter by brand
    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }
    
    // Filter by price range
    if (filters.minPrice !== null && product.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice !== null && product.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by rating
    if (filters.rating !== null && product.rating < filters.rating) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'newest':
        return 0; // In a real app, would sort by date
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Notification />
      
      {/* Page header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {category ? category : searchTerm ? `Search: "${searchTerm}"` : 'All Products'}
          </h1>
          <p className="text-gray-600 mt-2">
            {filteredProducts.length} products available
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                <ProductFilter />
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Sort and filter - mobile & desktop */}
            <div className="bg-white rounded-lg shadow-sm mb-6 p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <SlidersHorizontal className="h-5 w-5 mr-2 text-gray-400" />
                  <span className="font-medium">Sort By:</span>
                  <select
                    className="ml-2 p-2 text-sm border-none rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
                
                {/* Applied filters */}
                <div className="flex flex-wrap items-center gap-2">
                  {filters.category && (
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                      Category: {filters.category}
                      <button 
                        onClick={() => dispatch(setFilter({ key: 'category', value: null }))}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  {filters.brand && (
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                      Brand: {filters.brand}
                      <button 
                        onClick={() => dispatch(setFilter({ key: 'brand', value: null }))}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  {filters.minPrice !== null && (
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                      Min: ${filters.minPrice}
                      <button 
                        onClick={() => dispatch(setFilter({ key: 'minPrice', value: null }))}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  {filters.maxPrice !== null && (
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                      Max: ${filters.maxPrice}
                      <button 
                        onClick={() => dispatch(setFilter({ key: 'maxPrice', value: null }))}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  {filters.search && (
                    <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-sm flex items-center">
                      Search: "{filters.search}"
                      <button 
                        onClick={() => dispatch(setFilter({ key: 'search', value: '' }))}
                        className="ml-1 text-blue-400 hover:text-blue-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                  
                  {/* Mobile filter button */}
                  <button
                    className="md:hidden ml-auto btn btn-outline flex items-center"
                    onClick={() => setFilterDrawerOpen(true)}
                  >
                    <FilterIcon className="h-4 w-4 mr-2" />
                    Filters
                  </button>
                </div>
              </div>
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
            ) : sortedProducts.length === 0 ? (
              <div className="p-8 text-center bg-gray-50 rounded-lg">
                <p className="text-gray-600">No products found matching your criteria.</p>
                <button 
                  onClick={() => dispatch(setFilter({ key: 'search', value: '' }))} 
                  className="mt-4 btn btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile filter drawer */}
      {filterDrawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setFilterDrawerOpen(false)}
          ></div>
          <div className="relative flex flex-col w-80 max-w-[80%] h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <ProductFilter isMobile onClose={() => setFilterDrawerOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;