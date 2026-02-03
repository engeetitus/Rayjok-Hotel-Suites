
import React from 'react';
import { ROOMS } from '../constants';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950/30 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-display font-bold">Welcome back, Alexander</h1>
            <p className="text-slate-500 text-sm mt-1">Manage your luxury stays and loyalty rewards.</p>
          </div>
          <div className="flex space-x-4">
            <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                <span className="material-icons-outlined">loyalty</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Loyalty Points</p>
                <p className="text-lg font-bold">2,450</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-icons-outlined">verified</span>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Status</p>
                <p className="text-lg font-bold">Gold Tier</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Stays */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-display font-bold uppercase tracking-wider">Upcoming Stays</h3>
                <button className="text-xs font-bold text-primary hover:underline uppercase tracking-widest">View All</button>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-64 h-48 md:h-auto overflow-hidden">
                    <img src={ROOMS[0].image} alt="Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-display font-bold">{ROOMS[0].name}</h4>
                        <p className="text-xs text-slate-500 mt-1 flex items-center uppercase tracking-wider font-semibold">
                          <span className="material-icons-outlined text-sm mr-1">location_on</span>
                          Victoria Island Branch, Lagos
                        </p>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Confirmed</span>
                    </div>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-slate-50 dark:border-slate-800">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Check-In</p>
                        <p className="font-bold text-sm">Oct 24, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Check-Out</p>
                        <p className="font-bold text-sm">Oct 27, 2024</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Guests</p>
                        <p className="font-bold text-sm">2 Adults</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Reservation #</p>
                        <p className="font-bold text-sm uppercase">RYJK-98012</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <button className="bg-primary text-white px-6 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dark transition shadow-md">View Receipt</button>
                      <button className="border border-slate-200 dark:border-slate-700 px-6 py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition">Modify Booking</button>
                      <button className="text-red-500 hover:text-red-600 text-[10px] font-bold uppercase tracking-widest ml-auto">Cancel Stay</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Past Stays */}
            <section>
              <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-6">Recent Stays</h3>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl divide-y divide-slate-100 dark:divide-slate-800 shadow-sm overflow-hidden">
                {[
                  { name: 'Classic King Room', date: 'August 12 - 15, 2024', price: '₦95,000.00', img: ROOMS[3].image },
                  { name: 'Diplomatic Lounge', date: 'June 04 - 07, 2024', price: '₦250,000.00', img: ROOMS[1].image }
                ].map((stay, idx) => (
                  <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded overflow-hidden">
                        <img src={stay.img} alt="Past Room" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-bold text-sm uppercase tracking-wide">{stay.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{stay.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sm text-primary">{stay.price}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest">Completed</span>
                        <button className="text-slate-300 hover:text-primary"><span className="material-icons-outlined text-sm">download</span></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            {/* Exclusive Offers */}
            <section>
              <h3 className="text-xl font-display font-bold uppercase tracking-wider mb-6">Exclusive Offers</h3>
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                  <img src="https://picsum.photos/seed/spa/400/300" alt="Spa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full w-fit mb-2 uppercase tracking-widest shadow-lg">OFFER</span>
                    <h4 className="text-white font-bold text-lg uppercase tracking-wider">20% Off Spa & Wellness</h4>
                    <p className="text-white/80 text-xs">Valid for your next stay in November.</p>
                  </div>
                </div>
                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-sm text-primary uppercase tracking-[0.2em] mb-2">Refer a Friend</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">Earn 5,000 bonus points for every friend who books their first luxury stay.</p>
                  <button className="text-[10px] font-bold text-primary flex items-center uppercase tracking-[0.2em] hover:translate-x-1 transition-transform">
                    GET REFERRAL LINK <span className="material-icons-outlined text-sm ml-1">chevron_right</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Account Settings Shortcut */}
            <section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
               <h4 className="font-bold text-sm uppercase tracking-widest mb-4">Quick Settings</h4>
               <div className="space-y-2">
                 {['Profile Information', 'Security & Password', 'Payment Methods', 'Notification Preferences'].map(s => (
                   <button key={s} className="w-full flex items-center justify-between p-3 text-xs font-semibold text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded transition-all">
                     <span>{s}</span>
                     <span className="material-icons-outlined text-sm">chevron_right</span>
                   </button>
                 ))}
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
