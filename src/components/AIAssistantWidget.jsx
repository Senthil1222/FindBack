import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, MessageSquare } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Context-aware prompts
  let contextPrompt = "How can I help you find something today?";
  if (location.pathname === '/report-lost') {
    contextPrompt = "Need help describing your lost item? I can extract key features for you.";
  } else if (location.pathname === '/cases') {
    contextPrompt = "Want me to summarize the status of your active cases?";
  } else if (location.pathname.includes('/matches')) {
    contextPrompt = "I can explain the neural matching score if you have questions.";
  }

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      <div 
        className={`bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-2xl w-80 md:w-96 mb-4 overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        <div className="bg-gradient-to-r from-primary to-primary-hover p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold">FindBack AI</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-5 h-72 flex flex-col gap-4 overflow-y-auto bg-surface/50">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-ai-soft flex items-center justify-center shrink-0 border border-ai/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-ai" />
            </div>
            <div className="bg-white border border-border-subtle p-3 rounded-2xl rounded-tl-sm text-sm text-text-main shadow-sm">
              {contextPrompt}
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-auto">
            <button className="text-xs font-semibold text-text-main bg-white border border-border-subtle p-2.5 rounded-xl hover:border-primary/50 hover:text-primary transition-all text-left shadow-sm flex items-center justify-between group">
              Explain the AI Match Score <ChevronRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-primary transition-colors"/>
            </button>
            <button className="text-xs font-semibold text-text-main bg-white border border-border-subtle p-2.5 rounded-xl hover:border-primary/50 hover:text-primary transition-all text-left shadow-sm flex items-center justify-between group">
              How does verification work? <ChevronRight className="w-3.5 h-3.5 text-text-secondary group-hover:text-primary transition-colors"/>
            </button>
          </div>
        </div>
        
        <div className="p-3 bg-white border-t border-border-subtle flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            className="flex-1 bg-surface border border-border-subtle rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-hover shadow-sm transition-colors">
            <MessageSquare className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Button - Circular Logo Only */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-primary to-[#0F766E] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative border-2 border-white/20"
      >
        <Sparkles className="w-6 h-6" />
        
        {/* Pulsing indicator when closed */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-attention opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-attention border-2 border-primary"></span>
          </span>
        )}
      </button>

    </div>
  );
};

export default AIAssistantWidget;
