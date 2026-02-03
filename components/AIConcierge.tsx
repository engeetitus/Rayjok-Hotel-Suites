
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Rayjok Hotel & Suites. I am your Smart Concierge. How may I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = [...messages, userMsg];
    const aiResponse = await getConciergeResponse(history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || 'I apologize, something went wrong.' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-icons-outlined text-lg">support_agent</span>
              </div>
              <div>
                <p className="font-bold text-sm">Smart Concierge</p>
                <p className="text-[10px] text-white/70 uppercase tracking-widest">Rayjok Luxury Service</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <span className="material-icons-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none shadow-md shadow-primary/20' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/30">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..." 
                className="flex-grow bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-sm focus:ring-primary focus:border-primary dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition-all disabled:opacity-50"
              >
                <span className="material-icons-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        >
          <span className="material-icons-outlined group-hover:rotate-12 transition-transform">support_agent</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-sm font-bold uppercase tracking-wider">Smart Concierge</span>
        </button>
      )}
    </div>
  );
};

export default AIConcierge;
