
import { useEffect, useRef } from 'react';
import { Sparkles, Stars, Coffee, Music } from 'lucide-react';

const About = () => {
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

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="vintage-section bg-gradient-to-b from-white to-vintage-mint/20 opacity-0 transition-opacity duration-700"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-20 w-24 h-24 md:w-36 md:h-36 bg-contain bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://i.imgur.com/3HBgHhm.png')" }}></div>
      <div className="absolute right-0 bottom-20 w-24 h-24 md:w-36 md:h-36 bg-contain bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://i.imgur.com/cYIAeGq.png')" }}></div>
      
      <div className="vintage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="retro-badge">
            Our Story
          </div>
          <h2 className="section-title mb-6 pb-3 relative">
            A Timeless Approach to Beauty
            <span className="absolute -top-6 -right-6 text-5xl text-vintage-gold opacity-10 font-dancing">Glamour</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Journey with us into a world where the glamour of the 1950s and 60s meets modern waxing expertise, 
            creating an experience that's both nostalgic and refreshingly contemporary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Music size={28} className="text-vintage-gold" />,
              title: "Retro Ambiance",
              description: "Step into our salon and be transported to the elegant era of the 1950s and 60s, complete with vintage decor and classic music that sets the perfect mood for your beauty treatment."
            },
            {
              icon: <Stars size={28} className="text-vintage-gold" />,
              title: "Modern Techniques",
              description: "While our aesthetic is vintage-inspired, our waxing techniques and products are state-of-the-art, ensuring the most comfortable and effective results for all our clients."
            },
            {
              icon: <Coffee size={28} className="text-vintage-gold" />,
              title: "Personalized Care",
              description: "Just like the beauty parlors of yesteryear, we pride ourselves on knowing our clients personally and customizing each service to suit your unique needs and preferences."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="vintage-card p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 border-vintage-gold/20 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-vintage-gold/10 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-vintage-gold/10 rounded-full"></div>
              
              <div className="rounded-full bg-vintage-cream p-3 w-fit mb-4 border border-vintage-gold/30">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 retro-text-shadow">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              
              <div className="retro-dots"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 relative">
          <div className="vintage-divider">
            <span className="font-dancing text-2xl text-vintage-gold px-4">Experience the Difference</span>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Vintage salon interior" 
                  className="rounded-lg object-cover w-full h-full sepia-[0.15] contrast-[1.1]"
                  width="600"
                  height="750"
                  loading="lazy"
                />
                <div className="absolute inset-0 box-border p-1 border-4 border-white/20 rounded-lg"></div>
              </div>
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-lg border-2 border-vintage-gold/30 -z-10"></div>
              
              {/* Retro label/sticker */}
              <div className="absolute -top-5 -right-5 bg-vintage-pink transform rotate-12 py-2 px-6 shadow-lg font-dancing text-lg text-vintage-gold z-20 border border-vintage-gold/30">
                Established 1957
              </div>
            </div>
            
            <div className="space-y-6 retro-paper-bg p-8 rounded-lg">
              <h3 className="text-3xl font-playfair retro-text-shadow">Where Vintage Meets Modern</h3>
              <p className="text-muted-foreground">
                Our salon combines the charm and personalized service of the golden era with contemporary techniques and premium products. We believe that beauty treatments should be more than just a service — they should be an experience to remember.
              </p>
              <ul className="space-y-3 retro-checklist">
                {[
                  "Premium waxing formulas suited for all skin types",
                  "Relaxing atmosphere with attention to every detail",
                  "Skilled technicians trained in both classic and modern methods",
                  "Complimentary refreshments inspired by the classic era"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-vintage-gold mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#prices" className="primary-button inline-block mt-4 retro-button-shadow">
                Discover Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Retro patterns */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-repeat-x opacity-20" style={{ backgroundImage: "url('https://i.imgur.com/JmGJMA1.png')" }}></div>
    </section>
  );
};

export default About;
