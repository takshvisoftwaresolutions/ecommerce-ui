import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setFilter, clearFilters } from '../../store/slices/productSlice';
import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children, defaultExpanded = true }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex items-center justify-between w-full text-left font-medium"
        onClick={() => setExpanded(!expanded)}
      >
        {title}
        {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      {expanded && <div className="mt-3">{children}</div>}
    </div>
  );
};

interface ProductFilterProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ isMobile = false, onClose }) => {
  const dispatch = useDispatch();
  const { categories, brands, filters } = useSelector((state: RootState) => state.products);
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'minPrice' | 'maxPrice') => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    dispatch(setFilter({ key: type, value }));
  };
  
  const handleRatingChange = (rating: number) => {
    dispatch(setFilter({ key: 'rating', value: rating === filters.rating ? null : rating }));
  };
  
  const handleClearFilters = () => {
    dispatch(clearFilters());
  };
  
  return (
    <div className={`bg-white ${isMobile ? 'p-4 h-full' : 'p-0'}`}>
      {isMobile && (
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">Filters</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2 text-gray-500" />
          <span className="font-medium">Filters</span>
        </div>
        <button 
          onClick={handleClearFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      </div>
      
      {/* Categories */}
      <FilterSection title="Categories">
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={filters.category === category}
                onChange={() => dispatch(setFilter({ 
                  key: 'category', 
                  value: filters.category === category ? null : category
                }))}
              />
              <span className="ml-2 text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </FilterSection>
      
      {/* Price Range */}
      <FilterSection title="Price Range">
        <div className="space-y-3">
          <div className="flex items-center">
            <span className="w-8 text-gray-500">$</span>
            <input
              type="number"
              placeholder="Min"
              min="0"
              className="input"
              value={filters.minPrice !== null ? filters.minPrice : ''}
              onChange={(e) => handlePriceChange(e, 'minPrice')}
            />
          </div>
          <div className="flex items-center">
            <span className="w-8 text-gray-500">$</span>
            <input
              type="number"
              placeholder="Max"
              min="0"
              className="input"
              value={filters.maxPrice !== null ? filters.maxPrice : ''}
              onChange={(e) => handlePriceChange(e, 'maxPrice')}
            />
          </div>
        </div>
      </FilterSection>
      
      {/* Brands */}
      <FilterSection title="Brands">
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={filters.brand === brand}
                onChange={() => dispatch(setFilter({ 
                  key: 'brand', 
                  value: filters.brand === brand ? null : brand
                }))}
              />
              <span className="ml-2 text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>
      
      {/* Ratings */}
      <FilterSection title="Ratings">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              className="w-full flex items-center text-left"
              onClick={() => handleRatingChange(rating)}
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-700">& Up</span>
              </div>
              {filters.rating === rating && (
                <X className="h-4 w-4 ml-auto text-gray-500" />
              )}
            </button>
          ))}
        </div>
      </FilterSection>
      
      {isMobile && (
        <div className="mt-6">
          <button 
            onClick={onClose}
            className="w-full btn btn-primary"
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;