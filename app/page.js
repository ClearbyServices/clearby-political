'use client';
import { useState } from 'react';
import { ArrowRight, Check } from "lucide-react";
import { SERVICES, CAMPAIGNS, STEPS, WHY, PRINCIPLES, FAQ } from '../app/data';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ModalForm from '../components/ModalForm';
import FaqAccordion from '../components/FaqAccordion';
import BackToTop from '../components/BackToTop';
import { ClientTestimonials } from '../components/ClientTestimonials';

export default function Home() {
  const [open, setOpen] = useState(false);
  
  const showModal = () => setOpen(true);
  const hideModal = () => setOpen(false);

  const clientReviews = [
    {
      quote: "Clearby Political streamlined our entire digital presence, ensuring consistent branding across our website and social media channels.",
      name: "Adv. Rajesh Patil",
      role: "Candidate, State Legislative Assembly",
      src: "/lightmode-logo cl.png",
    },
    {
      quote: "The team managed our daily content schedules and promotional materials seamlessly throughout the campaign window.",
      name: "Suresh Deshmukh",
      role: "Campaign Coordinator",
      src: "/lightmode-logo cl.png",
    },
    {
      quote: "From candidate branding to targeted digital advertising, their integrated approach gave us a massive edge on ground communication.",
      name: "Vikram Jadhav",
      role: "Party Unit President",
      src: "/lightmode-logo cl.png",
    },
  ];

  // NEW: 20+ Political Client Roster for Animated Marquee
  const leadersList = [
    { name: "Rahul Deshmukh", role: "Member of Legislative Assembly", img: "/lightmode-logo cl.png" },
    { name: "Priya Sharma", role: "Zila Parishad Member", img: "/lightmode-logo cl.png" },
    { name: "Vikram Jadhav", role: "Party Unit President", img: "/lightmode-logo cl.png" },
    { name: "Sanjay Patil", role: "Member of Parliament", img: "/lightmode-logo cl.png" },
    { name: "Anita Chavan", role: "Mayor", img: "/lightmode-logo cl.png" },
    { name: "Ramesh Pawar", role: "Corporator", img: "/lightmode-logo cl.png" },
    { name: "Suresh Deshmukh", role: "Campaign Coordinator", img: "/lightmode-logo cl.png" },
    { name: "Adv. Rajesh Patil", role: "Candidate, State Assembly", img: "/lightmode-logo cl.png" },
    { name: "Kiran Gokhale", role: "District President", img: "/lightmode-logo cl.png" },
    { name: "Nitin Kadam", role: "City Vice President", img: "/lightmode-logo cl.png" },
    { name: "Meena Thorat", role: "Panchayat Samiti Member", img: "/lightmode-logo cl.png" },
    { name: "Vijay Shinde", role: "Youth Wing Leader", img: "/lightmode-logo cl.png" },
    { name: "Sunil Munde", role: "Former MLA", img: "/lightmode-logo cl.png" },
    { name: "Deepak Joshi", role: "State Secretary", img: "/lightmode-logo cl.png" },
    { name: "Arun Kulkarni", role: "Spokesperson", img: "/lightmode-logo cl.png" },
    { name: "Pooja Wagh", role: "Women's Wing President", img: "/lightmode-logo cl.png" },
    { name: "Mahesh Bhosale", role: "Taluka President", img: "/lightmode-logo cl.png" },
    { name: "Ganesh Kale", role: "Sarpanch", img: "/lightmode-logo cl.png" },
    { name: "Santosh Mane", role: "Candidate, Lok Sabha", img: "/lightmode-logo cl.png" },
    { name: "Amol Jadhav", role: "General Secretary", img: "/lightmode-logo cl.png" },
    { name: "Sneha Desai", role: "Corporator", img: "/lightmode-logo cl.png" }
  ];

  return (
    <>
      <Header onContactClick={showModal} />

      <main id="top">
        
        {/* --- HERO SECTION --- */}
        <section className="hero-modern">
          <div className="wrap hero-grid">
            <div>
              <span className="hero-tag">Political Digital Marketing Agency in India</span>
              <h1>Political Campaign Services in India</h1>
              <p className="hero-subtitle">Build a Stronger Political Presence. Online and Offline.</p>
              <p className="lead">Clearby Political helps leaders, candidates, and parties communicate with voters through digital strategy, social media management, campaign websites, video production, advertising, and print, all managed under one roof by a single team.</p>
              <div className="hero-actions">
                <button className="btn-primary" onClick={showModal}>
                  Discuss Your Campaign <ArrowRight size={18} strokeWidth={2.5} />
                </button>
                <a className="btn-secondary" href="#services">View Our Services</a>
              </div>
              <div className="hero-trust-line">
                <span>· Independent candidates &nbsp;·&nbsp; Political leaders &nbsp;·&nbsp; Parties &nbsp;·&nbsp; Campaign teams</span>
              </div>
            </div>

            {/* Simple Static PNG Image Container (No Animation or Tilt) */}
            <div className="hero-static-card">
              <img 
                src="/hero.png" 
                alt="Political Campaign Image" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
              />
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="about-modern">
          <div className="wrap">
            <div className="about-left">
              <h2>About <span>Clearby</span> Political</h2>
              <div className="about-visual">
                <div className="visual-content">
                  <h3>Integrated<br/>Campaign<br/>Intelligence</h3>
                  <p>Digital • Creative • Tech</p>
                </div>
              </div>
            </div>
            <div className="about-right">
              <p className="about-lead">
                Clearby Political is a specialised political marketing and communication brand focused on digital presence, creative communication, branding, and technology solutions for political leaders, candidates, political parties, and campaign teams.
              </p>
              <div className="about-card">
                <p><strong>Consistency & Clarity</strong><br/>We understand that political communication needs consistency, clarity, and careful planning. A candidate's website, social media pages, campaign videos, advertisements, and printed materials should communicate a recognisable identity rather than operate as disconnected promotional activities.</p>
              </div>
              <div className="about-card">
                <p><strong>Our Approach</strong><br/>We combine marketing strategy with creative execution and digital technology. We work to understand your objectives, communication priorities, target platforms, campaign timeline, and available resources before recommending suitable services.</p>
              </div>
              <div className="about-card">
                <p><strong>Backed by Clearby Services</strong><br/>As an extension of the digital marketing, design, and technology capabilities associated with Clearby Services, we bring high-level enterprise capabilities directly into the political communication space.</p>
                <p>Our objective is straightforward: to help political organisations build a professional digital presence, communicate information clearly, and manage their campaign-related creative and digital requirements through a coordinated approach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section id="services" className="services-modern">
          <div className="wrap">
            <h2>Our Political Digital Marketing &amp; Campaign Services</h2>
            <div className="svc-grid">
              {SERVICES.map(([t, d, list]) => {
                const cleanTitle = t.replace(/^\d+\.\s*/, '');
                return (
                  <article className="svc-card" key={t}>
                    <h3>{cleanTitle}</h3>
                    <p>{d}</p>
                    <ul>{list.map((i) => <li key={i}>{i}</li>)}</ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- CAMPAIGNS SECTION --- */}
        <section id="campaigns" className="campaigns-modern">
          <div className="wrap">
            <h2>Political Campaigns We Support</h2>
            <div className="campaign-grid">
              {CAMPAIGNS.map(([t, d]) => (
                <div className="campaign-card" key={t}>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section id="process" className="process-modern">
          <div className="wrap">
            <h2>From Campaign Briefing to Execution</h2>
            <div className="process-timeline">
              {STEPS.map(([t, d]) => {
                const cleanTitle = t.replace(/^Step \d+:\s*/, '');
                return (
                  <div className="process-step" key={t}>
                    <div className="step-indicator"></div>
                    <div className="step-content">
                      <h3>{cleanTitle}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="why-modern">
          <div className="wrap">
            <div className="split-header">
              <h2>Why Choose Clearby Political?</h2>
            </div>
            <dl className="why-grid">
              {WHY.map(([t, d]) => (
                <div className="why-card" key={t}>
                  <dt>{t}</dt>
                  <dd>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* --- RESPONSIBLE COMMUNICATION SECTION --- */}
        <section className="resp-modern">
          <div className="wrap resp-grid">
            <div className="resp-left">
              <h2>Responsible Political Communication & Advertising</h2>
              <p>Political communication requires attention to accuracy, transparency, permissions, and applicable regulations. Clearby Political aims to follow responsible practices while planning and executing digital and creative activities. Campaign advertising and communication must be assessed against the applicable Election Commission of India requirements, Model Code of Conduct, Media Certification and Monitoring Committee requirements where applicable, and advertising platform policies.</p>
            </div>
            <ul className="resp-list">
              {PRINCIPLES.map((p, idx) => (
                <li className="resp-item" key={idx}>
                  <div className="resp-icon"><Check size={18} strokeWidth={3} /></div>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- NEW: INFINITE CLIENT MARQUEE --- */}
        <section className="client-marquee-sec">
          <div className="wrap">
            <h2 className="marquee-title">Trusted by 20+ Political Leaders</h2>
          </div>
          <div className="marquee-container">
            <div className="marquee-track">
              {/* Render the list twice to create a seamless infinite scroll loop */}
              {[...leadersList, ...leadersList].map((client, idx) => (
                <div className="client-badge" key={idx}>
                  <img src={client.img} alt={client.name} loading="lazy" />
                  <div>
                    <h4>{client.name}</h4>
                    <p>{client.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CLIENT TESTIMONIALS PHOTO CAROUSEL --- */}
        <ClientTestimonials testimonials={clientReviews} />

        {/* --- FAQ SECTION --- */}
        <FaqAccordion faqs={FAQ} />

        {/* --- MODERN CTA SECTION --- */}
        <section className="cta-modern">
          <div className="cta-content">
            <h2>Let's Discuss Your Political Campaign Requirements</h2>
            <p>A professional political presence needs consistent communication, the right digital platforms, recognisable branding, and well-planned creative execution. Tell us about your campaign, your objectives, and the services you are looking for.</p>
            <button className="btn-interactive" onClick={showModal}>
              Start a conversation <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </section>

      </main>

      <Footer />
      <ModalForm open={open} onClose={hideModal} />
      <BackToTop />
    </>
  );
}