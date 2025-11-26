import { Star, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import therapy1 from '@/assets/therapy-1.png';
import therapy2 from '@/assets/therapy-2.png';
import therapy3 from '@/assets/therapy-3.png';
import therapy4 from '@/assets/therapy-4.jpg';
import therapy5 from '@/assets/therapy-5.jpg';

const WhyChooseUs = () => {
  const therapyImages = [
    { src: therapy1, alt: 'Physiotherapist helping patient with dumbbells' },
    { src: therapy2, alt: 'Hands-on physiotherapy treatment' },
    { src: therapy3, alt: 'Modern physiotherapy clinic equipment' },
    { src: therapy4, alt: 'Kinesiology tape therapy application' },
    { src: therapy5, alt: 'Group physiotherapy exercise session' },
  ];

  return (
    <section id="learn-more" className="py-20 bg-subtle-background">
      {/* Part 1: Header + Image Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16" data-aos="fade-up">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Live Your Best Life With Our{' '}
              <span className="text-brand-accent">Physiotherapy</span>{' '}
              Practices
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              Realign your body and restore balance. Our physiotherapy treatments focus on 
              relieving pain, improving posture, and rebuilding strength, mobility, and confidence. 
              Tailored programs include hands-on techniques, guided exercises, and advanced therapies.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20" data-aos="fade-up" data-aos-delay="200">
          {therapyImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Trust Building Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Best <span className="text-brand-primary">Physiotherapy</span> in Surat
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side Text */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Live your life to the fullest
            </h3>
            <p className="font-inter text-muted-foreground leading-relaxed mb-6">
              Our programs include hands-on techniques, guided exercises, and 
              advanced therapies for effective recovery.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Right Side Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dedicated Professionals Card */}
            <Card
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-brand-primary/15"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="/about">
                <CardContent className="p-8">
                  <div className="bg-brand-accent/25 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                    Dedicated Professionals, Focused on Your Wellness
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    We go above and beyond to understand clients' needs, providing 
                    solutions that are tailored to their goals.
                  </p>
                </CardContent>
              </Link>
            </Card>

            {/* 5 Star Reviews Card */}
            <Card
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-brand-accent/15"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a 
                href="https://www.google.com/search?sca_esv=c27431b204ff2544&rlz=1C1VDKB_enIN1139IN1139&sxsrf=AE3TifPCd3RMVukapfQ3hrL-e499GGrzHA:1763810535531&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E5g5HTu0mAZGtlOfkpao9771R_Do2WVf63gT8qM3zgDJMFtot7IngNOGbbgCD3iK8eltkmxHgkZZ3AtlD60nzV-W_km_knaTgYUhcvqFn_B_oLMhenP2lykFPJ3B7GbnMQmuddpkahQ6L357keeufO-4kYFV-i-9uMl__RyE3lY7a3NbVqYmGYLC_qdaCQR9l6SNcknarEkyERxraFhQR-PzXbgQ&q=Oracle+Physiotherapy+clinic+-Sports+Rehabilitation/Orthopedic/Spine+Physiotherapy/Best+Physiotherapy+in+Surat+Reviews&sa=X&ved=2ahUKEwj-oq-j0oWRAxX-SGwGHY7nOLoQ0bkNegQIMxAD&biw=1341&bih=625&dpr=1.43" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <CardContent className="p-8">
                  <div className="bg-brand-accent/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-foreground mr-2">5</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    Highest Rated on GOOGLE
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    100% Satisfaction. Trusted by real clients.
                  </p>
                </CardContent>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;