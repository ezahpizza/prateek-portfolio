import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full py-2 z-50 md:fixed md:bottom-0 md:left-0 md:w-full md:bg-custom-steelGray/30 md:backdrop-blur-md md:border-t md:border-white/10 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-custom-mediumGray text-sm">
              © {currentYear} Prateek Mohapatra. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/ezahpizza"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-custom-lightGray"
              aria-label="GitHub"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/prateekmp/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-custom-lightGray"
              aria-label="LinkedIn"
            >
              Linkedin
            </a>
            <a
              href="https://www.behance.net/prateekmohapat"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-custom-lightGray"
              aria-label="Behance"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;