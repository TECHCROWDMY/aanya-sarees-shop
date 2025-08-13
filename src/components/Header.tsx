import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Saree Elegance
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/collection" className="text-foreground hover:text-primary transition-colors">
              Collection
            </Link>
            <Link to="/silk-sarees" className="text-foreground hover:text-primary transition-colors">
              Silk Sarees
            </Link>
            <Link to="/designer" className="text-foreground hover:text-primary transition-colors">
              Designer
            </Link>
            <Link to="/occasion" className="text-foreground hover:text-primary transition-colors">
              Occasion Wear
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative max-w-md flex-1 mx-8">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search sarees..." 
              className="pl-10 bg-muted/50 border-none focus:bg-background focus:shadow-card transition-all duration-300"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              <Input 
                placeholder="Search sarees..." 
                className="bg-muted/50"
              />
              <Link to="/collection" className="text-foreground hover:text-primary transition-colors">
                Collection
              </Link>
              <Link to="/silk-sarees" className="text-foreground hover:text-primary transition-colors">
                Silk Sarees
              </Link>
              <Link to="/designer" className="text-foreground hover:text-primary transition-colors">
                Designer
              </Link>
              <Link to="/occasion" className="text-foreground hover:text-primary transition-colors">
                Occasion Wear
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;