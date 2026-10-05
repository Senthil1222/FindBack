import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, MapPin, ShieldCheck, Clock, Search, Briefcase, Camera, CheckCircle2 } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-10 pb-12">
      {/* Header Info */}
      <div className="flex flex-col gap-2 pt-2 md:pt-0">
        <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-xs font-bold text-text-secondary uppercase tracking-wider">
          <span className="bg-surface px-2 py-1 rounded shadow-sm border border-border-subtle">Central Archive Network</span>
          <span className="text-border-subtle hidden md:block">|</span>
          <span className="text-ai bg-ai-soft px-2 py-1 rounded">AI-Assisted Recovery</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">Campus Overview</h1>
      </div>

      {/* Hero Banner */}
      <div 
        className="rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden flex flex-col gap-6 shadow-md group"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #102A4C 50%, #163A67 100%)' }}
      >
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-ai/20 to-primary/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
        
        <div className="flex items-center gap-2 bg-white/10 border border-white/20 w-fit px-3 py-1.5 rounded-full z-10 shadow-sm backdrop-blur-sm">
          <SparklesIcon className="w-4 h-4 text-ai" />
          <span className="text-xs font-bold text-white">Visual & Temporal Matching</span>
        </div>

        <div className="z-10 flex flex-col gap-4 max-w-2xl mt-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">Lost something?<br/>Let's find it.</h2>
          <p className="text-[#8FA5C2] leading-relaxed text-base md:text-lg">
            FindBack AI helps you report, find and recover lost items across campus through automated multi-camera reconciliation and distinctive custody logs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-4 z-10">
          <button 
            onClick={() => navigate('/report-lost')}
            className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-primary-hover"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            Report Lost Item
          </button>
          <button 
            onClick={() => navigate('/report-found')}
            className="w-full sm:w-auto bg-navy-light/50 border border-[#8FA5C2]/40 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-navy-light transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Plus className="w-4 h-4 md:w-5 md:h-5 text-ai" />
            Report Found Item
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Recovery Rate', value: '88.4%', sub: 'Target: 85%', icon: ShieldCheck, color: 'text-success', bg: 'bg-success/10' },
          { label: 'Median Reclaim', value: '3.4 hrs', sub: 'Down from 18h avg', icon: Clock, color: 'text-primary', bg: 'bg-primary-soft' },
          { label: 'Live Lockers', value: '42/50', sub: 'Secure drop-offs', icon: Briefcase, color: 'text-attention', bg: 'bg-attention/10' },
          { label: 'Match Conf', value: '96.2%', sub: 'Validated via audit', icon: SparklesIcon, color: 'text-ai', bg: 'bg-ai-soft' }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-border-subtle rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold text-text-secondary uppercase">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-4 h-4" />
              </div>
              {stat.label}
            </div>
            <div className="flex items-end gap-2 mt-2">
              <span className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">{stat.value}</span>
            </div>
            <div className="text-xs font-semibold text-text-secondary">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Active Cases & How it Works Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-2">
        
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-text-main flex items-center gap-3">
              Your Active Cases
              <span className="bg-surface border border-border-subtle text-text-secondary text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">2 pending</span>
            </h3>
            <button 
              onClick={() => navigate('/cases')}
              className="text-primary text-sm font-bold hover:underline hidden sm:block"
            >
              View Archive Ledger →
            </button>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {/* AI Match Notification */}
            <div className="bg-white border border-border-subtle rounded-2xl p-4 md:p-6 flex flex-col gap-4 shadow-sm hover:shadow-md hover:border-ai/30 transition-all cursor-pointer border-t-4 border-t-ai" onClick={() => navigate('/matches/FB-8821')}>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex gap-4 md:gap-5">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-surface rounded-xl border border-border-subtle flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                    <img src="/milton_bottle.jpg" alt="Matte Black Milton Water Bottle" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-ai text-xs font-bold uppercase flex items-center gap-1">
                        <SparklesIcon className="w-3.5 h-3.5" /> AI FOUND A POSSIBLE MATCH
                      </span>
                    </div>
                    <div className="font-bold text-text-main text-lg md:text-xl leading-tight">Black Water Bottle</div>
                    <div className="text-xs md:text-sm font-semibold text-text-secondary flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> Central Library
                    </div>
                    <div className="text-xs font-semibold text-text-secondary flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 18 minutes ago
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-2xl font-extrabold text-ai leading-none">94%</div>
                  <div className="text-[10px] font-bold text-ai/70 uppercase mt-0.5">Match</div>
                </div>
              </div>
              
              <div className="bg-ai-soft rounded-xl p-3 md:p-4 flex flex-col sm:flex-row sm:items-start justify-between border border-ai/20 mt-2 gap-4">
                <div className="flex flex-col gap-1 w-full">
                  <div className="text-sm font-bold text-text-main">Why we think it matches:</div>
                  <div className="text-xs font-medium text-text-secondary grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center gap-1.5 text-success"><CheckCircle2 className="w-4 h-4" /> <span className="text-text-main">Similar color</span></div>
                    <div className="flex items-center gap-1.5 text-success"><CheckCircle2 className="w-4 h-4" /> <span className="text-text-main">Similar description</span></div>
                    <div className="flex items-center gap-1.5 text-success"><CheckCircle2 className="w-4 h-4" /> <span className="text-text-main">Nearby location</span></div>
                    <div className="flex items-center gap-1.5 text-success"><CheckCircle2 className="w-4 h-4" /> <span className="text-text-main">Matching distinctive feature</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-end h-full mt-auto">
                  <button className="bg-ai text-white px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-colors shadow-sm whitespace-nowrap mt-4">
                    View Match
                  </button>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-white border border-border-subtle rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start gap-4 shadow-sm hover:shadow-md transition-all cursor-pointer" onClick={() => navigate('/cases')}>
              <div className="flex gap-4 md:gap-5">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-surface rounded-xl border border-border-subtle flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#2C3E50] rounded-t-xl rounded-b-md opacity-90 shadow-sm"></div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm uppercase flex items-center gap-1">
                      <Search className="w-3 h-3" /> Searching
                    </span>
                    <span className="text-xs font-semibold text-text-secondary bg-surface px-2 py-0.5 rounded border border-border-subtle">ID: FB-8812</span>
                  </div>
                  <div className="font-bold text-text-main text-lg md:text-xl leading-tight">Navy Blue Herschel Backpack</div>
                  <div className="text-xs md:text-sm font-semibold text-text-secondary flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5" /> Engineering Hall • Room 304
                  </div>
                  <div className="text-[10px] md:text-xs font-semibold text-text-secondary flex items-center gap-1.5 mt-2 bg-surface px-2.5 py-1.5 rounded-lg w-fit border border-border-subtle shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-attention animate-pulse"></div>
                    Scanning Campus Feeds
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-between w-full sm:w-auto h-full gap-4 mt-2 sm:mt-0">
                <div className="text-xs font-bold text-text-secondary flex items-center gap-1 bg-surface px-2 py-1 rounded">
                  <Clock className="w-3.5 h-3.5" /> 2h ago
                </div>
                <button className="bg-surface border border-border-subtle text-text-main px-4 py-2 md:py-2.5 rounded-lg text-sm font-bold hover:bg-white shadow-sm transition-colors mt-auto whitespace-nowrap">
                  View Case →
                </button>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/cases')}
              className="text-primary text-sm font-bold hover:underline sm:hidden text-center mt-2"
            >
              View All Cases →
            </button>
          </div>
        </div>

        {/* How it Works */}
        <div className="col-span-1 flex flex-col gap-4 md:gap-5 mt-6 lg:mt-0">
          <h3 className="text-xl md:text-2xl font-bold text-text-main hidden lg:block opacity-0">.</h3>
          <div className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 flex flex-col gap-6 md:gap-8 h-full shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary-soft px-2 py-1 rounded">Civic Integrity</span>
              <h3 className="text-2xl font-bold text-text-main mt-2">How FindBack Works</h3>
              <p className="text-sm font-medium text-text-secondary mt-1">
                Our protocol protects student property and ensures items are only released to verified owners.
              </p>
            </div>
            
            <div className="flex flex-col gap-6 mt-2 relative">
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-surface border-l border-dashed border-border-subtle z-0"></div>
              {[
                { n: '1', title: 'Report', desc: 'Tell FindBack what you lost or found. Upload a snap.' },
                { n: '2', title: 'Find', desc: 'AI compares descriptions, images, and distinctive features.' },
                { n: '3', title: 'Recover', desc: 'Verify ownership through private details safely.' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 relative z-10 group">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-border-subtle flex items-center justify-center font-bold text-text-secondary text-sm shrink-0 group-hover:border-primary group-hover:text-primary group-hover:bg-primary-soft transition-colors shadow-sm">
                    {step.n}
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <div className="text-sm font-bold text-text-main">{step.title}</div>
                    <div className="text-xs font-medium text-text-secondary leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto bg-surface border border-border-subtle rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">5 Safe Pickup Locations</span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const SparklesIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
)

export default Home;
