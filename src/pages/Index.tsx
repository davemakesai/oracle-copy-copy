import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import MeetDoctor from '@/components/MeetDoctor';
import ServicesOverview from '@/components/ServicesOverview';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import BenefitsAndStats from '@/components/BenefitsAndStats';
import HomeVisitCta from '@/components/HomeVisitCta';
import SchemaMarkup from '@/components/SchemaMarkup';
import { LOCAL_BUSINESS_SCHEMA } from '@/data/seoData.ts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SchemaMarkup schema={LOCAL_BUSINESS_SCHEMA} />
      <HeroSection />
      <WhyChooseUs />
      <BenefitsAndStats />
      <HomeVisitCta />
      <MeetDoctor />
      <ServicesOverview />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;