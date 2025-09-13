import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

// Dynamically find the maximum price to set the slider range
const maxProductPrice = Math.max(...products.map(p => p.price));

const categories = [...new Set(products.map(product => product.category))];
const sizes = [...new Set(products.map(product => product.sizes).flat())];

const AllProducts = () => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: maxProductPrice, // <-- CORRECTED: Use a value that includes all products
    size: '',
    search: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = filters.category === '' || product.category === filters.category;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSize = filters.size === '' || product.sizes.includes(filters.size);
    const matchesSearch = filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase());

    return matchesCategory && matchesPrice && matchesSize && matchesSearch;
  });

  return (
    <div className="mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* --- Filter Sidebar (Left) --- */}
        <div className="lg:w-1/5 p-4">
          <h2 className="text-xl font-bold mb-4 font-circular">Filters</h2>

          {/* Search Input */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 font-circular">Search Product</h3>
            <Input
              type="text"
              placeholder="Search by name..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="font-circular"
            />
          </div>

          {/* Category Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 font-circular">Category</h3>
            <select
              className="w-full p-2 border rounded-md bg-background font-circular"
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 font-circular">Price Range</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-circular">${(filters.minPrice / 100).toFixed(0)}</span>
              <Slider
                className="w-full"
                value={[filters.minPrice, filters.maxPrice]}
                onValueChange={([min, max]) => {
                  handleFilterChange('minPrice', min);
                  handleFilterChange('maxPrice', max);
                }}
                min={0}
                max={maxProductPrice}
                step={100}
              />
              <span className="text-sm font-circular">${(filters.maxPrice / 100).toFixed(0)}</span>
            </div>
          </div>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 font-circular">Size</h3>
            <select
              className="w-full p-2 border rounded-md bg-background font-circular"
              value={filters.size}
              onChange={(e) => handleFilterChange('size', e.target.value)}
            >
              <option value="">All Sizes</option>
              {sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* --- Product Grid (Right) --- */}
        <div className="lg:w-4/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={() => console.log('Add to cart:', product.id)}
                  onToggleWishlist={() => console.log('Toggle wishlist:', product.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-lg text-muted-foreground">
                <p className="font-circular">No products match your criteria. Please try different filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;