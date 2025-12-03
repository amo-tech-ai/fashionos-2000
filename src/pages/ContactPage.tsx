import React, { useEffect } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { Button } from '../components/Button';
import { Image } from '../components/ui/Image';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with FashionOS for bookings, studio hire, or general inquiries." />
      
      <section className="pt-32 pb-20 lg:pt-48 bg-white">
         <div className="max-w-[1320px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               
               {/* Contact Info */}
               <div className="fade-in-up">
                  <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">Get in Touch</span>
                  <h1 className="font-serif text-5xl mb-8">Let's start a conversation.</h1>
                  <p className="text-gray-600 text-lg font-light leading-relaxed mb-12">
                     Whether you have a specific project in mind or just want to explore what's possible, we'd love to hear from you.
                  </p>
                  
                  <div className="space-y-8">
                     <div className="flex items-start">
                        <MapPin className="mr-6 text-gray-400 mt-1" />
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Visit Us</h4>
                           <p className="text-gray-600 leading-relaxed">FashionOS Studios <br/> China House, Units G02/03 <br/> 401 Edgware Road, London NW2 6GY</p>
                        </div>
                     </div>
                     <div className="flex items-start">
                        <Mail className="mr-6 text-gray-400 mt-1" />
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Email</h4>
                           <p className="text-gray-600">info@fashionos.com</p>
                        </div>
                     </div>
                     <div className="flex items-start">
                        <Phone className="mr-6 text-gray-400 mt-1" />
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Call</h4>
                           <p className="text-gray-600">+44 (0) 208 454 7202</p>
                        </div>
                     </div>
                      <div className="flex items-start">
                        <Clock className="mr-6 text-gray-400 mt-1" />
                        <div>
                           <h4 className="font-bold text-sm uppercase tracking-widest mb-2">Hours</h4>
                           <p className="text-gray-600">Mon - Fri: 8:30am - 6:00pm</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form */}
               <div className="bg-gray-50 p-10 md:p-16 rounded-sm shadow-sm border border-gray-100">
                  <h3 className="font-serif text-3xl mb-8">Send a message.</h3>
                  <form className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                           <input type="text" className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" />
                        </div>
                        <div>
                           <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                           <input type="text" className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                        <input type="email" className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" />
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                        <select className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors">
                           <option>General Inquiry</option>
                           <option>Book a Shoot</option>
                           <option>Studio Hire</option>
                           <option>Careers</option>
                        </select>
                     </div>
                     <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                        <textarea className="w-full bg-white border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors h-32 resize-none"></textarea>
                     </div>
                     <Button className="w-full justify-center">Submit Message</Button>
                  </form>
               </div>

            </div>
         </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative grayscale">
         <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600&h=600" alt="Map Location" className="w-full h-full object-cover opacity-50" />
         <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="white">Open in Google Maps</Button>
         </div>
      </section>
    </>
  );
};