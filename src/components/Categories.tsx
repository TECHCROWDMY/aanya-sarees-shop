import { Button } from '@/components/ui/button';

const categories = [
  {
    name: 'Silk Sarees',
    description: 'Pure silk sarees with traditional weaving',
    count: '150+ styles',
    color: 'bg-royal-purple'
  },
  {
    name: 'Designer Collection',
    description: 'Contemporary designs by top designers',
    count: '80+ styles',
    color: 'bg-emerald'
  },
  {
    name: 'Wedding Special',
    description: 'Exclusive bridal and wedding collection',
    count: '120+ styles',
    color: 'bg-crimson'
  },
  {
    name: 'Casual Elegance',
    description: 'Elegant sarees for daily wear',
    count: '200+ styles',
    color: 'bg-gold'
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Shop by 
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories to find the perfect saree 
            for every occasion and personal style.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-card rounded-xl p-8 text-center space-y-4 shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${category.color} rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-product`}>
                {category.name.charAt(0)}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
                <div className="text-xs font-medium text-primary">
                  {category.count}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                Explore
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;