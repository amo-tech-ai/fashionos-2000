import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1320px] mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">FashionOS.</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 text-xs font-medium tracking-widest uppercase items-center">
          <div className="relative group">
            <Link to="/services" className="hover:text-gray-500 transition-colors">Services</Link>
            {/* Simple dropdown for demo */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
               <Link to="/services/photography" className="block px-4 py-2 hover:bg-gray-50 text-gray-600">Fashion Photography</Link>
               <Link to="/services/product" className="block px-4 py-2 hover:bg-gray-50 text-gray-600">Product Photography</Link>
               <Link to="/services/clothing" className="block px-4 py-2 hover:bg-gray-50 text-gray-600">Clothing Photography</Link>
               <Link to="/services/retouching" className="block px-4 py-2 hover:bg-gray-50 text-gray-600">Retouching</Link>
            </div>
          </div>
          <Link to="/studio-hire" className="hover:text-gray-500 transition-colors">Studio Hire</Link>
          <Link to="/directory" className="hover:text-gray-500 transition-colors">Directory</Link>
          <Link to="/services" className="hover:text-gray-500 transition-colors">Marketplace</Link>
          <Link to="/about" className="hover:text-gray-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
           <Link to="/dashboard" className="text-xs font-medium tracking-widest uppercase border-b border-transparent hover:border-black transition-colors">Log In</Link>
           <Link to="/start-project">
             <button className="bg-black text-white px-6 py-2 text-xs tracking-widest uppercase hover:bg-gray-800 transition-colors">
               Book A Shoot
             </button>
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden flex flex-col items-center py-8 space-y-6 animate-fade-in shadow-lg h-screen overflow-y-auto pb-20">
          <Link to="/services/photography" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Fashion Photography</Link>
          <Link to="/services/product" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Product Photography</Link>
          <Link to="/services/clothing" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Clothing Photography</Link>
          <Link to="/services/retouching" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Retouching</Link>
          <Link to="/studio-hire" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Studio Hire</Link>
          <Link to="/directory" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Directory</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Marketplace</Link>
           <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">About</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-sm tracking-widest uppercase">Contact</Link>
          <Link to="/start-project">
             <button className="bg-black text-white px-8 py-3 text-xs tracking-widest uppercase">Book A Shoot</button>
          </Link>
        </div>
      )}
    </nav>
  );
};