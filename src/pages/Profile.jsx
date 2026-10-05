import React, { useState } from 'react';
import { User, ShieldCheck, Mail, Smartphone, Bell, BellOff, Key, LogOut } from 'lucide-react';

const Profile = () => {
  const [notifyMatches, setNotifyMatches] = useState(true);
  const [notifyUpdates, setNotifyUpdates] = useState(false);
  const [masterAlertEnabled, setMasterAlertEnabled] = useState(true);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8 pb-12">
      <div className="flex flex-col gap-1 border-b border-border-subtle pb-6">
        <h1 className="text-3xl font-extrabold text-text-main">Profile & Settings</h1>
        <p className="text-sm font-medium text-text-secondary mt-1">
          Manage your campus ID, notification preferences, and privacy settings.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Sidebar Nav */}
        <div className="w-full lg:w-64 flex flex-col gap-2 shrink-0">
          <div className="bg-white border border-border-subtle rounded-xl p-2 shadow-sm flex flex-col gap-1">
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 bg-surface rounded-lg text-sm font-bold text-text-main">
              <User className="w-4 h-4 text-text-secondary" /> Account Details
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-surface rounded-lg text-sm font-bold text-text-secondary hover:text-text-main transition-colors">
              <ShieldCheck className="w-4 h-4 text-text-secondary" /> Privacy Protocol
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-surface rounded-lg text-sm font-bold text-text-secondary hover:text-text-main transition-colors">
              <Bell className="w-4 h-4 text-text-secondary" /> Notifications
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-surface rounded-lg text-sm font-bold text-text-secondary hover:text-text-main transition-colors">
              <Key className="w-4 h-4 text-text-secondary" /> Security
            </button>
          </div>
          <button className="flex items-center justify-center gap-2 w-full mt-4 text-sm font-bold text-attention hover:text-attention/80 transition-colors border border-border-subtle bg-white py-3 rounded-xl shadow-sm">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 w-full flex flex-col gap-8">
          
          <div className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-primary-soft border border-primary/20 flex items-center justify-center text-primary relative overflow-hidden group">
              <User className="w-10 h-10" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[10px] text-white font-bold uppercase tracking-wider">Edit</span>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h2 className="text-2xl font-extrabold text-text-main">Elena Rostova</h2>
              <p className="text-sm font-medium text-text-secondary">Faculty Staff • Engineering Dept</p>
              <div className="flex items-center gap-2 mt-3 bg-success/10 border border-success/20 px-3 py-1.5 rounded-lg w-fit">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span className="text-[10px] font-bold text-success uppercase tracking-wider">Campus ID Verified</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
            <h3 className="text-lg font-bold text-text-main">Contact Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input type="email" value="erostova@westfield.edu" disabled className="w-full bg-surface border border-border-subtle rounded-lg pl-10 pr-4 py-2.5 text-sm font-medium text-text-main cursor-not-allowed" />
                </div>
                <span className="text-[10px] text-text-secondary">Tied to your campus SSO.</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-text-secondary uppercase">Mobile Phone</label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                  <input type="tel" defaultValue="(555) 019-2831" className="w-full bg-white border border-border-subtle focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors rounded-lg pl-10 pr-4 py-2.5 text-sm font-medium text-text-main" />
                </div>
                <span className="text-[10px] text-text-secondary">Used for SMS recovery alerts.</span>
              </div>
            </div>
            
            <div className="pt-2">
              <button className="bg-primary text-white border border-primary-hover px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-8">
            <div className="flex items-center justify-between border-b border-border-subtle pb-6">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-extrabold text-navy">AI Alert Preferences</h3>
                <span className="text-sm font-medium text-text-secondary">Manage what triggers a push notification.</span>
              </div>
              <button 
                onClick={() => setMasterAlertEnabled(!masterAlertEnabled)}
                className="p-2 text-text-secondary hover:text-navy hover:bg-bg-greige rounded-full transition-colors focus:outline-none"
              >
                {masterAlertEnabled ? <Bell className="w-6 h-6" /> : <BellOff className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                <div className="flex flex-col gap-1.5 pr-4">
                  <span className="text-lg font-bold text-navy">High-Confidence Matches</span>
                  <span className="text-sm font-medium text-text-secondary">Receive immediate alerts when AI finds a match &gt;85% for your lost items.</span>
                </div>
                <button 
                  onClick={() => setNotifyMatches(!notifyMatches)}
                  className={`w-14 h-7 rounded-full transition-colors relative shrink-0 ${notifyMatches ? 'bg-primary' : 'bg-surface border border-border-subtle'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform ${notifyMatches ? 'left-8 shadow-sm' : 'left-1 border border-border-subtle'}`}></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1.5 pr-4">
                  <span className="text-lg font-bold text-navy">Custody State Updates</span>
                  <span className="text-sm font-medium text-text-secondary">Get notified when someone you handed an item to moves it to a new location.</span>
                </div>
                <button 
                  onClick={() => setNotifyUpdates(!notifyUpdates)}
                  className={`w-14 h-7 rounded-full transition-colors relative shrink-0 ${notifyUpdates ? 'bg-primary' : 'bg-surface border border-border-subtle'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform ${notifyUpdates ? 'left-8 shadow-sm' : 'left-1 border border-border-subtle'}`}></div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
