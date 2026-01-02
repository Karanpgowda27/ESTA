
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, User, Briefcase, FileText, ChevronRight, ChevronLeft, ShieldCheck, Zap } from 'lucide-react';
import { saveLead } from '../services/storage';
import { ServiceType } from '../types';
import BranchMap from '../components/BranchMap';

const Contact: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ServiceType.TRAINING,
    message: '',
    city: 'Bengaluru',
    experience: 'Fresher'
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveLead(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setStep(1);
      setFormData({ name: '', email: '', phone: '', service: ServiceType.TRAINING, message: '', city: 'Bengaluru', experience: 'Fresher' });
    }, 5000);
  };

  const steps = [
    { id: 1, name: 'Identity', icon: <User size={16} /> },
    { id: 2, name: 'Expertise', icon: <Briefcase size={16} /> },
    { id: 3, name: 'Enrollment', icon: <FileText size={16} /> }
  ];

  return (
    <div className="bg-slate-950 py-24 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Exelity Admissions</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Join the <span className="text-amber-500">Elite</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to become a certified security professional? Follow our streamlined recruitment process to start your journey at Exelity Academy.
          </p>
        </div>

        {/* Branch Map Section */}
        <div className="mb-24">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-display text-white">Find Your Nearest Hub</h2>
            <p className="text-slate-500 text-sm mt-2">Parent Group DSSPL has branches across 7 major cities in South India.</p>
          </div>
          <BranchMap />
        </div>

        {/* Recruitment Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
              <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-300">
                <div className="h-24 w-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Application Transmitted</h2>
                <p className="text-slate-400 max-w-sm">
                  Our recruitment officer at {formData.city} will contact you shortly to schedule your physical evaluation.
                </p>
              </div>
            ) : (
              <>
                {/* Step Indicators */}
                <div className="flex justify-between mb-12">
                  {steps.map((s) => (
                    <div key={s.id} className="flex flex-col items-center space-y-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                        step >= s.id ? 'bg-amber-600 border-amber-600 text-white' : 'border-slate-800 text-slate-600'
                      }`}>
                        {s.icon}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${
                        step >= s.id ? 'text-amber-500' : 'text-slate-600'
                      }`}>{s.name}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {step === 1 && (
                    <div className="animate-in slide-in-from-right-4 duration-300 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                          <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 outline-none" 
                            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                          <input required type="tel" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 outline-none"
                            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                        <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-amber-500 outline-none"
                          value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-in slide-in-from-right-4 duration-300 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preferred Job Role</label>
                          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none"
                            value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                            <option value="Security Guard">Security Guard</option>
                            <option value="Security Supervisor">Security Supervisor</option>
                            <option value="CCTV Operator">CCTV Operator</option>
                            <option value="Fire Fighter">Fire Fighter</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nearest Branch</label>
                          <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none"
                            value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})}>
                            <option>Bengaluru</option>
                            <option>Mysuru</option>
                            <option>Mangaluru</option>
                            <option>Chennai</option>
                            <option>Hyderabad</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Security Experience</label>
                        <div className="flex gap-4">
                          {['Fresher', '1-2 Years', '3+ Years'].map(exp => (
                            <button key={exp} type="button" onClick={() => setFormData({...formData, experience: exp})}
                              className={`flex-grow py-3 rounded-xl border text-sm font-bold transition-all ${
                                formData.experience === exp ? 'bg-amber-600/20 border-amber-500 text-amber-500' : 'bg-slate-950 border-slate-800 text-slate-500'
                              }`}>{exp}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-in slide-in-from-right-4 duration-300 space-y-6">
                      <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <h4 className="text-amber-500 font-bold mb-4 flex items-center gap-2">
                          <ShieldCheck size={18} />
                          Final Enrollment Info
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                          By submitting, you understand that ESTA will handle your **EPFO, ESIC, Insurance, and E-Nomination** processes upon recruitment. You will also be provided with the standard **Doberman Tactical Uniform Kit**.
                        </p>
                        <textarea rows={3} className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white outline-none text-sm"
                          placeholder="Any additional queries or medical notes?" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                      </div>
                      <div className="flex items-center space-x-3 text-amber-500/60 bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
                        <Zap size={16} />
                        <span className="text-[10px] font-bold uppercase tracking-widest italic">ESTA ensures 100% placement for top performers.</span>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between pt-6 border-t border-slate-800">
                    <button type="button" onClick={prevStep} disabled={step === 1}
                      className="px-6 py-3 text-slate-500 hover:text-white disabled:opacity-0 flex items-center space-x-2 transition-all">
                      <ChevronLeft size={20} />
                      <span>Back</span>
                    </button>
                    
                    {step < 3 ? (
                      <button type="button" onClick={nextStep}
                        className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all">
                        <span>Continue</span>
                        <ChevronRight size={20} />
                      </button>
                    ) : (
                      <button type="submit"
                        className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-3 rounded-xl font-bold flex items-center space-x-2 transition-all shadow-lg shadow-amber-600/20">
                        <span>Submit Application</span>
                        <Send size={20} />
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
