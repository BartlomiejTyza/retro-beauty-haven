
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PriceList from '@/components/PriceList';
import Promotions from '@/components/Promotions';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
    
    // Add intersection observer for sections to add vintage animations
    const sections = document.querySelectorAll('.vintage-section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('animate-fade-in-up');
          
          // Add some random 50s decoration to sections
          const randomDecor = Math.floor(Math.random() * 3);
          if (randomDecor === 0) {
            entry.target.classList.add('fifties-starburst');
          } else if (randomDecor === 1) {
            entry.target.classList.add('fifties-boomerang');
          } else {
            entry.target.classList.add('fifties-atomic');
          }
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
      
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background retro-paper-bg">
      <Navbar />
      <div className="pt-16">  {/* Add padding to account for fixed navbar */}
        <Hero />
        <div className="fifties-divider"></div>
        <About />
        <div className="fifties-divider"></div>
        <PriceList />
        <div className="fifties-divider"></div>
        <Promotions />
        <div className="fifties-divider"></div>
        <FAQ />
        <div className="fifties-divider"></div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
