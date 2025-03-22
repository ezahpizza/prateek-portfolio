
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-white bg-opacity-95 shadow-sm backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-custom-darkGray font-semibold text-lg md:text-xl">
            PORTFOLIO
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/resume" 
              className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}
            >
              Résumé
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
