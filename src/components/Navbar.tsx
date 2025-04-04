import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 bg-custom-steelGray/30 backdrop-blur-md border-b border-white/10 ${className}`}>
      <div className="flex justify-between items-center px-4 md:px-6 py-4 max-w-screen-xl mx-auto">
        <Link 
          to="/" 
          className="text-custom-lightGray font-semibold"
        >
          <span className="hidden md:block text-base lg:text-lg">
            PRATEEK MOHAPATRA
          </span>
          <div className="md:hidden text-center">
            <div className="text-sm">PRATEEK</div>
            <div className="text-xs text-custom-gray">MOHAPATRA</div>
          </div>
        </Link>

        <button
          className="md:hidden text-custom-lightGray z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" currentPath={location.pathname}>Home</NavLink>
          <NavLink to="/resume" currentPath={location.pathname}>Résumé</NavLink>
          <NavLink to="/contact" currentPath={location.pathname}>Contact</NavLink>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-custom-steelGray/80 backdrop-blur-md px-6 pt-4 pb-6 flex flex-col">
          <NavLink to="/" currentPath={location.pathname} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/resume" currentPath={location.pathname} onClick={() => setMenuOpen(false)}>Résumé</NavLink>
          <NavLink to="/contact" currentPath={location.pathname} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;

interface NavLinkProps {
  to: string;
  currentPath: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, onClick, children }) => {
  const isActive = currentPath === to;
  return (
    <div className="inline-block relative w-[100px] text-center">
      <Link
        to={to}
        onClick={onClick}
        className={`text-custom-lightGray transition-all duration-300 block ${
          isActive ? 'font-medium'  : 'hover:text-custom-gray'
        }`}
      >
        {children}
      </Link>
      <div 
        className={`absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[60px] h-[2px] transition-all duration-300 ${
          isActive ? 'bg-white' : 'bg-transparent hover:bg-custom-gray'
        }`} 
      />
    </div>
  );
};