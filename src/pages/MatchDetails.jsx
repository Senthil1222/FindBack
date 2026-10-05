import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Sparkles, MapPin, Clock, ShieldCheck, Box } from 'lucide-react';

const MatchDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <span>AI Matches • Case #{id || 'FB-8821'} • Live Comparison</span>
          </div>
          <h1 className="text-3xl font-bold text-text-main">Potential Match Details</h1>
          <p className="text-text-secondary max-w-2xl mt-1">
            Side-by-side multimodal composite & automated structural alignment.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="bg-surface border border-border-subtle px-3 py-1.5 rounded-lg text-xs font-semibold text-text-secondary flex items-center gap-2 shadow-sm">
            CUSTODY STATUS <span className="w-1.5 h-1.5 rounded-full bg-success"></span> Secured in Central Depot
          </div>
          <div className="text-xs font-semibold text-text-secondary">Depot Locker: Locker #141</div>
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div className="flex items-center justify-between gap-6 relative">
        {/* Left Side: Reported Item */}
        <div className="flex-1 bg-white border border-border-subtle rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-text-main">YOUR REPORTED ITEM (LOST)</h3>
            <span className="bg-surface text-text-secondary text-[10px] uppercase font-bold px-2 py-1 rounded">Case #{id || 'FB-8821'}</span>
          </div>
          <div className="flex gap-4">
            <div className="w-32 h-32 bg-surface rounded-xl border border-border-subtle shrink-0 overflow-hidden flex items-center justify-center">
              <div className="w-16 h-24 bg-text-main/90 rounded opacity-80"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-text-main">Matte Black Milton Water Bottle</h4>
              <div className="text-xs text-text-secondary flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> Reported: Oct 24, 5:30 PM • Westfield Main Library</div>
              <div className="mt-2 bg-surface p-3 rounded-lg border border-border-subtle">
                <div className="text-[10px] font-bold text-text-secondary uppercase mb-1">User Declared Traits</div>
                <ul className="text-xs text-text-main list-disc pl-4 space-y-1">
                  <li>750ml</li>
                  <li>matte black</li>
                  <li>stainless steel lid</li>
                  <li>Superman vinyl sticker on upper side</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Match Score Badge */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-white border-[3px] border-ai rounded-full shadow-lg flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-white/50"></div>
            <span className="text-2xl font-bold text-ai leading-none">94%</span>
            <span className="text-[9px] font-bold text-ai/80 uppercase">AI Match</span>
          </div>
          <div className="bg-white border border-border-subtle shadow-sm px-3 py-1 rounded-full text-[10px] font-bold text-text-main mt-2 z-10">High Confidence</div>
        </div>

        {/* Right Side: Found Item */}
        <div className="flex-1 bg-white border border-border-subtle rounded-2xl p-6 shadow-sm border-t-4 border-t-success relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-success flex items-center gap-1.5"><ShieldCheck className="w-4 h-4"/> DEPOT INTAKE IN CUSTODY</h3>
          </div>
          <div className="flex gap-4">
            <div className="w-32 h-32 bg-surface rounded-xl border border-border-subtle shrink-0 overflow-hidden flex items-center justify-center relative">
              <div className="w-16 h-24 bg-text-main/90 rounded relative">
                {/* Sticker Mock */}
                <div className="absolute top-4 left-4 w-4 h-5 bg-ai/40 rounded-sm transform rotate-12"></div>
              </div>
              <div className="absolute bottom-1 left-1 bg-white/80 backdrop-blur text-[9px] px-1.5 py-0.5 rounded border border-border-subtle text-text-main font-semibold flex items-center gap-1">
                <Box className="w-3 h-3" /> Camera 3
              </div>
            </div>
            <div className="flex flex-col gap-2 relative z-10">
              <h4 className="font-bold text-text-main">Matte Black Thermal Flask #DEP-304</h4>
              <div className="text-xs text-text-secondary flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> Logged: Oct 24, 6:05 PM • Library 2F Desk #14</div>
              <div className="mt-2 bg-success/5 p-3 rounded-lg border border-success/20">
                <div className="text-[10px] font-bold text-success uppercase mb-1 flex items-center gap-1"><Box className="w-3 h-3"/> Physical Custody Node</div>
                <div className="text-xs text-text-main">Secured Locker</div>
                <div className="text-[10px] text-text-secondary mt-0.5">Central Security Depot #141</div>
                <div className="text-[10px] text-text-secondary">Logged by Officer R. Vance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Synthesis Text */}
      <div className="bg-ai-soft/30 border border-ai/20 rounded-xl p-5 flex gap-4">
        <div className="w-10 h-10 bg-ai/10 rounded-lg flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5 text-ai" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-ai uppercase flex items-center gap-2 mb-1">
            FindBack AI Synthesis <span className="bg-ai text-white px-1.5 py-0.5 rounded">Vision v3.2 Neural Transformer v1.2</span>
          </div>
          <p className="text-text-main text-sm leading-relaxed">
            Both reports describe a black bottle with identical contour, cap threading, and approx. 750ml capacity. The found item was logged at Library Desk #14 approximately 35 minutes following your stated departure. The circular sticker silhouette matches your photo in placement, orientation, and color spectrum.
          </p>
        </div>
      </div>

      {/* Multimodal Evidence Breakdown */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-text-main">Multimodal Evidence Breakdown</h3>
        <p className="text-sm text-text-secondary -mt-3">Algorithmic and sensory comparison factors evaluated across reports.</p>
        
        <div className="grid grid-cols-5 gap-4">
          
          <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex flex-col gap-2 hover:border-success/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-bold text-text-secondary uppercase">Visual Topology</div>
              <div className="text-xs font-bold text-success">96% Match</div>
            </div>
            <div className="font-bold text-text-main text-sm">Silhouette & Cap Threading</div>
            <p className="text-[10px] text-text-secondary leading-relaxed">Exact height, taper radius, and flat stainless steel top lid profile matches within 96% structural mesh variance.</p>
            <div className="mt-auto pt-2 text-[10px] font-semibold text-text-main border-t border-border-subtle flex items-center justify-between">
              Mesh Aligned <span className="text-success">High Confidence</span>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex flex-col gap-2 hover:border-success/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-bold text-text-secondary uppercase">Semantic Semblance</div>
              <div className="text-xs font-bold text-success">92% Match</div>
            </div>
            <div className="font-bold text-text-main text-sm">Natural Language Report</div>
            <p className="text-[10px] text-text-secondary leading-relaxed">Both records explicitly highlight matte powder black finish, insulated vacuum walls, and carabiner clip compatibility.</p>
            <div className="mt-auto pt-2 text-[10px] font-semibold text-text-main border-t border-border-subtle flex items-center justify-between">
              NLP Alignment <span className="text-success">High Semantic Overlap</span>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex flex-col gap-2 hover:border-success/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-bold text-text-secondary uppercase">Spatio-Temporal Node</div>
              <div className="text-xs font-bold text-success">Strong Match</div>
            </div>
            <div className="font-bold text-text-main text-sm">Westfield Library 2F</div>
            <p className="text-[10px] text-text-secondary leading-relaxed">Identical building and floor node. Found at study Desk Cluster #14, precisely within your last report-seen location radius.</p>
            <div className="mt-auto pt-2 text-[10px] font-semibold text-text-main border-t border-border-subtle flex items-center justify-between">
              Spatial Proximity <span className="text-success">Exact Zone Match</span>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex flex-col gap-2 hover:border-success/50 transition-colors">
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-bold text-text-secondary uppercase">Temporal Delta</div>
              <div className="text-xs font-bold text-success">+35 Minutes</div>
            </div>
            <div className="font-bold text-text-main text-sm">Chronological Flow</div>
            <p className="text-[10px] text-text-secondary leading-relaxed">Reported missing at 5:30 PM. Recovered by evening custodial sweep at 6:05 PM during scheduled sweep.</p>
            <div className="mt-auto pt-2 text-[10px] font-semibold text-text-main border-t border-border-subtle flex items-center justify-between">
              Custodial Timestamp <span className="text-success">Within Expected Window</span>
            </div>
          </div>

          <div className="bg-ai-soft/20 border-2 border-ai/40 rounded-xl p-4 shadow-sm flex flex-col gap-2 relative overflow-hidden group cursor-pointer hover:bg-ai-soft/40 transition-colors" onClick={() => navigate(`/verification/${id || 'FB-8821'}`)}>
            <div className="flex justify-between items-start">
              <div className="text-[10px] font-bold text-ai uppercase flex items-center gap-1"><Sparkles className="w-3 h-3"/> Privileged Verification Bank</div>
              <div className="text-[10px] font-bold text-white bg-ai px-1.5 py-0.5 rounded">Concealed Feature Mask</div>
            </div>
            <div className="font-bold text-text-main text-sm mt-1">Distinctive Vinyl Decal & Scratch Signature</div>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              A 4.5cm shield-shaped sticker is detected on the mesh recon-tomography. For privacy and anti-fraud assurance, character details remain masked until your ownership claim is complete.
            </p>
            <div className="mt-auto pt-2 text-[10px] font-semibold text-ai border-t border-ai/20 flex items-center justify-between group-hover:underline">
              Pending Key Verification <span className="flex items-center gap-1">Unlock <ChevronDown className="w-3 h-3 -rotate-90"/></span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Banner */}
      <div className="mt-6 bg-white border border-border-subtle rounded-2xl p-6 shadow-sm flex items-center justify-between bg-gradient-to-r from-white to-surface">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-success" />
          </div>
          <div>
            <h3 className="text-base font-bold text-text-main">Ready to reclaim your item?</h3>
            <p className="text-sm text-text-secondary">Complete a quick 2-question confirmation to generate your Instant Pickup QR Token.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/matches')} className="text-sm font-semibold text-text-secondary hover:text-text-main transition-colors px-4 py-2">
            This Isn't My Item
          </button>
          <button 
            onClick={() => navigate(`/verification/${id || 'FB-8821'}`)}
            className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm flex items-center gap-2"
          >
            Start Ownership Verification <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default MatchDetails;
