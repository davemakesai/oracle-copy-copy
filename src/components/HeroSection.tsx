import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-physio.jpg';

const HeroSection = () => {
  // Removed avatars as they were part of the widget
  // const avatars = [
  //   'https://images.unsplash.com/photo-1494790108755-2616b612d1c2?w=64&h=64&fit=crop&crop=face',
  //   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
  //   'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
  //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
  // ];

  // Removed handleWhatsAppClick as it was only used by the widget
  // const handleWhatsAppClick = () => {
  //   const message = encodeURIComponent('Hi! I would like to book an appointment for physiotherapy consultation.');
  //   window.open(`https://wa.me/919316837185?text=${message}`, '_blank');
  // };

  const handleContactClick = () => {
    window.open('tel:+919316837185', '_self');
  };

  const handleLearnMore = () => {
    const element = document.getElementById('learn-more');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Physiotherapy clinic background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/40 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center min-h-screen pt-24 pb-16">
          <div className="w-full lg:w-1/2" data-aos="fade-up" data-aos-duration="1000">
            
            {/* Removed Book Appointment Widget */}
            {/*
            <div className="flex items-center mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="flex -space-x-2 mr-4">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Patient ${index + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-brand-white object-cover"
                  />
                ))}
              </div>
              <span className="text-brand-white font-inter font-medium mr-3">Book Appointment</span>
              <button
                onClick={handleWhatsAppClick}
                className="bg-brand-white/20 hover:bg-brand-white/30 rounded-full p-2 transition-all duration-200"
              >
                <ArrowRight className="w-5 h-5 text-brand-white" />
              </button>
            </div>
            */}

            {/* Main Heading */}
            <div className="mb-6" data-aos="fade-up" data-aos-delay="400">
              <h1 className="font-playfair text-brand-white font-bold leading-tight tracking-tighter">
                <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl mb-2">
                  Move Better.
                </div>
                <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl">
                  Live Stronger.
                </div>
              </h1>
            </div>

            {/* Subheading */}
            <div className="mb-8" data-aos="fade-up" data-aos-delay="600">
              <p className="text-brand-white/90 font-inter text-lg sm:text-xl max-w-2xl leading-relaxed">
                Personalized physiotherapy to restore movement, relieve pain, and get you back to doing what you love.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="800">
              <Button
                onClick={handleContactClick}
                className="w-fit bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold px-8 py-3 rounded-full transition-all duration-200 gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                className="w-fit border-brand-white bg-brand-white text-brand-dark hover:bg-brand-white/90 font-inter font-semibold px-8 py-3 rounded-full transition-all duration-200 gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;