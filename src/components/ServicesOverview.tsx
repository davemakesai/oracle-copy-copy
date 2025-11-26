import { HeartPulse, Bone, Shield, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const ServicesOverview = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: HeartPulse,
      title: 'Pain Relief Therapy',
      description: 'Advanced techniques to alleviate chronic and acute pain, restoring comfort and mobility.',
    },
    {
      icon: Bone,
      title: 'Injury Rehabilitation',
      description: 'Comprehensive programs to recover from sports injuries, accidents, or post-surgery.',
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Strategies and exercises to prevent future injuries and maintain optimal physical health.',
    },
    {
      icon: Dumbbell,
      title: 'Strength & Conditioning',
      description: 'Personalized training to enhance athletic performance and build functional strength.',
    },
  ];

  return (
    <section className="py-20 bg-subtle-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Core Services
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of specialized services to address your unique needs and help you achieve your health goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background shadow-md hover:shadow-xl transition-all duration-300 border-0 group cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => navigate('/services')}
            >
              <CardContent className="p-8 flex flex-col items-center">
                <div className="bg-brand-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-10 h-10 text-brand-primary" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
          <Button
            onClick={() => navigate('/services')}
            variant="outline"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-white font-inter font-semibold text-lg px-8 py-3 transition-all duration-300"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;