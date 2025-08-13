import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Saree Elegance
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Celebrating the timeless beauty of Indian sarees with authentic craftsmanship 
              and contemporary designs for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/collection" className="text-muted-foreground hover:text-primary transition-colors">
                All Collections
              </Link>
              <Link to="/silk-sarees" className="text-muted-foreground hover:text-primary transition-colors">
                Silk Sarees
              </Link>
              <Link to="/designer" className="text-muted-foreground hover:text-primary transition-colors">
                Designer Wear
              </Link>
              <Link to="/bridal" className="text-muted-foreground hover:text-primary transition-colors">
                Bridal Collection
              </Link>
              <Link to="/sale" className="text-muted-foreground hover:text-primary transition-colors">
                Sale
              </Link>
            </nav>
          </div>
          
          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Customer Care</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link to="/care-instructions" className="text-muted-foreground hover:text-primary transition-colors">
                Care Instructions
              </Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchange
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <Input placeholder="Enter your email" className="bg-background" />
              <Button variant="luxury" className="w-full">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@sareeelegance.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Saree Elegance. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;