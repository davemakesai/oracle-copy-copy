import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ClipboardList, Stethoscope, Dumbbell } from 'lucide-react';

const processSteps = [
  {
    icon: ClipboardList,
    title: "Initial Assessment",
    description: "We start with a thorough evaluation to understand your condition, pain points, and health goals."
  },
  {
    icon: Stethoscope,
    title: "Tailored Treatment Plan",
    description: "Based on the assessment, we create a personalized treatment plan using evidence-based techniques."
  },
  {
    icon: Dumbbell,
    title: "Guided Rehabilitation",
    description: "We guide you through your recovery with hands-on therapy and exercises to restore function."
  }
];

const ProcessSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const cardStyles = [
    { bg: 'bg-brand-primary/10', iconContainer: 'bg-brand-primary/20', iconColor: 'text-brand-primary' },
    { bg: 'bg-brand-accent/15', iconContainer: 'bg-brand-accent/25', iconColor: 'text-brand-accent' },
    { bg: 'bg-secondary', iconContainer: 'bg-white', iconColor: 'text-brand-primary' }
  ];

  return (
    <section className="py-20 bg-subtle-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Our Treatment Process
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear and effective path to your recovery.
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {processSteps.map((step, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={`h-full shadow-lg hover:scale-110 transition-transform duration-300 ${cardStyles[index].bg}`}>
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${cardStyles[index].iconContainer}`}>
                        <step.icon className={`w-10 h-10 ${cardStyles[index].iconColor}`} />
                      </div>
                      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="font-inter text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProcessSection;