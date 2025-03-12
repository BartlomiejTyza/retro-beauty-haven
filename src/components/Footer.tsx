
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vintage-cream py-12">
      <div className="vintage-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-dancing text-vintage-gold text-3xl mb-4">RetroGlow</h3>
            <p className="text-muted-foreground">
              Where vintage beauty meets modern expertise. Our 50s/60s inspired salon offers premium waxing 
              services in an atmosphere of timeless elegance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#prices" },
                { name: "Special Offers", href: "#promotions" },
                { name: "FAQ", href: "#faq" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Monday - Tuesday</span>
                <span className="text-muted-foreground">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Wednesday - Thursday</span>
                <span className="text-muted-foreground">9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Friday</span>
                <span className="text-muted-foreground">9:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span className="text-muted-foreground">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-vintage-gold hover:bg-vintage-gold hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-vintage-gold hover:bg-vintage-gold hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white text-vintage-gold hover:bg-vintage-gold hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for special offers and vintage beauty tips.
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 border border-vintage-gold/30 rounded-l-md focus:outline-none focus:ring-2 focus:ring-vintage-gold/50"
              />
              <button className="bg-vintage-gold text-white px-4 py-2 rounded-r-md hover:bg-vintage-gold/80 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-vintage-gold/20 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} RetroGlow Waxing Salon. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
