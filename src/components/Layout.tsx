import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import FloatingButtons from './FloatingButtons';

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

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