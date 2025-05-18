import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchProductById } from '../store/slices/productSlice';
import { addToCart } from '../store/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '../store/slices/wishlistSlice';
import { addNotification } from '../store/slices/uiSlice';
import Notification from '../components/ui/Notification';
import { ShoppingCart, Heart, Check, Truck, RotateCcw, Shield, ArrowLeft } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<any>();
  const { product, loading, error, products } = useSelector((state: RootState) => state.products);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlistItems.some(item => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);
  
  const handleAddToCart = () => {
    if (product) {
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
    }
  };
  
  const handleToggleWishlist = () => {
    if (!product) return;
    
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
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-solid border-blue-500 border-r-transparent"></div>
        <p className="ml-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }
  
  if (error || !product) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-16">
        <div className="bg-red-50 p-8 rounded-lg text-center">
          <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white min-h-screen">
      <Notification />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to products
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <div className="mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-[400px] md:h-[500px] object-contain"
                />
              </div>
              
              {/* Thumbnail images */}
              <div className="flex gap-2 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 rounded border-2 overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="mb-2">
              <Link to={`/products/${product.category.name.toLowerCase()}`} className="text-sm text-blue-600 hover:text-blue-800">
                {product.category.name}
              </Link>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
              </div>
              <span className="mx-2 text-gray-400">|</span>
              <Link to="#reviews" className="text-blue-600 hover:text-blue-800 text-sm">
                {product.reviewCount} reviews
              </Link>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>
            
            {/* Features */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Features</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Premium quality materials for durability</li>
                <li>Innovative design for optimal performance</li>
                <li>Easy to use and maintain</li>
                <li>Elegant aesthetic that complements any space</li>
              </ul>
            </div>
            
            {/* Stock & Brand info */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 mr-2">Brand:</span>
                  <span>{product.brand}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-900 mr-2">Availability:</span>
                  {product.stock > 0 ? (
                    <span className="text-emerald-600 flex items-center">
                      <Check className="h-4 w-4 mr-1" />
                      In Stock ({product.stock} available)
                    </span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>
            
            {/* Quantity & Add to Cart */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-4">
                <div className="w-24">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <select
                    id="quantity"
                    className="input py-2"
                    value={quantity}
                    onChange={handleQuantityChange}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    className={`w-full btn ${
                      product.stock === 0 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'btn-primary'
                    } py-3 flex items-center justify-center`}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </button>
                </div>
                
                <button
                  onClick={handleToggleWishlist}
                  className={`p-3 rounded-md border ${
                    isInWishlist 
                      ? 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100' 
                      : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                >
                  <Heart className="h-6 w-6" fill={isInWishlist ? 'currentColor' : 'none'} />
                </button>
              </div>
            </div>
            
            {/* Shipping, Returns, warranty info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium">Free Shipping</h3>
                    <p className="text-xs text-gray-500">For orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium">Easy Returns</h3>
                    <p className="text-xs text-gray-500">30-day money back</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-gray-600 mr-3" />
                  <div>
                    <h3 className="text-sm font-medium">2-Year Warranty</h3>
                    <p className="text-xs text-gray-500">Full coverage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews section */}
        <section id="reviews" className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">Review Summary</h3>
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-500' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xl font-bold">{product.rating.toFixed(1)}</span>
                  <span className="text-gray-500 ml-2">out of 5</span>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((star) => {
                    // Simulate review distribution for demo purposes
                    const percentage = star === 5 ? 70 : 
                                       star === 4 ? 20 : 
                                       star === 3 ? 6 : 
                                       star === 2 ? 3 : 1;
                    
                    return (
                      <div key={star} className="flex items-center">
                        <div className="w-8 text-gray-600 font-medium">{star}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 ml-2 mr-4">
                          <div 
                            className="bg-amber-500 h-2.5 rounded-full" 
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="w-8 text-gray-600 text-sm">{percentage}%</div>
                      </div>
                    );
                  })}
                </div>
                
                <button className="mt-6 w-full btn btn-outline py-2">
                  Write a Review
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3">
              {/* Review list - using static data for demo */}
              <div className="space-y-6">
                {[
                  {
                    name: "Emily Johnson",
                    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
                    rating: 5,
                    date: "2 months ago",
                    comment: "Absolutely love this product! The quality is exceptional and it works exactly as described. Would definitely buy again and recommend to friends and family."
                  },
                  {
                    name: "David Wilson",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    rating: 4,
                    date: "3 months ago",
                    comment: "Great product overall. It meets most of my needs and the build quality is solid. The only minor issue I had was with the setup, which was a bit confusing at first."
                  },
                  {
                    name: "Michelle Lee",
                    avatar: "https://randomuser.me/api/portraits/women/35.jpg",
                    rating: 5,
                    date: "1 month ago",
                    comment: "This product exceeded my expectations. It's well-designed, easy to use, and the customer service was excellent when I had questions. Highly recommend!"
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6">
                    <div className="flex items-start">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          <h4 className="font-medium text-gray-900 mr-2">{review.name}</h4>
                          <span className="text-gray-500 text-sm">· {review.date}</span>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`} 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-2 text-xs text-gray-500">Verified Purchase</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn btn-outline">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related products */}
        <section className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          
          <div className="product-grid">
            {/* Filter products from the same category for recommendations */}
            {products
              ?.filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="card group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-lg font-semibold mt-1">${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;