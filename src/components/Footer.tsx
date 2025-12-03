import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-editorial-black py-20 border-t border-gray-800 text-white">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter block mb-6 rotate-[-90deg] origin-left translate-y-24 absolute hidden md:block">blend.</Link>
            <Link to="/" className="text-2xl font-serif font-bold tracking-tighter block mb-6 md:hidden">blend.</Link>
            <div className="md:ml-24">
              <h4 className="font-serif text-xl mb-4">New business</h4>
              <p className="text-xs text-gray-400 mb-1">0208 454 7202</p>
              <p className="text-xs text-gray-400 mb-8">info@blendstudios.com</p>

              <h4 className="font-serif text-xl mb-4">Visit</h4>
               <p className="text-xs text-gray-400 mb-1">Blend Studios Ltd</p>
               <p className="text-xs text-gray-400 mb-1">China House</p>
               <p className="text-xs text-gray-400 mb-1">Units G02/03 LG</p>
               <p className="text-xs text-gray-400 mb-1">401 Edgware Road</p>
               <p className="text-xs text-gray-400 mb-1">NW2 6GY</p>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-6">
             <h4 className="text-sm font-bold tracking-wide mb-6">Menu</h4>
             <ul className="space-y-3 text-xs text-gray-400">
               <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
               <li><Link to="/services/photography" className="hover:text-white transition-colors">Fashion Photography</Link></li>
               <li><Link to="/services/clothing" className="hover:text-white transition-colors">Clothing Photography</Link></li>
               <li><Link to="/services/product" className="hover:text-white transition-colors">Product Photography</Link></li>
               <li><a href="#" className="hover:text-white transition-colors">Jewellery Photography</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Invisible Mannequin</a></li>
               <li><Link to="/services/retouching" className="hover:text-white transition-colors">Retouching Services</Link></li>
               <li><a href="#" className="hover:text-white transition-colors">Video</a></li>
               <li><Link to="/start-project" className="text-white font-bold hover:text-gray-300 transition-colors">Book a Shoot</Link></li>
               <li><Link to="/dashboard" className="text-white font-bold hover:text-gray-300 transition-colors">Client Dashboard</Link></li>
               <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
               <li><Link to="/studio-hire" className="hover:text-white transition-colors">Studio Hire</Link></li>
               <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Studio Hire Terms and Conditions</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Production Terms and Conditions</a></li>
             </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-sm font-bold tracking-wide mb-6">Visit</h4>
             <ul className="space-y-3 text-xs text-gray-400">
                 <li>Blend Studios Ltd</li>
                 <li>China House</li>
                 <li>Units G02/03 LG</li>
                 <li>401 Edgware Road</li>
                 <li>NW2 6GY</li>
             </ul>
             
             <div className="mt-8">
               <ul className="space-y-3 text-xs text-gray-400">
                 <li>Blend Studios Ltd</li>
                 <li>China House</li>
                 <li>Units G02/03 LG</li>
                 <li>401 Edgware Road</li>
                 <li>NW2 6GY</li>
               </ul>
             </div>
          </div>

          <div className="md:col-span-2">
             <h4 className="text-sm font-bold tracking-wide mb-6">Follow</h4>
             <div className="flex space-x-4 text-white">
                <Instagram size={18} className="cursor-pointer hover:text-gray-300" />
                <Facebook size={18} className="cursor-pointer hover:text-gray-300" />
             </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 text-center md:text-right text-[10px] text-gray-500">
           &copy; 2021 All Images Copyright Blend Studios Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};