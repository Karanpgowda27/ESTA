
import React, { useState } from 'react';
import { MapPin, Phone, Building, Star } from 'lucide-react';
import { Branch } from '../types';

const branches: Branch[] = [
  { id: 'blr', name: 'Bengaluru (HQ)', address: 'Plot 14/B, Bommasandra Ind. Area, 560099', phone: '+91 80 4567 8900', manager: 'Mr. Rajesh Kumar', isHeadOffice: true },
  { id: 'mys', name: 'Mysuru', address: 'Hebbal Industrial Estate, Mysuru', phone: '+91 821 2412 345', manager: 'Mr. Siddarth P.' },
  { id: 'mng', name: 'Mangaluru', address: 'Bendoorwell Road, Mangaluru', phone: '+91 824 2223 334', manager: 'Mr. Vinay Bhat' },
  { id: 'hyd', name: 'Hyderabad', address: 'HITEC City, Madhapur, Hyderabad', phone: '+91 40 6677 8899', manager: 'Mr. Arjun Reddy' },
  { id: 'chn', name: 'Chennai', address: 'OMR Road, Karapakkam, Chennai', phone: '+91 44 2450 1122', manager: 'Mr. S. Karthik' },
  { id: 'hsr', name: 'Hosur', address: 'SIPCOT Phase II, Hosur', phone: '+91 4344 276 543', manager: 'Mr. Murugan G.' },
  { id: 'sra', name: 'Sira', address: 'Tumakuru Highway, Sira', phone: '+91 8135 275 111', manager: 'Mr. Chandru M.' }
];

const BranchMap: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<Branch>(branches[0]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col lg:flex-row h-full">
      {/* Map Side */}
      <div className="lg:w-1/2 p-8 bg-slate-950 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-amber-500/10 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
          {branches.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBranch(b)}
              className={`p-4 rounded-xl border transition-all text-left ${
                activeBranch.id === b.id 
                ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-600/20' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-widest">{b.id === 'blr' ? 'HQ' : 'Branch'}</span>
                <MapPin size={14} className={activeBranch.id === b.id ? 'text-white' : 'text-amber-500'} />
              </div>
              <div className="font-bold truncate">{b.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Details Side */}
      <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 text-amber-500 mb-2">
            <Building size={20} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Operational Hub</span>
          </div>
          <h3 className="text-3xl font-bold font-display text-white">{activeBranch.name}</h3>
          {activeBranch.isHeadOffice && (
            <span className="mt-2 inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-500 font-bold uppercase">Head Office</span>
          )}
        </div>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-slate-800 p-2 rounded-lg"><MapPin size={18} className="text-amber-500" /></div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Address</p>
              <p className="text-slate-200 text-sm">{activeBranch.address}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-slate-800 p-2 rounded-lg"><Phone size={18} className="text-amber-500" /></div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Support Line</p>
              <p className="text-slate-200 text-sm">{activeBranch.phone}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-slate-800 p-2 rounded-lg"><Star size={18} className="text-amber-500" /></div>
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase mb-1">Operational Manager</p>
              <p className="text-slate-200 text-sm">{activeBranch.manager}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchMap;
