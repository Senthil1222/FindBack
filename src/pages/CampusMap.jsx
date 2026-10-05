import React, { useState } from 'react';
import { Map, MapPin, Search, Filter, ShieldCheck, Maximize, LayoutList, Clock, Sparkles } from 'lucide-react';

const CampusMap = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8 pb-12 h-full min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            <span className="bg-surface px-2 py-0.5 rounded border border-border-subtle">GEO-CUSTODY TELEMETRY • CAMPUS GRID A</span>
          </div>
          <h1 className="text-3xl font-extrabold text-text-main">Campus Lost & Found Map</h1>
          <p className="text-sm font-medium text-text-secondary mt-1 max-w-xl">
            Spatial clustering and recovery intensity across Westfield University campus nodes.
          </p>
        </div>
        <div className="flex bg-white rounded-xl shadow-sm border border-border-subtle p-1.5 gap-2">
          <div className="flex flex-col items-center px-4 border-r border-border-subtle">
            <span className="text-lg font-extrabold text-text-main">3</span>
            <span className="text-[9px] font-bold text-text-secondary uppercase">Main Zones</span>
          </div>
          <div className="flex flex-col items-center px-4 border-r border-border-subtle">
            <span className="text-lg font-extrabold text-attention">50</span>
            <span className="text-[9px] font-bold text-text-secondary uppercase">Active Lockers</span>
          </div>
          <div className="flex flex-col items-center px-4">
            <span className="text-lg font-extrabold text-success">18</span>
            <span className="text-[9px] font-bold text-text-secondary uppercase">Active Sweeps</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[500px]">
        {/* Map Canvas */}
        <div className="flex-1 bg-white border border-border-subtle rounded-2xl shadow-sm overflow-hidden flex flex-col relative h-[500px] lg:h-auto">
          {/* Map Filters */}
          <div className="bg-surface/80 backdrop-blur-md border-b border-border-subtle p-3 flex flex-wrap items-center justify-between gap-3 absolute top-0 left-0 right-0 z-10">
            <div className="flex items-center gap-2 bg-white rounded-lg border border-border-subtle p-1 shadow-sm overflow-x-auto hide-scrollbar">
              {['All Reports (42)', 'Lost (24)', 'Found (14)', 'Recovered (4)'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-md whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-primary text-white shadow-sm' : 'text-text-secondary hover:bg-surface hover:text-text-main'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-white border border-border-subtle px-3 py-2 rounded-lg text-xs font-bold shadow-sm flex items-center gap-2 hover:bg-surface transition-colors">
                All Zones <Filter className="w-3.5 h-3.5" />
              </button>
              <button className="bg-white border border-border-subtle p-2 rounded-lg shadow-sm hover:bg-surface transition-colors">
                <Maximize className="w-4 h-4 text-text-secondary" />
              </button>
            </div>
          </div>

          {/* Interactive SVG Mock Map */}
          <div className="flex-1 bg-[#E8E2D6]/40 relative flex items-center justify-center p-4 pt-20">
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            
            {/* Map Roads / Paths */}
            <div className="absolute w-full h-8 bg-white/60 top-1/2 -translate-y-1/2 backdrop-blur-sm shadow-sm"></div>
            <div className="absolute h-full w-8 bg-white/60 left-1/3 -translate-x-1/2 backdrop-blur-sm shadow-sm"></div>
            <div className="absolute h-full w-8 bg-white/60 right-1/4 -translate-x-1/2 backdrop-blur-sm shadow-sm"></div>

            {/* Buildings / Zones */}
            <div className="absolute top-24 left-10 w-64 h-48 bg-primary-soft/80 border-2 border-primary/20 rounded-2xl flex flex-col items-center justify-center shadow-md group cursor-pointer hover:border-primary transition-all">
              <span className="text-sm font-bold text-primary mb-2">Main University Library</span>
              <div className="bg-white shadow-lg rounded-xl flex items-center px-3 py-1.5 gap-2 border border-border-subtle group-hover:scale-105 transition-transform cursor-pointer absolute -top-4">
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-attention opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-attention border border-white"></span>
                </span>
                <span className="text-xs font-extrabold text-text-main">14 Items</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 w-56 h-40 bg-ai-soft/80 border-2 border-ai/20 rounded-2xl flex items-center justify-center shadow-md cursor-pointer hover:border-ai transition-all group">
              <span className="text-sm font-bold text-ai">Student Union & Cafe</span>
              <div className="bg-white shadow-lg rounded-xl flex items-center px-3 py-1.5 gap-2 border border-border-subtle group-hover:scale-105 transition-transform cursor-pointer absolute -top-4 -right-4 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-success border border-white shadow-sm"></span>
                <span className="text-xs font-extrabold text-text-main">12 Items stored <span className="text-text-secondary text-[10px] font-semibold">1 Recov</span></span>
              </div>
            </div>

            <div className="absolute top-32 right-12 w-48 h-56 bg-success/10 border-2 border-success/20 rounded-2xl flex items-center justify-center shadow-md cursor-pointer hover:border-success transition-all group">
              <span className="text-sm font-bold text-success text-center">Central Depot &<br/>Security</span>
              <div className="bg-white shadow-lg rounded-xl flex items-center px-3 py-1.5 gap-2 border border-border-subtle group-hover:scale-105 transition-transform cursor-pointer absolute -left-6 top-1/2 -translate-y-1/2 z-10">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                <span className="text-xs font-extrabold text-text-main">8 Items</span>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-border-subtle rounded-xl p-3 shadow-lg flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-success" />
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Geo-Telemetry Active</div>
              <div className="text-xs font-semibold text-text-main">Device Sync: 100%</div>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Panel */}
        <div className="w-full lg:w-80 bg-white border border-border-subtle rounded-2xl shadow-sm p-5 flex flex-col gap-6 shrink-0 h-[500px] lg:h-auto overflow-y-auto">
          <div className="flex flex-col gap-1 border-b border-border-subtle pb-4">
            <div className="text-[10px] font-bold text-attention uppercase flex items-center gap-1"><MapPin className="w-3 h-3"/> Selected Hotspot</div>
            <h3 className="text-lg font-extrabold text-text-main leading-tight">Main University Library</h3>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="bg-surface rounded-lg p-2 border border-border-subtle text-center">
                <div className="text-xl font-extrabold text-attention">14</div>
                <div className="text-[9px] font-bold text-text-secondary uppercase">Active Reports</div>
              </div>
              <div className="bg-success/10 rounded-lg p-2 border border-success/20 text-center">
                <div className="text-xl font-extrabold text-success">71%</div>
                <div className="text-[9px] font-bold text-success/70 uppercase">Recovery Rate</div>
              </div>
            </div>
            <div className="mt-3 bg-surface p-3 rounded-lg border border-border-subtle">
              <div className="text-[10px] font-bold text-text-secondary uppercase mb-1 flex items-center justify-between">Peak Loss Window <span className="bg-white px-1.5 py-0.5 rounded shadow-sm">Daily</span></div>
              <div className="text-xs font-bold text-text-main flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-attention"/> 4:00 PM - 7:00 PM</div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-text-main">Active Recent Cases</div>
              <div className="text-[10px] font-bold text-success flex items-center gap-1 bg-success/10 px-2 py-0.5 rounded uppercase"><div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></div> Live</div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="bg-surface border border-border-subtle rounded-xl p-3 flex gap-3 shadow-sm hover:bg-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-text-main/90 rounded-lg shrink-0 opacity-80 shadow-inner"></div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">Matte Black Milton Water Bottle</div>
                  <div className="text-[10px] text-text-secondary mt-0.5">Case FB-8821 • 2nd Floor Study</div>
                  <div className="text-[10px] font-bold text-ai flex items-center gap-1 mt-1"><Sparkles className="w-3 h-3"/> Match Found</div>
                </div>
              </div>
              <div className="bg-surface border border-border-subtle rounded-xl p-3 flex gap-3 shadow-sm hover:bg-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#2C3E50] rounded-t-lg rounded-b shrink-0 opacity-80 shadow-inner"></div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">Navy Blue Herschel Backpack</div>
                  <div className="text-[10px] text-text-secondary mt-0.5">Case FB-8812 • Lobby</div>
                  <div className="text-[10px] font-bold text-attention flex items-center gap-1 mt-1"><Search className="w-3 h-3"/> Searching</div>
                </div>
              </div>
              <div className="bg-surface border border-border-subtle rounded-xl p-3 flex gap-3 shadow-sm hover:bg-white transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-[#BDC3C7] rounded-lg shrink-0 opacity-80 shadow-inner"></div>
                <div className="flex flex-col">
                  <div className="text-xs font-bold text-text-main group-hover:text-primary transition-colors line-clamp-1">AirPods Pro Case (White)</div>
                  <div className="text-[10px] text-text-secondary mt-0.5">Case FB-8799 • 1st Floor Cafe</div>
                  <div className="text-[10px] font-bold text-success flex items-center gap-1 mt-1"><ShieldCheck className="w-3 h-3"/> Secured</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4 border-t border-border-subtle flex flex-col gap-2">
            <button className="w-full bg-primary text-white py-2.5 rounded-xl text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors flex justify-center items-center gap-2">
              <LayoutList className="w-4 h-4"/> View All 14 Items on This Node
            </button>
            <button className="w-full bg-white border border-border-subtle text-text-secondary py-2 rounded-xl text-[10px] font-bold shadow-sm hover:bg-surface transition-colors flex justify-center items-center gap-1">
              <Filter className="w-3 h-3"/> Filter AI Matches by Library
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusMap;
