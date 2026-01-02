
import React from 'react';
import { Award, ShieldCheck, Target, Zap, Cpu, Flame, Briefcase, HeartPulse, Baby, FileText, ClipboardCheck, Shirt } from 'lucide-react';
import { ServiceType } from '../types';

const Services: React.FC = () => {
  const mepscRoles = [
    { title: "Security Guard", icon: <ShieldCheck />, desc: "Core guarding protocols, discipline, and surveillance." },
    { title: "Security Supervisor", icon: <ClipboardCheck />, desc: "Site management, shift coordination, and reporting." },
    { title: "CCTV Operator", icon: <Cpu />, desc: "Technical monitoring, behavioral analysis, and rapid response." },
    { title: "Fire Fighter", icon: <Flame />, desc: "Emergency drills, fire suppression, and hazard prevention." },
    { title: "Multi-Functional Office Executive", icon: <Briefcase />, desc: "Front-desk security and administrative management." }
  ];

  const enrollmentProcess = [
    { title: "Complete Enrollment", icon: <FileText />, desc: "End-to-end documentation for new recruits." },
    { title: "Benefits Management", icon: <Zap />, desc: "Creation of EPFO, ESIC, and E-Nomination profiles." },
    { title: "Risk Protection", icon: <Award />, desc: "Group and individual insurance processing." },
    { title: "Uniform Kit", icon: <Shirt />, desc: "Providing full tactical uniforms and gear for deployment." }
  ];

  const upcoming = [
    { title: "First Aid Training", icon: <HeartPulse />, desc: "Life-saving medical response certification." },
    { title: "Pre-School & Day Care", icon: <Baby />, desc: "Certified facilitators for corporate child care units." }
  ];

  return (
    <div className="bg-slate-950 py-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Exelity Training Excellence</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">MEPSC Certified <span className="text-amber-500">Job Roles</span></h1>
          <p className="text-slate-400 text-lg italic">
            "We play a crucial role by providing elite training and taking care of the complete lifecycle of a security professional."
          </p>
        </div>

        {/* MEPSC Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mepscRoles.map((role, idx) => (
            <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-all group">
              <div className="bg-amber-500/10 p-4 rounded-xl w-fit mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                {role.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Enrollment & Welfare Section */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <div className="h-px bg-slate-800 flex-grow"></div>
            <h2 className="text-2xl font-bold font-display text-white whitespace-nowrap">Recruit Welfare & Enrollment</h2>
            <div className="h-px bg-slate-800 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentProcess.map((step, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center flex flex-col items-center">
                <div className="text-amber-500 mb-4">{step.icon}</div>
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-500/20 rounded-3xl p-10 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <HeartPulse size={120} />
             </div>
             <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Coming Soon</span>
             <h2 className="text-3xl font-bold font-display text-white mb-6">Upcoming Certifications</h2>
             <div className="space-y-6">
                {upcoming.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-amber-600 rounded-3xl p-10 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold font-display mb-6">Continuous On-Site Learning</h2>
            <p className="text-amber-50 mb-8 text-lg">
              ESTA takes regular training sessions at every DSSPL client location. This ensures our guards are always kept engaged in the learning process and stay sharp for their duties.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center font-bold">99%</div>
              <p className="text-sm font-medium">Compliance rate in regular site audits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
