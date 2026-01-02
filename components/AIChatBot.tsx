
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, RefreshCw, HeartHandshake, Mic, MicOff, Volume2 } from 'lucide-react';
import { getStreamingSecurityAdvice, startNewChat } from '../services/aiService';
import { GenerateContentResponse, GoogleGenAI, Modality } from '@google/genai';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Exelity Academy. How may I assist with your career or training requirements today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    startNewChat();
  }, []);

  const handleReset = () => {
    startNewChat();
    setMessages([{ role: 'bot', text: 'Thank you for waiting. How else can I help you today?' }]);
  };

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number) => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
  };

  const encode = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  };

  const createBlob = (data: Float32Array) => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) int16[i] = data[i] * 32768;
    return { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
  };

  const startLiveSession = async () => {
    if (isLive) {
      stopLiveSession();
      return;
    }

    try {
      setIsLive(true);
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            scriptProcessor.onaudioprocess = (e) => {
              const pcmBlob = createBlob(e.inputBuffer.getChannelData(0));
              sessionPromise.then(s => s.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);
          },
          onmessage: async (msg) => {
            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData) {
              const buffer = await decodeAudioData(decode(audioData), outputCtx, 24000, 1);
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
            }
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } } }
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (e) {
      console.error(e);
      stopLiveSession();
    }
  };

  const stopLiveSession = () => {
    setIsLive(false);
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    try {
      const stream = await getStreamingSecurityAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: '' }]);
      let fullText = '';
      for await (const chunk of stream) {
        fullText += (chunk as GenerateContentResponse).text || '';
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'bot', text: fullText };
          return updated;
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Error reaching advisor.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-slate-900 w-80 sm:w-96 h-[500px] rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden animate-in fade-in zoom-in">
          <div className="bg-slate-950 p-4 border-b border-slate-800 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <HeartHandshake className="h-4 w-4 text-amber-500" />
              <span className="text-white font-bold text-xs uppercase">Academy Advisor</span>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={startLiveSession} className={`p-1.5 rounded-lg transition-colors ${isLive ? 'bg-red-500/20 text-red-500 animate-pulse' : 'text-slate-500 hover:text-amber-500'}`}>
                {isLive ? <Volume2 size={16} /> : <Mic size={16} />}
              </button>
              <button onClick={handleReset} className="text-slate-500 hover:text-amber-500 p-1.5"><RefreshCw size={14} /></button>
              <button onClick={() => {setIsOpen(false); stopLiveSession();}} className="text-slate-500 hover:text-white p-1.5"><X size={18} /></button>
            </div>
          </div>
          <div ref={scrollRef} className="flex-grow p-4 space-y-4 overflow-y-auto bg-slate-950/50 scrollbar-hide">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl text-xs ${m.role === 'user' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-200 border border-slate-800'}`}>{m.text}</div>
              </div>
            ))}
            {isLive && <div className="text-[10px] text-amber-500 text-center font-bold uppercase tracking-widest animate-pulse">Voice Mode Active</div>}
          </div>
          <div className="p-4 bg-slate-900 border-t border-slate-800">
            <div className="relative flex items-center">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask the advisor..." className="w-full bg-slate-950 text-white rounded-xl pl-4 pr-12 py-3 text-xs outline-none border border-slate-800 focus:border-amber-500/50" />
              <button onClick={handleSend} className="absolute right-1.5 p-2 bg-amber-600 text-white rounded-lg"><Send size={14} /></button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="bg-slate-900 p-4 rounded-full shadow-2xl border border-slate-800 hover:border-amber-500 transition-all flex items-center space-x-3 px-6">
          <MessageSquare size={20} className="text-amber-500" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">Counseling</span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
