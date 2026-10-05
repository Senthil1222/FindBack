import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Sparkles, ShieldCheck, CheckCircle2, QrCode, FileText, Download, Calendar, Check, AlertCircle } from 'lucide-react';

const Verification = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [status, setStatus] = useState('pending'); // pending, success, fail

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verification logic
    const a1 = answer1.toLowerCase();
    const a2 = answer2.toLowerCase();
    
    // Simple mock logic: if answers contain expected keywords
    if ((a1.includes('superman') || a1.includes('sticker') || a1.includes('shield')) || 
        (a2.includes('scratch') || a2.includes('dent') || a2.includes('lid'))) {
      setStatus('success');
      
      // Update case status in localStorage
      const cases = JSON.parse(localStorage.getItem('findback_cases') || '[]');
      const updatedCases = cases.map(c => 
        c.id === (id || 'FB-8821') ? { ...c, status: 'RECOVERED', time: 'Just now' } : c
      );
      if(!updatedCases.find(c => c.id === (id || 'FB-8821'))) {
        updatedCases.push({
            id: id || 'FB-8821',
            type: 'resolved',
            item: 'Matte Black Milton Water Bottle',
            location: 'Central Security Depot',
            status: 'RECOVERED',
            time: 'Just now'
        });
      }
      localStorage.setItem('findback_cases', JSON.stringify(updatedCases));
    } else {
      setStatus('fail');
    }
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
              <span>SECURE IDENTITY RECONCILIATION</span>
            </div>
            <h1 className="text-3xl font-bold text-text-main">Verify Ownership</h1>
            <p className="text-text-secondary max-w-2xl mt-1">
              Answer private verification prompts extracted during Central Depot item intake. Nobody on campus sees your answers until the neural ledger evaluates match parity.
            </p>
          </div>
          <div className="flex bg-surface border border-border-subtle rounded-lg px-3 py-1.5 shadow-sm items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-attention"></span>
            <span className="text-xs font-semibold text-text-secondary uppercase">Claim Status: In Verification (94% Match)</span>
          </div>
        </div>
      </div>

      <div className="bg-ai-soft/30 border border-ai/20 rounded-xl p-4 flex gap-3 items-center">
        <ShieldCheck className="w-5 h-5 text-ai shrink-0" />
        <div className="flex-1">
          <div className="text-sm font-bold text-ai flex items-center gap-2 mb-0.5">
            Zero-Knowledge Verification Architecture <span className="bg-ai text-white text-[9px] px-1.5 py-0.5 rounded uppercase">Safe-ID Protocol</span>
          </div>
          <div className="text-xs text-text-secondary">
            The questions below are generated from non-public visual and structural markers logged during Central Depot item intake. Unmatched responders cannot view correct answers or test restitutions.
          </div>
        </div>
      </div>

      {status === 'pending' || status === 'fail' ? (
        <div className="flex gap-8 items-start">
          
          <div className="w-1/3 flex flex-col gap-4 sticky top-8">
            <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm flex flex-col gap-3">
              <div className="text-xs font-bold text-text-secondary uppercase border-b border-border-subtle pb-2">Intake Specimen #DEP-304</div>
              <div className="w-full aspect-[4/3] bg-surface rounded-lg border border-border-subtle overflow-hidden relative">
                <div className="absolute inset-0 bg-text-main/90"></div>
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-success"/> Logged by Ofc. Vance</div>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="text-[10px] font-bold text-text-secondary uppercase">Public Ledger Metadata</div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div>
                    <div className="text-xs font-semibold text-text-main">Depot Node</div>
                    <div className="text-xs text-text-secondary">Third Vault Pass</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-main">Item Type</div>
                    <div className="text-xs text-text-secondary">Matte Powder Coat</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 flex flex-col gap-6">
            <div className="bg-white border border-border-subtle rounded-xl shadow-sm overflow-hidden">
              <div className="bg-surface border-b border-border-subtle px-6 py-4 flex items-center justify-between">
                <h3 className="font-bold text-text-main flex items-center gap-2">Secret Feature Attestation</h3>
                <span className="text-[10px] font-bold text-attention bg-attention/10 px-2 py-1 rounded uppercase">2 Criteria Required</span>
              </div>
              
              <div className="p-6 flex flex-col gap-6 text-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-text-main flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-ai text-white flex items-center justify-center text-xs">1</span>
                      Distinctive Decal / Marking
                    </label>
                    <span className="text-[10px] font-semibold text-text-secondary">Confidence Weight: 60%</span>
                  </div>
                  <p className="text-text-secondary text-sm">What graphic or logo is featured on the vinyl sticker on the side of the bottle?</p>
                  <input 
                    type="text" 
                    value={answer1}
                    onChange={e => setAnswer1(e.target.value)}
                    placeholder="e.g. Superman shield logo in red/yellow/blue"
                    className="border border-border-subtle rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors w-full bg-surface" 
                  />
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
                  <div className="flex items-center justify-between">
                    <label className="font-semibold text-text-main flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-ai text-white flex items-center justify-center text-xs">2</span>
                      Wear & Cap Details
                    </label>
                    <span className="text-[10px] font-semibold text-text-secondary">Confidence Weight: 40%</span>
                  </div>
                  <p className="text-text-secondary text-sm">Describe any physical scratch, dent, or engraving on the lid or base.</p>
                  <input 
                    type="text" 
                    value={answer2}
                    onChange={e => setAnswer2(e.target.value)}
                    placeholder="e.g. Small fingernail-sized scratch on the silver screw lid edge"
                    className="border border-border-subtle rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors w-full bg-surface" 
                  />
                </div>
              </div>

              {status === 'fail' && (
                <div className="mx-6 mb-6 bg-attention/10 border border-attention/20 rounded-lg p-3 flex items-center gap-2 text-attention text-sm font-semibold">
                  <AlertCircle className="w-5 h-5" />
                  Verification failed. Answers did not match hidden ledger properties. Please try again.
                </div>
              )}

              <div className="bg-surface px-6 py-4 flex items-center justify-between border-t border-border-subtle">
                <div className="text-[10px] text-text-secondary w-2/3 leading-relaxed">
                  Photographic records match 98% primary contours across all 4 visual quadrants.
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={!answer1 || !answer2}
                  className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-hover transition-colors shadow-sm disabled:opacity-50"
                >
                  Submit Verification Answers →
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4">
          
          <div className="bg-success/5 border-2 border-success/30 rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
            <div className="flex items-center gap-4 border-b border-success/20 pb-6">
              <div className="w-16 h-16 rounded-full bg-success flex items-center justify-center text-white shrink-0 shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-success flex items-center gap-2">Ownership Confirmed <span className="bg-success text-white text-[10px] uppercase font-bold px-2 py-1 rounded">Concordance: 98%</span></h2>
                <p className="text-success/80 mt-1">Your answers matched the private attributes recorded in the intake custody ledger. Your claim pass has been issued.</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-6 pt-2">
              <div className="col-span-1 flex flex-col gap-1 border-r border-success/20">
                <div className="text-[10px] font-bold text-success/70 uppercase">Step 1</div>
                <div className="text-sm font-bold text-success">Pickup Location</div>
                <div className="text-sm font-semibold text-text-main mt-1">Central Security Depot</div>
                <div className="text-xs text-text-secondary">Third Vault & Pass Counter<br/>Student Level 1, Desk 03</div>
                <button className="text-xs text-success font-semibold flex items-center gap-1 mt-2 hover:underline"><MapPin className="w-3.5 h-3.5"/> View on Campus Map</button>
              </div>

              <div className="col-span-1 flex flex-col gap-1 border-r border-success/20 px-2">
                <div className="text-[10px] font-bold text-success/70 uppercase">Step 2</div>
                <div className="text-sm font-bold text-success">Custody Reference Code</div>
                <div className="bg-white border border-success/30 rounded p-2 mt-1 flex flex-col items-center gap-2">
                  <QrCode className="w-12 h-12 text-text-main" />
                  <div className="font-mono text-sm font-bold tracking-wider">PCL-8821-V</div>
                </div>
                <div className="text-[10px] text-text-secondary text-center mt-1">Active until tomorrow 8:00 PM</div>
              </div>

              <div className="col-span-1 flex flex-col gap-1 border-r border-success/20 px-2">
                <div className="text-[10px] font-bold text-success/70 uppercase">Duty Staff</div>
                <div className="text-sm font-bold text-success">Custodian On-Duty</div>
                <div className="text-sm font-semibold text-text-main mt-1">Officer R. Vance</div>
                <div className="text-xs text-text-secondary">ID: 0471-SEC</div>
                <div className="text-xs text-success flex items-center gap-1 mt-2"><Clock className="w-3.5 h-3.5"/> 8:00 AM - 9:00 PM</div>
              </div>

              <div className="col-span-1 flex flex-col gap-1 pl-2">
                <div className="text-[10px] font-bold text-success/70 uppercase">Requirement</div>
                <div className="text-sm font-bold text-success">What to Bring</div>
                <div className="bg-surface rounded border border-border-subtle p-2 mt-1 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-text-secondary" />
                  <div className="text-xs font-semibold text-text-main">Campus ID Card<br/><span className="text-[10px] text-text-secondary font-normal">Digital or physical</span></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-6 border-t border-success/20">
              <div className="flex items-center gap-2 text-xs font-semibold text-success">
                <ShieldCheck className="w-4 h-4" /> Pickup Token Pushed to Device
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-white border border-success/30 text-success px-4 py-2 rounded-lg text-sm font-semibold hover:bg-success/5 transition-colors flex items-center gap-1.5 shadow-sm">
                  <Download className="w-4 h-4" /> Print Manifest
                </button>
                <button className="bg-white border border-success/30 text-success px-4 py-2 rounded-lg text-sm font-semibold hover:bg-success/5 transition-colors flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-4 h-4" /> Add to Calendar / Save Pickup Pass
                </button>
                <button 
                  onClick={() => navigate('/cases')}
                  className="bg-success text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm"
                >
                  Mark as Recovered →
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary"><Sparkles className="w-4 h-4" /></div>
              <div>
                <div className="text-sm font-bold text-text-main">Need help with verification?</div>
                <div className="text-xs text-text-secondary">FindBack AI can cross-reference your original loss report notes if you forgot specific marks.</div>
              </div>
            </div>
            <button className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-primary-hover transition-colors">
              Ask FindBack AI
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

export default Verification;
