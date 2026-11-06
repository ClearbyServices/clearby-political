'use client';
import { useEffect, useState } from 'react';
import { CONTACT, SERVICE_OPTIONS } from '../app/data';

export default function ModalForm({ open, onClose }) {
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  async function submit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    if (CONTACT.formEndpoint) {
      setStatus('sending');
      try {
        const r = await fetch(CONTACT.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(d)
        });
        setStatus(r.ok ? 'done' : 'error');
      } catch { setStatus('error'); }
    } else {
      const body = Object.entries(d).map(([k, v]) => `${k}: ${v}`).join('\n');
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Campaign enquiry')}&body=${encodeURIComponent(body)}`;
      setStatus('done');
    }
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="mt" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close enquiry form">×</button>
        {status === 'done' ? (
          <div className="done">
            <h2 id="mt">Thanks, we have your enquiry.</h2>
            <p>We will review your requirements and reply with a suggested scope.</p>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <h2 id="mt">Let's discuss your campaign.</h2>
            <div className="grid2">
              <label>Full name<input name="name" required autoComplete="name" /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone<input name="phone" type="tel" required autoComplete="tel" /></label>
              <label>Organisation or candidate profile<input name="organisation" /></label>
            </div>
            <label>Service needed
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </label>
            <label>Requirements, location and timeline<textarea name="requirements" rows="4" required /></label>
            {status === 'error' && <p className="err">Could not send. Please try again or email {CONTACT.email}.</p>}
            <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
          </form>
        )}
      </div>
    </div>
  );
}