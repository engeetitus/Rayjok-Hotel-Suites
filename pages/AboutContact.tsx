
import React from 'react';

const AboutContact: React.FC = () => {
  return (
    <div className="py-16 space-y-24">
      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Story</span>
            <h1 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
              Class, Taste, <br/><span className="text-primary italic">Cool.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              At Rayjok Hotel & Suites Ltd., we redefine hospitality by blending timeless elegance with modern comfort. Every detail of our suites is meticulously designed to offer a sanctuary of peace and luxury for both business and leisure travelers.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              From our gold-curtained lounges to our curated art pieces, we invite you to experience a stay where your comfort is our only priority.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <p className="text-3xl font-display text-primary font-bold">50+</p>
                <p className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-70">Luxury Suites</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary font-bold">24/7</p>
                <p className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-70">Concierge</p>
              </div>
              <div>
                <p className="text-3xl font-display text-primary font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest mt-2 font-bold opacity-70">Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/lobby/400/600" className="rounded-xl shadow-2xl w-full h-64 object-cover" alt="Lobby" />
              <img src="https://picsum.photos/seed/bed/400/400" className="rounded-xl shadow-2xl w-full h-48 object-cover" alt="Bed" />
            </div>
            <div className="pt-0">
               <img src="https://picsum.photos/seed/suite/400/800" className="rounded-xl shadow-2xl w-full h-[30rem] object-cover" alt="Suite" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h3 className="font-display text-2xl mb-8 uppercase tracking-wider">Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 h-fit">
                    <span className="material-icons-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-slate-400">Our Address</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">12 Rayjok Street, Victoria Island Annex,<br/>Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 h-fit">
                    <span className="material-icons-outlined text-primary">phone</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-slate-400">Phone Number</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">+234 (0) 800-RAYJOK-HOTEL</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0 h-fit">
                    <span className="material-icons-outlined text-primary">email</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest mb-2 text-slate-400">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-semibold">reservations@rayjok.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
              <form className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl p-4 text-sm focus:ring-primary" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl p-4 text-sm focus:ring-primary" placeholder="Doe" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl p-4 text-sm focus:ring-primary" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl p-4 text-sm focus:ring-primary">
                    <option>Room Reservation Inquiry</option>
                    <option>Event Space Booking</option>
                    <option>Feedback & Suggestions</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-xl p-4 text-sm focus:ring-primary" rows={5} placeholder="How can we help you today?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all uppercase tracking-widest shadow-lg shadow-primary/20">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="w-full h-[500px] bg-slate-200 dark:bg-slate-800 relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-2xl text-center border border-primary/20 max-w-sm">
             <span className="material-icons-outlined text-4xl text-primary mb-4">location_on</span>
             <h3 className="font-display text-2xl mb-2">Visit Rayjok</h3>
             <p className="text-sm text-slate-500 mb-6">Experience luxury in the heart of Victoria Island's prestigious district.</p>
             <button className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] border border-primary/30 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all">Get Directions</button>
           </div>
        </div>
        {/* Real iframe usually goes here */}
        <div className="w-full h-full opacity-30">
          <img src="https://picsum.photos/seed/map/1200/500" alt="Map" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
