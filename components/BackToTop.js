'use client';

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 90;
          padding: 12px;
          border-radius: 14px;
          background-color: var(--navy);
          color: var(--beige);
          border: 2px solid var(--orange); /* Added 2px stroke here */
          box-shadow: 0 10px 25px rgba(30, 34, 61, 0.25);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .back-to-top:hover {
          background-color: var(--orange);
          color: var(--white);
          border-color: #ff6a3a; /* Lightens the stroke on hover to match the background */
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(245, 79, 27, 0.3);
        }
        
        .back-to-top svg {
          transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .back-to-top:hover svg {
          transform: scale(1.25);
        }
        
        @media (max-width: 860px) {
          .back-to-top {
            bottom: 16px;
            right: 16px;
            padding: 10px;
          }
        }
      `}</style>
      
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="back-to-top"
      >
        <ArrowUp size={22} strokeWidth={2.5} />
      </button>
    </>
  );
}