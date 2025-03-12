
import { useRef, useEffect, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

// Declare the window interface extension for TypeScript
declare global {
  interface Window {
    initMap: () => void;
  }
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  
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

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      
      // Global callback function that Google Maps will call
      window.initMap = () => {
        if (mapRef.current) {
          // Center coordinates (replace with your salon's actual location)
          const location: google.maps.LatLngLiteral = { 
            lat: 51.509865, 
            lng: -0.118092 
          };
          
          const map = new google.maps.Map(mapRef.current, {
            zoom: 15,
            center: location,
            styles: [
              {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "2.00"}]
              },
              {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#faf8f5"}, {"lightness": 17}, {"weight": "0.20"}]
              },
              {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#444444"}]
              },
              {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"color": "#f2f2f2"}]
              },
              {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#faf8f5"}, {"lightness": 20}]
              },
              {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#faf8f5"}]
              },
              {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
              },
              {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{"saturation": -100}, {"lightness": 45}]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f3d1d1"}]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#5f5f5f"}]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
              },
              {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{"visibility": "simplified"}]
              },
              {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
              },
              {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
              },
              {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#c9e4f3"}, {"visibility": "on"}]
              }
            ]
          });
          
          // Add marker
          new google.maps.Marker({
            position: location,
            map: map,
            title: "RetroGlow Waxing Salon"
          });
          
          setIsMapLoaded(true);
        }
      };
    };
    
    loadGoogleMapsScript();
    
    return () => {
      // Clean up
      delete window.initMap;
    };
  }, []);

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="vintage-section bg-gradient-to-b from-vintage-peach/20 to-white opacity-0"
    >
      <div className="vintage-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-vintage-lavender/40 text-primary-foreground font-medium mb-4 text-sm">
            Get In Touch
          </div>
          <h2 className="section-title mb-6 pb-3">
            Visit Our Salon
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to welcome you to our vintage-inspired beauty haven. Contact us to book an appointment or drop by to experience our unique atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="vintage-card p-6 lg:p-8">
            <h3 className="font-dancing text-vintage-gold text-3xl mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-vintage-cream flex-shrink-0">
                  <MapPin size={24} className="text-vintage-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">123 Vintage Lane</p>
                  <p className="text-muted-foreground">Beauty District</p>
                  <p className="text-muted-foreground">London, SW1A 1AA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-vintage-cream flex-shrink-0">
                  <Phone size={24} className="text-vintage-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+442012345678" className="hover:text-primary-foreground transition-colors">
                      +44 20 1234 5678
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-vintage-cream flex-shrink-0">
                  <Mail size={24} className="text-vintage-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@retroglow.com" className="hover:text-primary-foreground transition-colors">
                      info@retroglow.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-vintage-cream flex-shrink-0">
                  <Clock size={24} className="text-vintage-gold" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {businessHours.map((item, index) => (
                      <div 
                        key={index} 
                        className="contents"
                      >
                        <p className="text-muted-foreground font-medium">{item.day}</p>
                        <p className="text-muted-foreground">{item.hours}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="tel:+442012345678" 
                className="primary-button inline-block"
              >
                Book an Appointment
              </a>
            </div>
          </div>
          
          <div className="vintage-card overflow-hidden h-full min-h-[400px] relative">
            <div ref={mapRef} className="absolute inset-0 w-full h-full"></div>
            {!isMapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-vintage-cream/50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vintage-gold"></div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="vintage-divider">
            <span className="font-dancing text-2xl text-vintage-gold px-4">We Look Forward to Seeing You</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
