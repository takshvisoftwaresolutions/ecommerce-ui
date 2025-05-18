import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../store/slices/productSlice';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../../store/slices/wishlistSlice';
import { addNotification } from '../../store/slices/uiSlice';
import { RootState } from '../../store';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    }));
    
    dispatch(addNotification({
      type: 'success',
      message: `${product.name} added to cart!`,
    }));
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
      dispatch(addNotification({
        type: 'info',
        message: `${product.name} removed from wishlist`,
      }));
    } else {
      dispatch(addToWishlist(product));
      dispatch(addNotification({
        type: 'success',
        message: `${product.name} added to wishlist!`,
      }));
    }
  };
  
  return (
    <Link to={`/product/${product.id}`} className="card group relative">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full product-card-img transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleAddToCart}
            className="p-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleToggleWishlist}
            className={`p-2 ${isInWishlist ? 'bg-red-500' : 'bg-gray-800'} text-white rounded-full shadow-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isInWishlist ? 'focus:ring-red-500' : 'focus:ring-gray-500'
            }`}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className="h-5 w-5" fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        {/* Badge for featured products */}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-amber-500 text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-base font-medium text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <span className="text-xs text-gray-500">
            {product.stock > 0 ? (
              product.stock < 10 ? (
                <span className="text-amber-600">Only {product.stock} left</span>
              ) : (
                <span className="text-emerald-600">In Stock</span>
              )
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;