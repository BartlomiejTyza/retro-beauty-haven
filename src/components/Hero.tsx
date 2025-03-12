
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 pb-16 overflow-hidden bg-gradient-to-b from-vintage-cream to-white"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-vintage-pink/20 animate-float blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-vintage-mint/20 animate-float blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-vintage-lavender/20 animate-float blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="vintage-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={cn(
            "text-center md:text-left space-y-6 transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <div className="inline-block px-4 py-1 rounded-full bg-vintage-mint/40 text-primary-foreground font-medium mb-2 text-sm">
              Premium Waxing Experience
            </div>
            <h1 className="tracking-tight">
              <span className="block text-foreground">The Art of</span>
              <span className="block text-vintage-gold font-dancing font-normal mt-1">Vintage Beauty</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Indulge in the timeless elegance of our 50s/60s inspired waxing salon. 
              Where classic beauty techniques meet modern expertise.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#prices" 
                className="primary-button group"
              >
                View Services
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <a 
                href="#contact" 
                className="secondary-button"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="relative aspect-square mx-auto max-w-md">
              <div className="absolute inset-0 rounded-full bg-vintage-peach/30 animate-float blur-xl"></div>
              
              <div className="relative border-8 border-white shadow-xl rounded-full overflow-hidden aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1629920061069-36a22d927ec1?q=80&w=1234&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Vintage beauty salon" 
                  className="object-cover h-full w-full"
                  width="500"
                  height="500"
                  loading="eager"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white vintage-card p-4 shadow-lg rounded-lg transform rotate-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <p className="font-dancing text-vintage-gold text-xl">Elegance in every touch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
