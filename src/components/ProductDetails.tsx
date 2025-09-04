import { useState } from 'react';

const ProductDetails = ({product}) => { 
  const [selectedSize, setSelectedSize] = useState(null);

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">
        
        {/* --- Product Image (Left) --- */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none aspect-square">
            <img
              src={product.images[0]}
              alt={product.name}
              className="absolute inset-0 w-full h-full rounded-xl shadow-lg object-cover"
            />
          </div>
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
          
          {/* Add to Cart Button */}
          <button
            onClick={() => console.log(`Added ${product.name} (size: ${selectedSize}) to cart`)}
            className="w-full lg:w-auto px-8 py-4 text-lg bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
