
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-custom-mediumGray text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://behance.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Behance"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="social-link"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link to="/" className="nav-link mr-6">Home</Link>
            <Link to="/resume" className="nav-link">Résumé</Link>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-custom-mediumGray text-xs">
              Designed with minimalist principles in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
