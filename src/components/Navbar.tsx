import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
    //{ name: 'Gallery', href: '/gallery' },
    //{ name: 'Team', href: '/team' },
  ];

  const navbarClasses = `fixed top-4 inset-x-4 max-w-7xl mx-auto z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-brand-dark/95 backdrop-blur-md shadow-xl' 
      : 'bg-brand-white/10 backdrop-blur-md'
  } rounded-full px-6 py-1`;

  const textColor = 'text-brand-white';

  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <nav className={navbarClasses}>
      <div className="flex items-center justify-between">
         {/* Logo */}
        <Link to="/">
          <img
            src="/logo.svg"
            alt="Oracle Physiotherapy"
            className="h-14 sm:h-16 md:h-18 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`${textColor} hover:text-brand-accent transition-colors duration-200 text-lg font-inter font-medium`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => window.open('tel:+919316837185', '_self')}
            className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold px-6 py-2 rounded-full transition-all duration-200"
          >
            Call Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 mt-2 bg-brand-dark/95 backdrop-blur-md rounded-lg shadow-xl z-50 origin-top"
          >
            <div className="p-6">
              {/* Brand Header inside mobile menu */}
              <div className="pb-4 mb-4 border-b border-brand-white/20">
                <Link 
                  to="/" 
                  className="font-playfair text-xl font-semibold text-brand-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Oracle Physiotherapy
                </Link>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-brand-white hover:text-brand-accent transition-colors duration-200 text-base font-inter font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Call Now Button */}
                <div className="pt-4 mt-4 border-t border-brand-white/20">
                  <Button
                    onClick={() => {
                      window.open('tel:+919316837185', '_self');
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-brand-accent hover:bg-brand-accent/90 text-brand-dark font-inter font-semibold px-6 py-3 rounded-full transition-all duration-200 w-full"
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;