import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import FloatingButtons from './FloatingButtons';
import { useSeo } from '@/hooks/useSeo';

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useSeo(); // Call the SEO hook here

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <FloatingButtons />
    </div>
  );
};

export default Layout;