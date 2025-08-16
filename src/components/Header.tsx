import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, Heart, User, ChevronDown, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Utility Bar */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link to="/tracking" className="text-muted-foreground hover:text-foreground transition-colors">
                Order Tracking
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQs
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-1" />
                <span>Need Help? +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <Globe className="h-4 w-4 mr-1" />
                  English
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  INR
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saree Elegance
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <Button variant="outline" className="rounded-r-none border-r-0 px-4">
                  All Categories
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <div className="relative flex-1">
                  <Input 
                    placeholder="I'm shopping for..." 
                    className="rounded-l-none pl-4 pr-12 border-l-0 focus:ring-2 focus:ring-primary"
                  />
                  <Button size="icon" className="absolute right-0 top-0 h-full rounded-l-none">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
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
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <nav className="hidden md:flex items-center">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 rounded-none py-6 px-6">
              <Menu className="h-4 w-4 mr-2" />
              All Categories
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            <div className="flex items-center space-x-8 ml-8">
              <Link to="/women" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Women's Sarees
              </Link>
              <Link to="/designer" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Designer Collection
              </Link>
              <Link to="/silk" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Silk Sarees
              </Link>
              <Link to="/occasion" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Occasion Wear
              </Link>
              <Link to="/accessories" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Accessories
              </Link>
              <Link to="/blog" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Style Guide
              </Link>
              <Link to="/contact" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors py-6">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Input 
                placeholder="I'm shopping for..." 
                className="bg-muted/50"
              />
              <Link to="/women" className="text-foreground hover:text-primary transition-colors py-2">
                Women's Sarees
              </Link>
              <Link to="/designer" className="text-foreground hover:text-primary transition-colors py-2">
                Designer Collection
              </Link>
              <Link to="/silk" className="text-foreground hover:text-primary transition-colors py-2">
                Silk Sarees
              </Link>
              <Link to="/occasion" className="text-foreground hover:text-primary transition-colors py-2">
                Occasion Wear
              </Link>
              <Link to="/accessories" className="text-foreground hover:text-primary transition-colors py-2">
                Accessories
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;