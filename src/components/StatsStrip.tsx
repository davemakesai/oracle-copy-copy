import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Smile, Award, TrendingUp, Heart } from 'lucide-react';

const stats = [
  { icon: Smile, end: 5000, suffix: '+', text: 'Happy Patients' },
  { icon: Award, end: 13, suffix: '+', text: 'Years of Experience' }, // Updated from 10 to 13
  { icon: TrendingUp, end: 98, suffix: '%', text: 'Success Rate' },
  { icon: Heart, end: 100, suffix: '%', text: 'Personalized Care' },
];

const StatsStrip = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-strip');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-strip" className="py-16 bg-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={index * 100}>
              <stat.icon className="w-12 h-12 text-brand-accent mb-4" />
              <p className="font-playfair text-4xl font-bold text-foreground">
                {isVisible && <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />}
              </p>
              <p className="font-inter text-muted-foreground mt-1">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;