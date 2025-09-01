import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onToggleWishlist }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative shadow-none transition-all duration-500 hover:cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <Badge className="font-circular bg-gold text-gold-foreground">Featured</Badge>
          )}
          {discount > 0 && (
            <Badge className="font-circular bg-crimson text-crimson-foreground">{discount}% OFF</Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 right-4 bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => onToggleWishlist?.(product)}
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {/* Quick Actions */}
        {/* <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            variant="hero" 
            className="w-full" 
            onClick={() => onAddToCart?.(product)}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div> */}
      </div>
      
      {/* Content */}
      <div className="flex flex-col pt-3 gap-2 pace-y-4">
        <div>
          <h3 className="text-[#4f4f4f] font-circular font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {/* <p className="font-circular text-sm text-muted-foreground">{product.category}</p> */}
        </div>
                
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="font-circular text-xs">{product.material}</Badge>
          {product.colors.map((color, index) => (
            <div 
              key={index}
              className="w-4 h-4 rounded-full border border-border"
              style={{ 
                backgroundColor: color.toLowerCase() === 'gold' ? '#FFD700' : 
                               color.toLowerCase() === 'purple' ? '#8A2BE2' :
                               color.toLowerCase() === 'green' ? '#32CD32' :
                               color.toLowerCase() === 'red' ? '#DC143C' :
                               color.toLowerCase() === 'navy blue' ? '#000080' :
                               color.toLowerCase() === 'golden yellow' ? '#FFAA00' :
                               color.toLowerCase() === 'silver' ? '#C0C0C0' : '#666'
              }}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#4f4f4f] font-circular text-xl font-bold text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="font-circular text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="text-sm text-muted-foreground">4.8</span>
          </div>
        </div>
        
        {!product.inStock && (
          <Badge variant="destructive" className="w-full justify-center">
            Out of Stock
          </Badge>
        )}
      </div>
    </div>
  );
};

export default ProductCard;