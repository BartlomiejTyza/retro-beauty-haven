
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 fifties-boomerang",
        isScrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="vintage-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center"
          >
            <span className="font-dancing text-3xl md:text-4xl text-vintage-gold fifties-heading">
              RetroGlow
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Prices", href: "#prices" },
              { name: "Special Offers", href: "#promotions" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative font-medium text-foreground hover:text-primary-foreground transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-vintage-gold hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="fifties-button transform hover:scale-105 text-sm">
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-1 rounded-md"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in fifties-pattern">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Prices", href: "#prices" },
                { name: "Special Offers", href: "#promotions" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block p-2 font-medium text-foreground hover:text-primary-foreground hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="block fifties-button text-center mx-4"
                onClick={toggleMenu}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
