import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const BenefitsAndStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section-home');
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2" data-aos="fade-up">
        {/* Benefits Card */}
        <div className="bg-brand-accent p-12 text-brand-white">
          <div className="max-w-md">
            <p className="font-inter text-sm mb-4 opacity-90">Benefits</p>
            <h3 className="font-playfair text-4xl font-bold mb-6 tracking-tight">
              Feel Strong,<br />
              Live To The<br />
              Fullest
            </h3>
            <p className="font-inter mb-8 leading-relaxed opacity-90">
              Realign your body and restore balance. Our physiotherapy treatments focus on relieving pain, 
              improving posture, and optimizing nervous system function.
            </p>
            <button className="bg-brand-white text-brand-primary px-8 py-3 rounded-full font-inter font-medium hover:bg-brand-white/90 transition-colors">
              Explore More
            </button>
          </div>
        </div>

        {/* Stats Card */}
        <div id="stats-section-home" className="bg-brand-primary p-12 text-brand-white relative">
          <div className="space-y-8">
            <div className="bg-brand-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                {isVisible && <CountUp end={98} duration={2} />}%
              </div>
              <p className="font-inter text-sm opacity-90">
                Patient satisfaction rate based on feedback and successful outcomes.
              </p>
            </div>
            <div className="bg-brand-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                {isVisible && <CountUp end={13} duration={2} />}+ {/* Updated from 10 to 13 */}
              </div>
              <p className="font-inter text-sm opacity-90">
                Years of hands-on experience in orthopedic physiotherapy.
              </p>
            </div>
            <div className="bg-brand-white/10 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">
                {isVisible && <CountUp end={5000} duration={2.5} suffix="+" />}
              </div>
              <p className="font-inter text-sm opacity-90">
                Successful treatments delivered to patients of all ages and needs.
              </p>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-32 bg-brand-white rounded-full opacity-20"></div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsAndStats;