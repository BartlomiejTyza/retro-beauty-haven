
import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';

const PriceList = () => {
  const [selectedTab, setSelectedTab] = useState("ladies");
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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

  const ladiesServices = [
    {
      category: "Face",
      items: [
        { name: "Eyebrows", price: "15" },
        { name: "Upper Lip", price: "10" },
        { name: "Chin", price: "12" },
        { name: "Full Face (excl. eyebrows)", price: "35" },
        { name: "Full Face (incl. eyebrows)", price: "45" }
      ]
    },
    {
      category: "Arms & Underarms",
      items: [
        { name: "Underarms", price: "20" },
        { name: "Half Arms", price: "25" },
        { name: "Full Arms", price: "35" }
      ]
    },
    {
      category: "Legs",
      items: [
        { name: "Half Legs", price: "30" },
        { name: "Full Legs", price: "50" },
        { name: "Thighs", price: "30" }
      ]
    },
    {
      category: "Intimate",
      items: [
        { name: "Bikini Line", price: "25" },
        { name: "Extended Bikini", price: "35" },
        { name: "Brazilian", price: "50" },
        { name: "Hollywood", price: "55" }
      ]
    },
    {
      category: "Packages",
      items: [
        { name: "Full Leg & Bikini", price: "65" },
        { name: "Full Leg & Brazilian", price: "85" },
        { name: "Full Body (excl. intimate)", price: "120" }
      ]
    }
  ];

  const gentlemenServices = [
    {
      category: "Face",
      items: [
        { name: "Eyebrows", price: "15" },
        { name: "Ears", price: "15" },
        { name: "Nose", price: "15" },
        { name: "Cheeks", price: "18" }
      ]
    },
    {
      category: "Upper Body",
      items: [
        { name: "Neck", price: "20" },
        { name: "Chest", price: "35" },
        { name: "Back", price: "40" },
        { name: "Shoulders", price: "25" },
        { name: "Full Upper Body", price: "85" }
      ]
    },
    {
      category: "Arms & Legs",
      items: [
        { name: "Half Arms", price: "30" },
        { name: "Full Arms", price: "40" },
        { name: "Half Legs", price: "35" },
        { name: "Full Legs", price: "60" }
      ]
    },
    {
      category: "Packages",
      items: [
        { name: "Chest & Back", price: "65" },
        { name: "Full Body (excl. intimate)", price: "150" }
      ]
    }
  ];

  const renderServices = (services: typeof ladiesServices) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {services.map((category, index) => (
          <div 
            key={index} 
            className={cn(
              "vintage-card p-6 transition-all duration-300 transform",
              (index % 2 === 0) ? "hover:translate-y-1" : "hover:-translate-y-1"
            )}
          >
            <h3 className="text-xl font-dancing text-center mb-6 text-vintage-gold">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-vintage-cream/70 pb-2">
                  <span>{item.name}</span>
                  <span className="font-medium">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section 
      id="prices" 
      ref={sectionRef}
      className="vintage-section bg-gradient-to-b from-vintage-mint/20 to-white opacity-0"
    >
      <div className="vintage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-vintage-pink/30 text-primary-foreground font-medium mb-4 text-sm">
            Our Services
          </div>
          <h2 className="section-title mb-6 pb-3">
            Waxing Price List
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive range of premium waxing services for both ladies and gentlemen, 
            using only the highest quality products for outstanding results.
          </p>
        </div>

        <Tabs
          defaultValue="ladies"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger 
                value="ladies"
                className="text-lg py-3 data-[state=active]:bg-vintage-pink data-[state=active]:text-foreground"
              >
                Ladies
              </TabsTrigger>
              <TabsTrigger 
                value="gentlemen"
                className="text-lg py-3 data-[state=active]:bg-vintage-mint data-[state=active]:text-foreground"
              >
                Gentlemen
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent 
            value="ladies"
            className="transition-all duration-300 animate-fade-in"
          >
            {renderServices(ladiesServices)}
          </TabsContent>

          <TabsContent 
            value="gentlemen"
            className="transition-all duration-300 animate-fade-in"
          >
            {renderServices(gentlemenServices)}
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <div className="vintage-divider">
            <span className="font-dancing text-2xl text-vintage-gold px-4">A Note About Our Services</span>
          </div>
          <div className="mt-8 vintage-card p-8 max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              All our waxing services include pre and post-treatment care. We use premium hypoallergenic wax 
              formulas suitable for sensitive skin. For the best results, please ensure hair is at least 
              1/4 inch long. First-time clients are advised to arrive 10 minutes early to complete a brief 
              consultation form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
