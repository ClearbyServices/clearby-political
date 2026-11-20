'use client';

import { useState } from "react";
import { ChevronDown, Menu, X, PhoneCall, ArrowRight, Megaphone, MonitorSmartphone, PenTool, CheckCircle2, ExternalLink } from "lucide-react";
import { CONTACT, NAV, SERVICES } from '../app/data';

export default function Header({ onContactClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const categorizedServices = {
    "Strategy & Digital": [SERVICES[0], SERVICES[1], SERVICES[3], SERVICES[4]],
    "Creative & Production": [SERVICES[2], SERVICES[5], SERVICES[6]]
  };
  const categories = Object.keys(categorizedServices);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const navItems = [
    ...NAV.filter(([label]) => !['Services', 'Campaigns', 'Process'].includes(label)),
  ];

  // Insert 'Clients' right after 'About' (or at the start if 'About' isn't found)
  const aboutIndex = navItems.findIndex(([label]) => label === 'About');
  navItems.splice(aboutIndex !== -1 ? aboutIndex + 1 : 0, 0, ['Clients', '#clients']);

  const getCategoryIcon = (category) => {
    if (category.includes("Strategy")) return <MonitorSmartphone size={16} />;
    return <PenTool size={16} />;
  };

  return (
    <header className="custom-header">
      {/* MAIN NAVIGATION BAR */}
      <div className="main-nav">
        <a href="#top" className="logo-box">
          <img src="/lightmode-logo cl.png" alt="Clearby Political Logo" className="logo-img" />
          <div className="logo-text">
            <span className="title">Clearby <span>Political</span></span>
            <span className="sub">Digital & Campaign Agency</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          <div className="mega-trigger">
            <a href="#services" className="nav-link">
              Services <ChevronDown size={14} />
            </a>
            
            <div className="mega-dropdown">
              <div className="mega-col-1">
                <h3>Campaign Services</h3>
                <div className="mega-subtitle">Integrated political communication</div>
                {categories.map((cat, idx) => (
                  <button key={idx} onMouseEnter={() => setActiveCategory(cat)} className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}>
                    {getCategoryIcon(cat)} {cat}
                  </button>
                ))}
              </div>

              <div className="mega-col-2">
                <div className="mega-subtitle" style={{ color: 'var(--navy)', opacity: 0.5, marginBottom: '24px' }}>SOLUTIONS</div>
                <div className="sol-grid">
                  {categorizedServices[activeCategory].map((srv, idx) => {
                    const cleanTitle = srv[0].replace(/^\d+\.\s*/, '');
                    return (
                      <a key={idx} href="#services" className="sol-item">
                        <h4>{cleanTitle}</h4>
                        <p>{srv[1]}</p>
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="mega-col-3">
                <div>
                  <h3>Why Clearby?</h3>
                  <div className="mega-subtitle">Consistent and clear messaging.</div>
                  <div className="feature-item">
                    <CheckCircle2 size={20} />
                    <div>
                      <h4>Integrated Execution</h4>
                      <p>Digital, creative, and tech handled under one roof.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <Megaphone size={20} />
                    <div>
                      <h4>Responsible Campaigning</h4>
                      <p>Adherence to ECI guidelines and platform policies.</p>
                    </div>
                  </div>
                </div>
                <button onClick={onContactClick} className="cta-btn">
                  Start a Conversation <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        {/* HEADER ACTIONS: Get in touch FIRST, then animated Clearby Services */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={onContactClick} className="main-btn">Get in touch</button>

          <a 
            href="https://clearbyservices.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="main-btn animated-services-btn"
            style={{ 
              background: 'transparent', 
              color: 'var(--navy)', 
              border: '2px solid var(--navy)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none'
            }}
          >
            Clearby Services <ExternalLink size={14} />
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-toggle" aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => setOpenSection(openSection === "services" ? null : "services")} className="mob-btn">
            Our Services <ChevronDown size={16} style={{ transform: openSection === "services" ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
          </button>

          {openSection === "services" && (
            <div className="mob-sub">
              {categories.map((cat, gIdx) => (
                <div key={gIdx}>
                  <div className="mob-cat-title">{cat}</div>
                  {categorizedServices[cat].map((srv, sIdx) => {
                    const cleanTitle = srv[0].replace(/^\d+\.\s*/, '');
                    return (
                      <a key={sIdx} href="#services" onClick={() => setMobileMenuOpen(false)} className="mob-sol">
                        <span>{cleanTitle}</span>
                        <span>{srv[1].substring(0, 60)}...</span>
                      </a>
                    )
                  })}
                </div>
              ))}
            </div>
          )}

          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="mob-link">{label}</a>
          ))}

          <div className="mob-actions">
            <button onClick={() => { setMobileMenuOpen(false); onContactClick(); }} className="cta-btn" style={{ background: 'var(--orange)', color: 'var(--navy)' }}>
              Get in touch <ArrowRight size={16} />
            </button>
            <a 
              href="https://clearbyservices.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn animated-services-btn" 
              style={{ background: 'transparent', color: 'var(--navy)', border: '2px solid var(--navy)' }}
            >
              Clearby Services <ExternalLink size={16} />
            </a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="cta-btn" style={{ background: 'var(--beige-2)', color: 'var(--navy)', border: '1px solid #1e223d22' }}>
              <PhoneCall size={16} color="var(--orange)" /> Call: {CONTACT.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}