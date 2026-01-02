
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Phone, Mail, MapPin, LayoutDashboard, Globe, Languages } from 'lucide-react';
import { Language } from '../types';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Security IQ', path: '/iq-test' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-amber-500 rounded-lg shadow-lg shadow-amber-500/20">
                <Shield className="h-7 w-7 text-slate-950" />
              </div>
              <div>
                <span className="block text-xl font-bold font-display tracking-wider text-white">E.S.T.A</span>
                <span className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">Exelity Academy</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[10px] font-bold uppercase tracking-widest transition-all hover:text-amber-500 ${
                    location.pathname === link.path ? 'text-amber-500' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center bg-slate-900 rounded-full px-3 py-1 border border-slate-800">
                <Globe size={14} className="text-slate-500 mr-2" />
                <select 
                  value={lang} 
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="bg-transparent text-[10px] font-bold text-slate-300 outline-none uppercase cursor-pointer"
                >
                  {languages.map(l => <option key={l.code} value={l.code} className="bg-slate-900">{l.label}</option>)}
                </select>
              </div>

              <Link to="/admin" className="p-2 text-slate-500 hover:text-amber-500 transition-colors">
                <LayoutDashboard size={18} />
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-400">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 p-4 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold uppercase tracking-widest text-slate-400">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} EXELITY SKILL TRAINING ACADEMY • A WING OF DSSPL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
