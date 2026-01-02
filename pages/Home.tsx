
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, BookOpen, Award, Users, ArrowRight, CheckCircle2, Zap, Trophy, Verified } from 'lucide-react';

const Home: React.FC = () => {
  const trainers = [
    { name: "Maj. Vijay Shinde (Retd.)", role: "Chief Tactical Trainer", expertise: "Field Operations & Strategy", badges: ["TOT Certified", "MEPSC Assessor"] },
    { name: "Mrs. Ananya Hedge", role: "Specialized Skill Expert", expertise: "CCTV & Electronic Surveillance", badges: ["Tech Master", "MEPSC Certified"] },
    { name: "Mr. Somesh Gowda", role: "Safety Specialist", expertise: "Fire Fighting & First Aid", badges: ["Safety Pro", "TOT Expert"] }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621243804936-775306a8f2e3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
              <Zap className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">E.S.T.A — Come and Excel</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-display text-white mb-6 leading-tight">
              Master the Art of <span className="text-amber-500">Security.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Excellities Skill Training Academy (ESTA) is the backbone of elite protection. As the dedicated training wing of <strong>Doberman Security Solutions</strong>, we transform individuals into MEPSC-certified guardians.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/services" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center transition-all group shadow-xl shadow-amber-600/20"
              >
                Join the Elite <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-slate-800/80 backdrop-blur hover:bg-slate-700 text-white px-10 py-5 rounded-xl font-bold flex items-center justify-center transition-all border border-slate-700"
              >
                Recruitment Flow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Faculty</div>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-white">TOT Certified <span className="text-amber-500">Trainers</span></h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">
              Our trainers aren't just teachers; they are field-hardened experts with Trainer of Trainers (TOT) certification from MEPSC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((t, i) => (
              <div key={i} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
                <div className="aspect-[4/5] bg-slate-800 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?auto=format&fit=crop&q=80&w=600`} 
                    alt={t.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {t.badges.map((b, idx) => (
                      <span key={idx} className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-amber-500 border border-amber-500/20">{b}</span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                  <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">{t.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{t.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Excellence */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display text-white mb-16 italic">"Securing the Future with Knowledge"</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 bg-slate-950 rounded-3xl border border-slate-800">
              <Trophy className="h-10 w-10 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Award Winning</h3>
              <p className="text-slate-400 text-sm">Recognized by MEPSC for maintaining the highest training standards in South India.</p>
            </div>
            <div className="p-10 bg-slate-950 rounded-3xl border border-slate-800">
              <Verified className="h-10 w-10 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">100% Compliant</h3>
              <p className="text-slate-400 text-sm">Full compliance with PSARA guidelines and MEPSC curriculum for all job roles.</p>
            </div>
            <div className="p-10 bg-slate-950 rounded-3xl border border-slate-800">
              <Shield className="h-10 w-10 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Operational Support</h3>
              <p className="text-slate-400 text-sm">Continuous on-site training sessions ensuring the guard force stays sharp and engaged.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
