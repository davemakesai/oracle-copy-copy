import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import doctorAmit from '@/assets/AmitMehta-main.jpg'; // Using an existing team member image for now

const MeetDoctor = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Meet Doctor Amit Mehta
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the expertise and passion behind our patient-centered care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Doctor's Image */}
          <div data-aos="fade-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={doctorAmit}
                alt="Dr. Amit Mehta"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Intro and CTA */}
          <div data-aos="fade-left">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Your Journey to Pain-Free Living Starts with the <span className="text-brand-accent">Best Physiotherapist</span> in Surat
            </h3>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Dr. Amit Mehta is a highly acclaimed physiotherapist with over 15 years of experience,
              specializing in advanced pain management, sports injury rehabilitation, and neurological
              physiotherapy. His compassionate approach and commitment to evidence-based practices
              ensure every patient receives personalized and effective care, helping them regain
              mobility and improve their quality of life.
            </p>
            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90 text-brand-white font-inter font-semibold px-8 py-3 rounded-full transition-all duration-200 gap-2">
              <Link to="/about">
                Know More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDoctor;