import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Archive, Map, BarChart3, Bell, MessageSquare, Settings, FileSearch, ShieldQuestion, X } from 'lucide-react';

const Sidebar = ({ closeMobileMenu }) => {
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/report-lost', label: 'Report Lost', icon: Search },
    { path: '/report-found', label: 'Report Found', icon: Archive },
    { path: '/cases', label: 'My Cases', icon: FileSearch },
    { path: '/matches', label: 'AI Matches', icon: ShieldQuestion, badge: 1 },
    { path: '/investigation', label: 'AI Investigation', icon: Search },
    { path: '/campus-map', label: 'Campus Map', icon: Map },
    { path: '/insights', label: 'Campus Insights', icon: BarChart3 },
  ];

  const bottomItems = [
    { path: '/notifications', label: 'Notifications', icon: Bell, badge: 2 },
    { path: '/feedback', label: 'Feedback', icon: MessageSquare },
    { path: '/profile', label: 'Profile & Settings', icon: Settings },
  ];

  const renderLink = (item, isBottom = false) => {
    return (
      <NavLink
        key={item.path}
        to={item.path}
        onClick={closeMobileMenu}
        className={({ isActive }) => 
          `flex items-center justify-between px-4 py-3 md:py-2.5 text-sm font-medium rounded-xl md:rounded-lg transition-colors group ${
            isActive 
              ? 'bg-primary text-white shadow-sm' 
              : 'text-[#B8C5D6] hover:bg-navy-light hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${isActive ? 'opacity-100 text-white' : 'opacity-70 group-hover:opacity-100'}`} />
              <span>{item.label}</span>
            </div>
            {item.badge && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white text-primary' : 'bg-ai text-white shadow-sm'}`}>
                {item.badge}
              </span>
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <div className="w-72 md:w-64 border-r border-[#102A4C] bg-[var(--color-navy)] flex flex-col h-full shadow-2xl lg:shadow-none text-[#B8C5D6]">
      {/* Header */}
      <div className="p-6 pb-4 flex justify-between items-center border-b border-[#102A4C]">
        <div>
          <div className="flex items-center gap-2 mb-1 text-white">
            <span className="text-xl text-primary">✦</span>
            <span className="font-bold text-lg tracking-tight">FindBack AI</span>
          </div>
          <div className="text-[10px] font-bold text-[#8FA5C2] uppercase tracking-wider">
            Westfield Campus
          </div>
        </div>
        <button onClick={closeMobileMenu} className="lg:hidden p-2 text-[#8FA5C2] hover:text-white hover:bg-navy-light rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Nav */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1.5">
        {navItems.map(item => renderLink(item))}
      </div>

      {/* Bottom Nav */}
      <div className="p-4 border-t border-[#102A4C] flex flex-col gap-1.5 bg-[var(--color-navy)]/80">
        {bottomItems.map(item => renderLink(item, true))}
      </div>
    </div>
  );
};

export default Sidebar;
