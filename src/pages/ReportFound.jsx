import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Clock, ShieldCheck, Info, Upload, CheckCircle2, ChevronDown, Lock } from 'lucide-react';

const ReportFound = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [isExtracted, setIsExtracted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Bags & Backpacks',
    location: '',
    date: 'Today • 1:15 PM',
    features: 'Navy blue fabric, front zippered pouch, brass carabiner clip',
    hiddenFeature: '',
    custody: 'Handed to Student Union Helpdesk (Desk Box #04)'
  });

  const handleDescriptionChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    
    if (val.toLowerCase().includes('backpack') && val.toLowerCase().includes('blue')) {
      if (!isExtracted) {
        setIsExtracted(true);
        setFormData(prev => ({
          ...prev,
          itemName: 'Blue Herschel Backpack',
          location: 'Student Dining Commons / Cafeteria'
        }));
      }
    } else if (val.length < 10) {
      setIsExtracted(false);
      setFormData({
        itemName: '',
        category: 'Bags & Backpacks',
        location: '',
        date: 'Today • 1:15 PM',
        features: '',
        hiddenFeature: '',
        custody: 'Handed to Student Union Helpdesk (Desk Box #04)'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      const cases = JSON.parse(localStorage.getItem('findback_cases') || '[]');
      cases.push({
        id: `FB-${Math.floor(Math.random() * 10000)}`,
        type: 'found',
        item: formData.itemName || 'Reported Found Item',
        location: formData.location || 'Campus',
        status: 'WAITING FOR OWNER VERIFICATION',
        time: 'Just now'
      });
      localStorage.setItem('findback_cases', JSON.stringify(cases));
      
      navigate('/cases');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
            <span>CAMPUS CUSTODY INTAKE</span>
          </div>
          <h1 className="text-3xl font-bold text-text-main">Report a Found Item</h1>
          <p className="text-text-secondary max-w-2xl mt-1">
            Help its owner find it safely, without exposing sensitive identifying details.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white border border-border-subtle rounded-lg px-3 py-1.5 shadow-sm text-xs font-semibold text-text-main">
          <ShieldCheck className="w-4 h-4 text-success" /> Encrypted Verification Protocol v2.2
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Main Form */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white border border-border-subtle rounded-xl shadow-sm p-1">
            <div className="p-4 border-b border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-text-main">
                <Sparkles className="w-4 h-4 text-ai" /> Natural Language Swift-Intake
              </div>
              <span className="text-[10px] text-text-secondary">Paste voice transcript, text, or observation</span>
            </div>
            <div className="p-4 relative">
              <textarea 
                value={description}
                onChange={handleDescriptionChange}
                placeholder="E.g. Found a blue Herschel backpack near the student cafeteria lunch tables at around 1:15pm. Has an attached brass carabiner keychain."
                className="w-full h-24 resize-none border-none focus:ring-0 p-0 text-text-main placeholder-text-secondary/60 text-base bg-transparent"
              ></textarea>
              {isExtracted && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <div className="bg-ai-soft text-ai text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm"><Sparkles className="w-3 h-3"/> Assessed 4 distinct properties. Private features compartmentalized.</div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl shadow-sm p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Item Designation</label>
                <div className="relative flex items-center">
                  <input type="text" value={formData.itemName} onChange={e => setFormData({...formData, itemName: e.target.value})} className="w-full border border-border-subtle rounded-lg pl-3 pr-10 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. Blue Backpack" />
                  {isExtracted && <CheckCircle2 className="w-4 h-4 text-success absolute right-3" />}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Category</label>
                <div className="relative">
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full border border-border-subtle rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white transition-colors">
                    <option>Bags & Backpacks</option>
                    <option>Electronics</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-text-secondary absolute right-3 top-2.5 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Physical Imagery & Evidence</label>
                <div className="border-2 border-dashed border-border-subtle rounded-xl bg-surface/50 h-32 flex items-center justify-center relative overflow-hidden group cursor-pointer hover:bg-surface">
                  <img src="/herschel_backpack.jpg" alt="Found Evidence" className="absolute inset-0 w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[#2C3E50]/20 backdrop-blur-[2px]"></div>
                  <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm"><ShieldCheck className="w-3 h-3"/> Keying blurred (AI Auto)</div>
                </div>
              </div>
              <div className="col-span-1 flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary opacity-0">Secondary</label>
                <div className="border border-border-subtle rounded-xl bg-surface h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-border-subtle/50 transition-colors">
                  <Upload className="w-5 h-5 text-text-secondary mb-1" />
                  <span className="text-[10px] font-bold text-text-main text-center">Upload Secondary Angle</span>
                  <span className="text-[8px] text-text-secondary mt-0.5 text-center">JPG, PNG, HEIC up to 10MB</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Found Location</label>
                <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="border border-border-subtle rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Date & Timestamp</label>
                <input type="text" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="border border-border-subtle rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-text-secondary uppercase">Visible Features Manifest</label>
              <input type="text" value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} className="border border-border-subtle rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" />
            </div>

            {/* Anti-Fraud Section */}
            <div className="bg-attention/10 border-2 border-attention/30 rounded-xl p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-attention uppercase flex items-center gap-1.5"><Lock className="w-3.5 h-3.5"/> Hidden Verification Marker</div>
                <div className="bg-attention text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Anti-Fraud</div>
              </div>
              <p className="text-xs text-text-main">
                Specify details known <span className="font-bold underline decoration-attention decoration-2">ONLY to the true owner</span> (e.g. inner pocket contents, monogram, scratch pattern).
              </p>
              <input 
                type="text" 
                value={formData.hiddenFeature} 
                onChange={e => setFormData({...formData, hiddenFeature: e.target.value})} 
                className="border border-attention/30 rounded-lg px-3 py-2 text-sm focus:border-attention focus:ring-1 focus:ring-attention outline-none transition-colors bg-white/80 backdrop-blur-sm text-text-main placeholder-text-secondary/50" 
                placeholder="e.g. Red Swiss Army knife in left net pocket & name tag signed 'Marcus K.'" 
              />
              <div className="text-[10px] text-text-secondary flex items-start gap-1 mt-1">
                <Sparkles className="w-3 h-3 text-ai shrink-0" />
                FindBack AI will use this info to generate dynamic, multi-factor verification questions for claimants before release authorization.
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-2">
              <label className="text-xs font-semibold text-text-secondary uppercase flex justify-between">
                Present Physical Custody
                <span className="text-[9px] lowercase text-text-secondary/60">Subject to Westfield Campus Property Code 2.1a-b</span>
              </label>
              <div className="relative">
                <select value={formData.custody} onChange={e => setFormData({...formData, custody: e.target.value})} className="w-full border border-border-subtle rounded-lg pl-3 pr-8 py-3 text-sm font-semibold text-text-main appearance-none focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-surface transition-colors">
                  <option>Handed to Student Union Helpdesk (Desk Box #04)</option>
                  <option>Handed to Main Library Security</option>
                  <option>Secured in Smart Locker</option>
                </select>
                <ChevronDown className="w-4 h-4 text-text-secondary absolute right-3 top-3.5 pointer-events-none" />
              </div>
            </div>

          </div>

          <div className="flex justify-end">
            <button 
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-sm disabled:opacity-70"
            >
              {submitting ? 'Transmitting to Depot...' : 'Record Found Item & Transmit →'}
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-white border border-border-subtle rounded-2xl p-5 shadow-sm sticky top-8">
            <h3 className="font-bold text-text-main flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-success" />
              Campus Ethics & Privacy Protocol
            </h3>
            <p className="text-xs text-text-secondary mb-6 leading-relaxed">
              Our intake engine operates on strict non-disclosure principles to protect student identities and eliminate opportunistic fraud.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center shrink-0 border border-border-subtle">
                  <Lock className="w-3 h-3 text-text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">Zero Exposure of PII</div>
                  <div className="text-xs text-text-secondary mt-1">Identification cards, passwords, and sensitive notes are auto-blurred (GDAI) in public views.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-ai-soft flex items-center justify-center shrink-0 border border-ai/20">
                  <Sparkles className="w-3 h-3 text-ai" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">Dynamic Challenge Proof</div>
                  <div className="text-xs text-text-secondary mt-1">FindBack AI cross-examines claimants using procedural questions derived from hidden markers.</div>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center shrink-0 border border-border-subtle">
                  <Clock className="w-3 h-3 text-text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main">Accountable Custody Ledger</div>
                  <div className="text-xs text-text-secondary mt-1">Handoffs are immutably anchored to campus security records for full chain of custody audits.</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-border-subtle">
              <div className="text-[10px] font-bold text-text-secondary uppercase mb-2">Reported Intake Velocity</div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-text-main tracking-tight">91.4%</span>
                <span className="text-xs font-semibold text-success flex items-center gap-0.5">match rate this quarter</span>
              </div>
              <p className="text-[10px] text-text-secondary mt-1">Accurate hidden verification attributes reduce claim processing latency from 48h to 2h average.</p>
            </div>
          </div>
          
          <div className="bg-ai-soft/30 border border-ai/20 rounded-xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-2 text-ai font-bold">
              <Sparkles className="w-4 h-4" /> AI understood your description
            </div>
            
            {isExtracted ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                  <span className="text-xs text-text-secondary font-semibold uppercase">Item</span>
                  <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                    Backpack <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                  <span className="text-xs text-text-secondary font-semibold uppercase">Color</span>
                  <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                    Blue <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                  <span className="text-xs text-text-secondary font-semibold uppercase">Location</span>
                  <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                    Cafeteria <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                  <span className="text-xs text-text-secondary font-semibold uppercase">Distinctive feature</span>
                  <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                    Brass carabiner <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-text-main leading-relaxed">
                Describe what you found in natural words. I will organize the details and protect the owner's privacy automatically.
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReportFound;
