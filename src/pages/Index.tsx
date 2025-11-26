import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import MeetDoctor from '@/components/MeetDoctor';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import BenefitsAndStats from '@/components/BenefitsAndStats';
import HomeVisitCta from '@/components/HomeVisitCta'; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <BenefitsAndStats />
      <HomeVisitCta /> {/* Placed above MeetDoctor */}
      <MeetDoctor />
      <ServicesOverview />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;