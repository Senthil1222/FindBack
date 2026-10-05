import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Clock, Search, ChevronDown, CheckCircle2 } from 'lucide-react';

const Cases = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const savedCases = JSON.parse(localStorage.getItem('findback_cases') || '[]');
    
    const mockCases = [
      {
        id: 'FB-8821',
        type: 'lost',
        item: 'Matte Black Milton Water Bottle',
        location: 'Main University Library',
        status: 'AI MATCH FOUND',
        time: 'Reported Oct 24',
        details: 'Top match (94% confidence) found at Library Front Desk 12 minutes ago.',
        image: '/milton_bottle.jpg',
        action: 'View Case & Matches (1) →',
        link: '/matches/FB-8821'
      },
      {
        id: 'FB-8812',
        type: 'found',
        item: 'Navy Blue Herschel Backpack',
        location: 'Student Dining Commons',
        status: 'WAITING FOR VERIFICATION',
        time: 'Reported Today',
        details: 'Claimant submitted answers for ownership verification questions.',
        image: '/herschel_backpack.jpg',
        action: 'View Case Details →',
        link: '/cases'
      },
      {
        id: 'FB-8804',
        type: 'lost',
        item: 'Silver Apple MacBook Air 13"',
        location: 'Science Complex Lab 3B',
        status: 'AI SEARCH ACTIVE',
        time: 'Reported Oct 23',
        details: 'Cross-referencing surveillance log metadata.',
        image: 'bg-[#95a5a6]',
        action: 'View Investigation →',
        link: '/investigation'
      }
    ];

    if (savedCases.length > 0) {
      setCases([...savedCases, ...mockCases]);
    } else {
      setCases(mockCases);
    }
  }, []);

  const filteredCases = cases.filter(c => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Lost') return c.type === 'lost';
    if (activeTab === 'Found') return c.type === 'found';
    if (activeTab === 'Resolved') return c.type === 'resolved';
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'AI MATCH FOUND':
        return <span className="bg-ai text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit shadow-sm"><Sparkles className="w-3 h-3" /> {status}</span>;
      case 'WAITING FOR OWNER VERIFICATION':
      case 'WAITING FOR VERIFICATION':
      case 'VERIFICATION':
        return <span className="bg-attention text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit shadow-sm"><Search className="w-3 h-3" /> {status}</span>;
      case 'AI SEARCH ACTIVE':
      case 'SEARCHING':
        return <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit shadow-sm"><Search className="w-3 h-3" /> {status}</span>;
      case 'RECOVERED':
        return <span className="bg-success text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit shadow-sm"><CheckCircle2 className="w-3 h-3" /> {status}</span>;
      case 'LOST':
        return <span className="bg-danger text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit shadow-sm">{status}</span>;
      default:
        return <span className="bg-surface border border-border-subtle text-text-secondary text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 w-fit">{status}</span>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
              <span>CUSTODY & RECOVERY LEDGER</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight">My Cases</h1>
            <p className="text-text-secondary max-w-2xl mt-1 text-sm md:text-base">
              Real-time active reports, potential AI matches, and recovery hand-offs across campus depots.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <div className="bg-white border border-border-subtle px-3 py-2 rounded-xl text-xs font-bold text-text-main flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-ai shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
              2 Matches Awaiting Review
            </div>
            <div className="bg-white border border-border-subtle px-3 py-2 rounded-xl text-xs font-bold text-text-secondary flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              Sync with Central Depot
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border-subtle pb-4 gap-4">
        <div className="flex gap-4 md:gap-6 text-sm font-bold overflow-x-auto pb-1 md:pb-0 hide-scrollbar">
          {['All', 'Lost', 'Found', 'Resolved'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 pb-2 md:pb-4 -mb-[19px] border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-main'}`}
            >
              {tab} 
              <span className="bg-surface text-text-secondary px-1.5 py-0.5 rounded-md text-[10px] font-bold border border-border-subtle/50">
                {tab === 'All' ? cases.length : cases.filter(c => tab === 'Lost' ? c.type === 'lost' : tab === 'Found' ? c.type === 'found' : c.type === 'resolved').length}
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-text-secondary shrink-0">
          Sort by: 
          <button className="flex items-center gap-1 text-text-main bg-white border border-border-subtle px-2 py-1 rounded-lg shadow-sm hover:bg-surface transition-colors">
            Latest Activity <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filteredCases.map((c, i) => (
          <div key={i} className="bg-white border border-border-subtle rounded-2xl p-4 md:p-5 flex flex-col md:flex-row justify-between items-start gap-4 md:gap-5 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-full md:w-24 h-48 md:h-24 bg-surface rounded-xl border border-border-subtle flex items-center justify-center overflow-hidden shrink-0 shadow-inner">
              {c.image && c.image.startsWith('/') ? (
                <img src={c.image} alt={c.item} className="w-full h-full object-cover opacity-95 transition-transform group-hover:scale-105 duration-300" />
              ) : c.image ? (
                <div className={`w-16 md:w-12 h-24 md:h-16 ${c.image} rounded-sm opacity-90 shadow-sm`}></div>
              ) : (
                <div className="text-3xl opacity-30 text-text-secondary">?</div>
              )}
            </div>
            <div className="flex flex-col gap-2 flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start w-full gap-2 md:gap-0">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    {getStatusBadge(c.status)}
                    <span className="text-xs font-bold text-text-secondary uppercase bg-surface px-2 py-0.5 rounded border border-border-subtle">ID: {c.id}</span>
                  </div>
                  <div className="font-extrabold text-text-main text-lg md:text-xl leading-tight mt-1">{c.item}</div>
                </div>
              </div>
              
              <div className="text-xs md:text-sm font-semibold text-text-secondary flex flex-wrap items-center gap-2 md:gap-4 mt-1">
                <span className="flex items-center gap-1 bg-surface px-2 py-1 rounded border border-border-subtle"><Clock className="w-3.5 h-3.5" /> {c.time}</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {c.location}</span>
              </div>

              <div className="mt-2 bg-surface/50 border border-border-subtle rounded-xl p-3 text-xs md:text-sm text-text-main flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-0">
                <span className="flex-1 font-medium">{c.details || 'Processing intake features...'}</span>
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  {c.status === 'AI MATCH FOUND' && (
                    <button className="text-xs font-bold text-ai hover:underline">Visual Outline</button>
                  )}
                  <button 
                    onClick={() => c.link && navigate(c.link)}
                    className="bg-primary text-white border border-primary-hover px-4 md:px-5 py-2 md:py-2.5 rounded-lg font-bold shadow-sm hover:bg-primary-hover transition-colors text-xs whitespace-nowrap"
                  >
                    {c.action || 'View Case →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredCases.length === 0 && (
          <div className="text-center py-16 bg-white border border-border-subtle rounded-2xl shadow-sm text-text-secondary text-sm font-semibold">
            No {activeTab !== 'All' ? activeTab.toLowerCase() : ''} cases found in the ledger.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cases;
