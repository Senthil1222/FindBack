import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Clock, Search, RefreshCw, LayoutTemplate, Share2 } from 'lucide-react';

const Investigation = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <span>CAMPUS LEDGER • AI REASONING GRAPH</span>
          </div>
          <h1 className="text-3xl font-bold text-text-main">AI Investigation</h1>
          <p className="text-text-secondary max-w-2xl mt-1">
            Explore multi-source evidence and temporal correlation for active cases. Neural feature graphs synchronize campus custodial intake, proximity telemetry, and spatial movement records.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-white border border-border-subtle rounded-lg px-3 py-1.5 shadow-sm text-xs font-semibold text-text-main flex items-center gap-2 cursor-pointer hover:bg-surface">
            Active Case <span className="bg-surface border border-border-subtle px-1.5 py-0.5 rounded text-text-secondary">Matte Black Milton Water Bottle (Case FB-8821)</span>
          </div>
          <div className="text-xs font-semibold text-text-secondary">Audit Log: 0x981F</div>
          <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-hover shadow-sm">
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Case Header summary */}
      <div className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm flex items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ai/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="w-20 h-20 bg-surface rounded-lg border border-border-subtle shrink-0 flex flex-col overflow-hidden">
          <div className="flex-1 bg-text-main/90 m-2 rounded-sm opacity-80"></div>
        </div>
        <div className="flex-1">
          <div className="text-xs text-ai font-bold flex items-center gap-1 mb-1"><Sparkles className="w-3.5 h-3.5"/> CURRENT HYPOTHESIS</div>
          <h3 className="text-lg font-bold text-text-main">Matte Black Milton Water Bottle <span className="text-sm font-normal text-text-secondary">(Case FB-8821)</span></h3>
          <p className="text-sm text-text-secondary mt-1">
            Your water bottle was last report-seen at the Library (2nd floor) at approximately 5:30 PM on Oct 24. FindBack AI has synthesized campus custody logs, custodian sweeps, and nearby records.
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0 border-l border-border-subtle pl-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Status</div>
              <div className="font-semibold text-text-main flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success"></span> Secured</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Match Prob</div>
              <div className="font-bold text-ai">94%</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Location</div>
              <div className="font-semibold text-text-main">Depot #141</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Telemetry</div>
              <div className="font-semibold text-text-main">High Parity</div>
            </div>
          </div>
          <button className="text-xs font-semibold text-primary border border-primary/30 rounded px-2 py-1 mt-1 hover:bg-primary-soft w-fit">View Intake Feeds</button>
        </div>
      </div>

      <div className="flex gap-8">
        
        {/* Left: Synthesized Evidence Trail */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-text-main flex items-center gap-2"><LayoutTemplate className="w-4 h-4"/> Synthesized Evidence Trail</h3>
            <span className="text-[10px] font-semibold text-text-secondary bg-surface px-2 py-1 rounded">NODE VERIFIED</span>
          </div>

          <div className="flex flex-col gap-0">
            {/* Node 1 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm z-10 shadow-sm">1</div>
                <div className="w-0.5 h-full bg-border-subtle -mt-1 -mb-1"></div>
              </div>
              <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm w-full mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><MapPin className="w-3 h-3 text-primary"/> Location Telemetry</div>
                  <div className="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded font-bold uppercase">High Confidence</div>
                </div>
                <div className="text-sm font-bold text-text-main">Library 2nd Floor (North Stacks)</div>
                <p className="text-xs text-text-secondary mt-1">
                  4 items logged into Depot Locker #141 at 6:05 PM by Custodial Staff A. Martinez.
                </p>
                <div className="mt-3 h-24 bg-surface rounded-lg border border-border-subtle flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNEOUE0NDEiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50"></div>
                  <div className="absolute bg-primary/20 w-32 h-32 rounded-full blur-xl"></div>
                  <MapPin className="w-6 h-6 text-primary z-10" />
                </div>
              </div>
            </div>

            {/* Node 2 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center font-bold text-sm z-10 shadow-sm">2</div>
                <div className="w-0.5 h-full bg-border-subtle -mt-1 -mb-1"></div>
              </div>
              <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm w-full mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><Clock className="w-3 h-3 text-success"/> Temporal Proximity</div>
                  <div className="bg-success/10 text-success text-[10px] px-2 py-0.5 rounded font-bold uppercase">High Parity</div>
                </div>
                <div className="text-sm font-bold text-text-main">Loss estimate: 5:15 PM - 5:45 PM</div>
                <p className="text-xs text-text-secondary mt-1">Recovery window: 6:05 PM. Delta: +30 to +35 minutes.</p>
                <div className="mt-3 flex items-center justify-between text-[10px] text-text-secondary">
                  <div className="flex flex-col items-center gap-1"><span>5:00 PM</span><div className="w-1 h-1 rounded-full bg-border-subtle"></div></div>
                  <div className="flex flex-col items-center gap-1 relative"><span className="text-attention font-bold">5:30 PM (Lost)</span><div className="w-2 h-2 rounded-full bg-attention"></div><div className="absolute top-4 w-32 h-1 bg-attention/30 left-1/2"></div></div>
                  <div className="flex flex-col items-center gap-1 relative"><span className="text-success font-bold">6:05 PM (Found)</span><div className="w-2 h-2 rounded-full bg-success"></div><div className="absolute top-4 w-32 h-1 bg-success/30 right-1/2"></div></div>
                  <div className="flex flex-col items-center gap-1"><span>6:30 PM</span><div className="w-1 h-1 rounded-full bg-border-subtle"></div></div>
                </div>
              </div>
            </div>

            {/* Node 3 */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-ai text-white flex items-center justify-center font-bold text-sm z-10 shadow-sm">3</div>
                <div className="w-0.5 h-full bg-transparent -mt-1"></div>
              </div>
              <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm w-full mb-2 border-l-4 border-l-ai relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-ai/5 rounded-full blur-xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1"><Search className="w-3 h-3 text-ai"/> Feature Correlation Matrix</div>
                  <div className="bg-ai text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">94% Composite</div>
                </div>
                <div className="flex flex-col gap-3 mt-3 text-xs">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-semibold text-text-main">
                      <span>Base Color: Black Matte</span>
                      <span className="text-success">98%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden"><div className="w-[98%] h-full bg-success"></div></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-semibold text-text-main">
                      <span>Volume / Form: 750ml thermal cylinder</span>
                      <span className="text-success">95%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden"><div className="w-[95%] h-full bg-success"></div></div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between font-semibold text-text-main">
                      <span>Surface Identifier: Superman vinyl decal</span>
                      <span className="text-attention">91% (Concealed)</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden"><div className="w-[91%] h-full bg-attention"></div></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-surface/50 border border-border-subtle rounded-xl p-4 mt-2">
            <div className="text-[10px] font-bold text-text-secondary uppercase flex items-center gap-1 mb-2"><LayoutTemplate className="w-3 h-3"/> Related Campus Imprints (Eliminated)</div>
            <div className="text-xs text-text-main">
              2 other water bottle reports in Library on Oct 24 (1 blue Camelbak, 1 silver Hydro Flask — both size/color mismatched and eliminated).
            </div>
            <div className="flex gap-2 mt-2 text-[10px]">
              <span className="bg-white border border-border-subtle px-2 py-1 rounded text-text-secondary line-through">Camelbak Blue 500ml</span>
              <span className="bg-white border border-border-subtle px-2 py-1 rounded text-text-secondary line-through">Hydro Flask Silver 1L</span>
            </div>
          </div>
        </div>

        {/* Right: Synthesis & Timeline */}
        <div className="w-1/2 flex flex-col gap-6">
          
          <div className="bg-white border border-border-subtle rounded-xl shadow-sm overflow-hidden flex flex-col">
            <div className="bg-ai-soft/50 border-b border-border-subtle p-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-text-main flex items-center gap-2"><Sparkles className="w-4 h-4 text-ai"/> AI Synthesized Insight</h3>
              <span className="text-[10px] font-semibold text-ai uppercase tracking-wider">CONFIDENCE: 94%</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="text-[10px] font-bold text-text-secondary uppercase">2F SPATIAL & TEMPORAL INSIGHT:</div>
              <p className="text-sm text-text-main leading-relaxed">
                The library entrance and 2nd floor quiet study zone currently exhibit the highest recovery convergence. The found item logged under #DEP-304 matches your conflicting incident inquiries by passing all 3 distinct AI filters (visual, spatio-temporal, and semantic).
              </p>
              
              <div className="mt-2 border-t border-border-subtle pt-4">
                <div className="text-[10px] font-bold text-text-secondary uppercase mb-4">Incident Progression</div>
                
                <div className="flex flex-col gap-4 text-xs">
                  <div className="flex gap-4">
                    <div className="w-16 text-right font-semibold text-text-secondary shrink-0">5:30 PM</div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-2 font-bold text-text-main"><div className="w-2 h-2 rounded-full bg-attention"></div> Reported lost</div>
                      <div className="text-text-secondary">Library Table #14 - via mobile portal</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-right font-semibold text-text-secondary shrink-0">6:05 PM</div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-2 font-bold text-text-main"><div className="w-2 h-2 rounded-full bg-success"></div> Discovered</div>
                      <div className="text-text-secondary">Janitorial evening sweep</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-right font-semibold text-text-secondary shrink-0">6:20 PM</div>
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center gap-2 font-bold text-text-main"><div className="w-2 h-2 rounded-full bg-primary"></div> Transferred</div>
                      <div className="text-text-secondary">Secured Locker #141, Central Depot</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-16 text-right font-semibold text-ai shrink-0">6:45 PM</div>
                    <div className="flex flex-col gap-1 w-full bg-ai-soft/50 p-2 rounded border border-ai/10">
                      <div className="flex items-center gap-2 font-bold text-ai"><Sparkles className="w-3 h-3"/> FindBack AI matched</div>
                      <div className="text-text-main">Neural embeddings (94% confidence)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface border border-border-subtle rounded-lg p-3 mt-2 flex items-center justify-between hover:bg-white cursor-pointer transition-colors group">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
                  <span className="text-xs font-semibold text-text-main">Visit Custody Ledger</span>
                </div>
                <span className="text-[10px] text-text-secondary">Immutable Record 0x981F</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl p-5 shadow-sm flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-sm font-bold text-text-main">Next Scheduled Sweep</div>
              <div className="text-xs text-text-secondary">Central Security evening sweep (8:00 PM)</div>
            </div>
            <button className="text-xs font-semibold text-text-main border border-border-subtle rounded px-3 py-1.5 hover:bg-surface transition-colors">View Roster</button>
          </div>

          <button 
            onClick={() => navigate('/matches/FB-8821')}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold shadow-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
          >
            Proceed to Match Details (Case #FB-8821) →
          </button>
          
        </div>
      </div>

    </div>
  );
};

export default Investigation;
