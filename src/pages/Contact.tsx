import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/davemakesai@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        throw new Error(data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 95372 49333'],
      action: () => window.open('tel:+919537249333', '_self'),
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['oraclephysiocare@gmail.com'],
      action: () => window.open('mailto:oraclephysiocare@gmail.com', '_self'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-white mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="font-inter text-xl text-brand-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey to pain-free living? Get in touch with our team today 
              to schedule your consultation or ask any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-subtle-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 group ${
                  index % 2 === 0 ? 'bg-brand-primary/15' : 'bg-brand-accent/15'
                } ${info.action ? 'cursor-pointer' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={info.action || undefined}
              >
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'bg-brand-accent/25' : 'bg-brand-accent/30'
                  } ${info.action ? 'group-hover:animate-subtle-vibrate' : ''}`}>
                    <info.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-inter text-lg text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6 tracking-tight">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-inter text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="+91 95372 49333"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-foreground mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background font-inter"
                  >
                    <option value="">Select a service</option>
                    <option value="Orthopedic Physiotherapy">Orthopedic Physiotherapy</option>
                    <option value="Neurological Physiotherapy">Neurological Physiotherapy</option>
                    <option value="Sports Injury Rehabilitation">Sports Injury Rehabilitation</option>
                    <option value="Geriatric Physiotherapy">Geriatric Physiotherapy</option>
                    <option value="Pediatric Physiotherapy">Pediatric Physiotherapy</option>
                    <option value="Cardiopulmonary Physiotherapy">Cardiopulmonary Physiotherapy</option>
                    <option value="Post-operative Rehabilitation">Post-operative Rehabilitation</option>
                    <option value="Pain Management">Pain Management</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-inter text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your condition or any questions you have..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold py-3 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div data-aos="fade-left">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6 tracking-tight">
                Find Us
              </h2>
              <div className="bg-secondary/20 rounded-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3719.971880483946!2d72.77865270972558!3d21.193275982028563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzM1LjgiTiA3MsKwNDYnNTIuNCJF!5e0!3m2!1sen!2sin!4v1753876160409!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oracle Physiotherapy Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20 bg-brand-dark text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Need Immediate Assistance?
          </h2>
          <p className="font-inter text-xl mb-8 text-brand-white/90">
            For urgent consultations or immediate assistance, don't hesitate to call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.open('tel:+919537249333', '_self')}
              className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold px-8 py-3"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={() => {
                const message = encodeURIComponent('Hi! I need urgent physiotherapy consultation. Please help me.');
                window.open(`https://wa.me/919537249333?text=${message}`, '_blank');
              }}
              className="bg-green-600 hover:bg-green-700 text-brand-white font-inter font-semibold px-8 py-3"
            >
              WhatsApp Emergency
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;