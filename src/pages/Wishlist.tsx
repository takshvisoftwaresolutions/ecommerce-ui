import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromWishlist, clearWishlist } from '../store/slices/wishlistSlice';
import { addToCart } from '../store/slices/cartSlice';
import { addNotification } from '../store/slices/uiSlice';
import Notification from '../components/ui/Notification';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.wishlist);
  
  const handleRemove = (id: string, name: string) => {
    dispatch(removeFromWishlist(id));
    dispatch(addNotification({
      type: 'info',
      message: `${name} removed from wishlist`,
    }));
  };
  
  const handleAddToCart = (product: any) => {
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
  
  if (items.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Notification />
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-6">Save your favorite items to your wishlist for easy access later.</p>
            <Link to="/products" className="btn btn-primary">
              Discover Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <Notification />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">My Wishlist</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <p className="text-gray-600">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
            <button
              onClick={() => dispatch(clearWishlist())}
              className="text-red-600 hover:text-red-800 text-sm flex items-center"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Clear Wishlist
            </button>
          </div>
          
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row">
                <div className="sm:w-40 sm:h-40 flex-shrink-0 mb-4 sm:mb-0">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </Link>
                </div>
                
                <div className="flex-1 sm:ml-6">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <Link to={`/product/${item.id}`} className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                        {item.name}
                      </Link>
                      <p className="text-gray-500 mt-1">{item.category}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</span>
                      {item.stock > 0 ? (
                        <p className="text-sm text-emerald-600">In Stock</p>
                      ) : (
                        <p className="text-sm text-red-600">Out of Stock</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 justify-end">
                    <button
                      onClick={() => handleRemove(item.id, item.name)}
                      className="btn btn-outline py-2 flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </button>
                    
                    <button
                      onClick={() => handleAddToCart(item)}
                      disabled={item.stock === 0}
                      className={`btn ${
                        item.stock === 0 ? 'bg-gray-300 cursor-not-allowed' : 'btn-primary'
                      } py-2 flex items-center`}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {item.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;