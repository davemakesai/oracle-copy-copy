import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeVisitCta = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
        <div className="flex justify-center mb-6">
          <div className="bg-brand-accent/20 p-4 rounded-full">
            <Home className="w-10 h-10 text-brand-primary" />
          </div>
        </div>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
          We Offer Home Visits
        </h2>
        <p className="font-inter text-lg text-muted-foreground mb-8">
          Can't make it to our clinic? We provide professional physiotherapy services in the comfort of your own home.
        </p>
        <Button
          onClick={() => window.open('tel:+919316837185', '_self')}
          className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold px-8 py-3"
        >
          Book Home Visit
        </Button>
      </div>
    </section>
  );
};

export default HomeVisitCta;