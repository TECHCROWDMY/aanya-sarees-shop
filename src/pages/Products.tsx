import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Heart, SlidersHorizontal, ArrowUpNarrowWide, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for products
const mockProducts = [
  { id: 1, name: 'Minimalist Chair', category: 'Furniture', price: 150, originalPrice: 200, images: ['https://placehold.co/400x500/222/fff?text=Chair'], rating: 4.8 },
  { id: 2, name: 'Copper Lamp', category: 'Decor', price: 75, originalPrice: null, images: ['https://placehold.co/400x500/333/fff?text=Lamp'], rating: 4.5 },
  { id: 3, name: 'Ceramic Vase', category: 'Decor', price: 45, originalPrice: 50, images: ['https://placehold.co/400x500/444/fff?text=Vase'], rating: 4.9 },
  { id: 4, name: 'Wooden Desk', category: 'Furniture', price: 300, originalPrice: 350, images: ['https://placehold.co/400x500/555/fff?text=Desk'], rating: 4.7 },
  { id: 5, name: 'Smart Kettle', category: 'Kitchen', price: 90, originalPrice: null, images: ['https://placehold.co/400x500/666/fff?text=Kettle'], rating: 4.6 },
  { id: 6, name: 'Porcelain Mug', category: 'Kitchen', price: 20, originalPrice: null, images: ['https://placehold.co/400x500/777/fff?text=Mug'], rating: 4.2 },
  { id: 7, name: 'Leather Sofa', category: 'Furniture', price: 800, originalPrice: 1000, images: ['https://placehold.co/400x500/888/fff?text=Sofa'], rating: 5.0 },
  { id: 8, name: 'Artisan Bowl', category: 'Kitchen', price: 35, originalPrice: null, images: ['https://placehold.co/400x500/999/fff?text=Bowl'], rating: 4.4 },
  { id: 9, name: 'Side Table', category: 'Furniture', price: 120, originalPrice: 150, images: ['https://placehold.co/400x500/aaa/fff?text=Table'], rating: 4.3 },
  { id: 10, name: 'Wall Clock', category: 'Decor', price: 60, originalPrice: null, images: ['https://placehold.co/400x500/bbb/fff?text=Clock'], rating: 4.1 },
  { id: 11, name: 'Espresso Machine', category: 'Kitchen', price: 250, originalPrice: 300, images: ['https://placehold.co/400x500/ccc/fff?text=Machine'], rating: 4.9 },
  { id: 12, name: 'Pendant Light', category: 'Decor', price: 180, originalPrice: null, images: ['https://placehold.co/400x500/ddd/fff?text=Light'], rating: 4.7 },
];

// Reusable Button component
const Button = ({ children, className = '', onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center p-3 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 ${className}`}
  >
    {children}
  </button>
);

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-none hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discount > 0 && (
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">{discount}% OFF</div>
          )}
        </div>
        {/* Wishlist Button */}
        <button
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </button>
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button onClick={() => onAddToCart?.(product)} className="w-full bg-slate-800 hover:bg-slate-700 text-white">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      {/* Content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm text-gray-500">{product.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: 'All',
    minPrice: '',
    maxPrice: '',
  });
  const [sort, setSort] = useState('price-asc');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['All', ...new Set(mockProducts.map(p => p.category))];

  useEffect(() => {
    let newProducts = [...products];

    // Filter by category
    if (filters.category !== 'All') {
      newProducts = newProducts.filter(p => p.category === filters.category);
    }

    // Filter by price range
    const min = parseFloat(filters.minPrice);
    const max = parseFloat(filters.maxPrice);
    if (!isNaN(min)) {
      newProducts = newProducts.filter(p => p.price >= min);
    }
    if (!isNaN(max)) {
      newProducts = newProducts.filter(p => p.price <= max);
    }

    // Sort
    if (sort === 'price-asc') {
      newProducts.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(newProducts);
  }, [filters, sort, products]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: 'All', minPrice: '', maxPrice: '' });
  };
  
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart.`);
    // Here you would add the logic to update a shopping cart state
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50 min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      
      {/* Mobile Header */}
      <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-white shadow-sm lg:hidden">
        <h1 className="text-xl font-bold">Products</h1>
        <Button onClick={() => setIsMobileMenuOpen(true)} className="p-2 bg-gray-100 rounded-full">
          <Filter className="h-5 w-5" />
        </Button>
      </div>

      <main className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.aside
            initial={false}
            animate={{ x: isMobileMenuOpen ? 0 : '-100%', opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-30 w-full max-w-xs bg-white p-6 shadow-xl lg:static lg:max-w-none lg:w-1/4 lg:p-0 lg:shadow-none lg:opacity-100"
          >
            <div className="flex justify-between items-center mb-6 lg:hidden">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2"><Filter /> Filters</h2>
              <Button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full">
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex flex-col gap-8">
              {/* Category Filter */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleFilterChange('category', category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        filters.category === category
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-gray-500" />
                  Price Range
                </h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <ArrowUpNarrowWide className="h-5 w-5 text-gray-500" />
                  Sort By
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSort('price-asc')}
                    className={`flex-1 p-3 rounded-xl transition-colors ${
                      sort === 'price-asc'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    Cheapest First
                  </button>
                </div>
              </div>

              {/* Clear Filters Button */}
              {Object.values(filters).some(val => val !== '' && val !== 'All') && (
                <Button onClick={clearFilters} className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Clear Filters
                </Button>
              )}
            </div>
          </motion.aside>

          {/* Product Grid */}
          <div className="flex-1">
            <h1 className="hidden text-4xl font-extrabold text-gray-900 mb-6 lg:block">Our Products</h1>
            <AnimatePresence>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center p-16">
                    <p className="text-center text-lg text-gray-500">No products found matching your criteria.</p>
                    <Button onClick={clearFilters} className="mt-4 bg-gray-200 text-gray-800 hover:bg-gray-300">
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
