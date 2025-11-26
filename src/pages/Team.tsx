import { Mail, Phone, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import teamHero from '@/assets/team-hero.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Amit Sharma',
      position: 'Lead Physiotherapist & Clinic Director',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      specializations: ['Sports Injuries', 'Manual Therapy', 'Pain Management'],
      experience: '15+ years',
      qualifications: 'BPT, MPT (Orthopedics), PhD',
      email: 'dr.amit@oraclephysiocare.com',
      phone: '+91 93168 37185',
    },
    {
      name: 'Dr. Priya Patel',
      position: 'Senior Physiotherapist',
      image: 'https://images.unsplash.com/photo-1594824388084-29fdb16eb24a?w=300&h=300&fit=crop&crop=face',
      specializations: ['Neurological Rehabilitation', 'Pediatric Physiotherapy'],
      experience: '12+ years',
      qualifications: 'BPT, MPT (Neurology)',
      email: 'dr.priya@oraclephysiocare.com',
      phone: '+91 98765 43211',
    },
    {
      name: 'Dr. Rahul Desai',
      position: 'Sports Physiotherapist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      specializations: ['Sports Performance', 'Athletic Training', 'Injury Prevention'],
      experience: '10+ years',
      qualifications: 'BPT, MPT (Sports Medicine)',
      email: 'dr.rahul@oraclephysiocare.com',
      phone: '+91 98765 43212',
    },
    {
      name: 'Dr. Sneha Gandhi',
      position: 'Rehabilitation Specialist',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&crop=face',
      specializations: ['Post-Surgical Rehabilitation', 'Geriatric Care'],
      experience: '8+ years',
      qualifications: 'BPT, MPT (Musculoskeletal)',
      email: 'dr.sneha@oraclephysiocare.com',
      phone: '+91 98765 43213',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${teamHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white mb-6">
              Meet Our Expert Team
            </h1>
            <p className="font-inter text-xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of certified physiotherapists brings together years of experience, 
              specialized training, and a passion for helping patients achieve their health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300 border-0 bg-background overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="font-inter text-brand-primary font-medium mb-4">
                        {member.position}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Award className="w-4 h-4 text-brand-accent mr-2" />
                          <span className="font-inter text-sm font-medium text-foreground">
                            {member.experience} Experience
                          </span>
                        </div>
                        <p className="font-inter text-sm text-muted-foreground">
                          {member.qualifications}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-inter font-semibold text-foreground mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.map((spec, specIndex) => (
                            <span
                              key={specIndex}
                              className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-inter"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 text-brand-accent mr-2" />
                          <a 
                            href={`mailto:${member.email}`}
                            className="font-inter text-sm text-muted-foreground hover:text-brand-accent transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-brand-accent mr-2" />
                          <a
                            href={`tel:${member.phone.replace(/\s/g, '')}`}
                            className="font-inter text-sm text-muted-foreground hover:text-brand-accent transition-colors"
                          >
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Our Team's Commitment
          </h2>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
            Every member of our team is committed to providing personalized, evidence-based care 
            that helps our patients achieve their health and wellness goals. We believe in continuous 
            learning, compassionate care, and building lasting relationships with our patients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                Continuous Education
              </h3>
              <p className="font-inter text-muted-foreground">
                Our team regularly attends workshops and training to stay current with the latest techniques.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                Patient-Centered Care
              </h3>
              <p className="font-inter text-muted-foreground">
                We prioritize understanding each patient's unique needs and goals for optimal outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                Evidence-Based Practice
              </h3>
              <p className="font-inter text-muted-foreground">
                All treatments are based on the latest research and proven clinical methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;