'use client';

import { useState } from "react";

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-sec" id="faq">
      <style>{`
        .faq-sec { padding: 96px 0; background: var(--beige); color: var(--navy); font-family: var(--body); }
        .faq-container { max-width: 820px; margin: 0 auto; padding: 0 24px; }
        
        .faq-label { font-size: 0.75rem; font-weight: 800; color: var(--orange); text-transform: uppercase; letter-spacing: 2px; display: block; text-align: center; margin-bottom: 12px; }
        .faq-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; font-family: var(--display); text-align: center; margin: 0 0 64px 0; }
        
        .faq-list { display: flex; flex-direction: column; gap: 8px; }
        .faq-item { border-bottom: 1px solid #1e223d33; }
        .faq-item:last-child { border-bottom: none; }
        
        .faq-btn { width: 100%; padding: 24px 0; display: flex; justify-content: space-between; align-items: center; background: transparent; border: none; cursor: pointer; text-align: left; transition: 0.3s; }
        .faq-btn:focus-visible { outline: 3px solid var(--orange); outline-offset: 4px; border-radius: 4px; }
        
        .faq-q { font-size: 1.1rem; font-weight: 600; font-family: var(--display); color: var(--navy); transition: 0.3s; padding-right: 24px; }
        .faq-btn:hover .faq-q { color: var(--orange); }
        .faq-btn.open .faq-q { color: var(--orange); }
        
        /* Animated + / - Icon */
        .faq-icon { position: relative; width: 16px; height: 16px; flex-shrink: 0; }
        .faq-icon-h, .faq-icon-v { position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: var(--navy); border-radius: 2px; transition: 0.3s; margin-top: -1px; }
        
        .faq-btn:hover .faq-icon-h, .faq-btn:hover .faq-icon-v { background: var(--orange); }
        .faq-btn.open .faq-icon-h, .faq-btn.open .faq-icon-v { background: var(--orange); }
        
        /* Vertical line rotates to match horizontal line when open (forming a minus) */
        .faq-icon-v { transform: rotate(90deg); }
        .faq-btn.open .faq-icon-v { transform: rotate(0deg); }
        
        /* Smooth Expand/Collapse Animation using CSS Grid */
        .faq-ans-wrapper { display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows 0.4s ease, opacity 0.4s ease; }
        .faq-ans-wrapper.open { grid-template-rows: 1fr; opacity: 1; }
        
        .faq-ans-inner { overflow: hidden; }
        .faq-ans-inner p { padding-bottom: 24px; margin: 0; font-size: 1rem; opacity: 0.9; max-width: 65ch; line-height: 1.6; padding-right: 32px; }
      `}</style>

      <div className="faq-container">
        <span className="faq-label">FAQ</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        
        <div className="faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            // Since your data.js FAQ array looks like [["Question", "Answer"], ...], 
            // faq[0] is the Question and faq[1] is the Answer.
            const question = faq[0];
            const answer = faq[1];

            return (
              <div key={idx} className="faq-item">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className={`faq-btn ${isOpen ? "open" : ""}`}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q">{question}</span>
                  
                  <div className="faq-icon">
                    <span className="faq-icon-h"></span>
                    <span className="faq-icon-v"></span>
                  </div>
                </button>
                
                <div className={`faq-ans-wrapper ${isOpen ? "open" : ""}`}>
                  <div className="faq-ans-inner">
                    <p>{answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}