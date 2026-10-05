import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Sparkles, ShieldCheck, Clock, Check, Calendar, Lock, ChevronRight } from 'lucide-react';

const Notifications = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'match',
      title: 'AI Match Found',
      item: 'Matte Black Milton Water Bottle',
      desc: 'High-confidence candidate (94%) detected via visual parity and volumetric alignment match. Recovered at Library 2nd floor study cubicle #14.',
      time: '12 min ago',
      unread: true,
      action: 'Review Match (94%) →',
      link: '/matches/FB-8821',
      icon: Sparkles,
      color: 'text-ai',
      bg: 'bg-ai-soft'
    },
    {
      id: 2,
      type: 'verification',
      title: 'Ownership Verification Required',
      item: 'Navy Blue Herschel Backpack',
      desc: 'A claimant has submitted answers for ownership verification. AI multi-scoring is evaluating answer parity on concealed compartment contents.',
      time: '2 hours ago',
      unread: true,
      action: 'Review Claimant Parity →',
      link: '/cases',
      icon: ShieldCheck,
      color: 'text-attention',
      bg: 'bg-attention/10'
    },
    {
      id: 3,
      type: 'system',
      title: 'Item Successfully Recovered',
      item: 'Sony WH-1000XM4 Noise Canceling Headphones',
      desc: 'Handed over at Central Security Depot to verified owner. Custody receipt verified.',
      time: '1 day ago',
      unread: false,
      action: 'View Custody Receipt →',
      link: '/cases',
      icon: Check,
      color: 'text-success',
      bg: 'bg-success/10'
    },
    {
      id: 4,
      type: 'system',
      title: 'AI Investigation Auto-Sweep Complete',
      item: 'Science Complex Corridor',
      desc: 'New surveillance log telemetry ingested for Science Complex corridor. 2 discarded false matches eliminated automatically after spatio-temporal pairwise pruning.',
      time: '2 days ago',
      unread: false,
      action: 'View Investigation Log →',
      link: '/investigation',
      icon: Sparkles,
      color: 'text-ai',
      bg: 'bg-ai-soft'
    }
  ];

  const filtered = notifications.filter(n => {
    if (activeTab === 'All') return true;
    if (activeTab === 'AI Matches') return n.type === 'match';
    if (activeTab === 'Verification') return n.type === 'verification';
    if (activeTab === 'System') return n.type === 'system';
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border-subtle pb-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-text-secondary uppercase tracking-wider">
            <span className="bg-surface px-2 py-0.5 rounded border border-border-subtle">REAL-TIME CUSTODY ALERTS</span>
          </div>
          <h1 className="text-3xl font-extrabold text-text-main">Notifications & Ledger</h1>
          <p className="text-sm font-medium text-text-secondary mt-1 max-w-xl">
            Real-time AI match alerts, custody locker updates, and claim verifications.
          </p>
        </div>
        <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline whitespace-nowrap bg-primary-soft px-3 py-1.5 rounded-lg border border-primary/20 transition-all">
          <Check className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      <div className="flex gap-4 md:gap-6 text-sm font-bold overflow-x-auto pb-2 hide-scrollbar">
        {['All', 'AI Matches', 'Verification', 'System'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 pb-2 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-main'}`}
          >
            {tab} 
            <span className="bg-surface text-text-secondary px-1.5 py-0.5 rounded-md text-[10px] font-bold border border-border-subtle">
              {tab === 'All' ? notifications.length : notifications.filter(n => {
                if (tab === 'AI Matches') return n.type === 'match';
                if (tab === 'Verification') return n.type === 'verification';
                if (tab === 'System') return n.type === 'system';
              }).length}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map(n => (
          <div key={n.id} className={`bg-white border rounded-2xl p-4 md:p-5 shadow-sm transition-all hover:shadow-md cursor-pointer ${n.unread ? 'border-primary/30' : 'border-border-subtle'}`} onClick={() => navigate(n.link)}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 border border-border-subtle/50 shadow-sm" style={{ backgroundColor: '#F8F9FA' }}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${n.bg} ${n.color}`}>
                  <n.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {n.unread && <div className="w-2 h-2 rounded-full bg-attention animate-pulse shadow-[0_0_8px_rgba(217,119,6,0.6)]"></div>}
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm ${n.bg} ${n.color}`}>{n.title}</span>
                  </div>
                  <span className="text-xs font-semibold text-text-secondary flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {n.time}</span>
                </div>
                <div className="font-extrabold text-text-main text-lg mt-0.5">{n.item}</div>
                <p className="text-sm font-medium text-text-secondary leading-relaxed bg-surface/50 p-3 rounded-lg border border-border-subtle/50">{n.desc}</p>
                <div className="flex items-center justify-between mt-2">
                  <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
                    {n.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
