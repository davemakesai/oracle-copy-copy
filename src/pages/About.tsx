import { Award, Heart, Target, CheckCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import aboutHero from '@/assets/about-hero.jpg';
import clinicInterior from '@/assets/clinic-interior.jpg';
import whyChooseUsImage from '@/assets/whychoose.jpg';
import DoctorBio from '@/components/DoctorBio';
import StatsStrip from '@/components/StatsStrip';
import ProcessSection from '@/components/ProcessSection';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white mb-6 tracking-tight">
              About Oracle Physiotherapy
            </h1>
            <p className="font-inter text-xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Leading physiotherapy clinic in Surat, dedicated to helping the community 
              achieve optimal health and wellness through expert care and best treatments.
            </p>
          </div>
        </div>
      </section>

      <DoctorBio />
      <StatsStrip />
      <ProcessSection />

      {/* Our Story - Two Column Layout */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Live Your Best Life With Our <span className="text-brand-accent">Physiotherapy</span> Practices
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-2 rounded-lg">
                    <Heart className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Founded in 2019</h3>
                    <p className="font-inter text-muted-foreground">
                      Started with a vision to provide personalized, evidence-based treatment in the Adajan-Pal area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-2 rounded-lg">
                    <Target className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                    <p className="font-inter text-muted-foreground">
                      To provide the best healthcare services to everyone at affordable rates, empowering individuals to overcome physical limitations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Expert Care</h3>
                    <p className="font-inter text-muted-foreground">
                      Dr. Amit brings years of experience and a commitment to continuous education to provide expert care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={clinicInterior} 
                  alt="Oracle Physiotherapy clinic interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-subtle-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={whyChooseUsImage} 
                  alt="Physiotherapy treatment session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left">
              <p className="font-inter text-sm text-brand-primary mb-4">Why Choose Us</p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight">
                Pain-Free Living Starts Here
              </h2>
              <p className="font-inter text-muted-foreground mb-8 leading-relaxed text-lg">
                Realign your body and restore balance. Our treatments focus on relieving pain, 
                improving posture, and optimizing nervous system function. Our tailored physiotherapy programs include hands-on techniques, guided exercises, 
                and advanced therapies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                  <span className="font-inter">An expert physiotherapist with years of experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                  <span className="font-inter">Modern equipment and evidence-based treatments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                  <span className="font-inter text-foreground">A certified and experienced professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;