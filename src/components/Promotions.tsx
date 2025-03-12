
import { useRef, useEffect } from 'react';
import { Gift, Sparkles, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Promotions = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const offers = [
    {
      title: "First-Time Client Special",
      description: "Enjoy 15% off your first waxing service with us. Experience the RetroGlow difference!",
      icon: <Gift size={24} className="text-vintage-gold" />,
      badge: "New Clients"
    },
    {
      title: "Package Deal Savings",
      description: "Book any package service and receive 20% off your next booking within 30 days.",
      icon: <Sparkles size={24} className="text-vintage-gold" />,
      badge: "Best Value"
    },
    {
      title: "Midweek Retreat",
      description: "Visit us Tuesday-Thursday before 2pm for 10% off any service. The perfect lunchtime treat!",
      icon: <Calendar size={24} className="text-vintage-gold" />,
      badge: "Limited Time"
    },
    {
      title: "Refer a Friend",
      description: "When you refer a friend, you both receive $15 off your next visit. Beauty is better shared!",
      icon: <Gift size={24} className="text-vintage-gold" />,
      badge: "For Everyone"
    }
  ];

  return (
    <section 
      id="promotions"
      ref={sectionRef}
      className="vintage-section relative bg-vintage-cream/50 opacity-0"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-vintage-pink/20 animate-float blur-3xl" />
        <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-vintage-mint/20 animate-float blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="vintage-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-vintage-gold/30 text-primary-foreground font-medium mb-4 text-sm">
            Special Offers
          </div>
          <h2 className="section-title mb-6 pb-3">
            Exclusive Promotions
          </h2>
          <p className="text-muted-foreground text-lg">
            Indulge in our timeless beauty treatments at special prices with these exclusive offers.
            Treat yourself to vintage luxury for less.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={cn(
                "vintage-card p-6 border border-vintage-gold/20 hover:border-vintage-gold/40 transition-all duration-300 transform",
                (index % 2 === 0) ? "hover:rotate-1" : "hover:-rotate-1"
              )}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-vintage-cream flex-shrink-0">
                  {offer.icon}
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-semibold">{offer.title}</h3>
                    <span className="ml-auto bg-vintage-pink/40 text-xs font-semibold px-2 py-1 rounded-full">
                      {offer.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{offer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative">
          <div 
            className="vintage-card p-8 border-2 border-vintage-gold/30 relative z-10 max-w-4xl mx-auto"
          >
            <div className="text-center mb-6">
              <h3 className="font-dancing text-3xl text-vintage-gold mb-2">Vintage Beauty Day</h3>
              <p className="text-lg font-medium">Every Last Saturday of the Month</p>
            </div>
            
            <p className="text-center text-muted-foreground mb-8">
              Join us for our special monthly event featuring complimentary mini vintage hairstyling 
              with any waxing service, retro refreshments, and an extra 15% off all packages.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <div className="flex items-center">
                <Calendar className="mr-2 text-vintage-gold" size={20} />
                <span>Last Saturday Monthly</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-vintage-gold" size={20} />
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <a href="#contact" className="primary-button whitespace-nowrap">
                Book Your Spot
              </a>
            </div>
          </div>
          
          <div className="absolute top-6 left-6 w-full h-full border-2 border-vintage-gold/20 -z-10"></div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            * All promotions cannot be combined with other offers. Valid ID required for age-restricted offers. 
            Please mention the offer at the time of booking to redeem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
