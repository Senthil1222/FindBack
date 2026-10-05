import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Upload, Info, CheckCircle2, ChevronDown, Sparkles, MapPin, Clock, ShieldCheck } from 'lucide-react';

const ReportLost = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [isExtracted, setIsExtracted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categories = ['Bottles & Containers', 'Electronics & Audio', 'Bags & Backpacks', 'IDs & Wallets', 'Clothing', 'Keys & Security', 'Books & Stationery'];
  
  const [formData, setFormData] = useState({
    itemName: '',
    category: 'Bottles & Containers',
    location: '',
    date: '2026-10-24T17:30',
    features: ''
  });

  const handleDescriptionChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    
    // Mock extraction when typing reaches certain length/keywords
    if (val.toLowerCase().includes('bottle') && val.toLowerCase().includes('superman')) {
      if (!isExtracted) {
        setIsExtracted(true);
        setFormData(prev => ({
          ...prev,
          itemName: 'Matte Black Milton Water Bottle',
          location: 'University Library',
          features: 'Superman vinyl sticker on upper hemisphere; minor scratch on silver screw lid'
        }));
      }
    } else if (val.length < 10) {
      setIsExtracted(false);
      setFormData({
        itemName: '',
        category: 'Bottles & Containers',
        location: '',
        date: '2026-10-24T17:30',
        features: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      // Mock save to localStorage
      const cases = JSON.parse(localStorage.getItem('findback_cases') || '[]');
      cases.push({
        id: `FB-${Math.floor(Math.random() * 10000)}`,
        type: 'lost',
        item: formData.itemName || 'Reported Item',
        location: formData.location || 'Campus',
        status: 'SEARCHING',
        time: 'Just now'
      });
      localStorage.setItem('findback_cases', JSON.stringify(cases));
      
      // Navigate to cases
      navigate('/cases');
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider">
              <span>STEP 1 OF 3 • INTAKE LEDGER - Campus Registry Node</span>
            </div>
            <h1 className="text-3xl font-bold text-text-main">Report a Lost Item</h1>
            <p className="text-text-secondary max-w-2xl mt-1">
              Tell us what happened in plain language. FindBack AI will organize the custody details, catalog visual identifiers, and survey active inventory for potential matches.
            </p>
          </div>
          <div className="bg-primary-soft text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            Towards Resolution: Active
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Main Form Area */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
          
          <div className="bg-white border border-border-subtle rounded-xl shadow-sm p-1">
            <div className="p-4 border-b border-border-subtle flex items-center gap-2 text-sm font-semibold text-text-main">
              <Sparkles className="w-4 h-4 text-ai" /> Natural Description
              <span className="ml-auto text-xs font-normal text-text-secondary bg-surface px-2 py-0.5 rounded">AI Processing Active</span>
            </div>
            <div className="p-4">
              <textarea 
                value={description}
                onChange={handleDescriptionChange}
                placeholder="E.g. I lost a black Milton water bottle near the library yesterday evening around 5:30pm. It has a small Superman sticker on the side."
                className="w-full h-24 resize-none border-none focus:ring-0 p-0 text-text-main placeholder-text-secondary/60 text-base bg-transparent"
              ></textarea>
              <div className="flex justify-end">
                <button className="text-xs text-ai font-semibold hover:underline flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Enhance prompt
                </button>
              </div>
            </div>
          </div>

          <div className="bg-ai-soft/30 border border-ai/20 rounded-xl p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-ai shrink-0 mt-0.5" />
            <p className="text-sm text-text-main">
              FindBack AI parses your description and populates the forensic report below.
            </p>
          </div>

          <div className="bg-white border border-border-subtle rounded-xl shadow-sm p-6 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Item Name & Model</label>
                <input type="text" value={formData.itemName} onChange={e => setFormData({...formData, itemName: e.target.value})} className="border border-border-subtle rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. Milton Water Bottle" />
              </div>
              <div className="flex flex-col gap-1.5 relative z-20">
                <label className="text-xs font-semibold text-text-secondary uppercase">Category Classification</label>
                <div className="relative">
                  <div 
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="w-full border border-border-subtle rounded-lg pl-3 pr-8 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors cursor-pointer flex items-center justify-between"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                  >
                    <span className="text-text-main">{formData.category}</span>
                    <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform absolute right-3 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isCategoryOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 border border-border-subtle rounded-lg shadow-lg z-50 overflow-hidden" style={{ backgroundColor: 'rgba(240, 253, 244, 0.98)', backdropFilter: 'blur(12px)' }}>
                      <div className="max-h-60 overflow-y-auto">
                        {categories.map(cat => (
                          <div 
                            key={cat}
                            onClick={() => {
                              setFormData({...formData, category: cat});
                              setIsCategoryOpen(false);
                            }}
                            className={`px-3 py-2.5 text-sm cursor-pointer hover:bg-primary-soft transition-colors ${formData.category === cat ? 'bg-primary-soft text-primary font-bold' : 'text-text-main font-medium'}`}
                          >
                            {cat}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between">
                <label className="text-xs font-semibold text-text-secondary uppercase">Visual Evidence & Photo Intake</label>
                <span className="text-[10px] text-ai font-semibold flex items-center gap-1"><Sparkles className="w-3 h-3"/> Improves match probability by 54%</span>
              </div>
              <div className="border-2 border-dashed border-border-subtle rounded-xl bg-surface/50 flex flex-col items-center justify-center py-8 gap-2 cursor-pointer hover:bg-surface transition-colors">
                <div className="w-10 h-10 rounded-full bg-white border border-border-subtle flex items-center justify-center shadow-sm">
                  <Upload className="w-5 h-5 text-text-secondary" />
                </div>
                <div className="text-sm font-semibold text-text-main mt-1">Drop an image here or choose from device</div>
                <div className="text-xs text-text-secondary">Photos help AI match exact shapes, custom stickers, wear patterns & surface scuffs</div>
                <div className="flex gap-2 mt-2">
                  <button className="bg-white border border-border-subtle px-3 py-1.5 rounded text-xs font-semibold shadow-sm hover:bg-surface transition-colors">Browse Files</button>
                  <button className="bg-white border border-border-subtle px-3 py-1.5 rounded text-xs font-semibold shadow-sm hover:bg-surface transition-colors">Take Photo</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Lost Seen Location</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-text-secondary absolute left-3 top-2.5" />
                  <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full border border-border-subtle rounded-lg pl-9 pr-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. Main Library" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Approximate Date & Time</label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-text-secondary absolute left-3 top-2.5 pointer-events-none" />
                  <input type="datetime-local" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full border border-border-subtle rounded-lg pl-9 pr-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-text-main" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-text-secondary uppercase">Distinctive Features & Unique Marks</label>
              <input type="text" value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} className="border border-border-subtle rounded-lg px-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="e.g. Superman sticker on the side" />
            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="text-xs text-text-secondary flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-success" />
              Zero-knowledge receipt token generated upon submission.
            </div>
            <button 
              onClick={handleSubmit}
              disabled={submitting}
              className="bg-primary text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-sm disabled:opacity-70"
            >
              {submitting ? 'Processing...' : 'Find My Item →'}
            </button>
          </div>
        </div>

        {/* Right Sidebar - AI Extraction */}
        <div className="col-span-1">
          <div className="bg-ai-soft/50 border border-ai/20 rounded-2xl p-5 sticky top-8 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-ai font-bold">
                <Sparkles className="w-4 h-4" /> AI understood your description
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                <span className="text-xs text-text-secondary font-semibold uppercase">Item</span>
                <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                  {isExtracted ? "Water Bottle" : <span className="text-text-secondary/50 italic">Listening...</span>}
                  {isExtracted && <CheckCircle2 className="w-3.5 h-3.5 text-success" />}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                <span className="text-xs text-text-secondary font-semibold uppercase">Color</span>
                <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                  {isExtracted ? <>Black <CheckCircle2 className="w-3.5 h-3.5 text-success" /></> : <span className="text-text-secondary/50 italic">...</span>}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                <span className="text-xs text-text-secondary font-semibold uppercase">Location</span>
                <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                  {isExtracted ? <>Central Library <CheckCircle2 className="w-3.5 h-3.5 text-success" /></> : <span className="text-text-secondary/50 italic">...</span>}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-ai/10 pb-2">
                <span className="text-xs text-text-secondary font-semibold uppercase">Distinctive feature</span>
                <span className="text-sm font-semibold text-text-main flex items-center gap-1">
                  {isExtracted ? <>Superman sticker <CheckCircle2 className="w-3.5 h-3.5 text-success" /></> : <span className="text-text-secondary/50 italic">...</span>}
                </span>
              </div>
            </div>

            {isExtracted && (
              <div className="bg-white border border-border-subtle rounded-xl p-4 shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-ai shrink-0 mt-0.5" />
                  <div className="text-sm font-semibold text-text-main">
                    Tip: Do you remember if the bottle was 750ml or 1L?
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-1 mb-3 pl-6">
                  Specifying capacity narrows 14 similar active reports in the Central Depot.
                </p>
                <div className="flex gap-2 pl-6">
                  <button className="bg-surface border border-border-subtle hover:bg-ai-soft hover:border-ai/30 text-text-main text-xs px-3 py-1.5 rounded-lg transition-colors">750ml</button>
                  <button className="bg-surface border border-border-subtle hover:bg-ai-soft hover:border-ai/30 text-text-main text-xs px-3 py-1.5 rounded-lg transition-colors">1000ml</button>
                  <button className="bg-surface border border-border-subtle hover:bg-ai-soft hover:border-ai/30 text-text-main text-xs px-3 py-1.5 rounded-lg transition-colors">Not sure</button>
                </div>
              </div>
            )}

            <div className="mt-4 border-t border-ai/10 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xl shadow-sm border border-border-subtle">🌍</div>
                <div>
                  <div className="text-xs font-bold text-text-main">Multilingual Assistant</div>
                  <div className="text-[10px] text-text-secondary">Having trouble describing your item? You can type in English, Hindi, or Tamil.</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReportLost;
