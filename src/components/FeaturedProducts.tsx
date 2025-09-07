import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-circular text-3xl lg:text-5xl font-bold lg:leading-tight">
            Featured 
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {' '}Collection{' '}
            </span>
          </h2>
          <p className="font-circular text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked sarees that embody the perfect blend of traditional craftsmanship 
            and contemporary elegance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={(product) => console.log('Add to cart:', product)}
              onToggleWishlist={(product) => console.log('Toggle wishlist:', product)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="luxury"
            size="xl"
            className="font-circular group"
            onClick={() => navigate('/products')}
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;