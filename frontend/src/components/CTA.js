import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

export default function CTA() {
  const [ref, inView] = useReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="section-tight" id="cta">
      <div className="container">
        <div ref={ref} className={`cta-card reveal reveal-scale ${inView ? 'is-visible' : ''}`}>
          <div className="blob blob-indigo animate-float" style={{ width: 300, height: 300, top: -120, left: -80 }} />
          <div className="blob blob-cyan animate-float-2" style={{ width: 300, height: 300, bottom: -120, right: -80 }} />
          <h2>Your next idea is one<br />sentence away.</h2>
          <p>Join thousands of teams building faster with Flashh. Free to start, no credit card required.</p>

          {submitted ? (
            <p className="hero-note" style={{ fontSize: '1.05rem', color: '#34d399' }} role="status">
              You're on the list — check your inbox for next steps. ⚡
            </p>
          ) : (
            <form className="cta-email" onSubmit={onSubmit}>
              <label htmlFor="cta-email" className="sr-only">Email address</label>
              <input
                id="cta-email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Get started free</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
