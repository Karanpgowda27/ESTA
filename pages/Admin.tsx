
import React, { useState, useEffect } from 'react';
import { getLeads, deleteLead } from '../services/storage';
import { Lead } from '../types';
import { Trash2, User, Phone, Mail, Clock, Download, RefreshCw, Briefcase, MapPin } from 'lucide-react';

const Admin: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    setLoading(true);
    const data = getLeads();
    setLeads(data);
    setTimeout(() => setLoading(false), 500);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this recruitment lead?")) {
      deleteLead(id);
      fetchLeads();
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold font-display text-white">Admissions Console</h1>
            <p className="text-slate-400 mt-1">Exelity Academy Secure Enrollment Database</p>
          </div>
          <button onClick={fetchLeads} className="p-3 bg-slate-800 rounded-xl text-amber-500"><RefreshCw size={20} className={loading ? 'animate-spin' : ''} /></button>
        </div>

        {leads.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-20 text-center">
            <User size={40} className="mx-auto text-slate-700 mb-4" />
            <p className="text-slate-500">No applicants in the queue.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row gap-8 hover:border-amber-500/20 transition-all">
                <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-slate-800 pb-6 md:pb-0">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">{lead.name[0]}</div>
                    <div>
                      <h3 className="text-white font-bold">{lead.name}</h3>
                      <p className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{lead.service}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-xs text-slate-400">
                    <div className="flex items-center space-x-2"><Phone size={14} /> <span>{lead.phone}</span></div>
                    <div className="flex items-center space-x-2"><Mail size={14} /> <span>{lead.email}</span></div>
                    <div className="flex items-center space-x-2 text-amber-500/80"><MapPin size={14} /> <span>{lead.city || 'Bengaluru'}</span></div>
                  </div>
                </div>
                
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 px-3 py-1 bg-slate-800 rounded-full text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                        <Briefcase size={12} />
                        <span>Experience: {lead.experience || 'Fresher'}</span>
                      </div>
                      <span className="text-[10px] text-slate-600 font-bold">{new Date(lead.timestamp).toLocaleDateString()}</span>
                    </div>
                    <p className="text-slate-300 italic text-sm">"{lead.message || 'No additional message.'}"</p>
                  </div>
                  <div className="flex justify-end pt-6">
                    <button onClick={() => handleDelete(lead.id)} className="text-red-500/50 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
