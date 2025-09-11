import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/context/cartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();
  const { addToCart, openCart } = useCart();

  // If the product is not found, display a message.
  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    addToCart({ ...product, size: selectedSize });
    openCart();
  };

  const handleBuyNow = () => {
    navigate('/checkout', { state: { product, selectedSize } });
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        
        {/* --- Product Image Gallery (Left) --- */}
        <div className="lg:w-1/2">
          {/* Main Image */}
          <div className="relative w-full aspect-square mb-4">
            <img
              src={product.images[selectedImageIndex]}
              alt={`${product.name} - Image ${selectedImageIndex + 1}`}
              className="w-full h-full rounded-xl shadow-luxury object-cover transition-all duration-300"
            />
            
            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-800" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5 text-gray-800" />
                </button>
              </>
            )}
            
            {/* Image Counter */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {product.images.length}
              </div>
            )}
          </div>
          
          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImageIndex === index
                      ? 'border-primary shadow-md ring-2 ring-primary/20'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* --- Product Details (Right) --- */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            ${(product.price / 100).toFixed(2)}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {product.description}
          </p>
          
          {/* Sizes Section */}
          <div>
            <h3 className="font-semibold mb-2">Available Sizes</h3>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    w-12 h-12 rounded-full border-2 
                    ${selectedSize === size
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                      : 'bg-white border-gray-300 dark:bg-gray-700 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }
                    transition-colors duration-200
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-8 py-4 text-lg bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="w-full sm:w-auto px-8 py-4 text-lg bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
