import React from 'react';
import { BarChart3, TrendingUp, TrendingDown, Clock, Map, Target, Users } from 'lucide-react';

const Insights = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border-subtle pb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            <span className="bg-surface px-2 py-0.5 rounded border border-border-subtle">CAMPUS INTELLIGENCE</span>
          </div>
          <h1 className="text-3xl font-extrabold text-text-main">Campus Insights</h1>
          <p className="text-sm font-medium text-text-secondary mt-1 max-w-xl">
            AI-driven analytics on item loss vectors, recovery efficiency, and temporal hotspots.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select className="bg-white border border-border-subtle rounded-lg px-3 py-2 text-xs font-bold text-text-main shadow-sm outline-none hover:bg-surface transition-colors cursor-pointer">
            <option>Last 30 Days</option>
            <option>This Semester</option>
            <option>All Time</option>
          </select>
          <button className="bg-primary text-white border border-primary-hover px-4 py-2 rounded-lg text-xs font-bold shadow-sm hover:bg-primary-hover transition-colors flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5"/> Export Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { title: 'Total Items Lost', val: '432', trend: '+12%', icon: Target, isUp: true },
          { title: 'AI Match Rate', val: '88.4%', trend: '+4.2%', icon: SparklesIcon, isUp: true },
          { title: 'Avg Recovery Time', val: '4.2h', trend: '-2.1h', icon: Clock, isUp: true },
          { title: 'Unclaimed Items', val: '48', trend: '-15%', icon: BarChart3, isUp: true }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-border-subtle rounded-2xl p-5 shadow-sm flex flex-col gap-3 group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary transition-colors">
                <stat.icon className="w-4 h-4" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded ${stat.isUp ? 'bg-success/10 text-success' : 'bg-attention/10 text-attention'}`}>
                {stat.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />} {stat.trend}
              </div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase mt-2">{stat.title}</div>
              <div className="text-3xl font-extrabold text-text-main mt-1">{stat.val}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* Left Column: Charts */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 md:gap-8">
          
          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-text-main">Loss / Recovery Delta</h3>
                <span className="text-[10px] font-semibold text-text-secondary">Tracking reported lost vs securely recovered volume over 30 days.</span>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-secondary uppercase"><div className="w-2 h-2 rounded-full bg-attention"></div> Reported</div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-text-secondary uppercase"><div className="w-2 h-2 rounded-full bg-success"></div> Recovered</div>
              </div>
            </div>

            <div className="h-64 flex items-end gap-2 px-2">
              {Array.from({ length: 15 }).map((_, i) => {
                const lost = Math.floor(Math.random() * 40) + 20;
                const rec = Math.floor(lost * (0.6 + Math.random() * 0.3));
                return (
                  <div key={i} className="flex-1 flex flex-col gap-1 items-center justify-end h-full group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-text-main text-white text-[10px] font-bold px-2 py-1 rounded transition-opacity pointer-events-none whitespace-nowrap z-10 shadow-lg">
                      Day {i+1}: {lost} Lost, {rec} Found
                    </div>
                    
                    <div className="w-full flex justify-center gap-1 items-end h-full">
                      <div className="w-1/2 bg-attention/60 rounded-t-sm group-hover:bg-attention transition-colors" style={{ height: `${lost}%` }}></div>
                      <div className="w-1/2 bg-success/60 rounded-t-sm group-hover:bg-success transition-colors" style={{ height: `${(rec / lost) * lost}%` }}></div>
                    </div>
                    <div className="text-[8px] font-bold text-text-secondary mt-1">Oct {10+i}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-6">
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-text-main">Frequent Loss Vectors (Categories)</h3>
              <span className="text-[10px] font-semibold text-text-secondary">Distribution of missing item types and AI extraction confidence.</span>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: 'Electronics (Phones, Laptops)', pct: 35, conf: '98%', color: 'bg-primary' },
                { name: 'Water Bottles & Thermoses', pct: 25, conf: '94%', color: 'bg-ai' },
                { name: 'Bags & Backpacks', pct: 20, conf: '91%', color: 'bg-success' },
                { name: 'Wallets & IDs', pct: 12, conf: '99%', color: 'bg-attention' },
                { name: 'Clothing & Jackets', pct: 8, conf: '82%', color: 'bg-text-secondary' },
              ].map((c, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-end text-xs">
                    <span className="font-bold text-text-main">{c.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-text-secondary">AI Conf: {c.conf}</span>
                      <span className="font-extrabold text-text-main w-8 text-right">{c.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Mini Panels */}
        <div className="col-span-1 flex flex-col gap-6 md:gap-8">
          
          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-soft rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex flex-col gap-1 relative z-10">
              <div className="text-[10px] font-bold text-primary uppercase flex items-center gap-1"><Map className="w-3 h-3"/> HOTSPOT ALERT</div>
              <h3 className="text-lg font-extrabold text-text-main leading-tight">Library 2nd Floor</h3>
            </div>
            <p className="text-xs font-medium text-text-secondary leading-relaxed relative z-10">
              This node accounts for <span className="font-bold text-text-main">28%</span> of all campus missing items this week, primarily electronics and water bottles. 
            </p>
            <div className="mt-2 bg-primary/5 border border-primary/20 rounded-xl p-3 flex items-center gap-3 relative z-10">
              <SparklesIcon className="w-5 h-5 text-primary shrink-0" />
              <div className="text-[10px] text-primary/80 font-semibold leading-relaxed">AI Suggestion: Increase custodial sweep frequency at Library 2F from 2x/day to 4x/day.</div>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-text-main">Temporal Heatmap</h3>
              <Clock className="w-4 h-4 text-text-secondary" />
            </div>
            
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-secondary w-10 shrink-0 text-right">Morning</span>
                <div className="flex-1 flex gap-1 h-6">
                  <div className="flex-1 bg-surface rounded-sm"></div>
                  <div className="flex-1 bg-attention/20 rounded-sm"></div>
                  <div className="flex-1 bg-attention/40 rounded-sm"></div>
                  <div className="flex-1 bg-surface rounded-sm"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-secondary w-10 shrink-0 text-right">Noon</span>
                <div className="flex-1 flex gap-1 h-6">
                  <div className="flex-1 bg-attention/20 rounded-sm"></div>
                  <div className="flex-1 bg-attention/60 rounded-sm"></div>
                  <div className="flex-1 bg-attention/80 rounded-sm"></div>
                  <div className="flex-1 bg-attention/40 rounded-sm"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-text-secondary w-10 shrink-0 text-right">Evening</span>
                <div className="flex-1 flex gap-1 h-6">
                  <div className="flex-1 bg-surface rounded-sm"></div>
                  <div className="flex-1 bg-attention/30 rounded-sm"></div>
                  <div className="flex-1 bg-attention/90 rounded-sm relative group cursor-pointer">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text-main text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none z-20 shadow-md">Peak Loss (5pm-7pm)</div>
                  </div>
                  <div className="flex-1 bg-attention/20 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-ai-soft/50 border border-ai/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-3 flex-1 min-h-[160px]">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-border-subtle">
              <Users className="w-5 h-5 text-ai" />
            </div>
            <div className="text-sm font-bold text-text-main">Need Custom Analytics?</div>
            <p className="text-[10px] font-medium text-text-secondary leading-relaxed px-4">FindBack AI can generate custom departmental reports by parsing raw custody ledger data.</p>
            <button className="bg-white border border-border-subtle text-text-main text-[10px] font-bold px-4 py-2 rounded-lg shadow-sm hover:bg-surface transition-colors mt-1">
              Ask FindBack AI
            </button>
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

export default Insights;
