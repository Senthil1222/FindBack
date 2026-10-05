import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, User, Menu, Settings, LogOut, Shield, ShieldCheck, Key } from 'lucide-react';

const Topbar = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="h-16 md:h-20 border-b border-navy bg-navy-light flex items-center justify-between px-4 md:px-8 flex-shrink-0 shadow-sm z-30">
      
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 text-[#8FA5C2] hover:text-white hover:bg-navy/50 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex-1 flex items-center max-w-xl">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 md:h-5 md:w-5 text-[#8FA5C2] group-focus-within:text-ai transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 border border-navy rounded-xl leading-5 bg-navy hover:bg-navy/80 focus:bg-navy placeholder-[#8FA5C2]/70 focus:outline-none focus:ring-1 focus:ring-ai focus:border-ai text-sm text-white transition-all shadow-inner"
              placeholder="Search custody ledger..."
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 ml-4">
        <div 
          className="hidden md:flex items-center gap-2 bg-ai/10 border border-ai/20 px-3 py-1.5 rounded-full hover:bg-ai/20 cursor-pointer transition-colors"
          onClick={() => alert("System Status: All systems operational.")}
        >
          <div className="w-2 h-2 rounded-full bg-ai animate-pulse"></div>
          <span className="text-xs font-bold text-ai uppercase tracking-wider">Central Depot Live</span>
        </div>
        
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            className="relative p-2 text-[#8FA5C2] hover:text-white hover:bg-navy/50 rounded-full transition-all"
          >
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 block h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-attention border-2 border-navy-light"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 md:w-80 border border-border-subtle rounded-xl shadow-lg py-2 z-50" style={{ backgroundColor: 'rgba(240, 253, 244, 0.98)', backdropFilter: 'blur(12px)' }}>
              <div className="px-4 py-2 border-b border-border-subtle">
                <h3 className="font-bold text-text-main">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-bg-greige cursor-pointer border-b border-border-subtle last:border-0 transition-colors">
                  <p className="text-sm text-text-main font-medium">New asset found</p>
                  <p className="text-xs text-text-secondary mt-1">Item #4829 has been located in Sector 7G.</p>
                  <p className="text-[10px] text-text-tertiary mt-2">2 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-bg-greige cursor-pointer border-b border-border-subtle last:border-0 transition-colors">
                  <p className="text-sm text-text-main font-medium">System Update</p>
                  <p className="text-xs text-text-secondary mt-1">Custody ledger sync completed successfully.</p>
                  <p className="text-[10px] text-text-tertiary mt-2">1 hour ago</p>
                </div>
              </div>
              <div className="px-4 py-2 border-t border-border-subtle text-center">
                <button className="text-sm text-primary hover:text-primary-hover font-semibold transition-colors">View All Notifications</button>
              </div>
            </div>
          )}
        </div>
        
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            className="flex items-center gap-3 md:pl-6 md:border-l border-navy cursor-pointer group"
          >
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white group-hover:text-ai transition-colors">Elena Rostova</div>
              <div className="text-[10px] font-semibold text-[#8FA5C2] uppercase tracking-wider">Staff / ID: 047120</div>
            </div>
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-navy-light group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <User className="w-5 h-5" />
            </div>
          </div>

          {showProfileMenu && (
            <div className="absolute right-0 mt-3 w-64 z-50 flex flex-col gap-3">
              <div className="bg-white rounded-2xl shadow-lg border border-border-subtle p-2 flex flex-col">
                <div className="px-4 py-3 border-b border-border-subtle sm:hidden mb-1">
                  <div className="text-sm font-bold text-text-main">Elena Rostova</div>
                  <div className="text-xs text-text-secondary">Staff / ID: 047120</div>
                </div>
                <button onClick={() => { setShowProfileMenu(false); navigate('/profile'); }} className="w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-navy hover:bg-bg-greige rounded-xl transition-colors">
                  <User className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
                  Account Details
                </button>
                <button onClick={() => { setShowProfileMenu(false); navigate('/profile'); }} className="w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-[#5c6e8a] hover:bg-bg-greige rounded-xl transition-colors">
                  <ShieldCheck className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
                  Privacy Protocol
                </button>
                <button onClick={() => { setShowProfileMenu(false); navigate('/notifications'); }} className="w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-[#5c6e8a] hover:bg-bg-greige rounded-xl transition-colors">
                  <Bell className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
                  Notifications
                </button>
                <button onClick={() => { setShowProfileMenu(false); navigate('/profile'); }} className="w-full flex items-center gap-4 px-4 py-3.5 text-sm font-bold text-[#5c6e8a] hover:bg-bg-greige rounded-xl transition-colors">
                  <Key className="w-5 h-5 text-text-secondary" strokeWidth={1.5} />
                  Security
                </button>
              </div>
              <button 
                onClick={() => { setShowProfileMenu(false); alert("You have been signed out."); }} 
                className="w-full bg-white rounded-2xl shadow-sm border border-border-subtle flex items-center justify-center gap-3 px-4 py-3.5 text-sm font-bold text-attention hover:bg-attention/5 transition-colors"
              >
                <LogOut className="w-5 h-5" strokeWidth={2} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
