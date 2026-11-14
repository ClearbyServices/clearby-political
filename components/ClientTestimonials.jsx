'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ClientTestimonials = ({ testimonials }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--beige)', overflow: 'hidden' }}>
      
      <div className="wrap" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', color: 'var(--navy)', fontFamily: 'var(--display)', margin: '0 0 16px 0' }}>
          Our Clients
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--navy)', opacity: 0.8, maxWidth: '60ch', margin: '0 auto' }}>
          See how our digital strategy, branding, and execution support successful campaigns.
        </p>
      </div>

      {/* PERFECT CENTERING: Using text-align center on wrapper and inline-flex on the track */}
      <div style={{ width: '100%', overflowX: 'auto', paddingBottom: '32px', scrollBehavior: 'smooth', textAlign: 'center' }} className="no-scrollbar">
        <div style={{ display: 'inline-flex', gap: '20px', alignItems: 'center', padding: '0 24px', minHeight: '480px', margin: '0 auto', textAlign: 'left' }}>
          {testimonials.map((testimonial, index) => {
            const isActive = active === index;
            return (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  /* Adjusted widths: Fits ~5 cards easily on a 1200px desktop screen */
                  width: isActive ? 'clamp(280px, 40vw, 340px)' : 'clamp(140px, 15vw, 180px)',
                  height: isActive ? 'clamp(400px, 65vh, 480px)' : 'clamp(340px, 55vh, 400px)',
                  opacity: isActive ? 1 : 0.5,
                  boxShadow: isActive ? '0 24px 48px rgba(30, 34, 61, 0.2)' : 'none',
                  border: isActive ? '2px solid var(--orange)' : '1px solid rgba(30,34,61,0.1)'
                }}
                layout
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  style={{ position: 'absolute', inset: 0, height: '100%', width: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(30,34,61,0.95), rgba(30,34,61,0.3), transparent)' }} />

                <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', color: 'var(--white)', marginBottom: '16px', lineHeight: '1.6' }}>
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <h3 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--white)', fontFamily: 'var(--display)', margin: '0 0 4px 0' }}>{testimonial.name}</h3>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--orange)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{testimonial.role}</p>
                    </motion.div>
                  ) : (
                    <div>
                      <h3 style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.9rem', margin: '0 0 4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{testimonial.name}</h3>
                      <p style={{ margin: 0, fontSize: '0.7rem', color: 'var(--beige)', opacity: 0.8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{testimonial.role}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '16px' }}>
        <button
          onClick={handlePrev}
          style={{ height: '48px', width: '48px', borderRadius: '50%', backgroundColor: 'var(--navy)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--beige)', cursor: 'pointer', boxShadow: '0 4px 12px rgba(30,34,61,0.2)', transition: '0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--orange)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--navy)'}
          aria-label="Previous testimonial"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          style={{ height: '48px', width: '48px', borderRadius: '50%', backgroundColor: 'var(--navy)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--beige)', cursor: 'pointer', boxShadow: '0 4px 12px rgba(30,34,61,0.2)', transition: '0.2s' }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--orange)'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--navy)'}
          aria-label="Next testimonial"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};