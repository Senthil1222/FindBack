import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6 md:gap-8 pb-12 mt-4">
      <div className="flex flex-col gap-1 border-b border-border-subtle pb-6 text-center items-center">
        <div className="w-12 h-12 rounded-full bg-primary-soft text-primary flex items-center justify-center mb-2">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-extrabold text-text-main">Provide Feedback</h1>
        <p className="text-sm font-medium text-text-secondary mt-1">
          Help us improve the FindBack AI platform. Your feedback goes directly to our campus development team.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white border border-border-subtle rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-main">What kind of feedback do you have?</label>
            <select className="border border-border-subtle rounded-xl px-4 py-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-main transition-colors">
              <option>General Suggestion</option>
              <option>Report a Bug</option>
              <option>Praise for FindBack AI</option>
              <option>Campus Map Issue</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-text-main">Your Message</label>
            <textarea 
              required
              rows={5}
              placeholder="Tell us what's on your mind..."
              className="border border-border-subtle rounded-xl px-4 py-3 bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-main transition-colors resize-none"
            ></textarea>
          </div>

          <button type="submit" className="bg-primary text-white py-3.5 rounded-xl text-sm font-bold shadow-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 mt-2">
            Submit Feedback <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="bg-success/10 border border-success/20 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center text-white shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-success">Thank You!</h2>
            <p className="text-sm font-medium text-success/80 mt-2 max-w-sm">
              Your feedback has been submitted successfully. We appreciate your help in making our campus better.
            </p>
          </div>
          <button onClick={() => setSubmitted(false)} className="mt-4 bg-white border border-success/30 text-success font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-success/5 transition-colors">
            Submit Another
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
