
import { useRef, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

  const faqs = [
    {
      question: "How long should my hair be before waxing?",
      answer: "For optimal results, hair should be about 1/4 inch (6mm) long. This generally means waiting about 2-3 weeks after shaving. If your hair is too short, the wax may not be able to grip it effectively."
    },
    {
      question: "How often should I get waxed?",
      answer: "For most areas, we recommend waxing every 4-6 weeks. Regular waxing can eventually lead to finer, sparser hair growth over time. Your specialist can recommend a personalized schedule based on your hair growth pattern."
    },
    {
      question: "Is waxing painful?",
      answer: "Sensitivity varies from person to person, but most clients find that any discomfort is brief and diminishes with regular waxing. Our technicians use techniques to minimize discomfort, and our premium waxes are formulated for sensitive skin."
    },
    {
      question: "How should I prepare for my waxing appointment?",
      answer: "Gently exfoliate the area 1-2 days before your appointment, but not on the day of service. Avoid sunbathing, tanning beds, and hot baths/showers right before your appointment. Wear loose-fitting clothing to your appointment for comfort afterward."
    },
    {
      question: "What aftercare should I follow post-waxing?",
      answer: "For 24-48 hours after waxing: avoid hot baths/showers, swimming pools, saunas, and direct sun exposure; don't apply perfumed products to the waxed area; avoid tight clothing; and gently exfoliate the area after 48 hours to prevent ingrown hairs."
    },
    {
      question: "Is there anyone who shouldn't get waxed?",
      answer: "Waxing may not be suitable for those using certain medications like Accutane, retinoids, or antibiotics, as these can make skin more sensitive. Also, those with certain skin conditions, diabetes, or varicose veins should consult with a doctor before waxing."
    },
    {
      question: "What's the difference between your waxing technique and others?",
      answer: "Our approach combines vintage beauty traditions with modern techniques. We use premium, hypoallergenic wax formulas and employ methods that minimize discomfort while maximizing results. Our technicians are trained in both classic and contemporary waxing methods."
    },
    {
      question: "Do you offer any package deals or loyalty programs?",
      answer: "Yes! We offer several package options that provide significant savings compared to individual services. We also have a loyalty program where clients earn points for each visit, which can be redeemed for discounts on future services or retail products."
    }
  ];

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className="vintage-section relative bg-gradient-to-b from-white to-vintage-peach/20 opacity-0"
    >
      <div className="vintage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-vintage-sage/40 text-primary-foreground font-medium mb-4 text-sm">
            Have Questions?
          </div>
          <h2 className="section-title mb-6 pb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to our most commonly asked questions about our waxing services,
            preparation, aftercare, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="vintage-card border border-vintage-gold/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline hover:bg-vintage-cream/50 transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="vintage-divider">
            <span className="font-dancing text-2xl text-vintage-gold px-4">Still Have Questions?</span>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              We're here to help! If you have any questions that aren't answered above,
              please don't hesitate to reach out to our friendly team.
            </p>
            
            <a href="#contact" className="primary-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
