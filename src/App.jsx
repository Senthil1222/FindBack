import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import AIAssistantWidget from './components/AIAssistantWidget';
import Home from './pages/Home';
import ReportLost from './pages/ReportLost';
import ReportFound from './pages/ReportFound';
import Cases from './pages/Cases';
import Matches from './pages/Matches';
import MatchDetails from './pages/MatchDetails';
import Investigation from './pages/Investigation';
import Verification from './pages/Verification';
import Notifications from './pages/Notifications';
import CampusMap from './pages/CampusMap';
import Insights from './pages/Insights';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-bg-greige text-text-main font-sans selection:bg-primary/20 selection:text-primary">
        
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )}

        <div className={`fixed inset-y-0 left-0 z-50 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <Sidebar closeMobileMenu={() => setMobileMenuOpen(false)} />
        </div>

        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Topbar onMenuClick={() => setMobileMenuOpen(true)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-8 relative w-full pb-24 md:pb-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/report-lost" element={<ReportLost />} />
              <Route path="/report-found" element={<ReportFound />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/matches/:id" element={<MatchDetails />} />
              <Route path="/investigation" element={<Investigation />} />
              <Route path="/verification/:id" element={<Verification />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/campus-map" element={<CampusMap />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<div className="p-8 text-center bg-white rounded-2xl shadow-sm border border-border-subtle mt-10 max-w-md mx-auto flex flex-col items-center justify-center min-h-[200px]"><div className="text-4xl mb-4">🚧</div><h2 className="text-xl font-bold">Work in progress...</h2><p className="text-text-secondary text-sm mt-2">This feature is currently under development.</p></div>} />
            </Routes>
          </main>
        </div>
        <AIAssistantWidget />
      </div>
    </Router>
  );
}

export default App;
