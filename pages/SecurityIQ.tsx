
import React, { useState } from 'react';
import { Shield, Zap, AlertTriangle, CheckCircle2, Trophy, ArrowRight, RefreshCw, Eye, Flame, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const scenarios = [
  {
    id: 1,
    title: "Suspicious Package",
    question: "You notice an unattended bag near the main server room entrance. What is your first action?",
    icon: <Package className="text-amber-500" />,
    options: [
      { text: "Open it to check for ID", points: 0, feedback: "Incorrect. Never touch suspicious items." },
      { text: "Cordon off the area and notify supervisor", points: 10, feedback: "Correct. Safety and reporting are priority." },
      { text: "Move it to the lost and found", points: 0, feedback: "Incorrect. It could be hazardous." }
    ]
  },
  {
    id: 2,
    title: "Fire Alert",
    question: "Smoke is detected in the cafeteria. The alarm hasn't sounded yet. What do you do?",
    icon: <Flame className="text-red-500" />,
    options: [
      { text: "Wait for the alarm to trigger", points: 0, feedback: "Incorrect. Every second counts." },
      { text: "Pull the manual call point and guide evacuation", points: 10, feedback: "Correct. Proactive response saves lives." },
      { text: "Investigate the kitchen alone", points: 5, feedback: "Risky. Notification should come first." }
    ]
  },
  {
    id: 3,
    title: "Unauthorized Access",
    question: "An employee has forgotten their badge and insists on entering the high-security zone.",
    icon: <Shield className="text-blue-500" />,
    options: [
      { text: "Let them in since you know them", points: 0, feedback: "Incorrect. Policy is absolute." },
      { text: "Politely deny entry and direct them to HR for a temp pass", points: 10, feedback: "Correct. Professional vigilance is key." },
      { text: "Ask another employee to vouch for them", points: 0, feedback: "Incorrect. Breaks security protocol." }
    ]
  }
];

const SecurityIQ: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleOption = (points: number, feedback: string) => {
    setScore(s => s + points);
    setShowFeedback(feedback);
  };

  const next = () => {
    setShowFeedback(null);
    if (currentIdx < scenarios.length - 1) {
      setCurrentIdx(c => c + 1);
    } else {
      setIsFinished(true);
    }
  };

  const reset = () => {
    setCurrentIdx(0);
    setScore(0);
    setShowFeedback(null);
    setIsFinished(false);
  };

  const getRank = () => {
    if (score >= 30) return { title: "Elite Guardian", role: "CCTV / Supervisor" };
    if (score >= 20) return { title: "Vigilant Guard", role: "Corporate Guarding" };
    return { title: "Probationary Recruit", role: "Foundation Training" };
  };

  if (isFinished) {
    const rank = getRank();
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 text-center shadow-2xl animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="text-amber-500" size={40} />
          </div>
          <h2 className="text-3xl font-bold font-display text-white mb-2">Assessment Complete</h2>
          <div className="text-amber-500 text-5xl font-bold mb-6 font-display">{score}/30</div>
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Your Rank</p>
            <h3 className="text-white text-xl font-bold mb-3">{rank.title}</h3>
            <p className="text-slate-400 text-xs">Based on your awareness, we recommend our <strong>{rank.role}</strong> specialization.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-xl font-bold transition-all shadow-xl shadow-amber-600/20">Apply for Enrollment</Link>
            <button onClick={reset} className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-white flex items-center justify-center space-x-2">
              <RefreshCw size={14} /> <span>Retake Test</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const current = scenarios[currentIdx];

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-white text-3xl font-bold font-display">Security <span className="text-amber-500">IQ</span></h1>
            <p className="text-slate-500 text-sm">Situational Awareness Assessment</p>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-amber-500 font-bold font-display">
            {currentIdx + 1} / {scenarios.length}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
          <div className="mb-8 flex items-center space-x-4">
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">{current.icon}</div>
            <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight">{current.question}</h2>
          </div>

          <div className="space-y-4">
            {current.options.map((opt, i) => (
              <button
                key={i}
                disabled={!!showFeedback}
                onClick={() => handleOption(opt.points, opt.feedback)}
                className={`w-full text-left p-6 rounded-2xl border transition-all flex justify-between items-center group ${
                  showFeedback 
                  ? opt.points > 0 ? 'bg-green-500/10 border-green-500/50 text-green-500' : 'bg-slate-950 border-slate-800 text-slate-600 opacity-50'
                  : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-amber-500/50 hover:bg-slate-900'
                }`}
              >
                <span className="font-medium">{opt.text}</span>
                {!showFeedback && <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="mt-8 p-6 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-center space-x-3">
                <AlertTriangle size={20} className="text-amber-500" />
                <p className="text-slate-300 text-sm italic">{showFeedback}</p>
              </div>
              <button onClick={next} className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all">Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecurityIQ;
