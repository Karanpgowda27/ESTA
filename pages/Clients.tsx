
import React from 'react';
import { Shield, Building2, Globe, Handshake, CheckCircle, ExternalLink, Lock, Fingerprint, Eye } from 'lucide-react';

const Clients: React.FC = () => {
  const prestigiousClients = [
    { name: "TCS Think Campus", loc: "Electronic City", category: "IT", logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200" },
    { name: "Infosys", loc: "Electronic City", category: "IT", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200" },
    { name: "Toyota Kirloskar Motors", loc: "Bidadi", category: "Industrial", logo: "https://images.unsplash.com/photo-1565608083816-41f1f646ac52?auto=format&fit=crop&q=80&w=200" },
    { name: "Aditya Birla", loc: "Ramanagara", category: "Manufacturing", logo: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=200" },
    { name: "Brigade Group", loc: "Multiple Locations", category: "Real Estate", logo: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=200" },
    { name: "Dairy Day Head Office", loc: "Bangalore", category: "Corporate", logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200" }
  ];

  const mouPartners = [
    { name: "Jaguar Security", logo: "JS" },
    { name: "Golden Eye Security", logo: "GE" },
    { name: "CISS", logo: "CI" },
    { name: "BISS", logo: "BI" },
    { name: "Ansec", logo: "AN" }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-24 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Our Operational Reach</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Securing <span className="text-amber-500">Industry Leaders</span></h1>
        </div>

        {/* Portal Mockup Section */}
        <div className="mb-24">
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden relative shadow-2xl shadow-amber-500/5">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20">
                <div className="inline-flex items-center space-x-2 text-amber-500 mb-6">
                  <Lock size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest">Secure Access</span>
                </div>
                <h2 className="text-4xl font-bold font-display text-white mb-6">MOU Partner <span className="text-amber-500">Verification</span> Portal</h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  Strategic partners like Jaguar and CISS can access our real-time database to verify guard training status, MEPSC certificates, and enrollment progress.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2">
                    <Fingerprint size={20} />
                    <span>Partner Login</span>
                  </button>
                  <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 border border-slate-700">
                    <Eye size={20} />
                    <span>Live Verification</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-slate-950 p-8 lg:p-12 border-l border-slate-800 flex items-center justify-center relative">
                <div className="w-full max-w-sm space-y-6">
                  {/* Mock Verification UI */}
                  <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500"><Shield size={24} /></div>
                      <div>
                        <div className="text-white font-bold">ESTA System Check</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest">Protocol V4.2 Active</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-3/4 animate-pulse"></div>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                        <span>DATA ENCRYPTED</span>
                        <span className="text-green-500">SECURE SESSION</span>
                      </div>
                      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                        <div className="text-xs text-slate-500 mb-1">Verify Candidate ID</div>
                        <div className="text-white font-mono tracking-widest">ESTA-2024-XXXX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Existing Clients Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {prestigiousClients.map((client, idx) => (
            <div key={idx} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all">
              <div className="p-8 flex items-center space-x-6">
                <div className="h-16 w-16 bg-slate-800 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-slate-700">
                  <img src={client.logo} alt={client.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-bold leading-tight group-hover:text-amber-500 transition-colors">{client.name}</h3>
                  <p className="text-slate-500 text-xs mt-1">{client.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOUs Wall */}
        <div className="bg-slate-900/50 border border-slate-800 p-10 lg:p-16 rounded-3xl">
          <h2 className="text-2xl font-bold font-display text-white mb-10 text-center">Agency MOU Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {mouPartners.map((p, i) => (
              <div key={i} className="flex flex-col items-center justify-center group">
                <div className="w-16 h-16 bg-slate-950 border border-slate-800 rounded-full flex items-center justify-center text-amber-500/40 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all mb-3 text-xl font-bold">
                  {p.logo}
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-white transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
