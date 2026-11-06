'use client';

import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT, NAV, SERVICE_OPTIONS } from '../app/data';

export default function Footer() {
  const midPoint = Math.ceil(SERVICE_OPTIONS.length / 2);
  const columnThreeServices = SERVICE_OPTIONS.slice(0, midPoint);
  const columnFourServices = SERVICE_OPTIONS.slice(midPoint);

  const pagesAndLegal = [
    { name: "Home", href: "#top" },
    ...NAV.map(([name, href]) => ({ name, href })),
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="custom-footer">
      <style>{`
        .custom-footer { background: var(--navy); color: var(--beige); padding: 100px 0 40px; position: relative; overflow: hidden; border-top: 1px solid var(--navy-2); font-family: var(--body); }
        .footer-watermark { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); font-size: 14vw; font-weight: 900; opacity: 0.03; text-transform: uppercase; pointer-events: none; }
        .footer-container { max-width: 1160px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 10; }
        .footer-grid { display: grid; grid-template-columns: 1fr; gap: 48px; margin-bottom: 80px; }
        @media (min-width: 860px) { .footer-grid { grid-template-columns: 1.5fr 1fr 1.2fr 1.2fr; gap: 32px; } }
        .footer-col { display: flex; flex-direction: column; gap: 24px; }
        .footer-logo { font-size: 1.5rem; font-weight: 800; font-family: var(--display); text-decoration: none; color: var(--beige); }
        .footer-logo span { color: var(--orange); }
        .footer-contact { display: flex; flex-direction: column; gap: 16px; font-size: 0.9rem; opacity: 0.9; }
        .contact-item { display: flex; align-items: flex-start; gap: 12px; text-decoration: none; color: inherit; transition: 0.2s; }
        .contact-item:hover { color: var(--orange); }
        .contact-item svg { color: var(--orange); margin-top: 2px; }
        .footer-socials { display: flex; gap: 16px; }
        .footer-socials a { color: var(--beige); transition: 0.2s; }
        .footer-socials a:hover { color: var(--orange); }
        .footer-col h3 { font-size: 1rem; font-family: var(--display); margin: 0 0 16px 0; letter-spacing: 0.5px; }
        .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
        .footer-links a { text-decoration: none; color: var(--beige); opacity: 0.8; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
        .footer-links a:hover { opacity: 1; color: var(--orange); }
        .footer-bottom { border-top: 1px solid var(--navy-2); padding-top: 32px; display: flex; flex-direction: column; gap: 8px; justify-content: space-between; align-items: center; font-size: 0.85rem; opacity: 0.7; text-align: center; }
        @media (min-width: 600px) { .footer-bottom { flex-direction: row; text-align: left; } }
      `}</style>

      <div className="footer-watermark">Clearby</div>

      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-col">
            <a href="#top" className="footer-logo">
              Clearby <span>Political</span>
            </a>
            <div className="footer-contact">
              <a href={`mailto:${CONTACT.email}`} className="contact-item">
                <Mail size={18} /> {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="contact-item">
                <Phone size={18} /> {CONTACT.phone}
              </a>
              <div className="contact-item">
                <MapPin size={18} /> <span>{CONTACT.location}</span>
              </div>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
              <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Pages & Legal</h3>
            <ul className="footer-links">
              {pagesAndLegal.map((item, idx) => (
                <li key={idx}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Strategy & Digital</h3>
            <ul className="footer-links">
              {columnThreeServices.map((name, idx) => (
                <li key={idx}><a href="#services">{name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Media & Print</h3>
            <ul className="footer-links">
              {columnFourServices.map((name, idx) => (
                <li key={idx}><a href="#services">{name}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© Copyright Clearby Political {new Date().getFullYear()}. All rights reserved.</p>
          <p>Digital Presence. Creative Communication. Campaign Support.</p>
        </div>
      </div>
    </footer>
  );
}