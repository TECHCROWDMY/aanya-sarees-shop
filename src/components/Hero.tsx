import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroSaree from '@/assets/hero-saree.jpg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-luxury">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-muted-foreground font-circular">Trusted by 50,000+ customers</span>
            </div>
            
            <h1 className="font-circular text-4xl lg:text-6xl font-bold lg:leading-tight">
              Exquisite
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                {' '}Silk Sarees{' '}
              </span>
              <br />
              for Every Occasion
            </h1>
            
            <p className="font-circular text-lg text-muted-foreground leading-relaxed max-w-md">
              Discover our curated collection of handwoven silk sarees, 
              crafted by master artisans with centuries of tradition and 
              modern elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="font-circular group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="font-circular">
                View Catalog
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8 font-circular">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Authentic Silk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24h</div>
                <div className="text-sm text-muted-foreground">Fast Delivery</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src={heroSaree} 
                alt="Royal Purple Silk Saree" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-md rounded-full px-4 py-2 shadow-card">
              <span className="text-sm font-medium text-primary font-circular">New Collection</span>
            </div>
            
            {/* Price Badge */}
            <div className="font-circular absolute bottom-6 right-6 bg-background/95 backdrop-blur-md rounded-lg p-4 shadow-card">
              <div className="text-lg font-bold text-foreground">₹12,500</div>
              <div className="text-sm text-muted-foreground line-through">₹15,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;