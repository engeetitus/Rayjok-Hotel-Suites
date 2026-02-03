
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROOMS } from '../constants';

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const roomId = location.state?.roomId || '1';
  const room = ROOMS.find(r => r.id === roomId) || ROOMS[0];

  const [step, setStep] = useState(2);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requests: '',
    payment: 'card'
  });

  const subtotal = room.price * 3; // Mocking 3 nights
  const vat = subtotal * 0.075;
  const serviceCharge = 5000;
  const total = subtotal + vat + serviceCharge;

  const handleComplete = () => {
    // In a real app, send to API
    alert("Booking Completed! Redirecting to your dashboard...");
    navigate('/dashboard');
  };

  return (
    <div className="py-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center space-x-4 mb-12 overflow-x-auto scrollbar-hide">
          <div className="flex items-center text-primary font-semibold whitespace-nowrap">
            <span className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center mr-2 text-sm">1</span>
            <span>Selection</span>
          </div>
          <div className="h-px w-8 bg-slate-300 dark:bg-slate-700 flex-shrink-0"></div>
          <div className="flex items-center text-primary font-semibold whitespace-nowrap">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2 text-sm">2</span>
            <span>Details</span>
          </div>
          <div className="h-px w-8 bg-slate-300 dark:bg-slate-700 flex-shrink-0"></div>
          <div className={`flex items-center whitespace-nowrap ${step === 3 ? 'text-primary' : 'text-slate-400'}`}>
            <span className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-2 text-sm ${step === 3 ? 'border-primary' : 'border-slate-300'}`}>3</span>
            <span>Payment</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Room Summary Header */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img alt={room.name} className="w-full h-full object-cover" src={room.image}/>
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-display font-bold">{room.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center">
                          <span className="material-icons-outlined text-base mr-1">calendar_today</span>
                          Oct 24 - Oct 27, 2024 (3 Nights)
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center">
                          <span className="material-icons-outlined text-base mr-1">group</span>
                          {room.capacity}
                        </p>
                      </div>
                      <button onClick={() => navigate('/rooms')} className="text-primary text-sm font-semibold hover:underline">Edit Selection</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Guest Info */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-lg font-display font-bold uppercase tracking-wider">Guest Information</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Please enter the details of the primary guest.</p>
              </div>
              <div className="p-6">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">First Name</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary dark:text-white" 
                      placeholder="John" 
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Last Name</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary dark:text-white" 
                      placeholder="Doe" 
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary dark:text-white" 
                      placeholder="john.doe@example.com" 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-500 text-sm">+234</span>
                      <input 
                        className="w-full px-4 py-3 rounded-r-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary dark:text-white" 
                        placeholder="800 000 0000" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Special Requests (Optional)</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-lg border-slate-200 dark:border-slate-700 bg-transparent focus:ring-primary focus:border-primary dark:text-white" 
                      placeholder="e.g. Airport pickup, early check-in, dietary requirements..." 
                      rows={3}
                      value={formData.requests}
                      onChange={(e) => setFormData({...formData, requests: e.target.value})}
                    ></textarea>
                  </div>
                </form>
              </div>
            </section>

            {/* Payment Method */}
            <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-display font-bold uppercase tracking-wider">Payment Method</h2>
                  <div className="flex space-x-2">
                    <span className="material-icons-outlined text-slate-300">credit_card</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div 
                  onClick={() => setFormData({...formData, payment: 'card'})}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.payment === 'card' ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800'}`}
                >
                  <div className={`w-5 h-5 rounded-full border-4 mr-3 ${formData.payment === 'card' ? 'border-primary bg-white dark:bg-slate-900' : 'border-slate-300'}`}></div>
                  <div className="flex-grow">
                    <span className="font-semibold block">Credit / Debit Card</span>
                    <span className="text-xs text-slate-500">Securely pay via card or digital wallet</span>
                  </div>
                  <span className={`material-icons-outlined ${formData.payment === 'card' ? 'text-primary' : 'text-slate-300'}`}>credit_card</span>
                </div>
                <div 
                  className="flex items-center p-4 border border-slate-200 dark:border-slate-800 rounded-xl opacity-50 cursor-not-allowed"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-700 mr-3"></div>
                  <div className="flex-grow">
                    <span className="font-semibold block">Pay at Hotel</span>
                    <span className="text-xs text-slate-500">Subject to availability for this rate</span>
                  </div>
                  <span className="material-icons-outlined text-slate-400">payments</span>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                <button 
                  onClick={handleComplete}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Complete Booking</span>
                  <span className="material-icons-outlined">arrow_forward</span>
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-4 leading-relaxed uppercase tracking-widest font-medium">
                  By clicking "Complete Booking", you agree to Rayjok's Terms of Service and Privacy Policy. All transactions are encrypted and secure.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 bg-primary text-white">
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider">Booking Summary</h3>
                  <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Confirmation #RAY-{Math.floor(Math.random() * 9000) + 1000}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">3 Nights (Standard Rate)</span>
                    <span className="font-medium">₦{subtotal.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Complimentary Breakfast</span>
                    <span className="text-green-600 font-medium font-bold uppercase text-[10px] tracking-wider">Included</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">VAT (7.5%)</span>
                    <span className="font-medium">₦{vat.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Service Charge</span>
                    <span className="font-medium">₦{serviceCharge.toLocaleString()}.00</span>
                  </div>
                  <hr className="border-slate-100 dark:border-slate-800"/>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Total Price</p>
                      <p className="text-3xl font-display font-bold text-primary">₦{total.toLocaleString()}.00</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mb-1 font-bold uppercase tracking-wider">Non-refundable</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-3 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <span className="material-icons-outlined text-green-500 text-sm">verified_user</span>
                    <p>Best Price Guaranteed. No hidden fees.</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-center shadow-sm">
                  <span className="material-icons-outlined text-primary mb-2">security</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">SSL Encrypted</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-center shadow-sm">
                  <span className="material-icons-outlined text-primary mb-2">support_agent</span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">24/7 Support</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-[11px] text-slate-400 uppercase font-bold tracking-widest">Need help with your booking?</p>
                <a className="text-[11px] text-primary font-bold hover:underline uppercase tracking-widest" href="#">Contact Reservations Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
