'use client';
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ClientTestimonials = ({ testimonials = [] }) => {
  const [active, setActive] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = cardRefs.current[active];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  const handleNext = () => {
    if (!testimonials.length) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (!testimonials.length) return;
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleImageError = (index) => {
    setFailedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="clients" className="clients-showcase">
      <div className="wrap clients-header">
        <h2>Our Clients</h2>
        <p>
          See how our digital strategy, branding, and execution support successful campaigns.
        </p>
      </div>

      <div className="clients-scroll-wrap no-scrollbar">
        <div className="clients-track">
          {testimonials.map((testimonial, index) => {
            const isActive = active === index;
            const hasBrokenImg = Boolean(failedImages[index]);

            return (
              <motion.div
                key={`${testimonial.name}-${index}`}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                onClick={() => setActive(index)}
                className={`client-slide-card ${isActive ? "is-active" : ""}`}
                layout
              >
                <div className="client-portrait-box">
                  {!hasBrokenImg && testimonial.src ? (
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="client-portrait-fallback" aria-hidden="true">
                      <span>{testimonial.name?.charAt(0) || "C"}</span>
                    </div>
                  )}
                </div>

                <div className="client-meta">
                  <h3>{testimonial.name}</h3>
                  {testimonial.role && <p>{testimonial.role}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="clients-nav">
        <button
          type="button"
          onClick={handlePrev}
          className="clients-nav-btn"
          aria-label="Previous client"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="clients-nav-btn"
          aria-label="Next client"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};