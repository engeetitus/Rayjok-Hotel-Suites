
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredRooms = filter === 'All' 
    ? ROOMS 
    : ROOMS.filter(r => r.category === filter);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Accommodations</span>
          <h1 className="text-5xl font-display font-bold mb-6">Available Rooms & Suites</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
            Discover a world of class, taste, and comfort. Each of our rooms is designed to provide an unparalleled experience of luxury in Lagos.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          {['All', 'Standard', 'Deluxe', 'Executive', 'Presidential'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Listing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredRooms.map(room => (
            <div key={room.id} className="group flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest">
                  {room.category}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold">{room.name}</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">₦{room.price.toLocaleString()}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400">per night</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                     <span className="material-icons-outlined text-sm text-primary">group</span>
                     {room.capacity}
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                     <span className="material-icons-outlined text-sm text-primary">wifi</span>
                     High-Speed Wi-Fi
                   </div>
                </div>

                <div className="flex gap-4 mt-auto">
                  <Link 
                    to="/checkout" 
                    state={{ roomId: room.id }}
                    className="flex-grow bg-primary text-white py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-primary-dark transition-colors text-center shadow-lg shadow-primary/20"
                  >
                    Reserve Room
                  </Link>
                  <button className="p-3 border border-slate-200 dark:border-slate-700 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <span className="material-icons-outlined text-primary">favorite_border</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
