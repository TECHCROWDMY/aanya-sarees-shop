import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'; 
import { FaSearch, FaBars, FaPhone, FaGlobe } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { HeartIcon, UserIcon, ShoppingBagIcon } from '../icons';
import { useCart } from '@/context/cartContext';

const Header = ({ isHome = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const topBarRef = useRef(null);
  const ticking = useRef(false);

  const { cartItems, openCart } = useCart();

  const handleScroll = () => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        setIsTopBarVisible(currentScrollY === 0);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Utility Bar */}
      <div
        ref={topBarRef}
        className="border-b bg-muted/30 transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isTopBarVisible ? `${topBarRef.current?.scrollHeight}px` : '0px',
        }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="hidden lg:flex items-center space-x-6 font-circular">
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

            <div className="flex items-center space-x-4 font-circular">
              <div className="hidden lg:flex items-center text-muted-foreground">
                <FaPhone className="h-4 w-4 mr-1" />
                <span>Need Help? +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                  <FaGlobe className="h-4 w-4 mr-1" />
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
            <Link to="/" className="font-circular text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saree Elegance
            </Link>

            <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <Button variant="outline" className="font-circular rounded-r-none border-r-0 px-4">
                  All Categories
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <div className="relative flex-1">
                  <Input
                    placeholder="I'm shopping for..."
                    className="font-circular rounded-l-none pl-4 pr-12 border-l-0 focus:ring-2 focus:ring-primary"
                  />
                  <Button size="icon" className="absolute right-0 top-0 h-full rounded-l-none">
                    <FaSearch className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex relative">
                <HeartIcon className="h-8 w-8 fill-current" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  3
                </span>
              </Button>
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <UserIcon className="h-6 w-6 fill-current" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={openCart}
              >
                <ShoppingBagIcon className="h-6 w-6 fill-current" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                    {cartItems.length}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBars className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {isHome && (
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <nav className="hidden lg:flex items-center">
              <Button variant="ghost" className="font-circular text-primary-foreground hover:bg-primary-foreground/10 rounded-none py-6 px-6">
                <FaBars className="h-4 w-4 mr-2" />
                All Categories
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
              <div className="flex items-center space-x-8 ml-8 font-circular">
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
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Input placeholder="I'm shopping for..." className="bg-muted/50" />
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