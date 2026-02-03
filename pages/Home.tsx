
import React from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            alt="Premium Hotel Suite" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD03b6Ga-f7ENtjGduogUvUsYCeW_73Nn8Jdlv47jpwRMOu-WnC1EUs4b-mgpBW7qD6DsiIxOidr62IxTZNYWuwGiROOcgII7udplbOO1pTpscYM418T6tBqo9RZCNDyH5uISHZZ_sh9Ia6ggcrzd2eqIeCpseS7zwGhXEzp3cZkhLwRtl89H80bZRDgZ-PhXydudxgeYpHx6EhMiOUspDRLD6Gn_wim0_6gfCNQOEYfWF58mGALQK53iQbQEYiSYKmuIGfiumfT159" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
              Where Elegance <br/>
              <span className="text-primary-light italic">Meets Comfort.</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 text-slate-100 max-w-xl font-light leading-relaxed">
              Experience world-class hospitality in the heart of Victoria Island, Lagos. We redefine luxury through class, taste, and a cool ambiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/rooms" className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded font-bold transition-all flex items-center justify-center gap-2 text-sm tracking-widest uppercase shadow-xl">
                 Explore Suites <span className="material-icons-outlined">arrow_forward</span>
               </Link>
               <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded font-bold transition-all text-sm tracking-widest uppercase">
                 Our Story
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Rayjok */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Excellence Defined</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Why Choose Rayjok?</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons-outlined text-4xl text-primary">auto_awesome</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Class</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[280px] mx-auto">Experience true sophistication in every corner, from our lobby to your private suite.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons-outlined text-4xl text-primary">restaurant</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Taste</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[280px] mx-auto">Indulge in culinary excellence curated by world-class chefs for a memorable dining experience.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary/5 dark:bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons-outlined text-4xl text-primary">ac_unit</span>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Cool</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-[280px] mx-auto">Relax in our contemporary spaces designed for comfort, tranquility, and modern living.</p>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs block mb-4">Exclusive Stays</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Featured Suites</h2>
            </div>
            <Link to="/rooms" className="text-primary text-sm font-bold tracking-widest border-b-2 border-primary pb-1 hover:text-slate-900 dark:hover:text-white transition-colors">VIEW ALL ROOMS</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map(room => (
              <div key={room.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800">
                <div className="relative h-72 overflow-hidden">
                  <img alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={room.image} />
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest shadow-lg">
                    ₦{room.price.toLocaleString()}/NIGHT
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-3">{room.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">{room.description}</p>
                  <div className="flex items-center gap-6 text-slate-400 text-[9px] uppercase tracking-widest font-bold mb-8">
                    {room.amenities.map(a => (
                      <span key={a} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {a}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/checkout" 
                    state={{ roomId: room.id }}
                    className="w-full block text-center bg-primary text-white py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary-dark transition-colors"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Testimonial */}
      <section className="max-w-7xl mx-auto px-4 text-center py-24">
         <h2 className="text-3xl md:text-4xl font-display italic mb-16 leading-relaxed max-w-4xl mx-auto">
           "A stay that truly embodies class and taste. The attention to detail at Rayjok is simply remarkable."
         </h2>
         <div className="flex flex-col items-center">
           <div className="w-16 h-16 rounded-full bg-primary/20 p-1 mb-4">
             <img 
               className="w-full h-full rounded-full object-cover" 
               src="https://picsum.photos/seed/guest1/100/100" 
               alt="Guest" 
             />
           </div>
           <span className="font-bold text-sm tracking-wide">Adejoke Raymond</span>
           <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Loyal Guest</span>
         </div>
      </section>
    </div>
  );
};

export default Home;
