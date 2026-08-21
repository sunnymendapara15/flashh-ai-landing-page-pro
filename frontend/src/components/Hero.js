import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Hero() {
  const [badgeRef, badgeIn] = useReveal();
  const [hRef, hIn] = useReveal();
  const [subRef, subIn] = useReveal();
  const [ctaRef, ctaIn] = useReveal();
  const [visRef, visIn] = useReveal({ threshold: 0.05 });

  return (
    <section className="hero" id="top">
      <div className="blob blob-indigo animate-float" style={{ width: 460, height: 460, top: -120, left: -120 }} />
      <div className="blob blob-violet animate-float-2" style={{ width: 420, height: 420, top: 60, right: -140 }} />
      <div className="blob blob-cyan animate-float" style={{ width: 340, height: 340, bottom: -80, left: '30%' }} />

      <div className="container hero-inner">
        <div ref={badgeRef} className={`reveal ${badgeIn ? 'is-visible' : ''}`}>
          <span className="hero-badge">
            <span className="dot" aria-hidden="true"></span>
            Now in public beta — no credit card required
          </span>
        </div>

        <h1 ref={hRef} className={`reveal ${hIn ? 'is-visible' : ''}`}>
          Describe your idea.
          <br />
          <span className="gradient-text">Flashh builds the workflow.</span>
        </h1>

        <p ref={subRef} className={`hero-sub reveal ${subIn ? 'is-visible' : ''}`}>
          Turn a simple text conversation into real, working automations. Connect your tools,
          describe what you want, and Flashh designs, builds, and runs it — no code, no dashboards,
          no learning curve.
        </p>

        <div ref={ctaRef} className={`hero-actions reveal ${ctaIn ? 'is-visible' : ''}`}>
          <a href="#cta" className="btn btn-primary btn-lg">
            Start building free
            <span aria-hidden="true">→</span>
          </a>
          <a href="#showcase" className="btn btn-ghost btn-lg">See it in action</a>
        </div>

        <p className="hero-note">Free forever plan · Set up in under 2 minutes</p>

        <div ref={visRef} className={`hero-visual reveal reveal-scale ${visIn ? 'is-visible' : ''}`}>
          <div className="glass" style={{ padding: 22, borderRadius: 22 }}>
            <div className="hero-glow" aria-hidden="true" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ textAlign: 'left' }}>
                <div className="chat-bubble chat-user">Every Monday, summarize new signups from our form and post them to #growth.</div>
                <div className="chat-bubble chat-ai">
                  Got it — I'll connect your form to Slack and schedule a weekly summary every Monday at 9am.
                </div>
                <div className="chat-ai chat-bubble" style={{ display: 'inline-block' }}>
                  <span className="typing"><span></span><span></span><span></span></span>
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div className="workflow-node"><span className="n-icon">⛳</span><span className="n-label">Trigger · Form submission</span><span className="n-status">✓</span></div>
                <div className="workflow-node"><span className="n-icon">✦</span><span className="n-label">AI · Summarize &amp; format</span><span className="n-status">✓</span></div>
                <div className="workflow-node"><span className="n-icon">📣</span><span className="n-label">Action · Post to #growth</span><span className="n-status">✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
