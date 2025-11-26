import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="Oracle Physiotherapy"
                className="h-16 sm:h-20 md:h-26 w-auto mb-4"
              />
            </Link>
            <p className="font-inter text-brand-white/80 mb-6 leading-relaxed">
              Leading physiotherapy clinic in Surat, dedicated to helping you achieve 
              pain-free living through expert care and modern treatment methods.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <a 
                  href="tel:+919537249333" 
                  className="font-inter text-sm hover:text-brand-primary transition-colors"
                >
                  +91 9537249333
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-primary" />
                <a 
                  href="mailto:oraclephysiocare@gmail.com" 
                  className="font-inter text-sm hover:text-brand-primary transition-colors"
                >
                  oraclephysiocare@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-brand-primary mt-1 flex-shrink-0" />
                <span className="font-inter text-sm">
                  S-9 Spereza Business Hub, Opp. Suryam Residency, Pal, Surat 395009
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-brand-primary mt-1" />
                <div className="font-inter text-sm">
                  <p>Monday - Saturday</p>
                  <p className="text-brand-white/80">9:00 AM - 1:00 PM</p>
                  <p className="text-brand-white/80">4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-12">
          <div className="bg-secondary/10 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.974397905821!2d72.7786317097256!3d21.193175982031978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dff20d4106b%3A0x9457afb54f420541!2sOracle%20Physiotherapy%20clinic%20-Sports%20Rehabilitation%2FOrthopedic%2FSpine%20Physiotherapy%2FBest%20Physiotherapy%2FBest%20Physiotherapy%20in%20Surat!5e0!3m2!1sen!2sin!4v1753875764646!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oracle Physiotherapy Location"
            ></iframe>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-white/20 mt-12 pt-8 text-center">
          <p className="font-inter text-sm text-brand-white/80">
            © Oracle Physiotherapy |{' '}
            <a href="/" className="underline text-brand-white hover:text-brand-white/100">
              Best Physiotherapy Clinic in Surat
            </a>
          </p>
          <div className="text-center text-base mt-4 text-brand-white/80">
            Developed with ❤️ by{' '}
            <a
                href="https://cacheup.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-purple-500 hover:underline"
            >
                CacheUp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;