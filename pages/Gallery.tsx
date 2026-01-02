
import React, { useState } from 'react';
import { Camera, Maximize2, Award, Users, Trophy } from 'lucide-react';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, type: 'training', title: 'Tactical Drill 2023', image: 'https://images.unsplash.com/photo-1614030424754-24d1fbf56e2e?auto=format&fit=crop&q=80&w=800', description: 'High-intensity tactical training simulation for field personnel.' },
    { id: 2, type: 'achievement', title: 'Excellence Award', image: 'https://images.unsplash.com/photo-1531545513256-b08502ad7465?auto=format&fit=crop&q=80&w=800', description: 'Recognition for outstanding contributions to security education.' },
    { id: 3, type: 'milestone', title: 'Graduation Ceremony', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800', description: 'Celebrating the latest batch of MEPSC-certified security professionals.' },
    { id: 4, type: 'training', title: 'Fire Safety Workshop', image: 'https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=800', description: 'Critical fire safety and emergency response training session.' },
    { id: 5, type: 'achievement', title: 'MOU Signing', image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=800', description: 'Forming strategic partnerships for enhanced security infrastructure.' },
    { id: 6, type: 'training', title: 'Classroom Knowledge', image: 'https://images.unsplash.com/photo-1573164067507-405903421544?auto=format&fit=crop&q=80&w=800', description: 'Theoretical training on behavioral conduct and surveillance ethics.' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  return (
    <div className="bg-slate-950 py-24 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Academy <span className="text-amber-500">Moments</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A visual record of our milestones, high-impact training sessions, and the achievements that define Exelity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'training', 'achievement', 'milestone'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all border ${
                filter === f 
                  ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20' 
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <div className="flex items-center space-x-2 text-amber-500 mb-2">
                  {item.type === 'training' && <Users size={16} />}
                  {item.type === 'achievement' && <Trophy size={16} />}
                  {item.type === 'milestone' && <Award size={16} />}
                  <span className="text-xs font-bold uppercase tracking-widest">{item.type}</span>
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{item.description}</p>
              </div>
              <div className="p-4 md:hidden">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-slate-400 text-xs mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
