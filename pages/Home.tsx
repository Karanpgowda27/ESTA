
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, ArrowRight, Trophy, Verified, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">Elite MEPSC Certified Training</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-display text-white mb-6 leading-tight">
              Master the Art of <span className="text-amber-500">Security.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Exelity Skill Training Academy (ESTA) transforms recruits into high-precision security professionals for the Doberman family.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/iq-test" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center transition-all group shadow-xl shadow-amber-600/20 border border-amber-400/20"
              >
                Take Security IQ Test <Zap className="ml-2 group-hover:scale-125 transition-transform" size={20} />
              </Link>
              <Link 
                to="/services" 
                className="bg-slate-800/80 backdrop-blur hover:bg-slate-700 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center transition-all border border-slate-700"
              >
                View Job Roles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Placements", val: "100%", icon: <Verified size={16} /> },
            { label: "Certified Courses", val: "12+", icon: <Shield size={16} /> },
            { label: "Active Sites", val: "200+", icon: <Star size={16} /> },
            { label: "Expert Faculty", val: "TOT", icon: <Trophy size={16} /> }
          ].map((s, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="text-amber-500">{s.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white font-display">{s.val}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
