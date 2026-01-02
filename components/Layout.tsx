
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, Phone, Mail, MapPin, LayoutDashboard, Globe } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-amber-500 rounded-lg shadow-lg shadow-amber-500/20">
                <Shield className="h-7 w-7 text-slate-950" />
              </div>
              <div>
                <span className="block text-xl font-bold font-display tracking-wider text-white">E.S.T.A</span>
                <span className="block text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em]">Come and Excel</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-amber-500 ${
                    location.pathname === link.path ? 'text-amber-500 border-b-2 border-amber-500 pb-1' : 'text-slate-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                className="p-2 text-slate-500 hover:text-amber-500 transition-colors"
                title="Secure Admin Access"
              >
                <LayoutDashboard size={20} />
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-400 hover:text-white"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-amber-500 hover:bg-slate-900 rounded-md transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-sm font-bold text-amber-500/80 hover:bg-slate-900 rounded-md"
              >
                Admin Panel
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-amber-500" />
                <span className="text-xl font-bold font-display tracking-tight">E.S.T.A</span>
              </Link>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                "Come and Excel" — Transforming the security landscape through MEPSC-certified training and operational brilliance.
              </p>
              <div className="flex space-x-4">
                 <div className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"><Globe size={18} /></div>
                 <div className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer"><Phone size={18} /></div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Training</h3>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">Guard Certification</Link></li>
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">Supervisor Roles</Link></li>
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">CCTV Operations</Link></li>
                <li><Link to="/services" className="hover:text-amber-500 transition-colors">Fire Fighting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">HQ Contact</h3>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="flex items-start space-x-3">
                  <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <span>Bommasandra Industrial Area, Bangalore - 560099</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={16} className="text-amber-500 shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Parent Group</h3>
              <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">DSSPL Branches</p>
                <div className="text-[10px] grid grid-cols-2 gap-2 text-slate-400 font-medium">
                  <span>Bengaluru</span>
                  <span>Mysuru</span>
                  <span>Mangaluru</span>
                  <span>Hyderabad</span>
                  <span>Chennai</span>
                  <span>Hosur</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
              &copy; {new Date().getFullYear()} EXCELLITIES SKILL TRAINING ACADEMY • A WING OF DSSPL
            </p>
            <div className="flex space-x-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-amber-500">MEPSC Portal</a>
              <a href="#" className="hover:text-amber-500">Employee Login</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
