
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-black/80 sticky top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
              <span className="font-display text-xl font-bold italic">R</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold tracking-tight uppercase">Rayjok</h1>
              <p className="text-[10px] tracking-[0.2em] text-slate-500 dark:text-slate-400 uppercase font-medium">Hotel & Suites Ltd.</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {!isCheckout && (
              <>
                <Link to="/" className="hover:text-primary transition-colors uppercase">Home</Link>
                <Link to="/rooms" className="hover:text-primary transition-colors uppercase">Rooms</Link>
                <Link to="/about" className="hover:text-primary transition-colors uppercase">About & Contact</Link>
                <Link to="/dashboard" className="bg-primary/10 text-primary px-4 py-2 rounded hover:bg-primary/20 transition-all uppercase text-xs">My Portal</Link>
                <Link to="/rooms" className="bg-primary text-white px-6 py-2.5 rounded hover:bg-opacity-90 transition-all font-semibold shadow-md">BOOK NOW</Link>
              </>
            )}
            {isCheckout && (
              <div className="flex items-center text-primary">
                <span className="material-icons-outlined text-lg mr-1">lock</span>
                Secure Checkout
              </div>
            )}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span className="material-icons-outlined text-xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <span className="font-display font-bold italic">R</span>
                </div>
                <h3 className="font-display font-bold text-lg uppercase">Rayjok</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Excellence in every stay. Experience the peak of luxury hospitality with Rayjok Hotel & Suites Ltd.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 uppercase text-sm tracking-widest">Quick Links</h4>
              <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/rooms" className="hover:text-primary transition-colors">Our Suites</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Restaurant</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Special Offers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 uppercase text-sm tracking-widest">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-icons-outlined text-xl">camera_alt</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <span className="material-icons-outlined text-xl">facebook</span>
                </a>
              </div>
            </div>
            <div>
               <h4 className="font-semibold mb-6 uppercase text-sm tracking-widest">Newsletter</h4>
               <div className="flex">
                 <input type="email" placeholder="Email" className="bg-slate-50 dark:bg-slate-900 border-none rounded-l p-2 w-full focus:ring-1 focus:ring-primary" />
                 <button className="bg-primary text-white px-4 rounded-r hover:bg-primary/90 transition-all">
                   <span className="material-icons-outlined">send</span>
                 </button>
               </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 Rayjok Hotel & Suites Ltd. All Rights Reserved.</p>
            <div className="flex space-x-6 text-[10px] uppercase font-bold text-slate-400 tracking-widest">
              <span>Class</span>
              <span>•</span>
              <span>Taste</span>
              <span>•</span>
              <span>Cool</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
