import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Clock, ChevronDown, LayoutDashboard, SlidersHorizontal, ShieldCheck } from 'lucide-react';

const Matches = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
              <span className="text-ai font-bold flex items-center gap-1"><Sparkles className="w-3.5 h-3.5" /> AI Sourced Syntheses Active • Vision v3.2 + Spatio-Temporal Match</span>
            </div>
            <h1 className="text-3xl font-bold text-text-main">AI Matches</h1>
            <p className="text-text-secondary max-w-2xl mt-1">
              Potential matches identified from computer vision models, semantic descriptors, and spatio-temporal co-occurrence signatures.
            </p>
          </div>
          <div className="flex bg-surface border border-border-subtle rounded-lg p-1 shadow-sm">
            <button className="bg-white shadow px-4 py-1.5 rounded text-sm font-semibold text-text-main">Active Case [1]</button>
            <button className="px-4 py-1.5 rounded text-sm font-semibold text-text-secondary hover:text-text-main transition-colors">Archived Cases</button>
          </div>
        </div>
      </div>

      {/* Target Case Banner */}
      <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-success text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded">Active</div>
          <div className="text-xs font-semibold text-text-secondary border-r border-border-subtle pr-3">INCIDENT CASE #FB-8821</div>
          <div className="text-xs font-semibold text-ai">2 Candidates Detected</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-bold text-text-main">Matte Black Milton Water Bottle</div>
          <div className="text-xs text-text-secondary">Reported Oct 24, Library 2F</div>
          <button className="text-xs font-semibold text-text-main border border-border-subtle rounded px-2 py-1 hover:bg-surface transition-colors">Switch Target Case</button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Candidate 1 */}
        <div className="bg-white border border-border-subtle rounded-xl p-6 shadow-sm flex flex-col gap-4 border-t-4 border-t-ai">
          <div className="flex items-center gap-2 border-b border-border-subtle pb-4">
            <Sparkles className="w-4 h-4 text-ai" />
            <span className="text-ai text-xs font-bold uppercase tracking-wider">AI MATCH FOUND</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 pt-2">
            <div className="w-full md:w-1/3 aspect-square bg-surface rounded-lg border border-border-subtle overflow-hidden shrink-0">
              <img src="/milton_bottle.jpg" alt="Matte Black Milton Water Bottle" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-text-main">Black Water Bottle</h3>
                  <div className="text-sm font-semibold text-text-secondary flex items-center gap-1.5 mt-1">
                    <MapPin className="w-4 h-4" /> Central Library
                  </div>
                  <div className="text-sm font-semibold text-text-secondary flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> 18 minutes ago
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-ai leading-none">94%</div>
                  <div className="text-xs font-bold text-ai/80 uppercase mt-1 tracking-wider">Match</div>
                </div>
              </div>

              <div className="bg-ai-soft/50 border border-ai/20 p-5 rounded-xl flex flex-col gap-3 mt-2">
                <div className="text-sm font-bold text-text-main flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-ai" /> Why this may match:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-text-secondary">
                  <div className="flex items-center gap-2 text-text-main"><span className="text-success">✓</span> Similar color</div>
                  <div className="flex items-center gap-2 text-text-main"><span className="text-success">✓</span> Similar description</div>
                  <div className="flex items-center gap-2 text-text-main"><span className="text-success">✓</span> Nearby location</div>
                  <div className="flex items-center gap-2 text-text-main"><span className="text-success">✓</span> Matching distinctive feature</div>
                </div>
              </div>

              <div className="bg-surface/50 border border-border-subtle p-4 rounded-xl">
                <div className="text-xs font-bold text-ai flex items-center gap-1 mb-1 uppercase tracking-wider">AI Explanation</div>
                <p className="text-sm text-text-main leading-relaxed">
                  The found item matches your bottle's cylindrical profile, colorway, and was recovered on the same library floor within 35 minutes of your reported departure. A small circular adhesive residue on the mid-section corresponds directly with your note indicating a decal/sticker.
                </p>
              </div>

              <div className="flex items-center justify-end mt-auto pt-4 border-t border-border-subtle gap-4">
                <button className="text-sm font-semibold text-text-secondary hover:text-text-main transition-colors px-4 py-2">
                  Not My Item
                </button>
                <button 
                  onClick={() => navigate('/matches/FB-8821')}
                  className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold hover:bg-primary-hover transition-colors shadow-sm"
                >
                  View Match
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate 2 */}
        <div className="bg-white border border-border-subtle rounded-xl p-6 shadow-sm flex flex-col gap-4 opacity-75 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
            <div className="bg-surface text-text-secondary text-[10px] uppercase font-bold px-2 py-1 rounded">CANDIDATE #02</div>
            <div className="text-xs text-text-secondary font-semibold flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/> Student Union Lounge • Oct 24, 7:15 PM</div>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-2">
            <div className="col-span-2">
              <div className="w-full aspect-square bg-surface rounded-lg border border-border-subtle overflow-hidden">
                <div className="w-full h-full bg-[#111]"></div>
              </div>
            </div>
            <div className="col-span-10 flex flex-col gap-2 justify-center">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-text-main">Hydro Flask Black Wide Mouth Tumbler</h3>
                <span className="bg-surface text-text-secondary text-xs font-bold px-2 py-1 rounded-md">78% MATCH</span>
              </div>
              <p className="text-sm text-text-secondary">
                Found on the leather couches near the coffee bar. Color saturation, material finish, and temporal proximity are high, but physical morphology presents notable divergence.
              </p>
              <div className="bg-attention/10 border border-attention/20 rounded p-3 mt-2">
                <div className="text-xs font-bold text-attention flex items-center gap-1 mb-1">Discrepancy Analysis</div>
                <div className="text-sm text-text-main">Solar and time proximity are high, but lid geometry diverges significantly from your reported screw cap; this item features a wide-mouth tumbler top with straw attachment.</div>
              </div>
              <div className="flex justify-end gap-3 mt-2">
                <button className="text-sm font-semibold text-text-secondary hover:text-text-main transition-colors px-4 py-2">
                  Not My Item
                </button>
                <button className="bg-white border border-border-subtle px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-surface transition-colors">
                  View Match
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Helper Bar */}
      <div className="mt-4 bg-ai-soft/50 border border-ai/20 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-ai border border-border-subtle"><Sparkles className="w-4 h-4"/></div>
          <div>
            <div className="text-sm font-bold text-text-main flex items-center gap-2">Need deeper model insight? <span className="bg-ai text-white text-[9px] px-1.5 py-0.5 rounded uppercase">Interactive</span></div>
            <div className="text-xs text-text-secondary">Want me to explain why this looks like a match or adjust the feature weights to prioritize exact lid over color?</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white border border-border-subtle px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1 hover:border-primary transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Adjust Feature Weights
          </button>
          <button className="bg-white border border-border-subtle px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1 hover:border-primary transition-colors text-ai">
            <Sparkles className="w-3.5 h-3.5" /> Explain Logic
          </button>
        </div>
      </div>

    </div>
  );
};

export default Matches;
