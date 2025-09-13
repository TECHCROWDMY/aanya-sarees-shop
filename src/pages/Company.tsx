import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

const CompanyPage = () => {
  const { companySlug } = useParams();
  
  // Helper function to create URL slug from company name
  const createSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
  
  // Find products by matching company slug
  const companyProducts = products.filter(product => 
    createSlug(product.company) === companySlug
  );
  
  // If no products found, create dummy company data
  let actualCompanyName = '';
  let dummyProducts = [];
  
  if (companyProducts.length === 0) {
    // Create dummy company data
    actualCompanyName = companySlug?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Unknown Company';
    dummyProducts = [
      {
        id: 'dummy-1',
        name: 'Classic Elegance Saree',
        slug: 'classic-elegance-saree',
        price: 9500,
        originalPrice: 12000,
        description: 'Beautiful traditional saree with exquisite craftsmanship and timeless design.',
        images: ['/assets/saree-1.jpg', '/assets/saree-2.jpg', '/assets/saree-3.jpg'],
        category: 'Traditional Sarees',
        material: 'Pure Silk',
        colors: ['Red', 'Gold', 'Maroon'],
        sizes: ['Free Size'],
        inStock: true,
        company: actualCompanyName,
        reviews: [
          {
            id: 'dummy-r1',
            customerName: 'Sarah Johnson',
            rating: 5,
            comment: 'Absolutely beautiful saree! The quality exceeded my expectations.',
            date: '2024-01-20'
          }
        ]
      },
      {
        id: 'dummy-2',
        name: 'Royal Heritage Collection',
        slug: 'royal-heritage-collection',
        price: 15500,
        description: 'Premium heritage saree with intricate embroidery and traditional patterns.',
        images: ['/assets/saree-2.jpg', '/assets/saree-4.jpg', '/assets/hero-saree.jpg'],
        category: 'Heritage Collection',
        material: 'Pure Silk with Gold Thread',
        colors: ['Purple', 'Gold', 'Royal Blue'],
        sizes: ['Free Size'],
        inStock: true,
        company: actualCompanyName,
        reviews: [
          {
            id: 'dummy-r2',
            customerName: 'Maya Patel',
            rating: 4,
            comment: 'Stunning design and great quality. Perfect for special occasions.',
            date: '2024-01-15'
          }
        ]
      },
      {
        id: 'dummy-3',
        name: 'Contemporary Fusion Saree',
        slug: 'contemporary-fusion-saree',
        price: 7500,
        originalPrice: 9000,
        description: 'Modern fusion saree combining traditional elements with contemporary design.',
        images: ['/assets/saree-3.jpg', '/assets/saree-1.jpg', '/assets/saree-4.jpg'],
        category: 'Fusion Collection',
        material: 'Silk Blend',
        colors: ['Teal', 'Silver', 'Navy Blue'],
        sizes: ['Free Size'],
        inStock: true,
        company: actualCompanyName,
        reviews: [
          {
            id: 'dummy-r3',
            customerName: 'Priya Singh',
            rating: 5,
            comment: 'Love this modern take on traditional sarees. Very comfortable and stylish.',
            date: '2024-01-25'
          }
        ]
      }
    ];
  }

  // Use actual products or dummy data
  const displayProducts = companyProducts.length > 0 ? companyProducts : dummyProducts;
  const finalCompanyName = companyProducts.length > 0 ? companyProducts[0].company : actualCompanyName;
  
  const maxProductPrice = Math.max(...displayProducts.map(p => p.price));
  const categories = [...new Set(displayProducts.map(product => product.category))];
  const sizes = [...new Set(displayProducts.map(product => product.sizes).flat())];

  const [filters, setFilters] = useState({
    category: '',
    minPrice: 0,
    maxPrice: maxProductPrice,
    size: '',
    search: '',
  });

  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
  };

  const filteredProducts = displayProducts.filter(product => {
    const matchesCategory = filters.category === '' || product.category === filters.category;
    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSize = filters.size === '' || product.sizes.includes(filters.size);
    const matchesSearch = filters.search === '' || product.name.toLowerCase().includes(filters.search.toLowerCase());

    return matchesCategory && matchesPrice && matchesSize && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Company Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-circular">{finalCompanyName}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-circular">
            Discover our collection of {displayProducts.length} beautiful sarees
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
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

          {/* Product Grid */}
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
      <Footer />
    </>
  );
};

export default CompanyPage;