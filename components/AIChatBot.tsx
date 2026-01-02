
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { getSecurityAdvice } from '../services/aiService';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Excellities Academy. I am your AI security advisor. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getSecurityAdvice(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-slate-900 w-80 sm:w-96 h-[500px] rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="bg-amber-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1 rounded">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-white font-bold">Security Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 space-y-4 overflow-y-auto bg-slate-950">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] items-start space-x-2 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-1.5 rounded-full shrink-0 ${m.role === 'user' ? 'bg-amber-500' : 'bg-slate-700'}`}>
                    {m.role === 'user' ? <User size={14} className="text-slate-950" /> : <Bot size={14} className="text-amber-500" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-amber-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl border border-slate-700 flex items-center space-x-2">
                  <Loader2 className="animate-spin h-4 w-4 text-amber-500" />
                  <span className="text-xs text-slate-400 italic">Consulting academy protocols...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about training..."
              className="flex-grow bg-slate-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 border border-slate-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="p-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-white"
        >
          <MessageSquare size={28} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};

// Helper inside file for simplicity
const Shield: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default AIChatBot;
