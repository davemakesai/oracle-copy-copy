import { Activity, Shield, Zap, Bone, Dumbbell, Spline, Target, RotateCw, PersonStanding, HeartHandshake, AlignVerticalJustifyCenter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import servicesHero from '@/assets/services-hero.jpg';
import { useNavigate } from 'react-router-dom';
import HomeVisitCta from '@/components/HomeVisitCta'; // Import the new component

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Activity,
      title: 'Pain Relief Therapy',
      description: 'Comprehensive pain management using advanced therapeutic techniques to provide lasting relief from acute and chronic pain conditions.',
      features: [
        'Manual therapy techniques',
        'Exercise prescription',
        'Pain education and management',
      ],
    },
    {
      icon: Shield,
      title: 'Injury Rehabilitation',
      description: 'Specialized recovery programs for sports injuries, workplace injuries, and post-surgical rehabilitation.',
      features: [
        'Post-surgical rehabilitation',
        'Sports injury recovery',
        'Return-to-activity programs',
      ],
    },
    {
      icon: Zap,
      title: 'Sports Physiotherapy',
      description: 'Performance optimization and injury prevention for athletes at all levels, from recreational to professional.',
      features: [
        'Performance analysis',
        'Injury prevention programs',
        'Sports-specific training',
      ],
    },
    {
      icon: Bone,
      title: 'Orthopedic Therapy',
      description: 'Comprehensive treatment plans to restore mobility and strength after musculoskeletal injuries or surgeries.',
      features: [
        'Post-surgical rehabilitation',
        'Joints, Spine & Ligament therapy',
        'Strength & Mobility Training',
      ],
    },
    {
      icon: Dumbbell,
      title: 'Strength & Conditioning',
      description: 'Customized fitness programs designed to improve strength, endurance, and overall physical performance.',
      features: [
        'Functional movement screening',
        'Core stabilization',
        'Injury prevention strategies',
      ],
    },
    {
      icon: Spline,
      title: 'Sciatica Treatment',
      description: 'Targeted therapy to relieve the radiating pain of sciatica, improving mobility and reducing nerve compression.',
      features: [
        'Nerve mobilization techniques',
        'Spinal decompression exercises',
        'Core strengthening programs',
      ],
    },
    {
      icon: Target,
      title: 'Tennis Elbow & Golfer\'s Elbow',
      description: 'Specialized treatment for epicondylitis, reducing inflammation and restoring full arm function.',
      features: [
        'Ultrasound & laser therapy',
        'Forearm strengthening',
        'Ergonomic advice & modification',
      ],
    },
    {
      icon: RotateCw,
      title: 'Frozen Shoulder Therapy',
      description: 'Gentle mobilization to restore range of motion and alleviate pain from adhesive capsulitis.',
      features: [
        'Range-of-motion exercises',
        'Joint mobilization',
        'Pain and inflammation control',
      ],
    },
    {
      icon: PersonStanding,
      title: 'Back Pain Management',
      description: 'A holistic approach to manage and treat acute or chronic back pain, focusing on long-term relief.',
      features: [
        'Manual therapy (Mckenzie/Mulligan)',
        'Postural correction',
        'Custom exercise programs',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Arthritis Care',
      description: 'Personalized care plans to manage arthritis symptoms, improve joint function, and enhance quality of life.',
      features: [
        'Joint protection strategies',
        'Pain management techniques',
        'Mobility improvement exercises',
      ],
    },
    {
      icon: AlignVerticalJustifyCenter,
      title: 'Postural Correction',
      description: 'Expert guidance and exercises to correct poor posture, reduce strain, and prevent related pain issues.',
      features: [
        'Comprehensive postural assessment',
        'Ergonomic training',
        'Corrective muscle re-education',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${servicesHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="font-inter text-xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive physiotherapy services tailored to your specific needs and recovery goals, 
              delivered by Dr. Amit Mehta.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-subtle-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-brand-primary/10 hover:scale-105 flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="bg-brand-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="font-inter text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-brand-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto text-center pt-4">
                    <Button 
                      onClick={() => navigate('/contact')}
                      className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold transition-colors duration-200"
                    >
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Home Visits Section */}
      <HomeVisitCta />

      <Footer />
    </div>
  );
};

export default Services;