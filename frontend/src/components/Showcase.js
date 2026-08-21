import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Showcase() {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  return (
    <section className="section showcase" id="showcase">
      <div className="blob blob-violet animate-float-2" style={{ width: 380, height: 380, top: 60, left: -140 }} />
      <div className="container center">
        <span className="eyebrow">Product showcase</span>
        <h2 className="h2">From a sentence to a <span className="gradient-text">live workflow</span></h2>
        <p className="lede">
          Watch what happens when a non-technical teammate describes an idea. Flashh handles the
          wiring, the logic, and the execution.
        </p>

        <div ref={ref} className={`showcase-frame glass reveal reveal-scale ${inView ? 'is-visible' : ''}`}>
          <div className="showcase-window">
            <div className="showcase-pane">
              <p className="pane-title">Your conversation</p>
              <div className="chat-bubble chat-user">
                When a new lead comes in from our site, add them to our CRM and notify the sales team on Slack.
              </div>
              <div className="chat-bubble chat-ai">
                Easy. I'll set up a workflow that listens for new form submissions, creates a CRM
                record, enriches it with company info, then pings #sales with a summary. Want me to
                add an email follow-up?
              </div>
              <div className="chat-bubble chat-user">Yes, and mark the lead as hot if they're from a target account.</div>
              <div className="chat-bubble chat-ai">
                <span className="typing"><span></span><span></span><span></span></span>
              </div>
            </div>

            <div className="showcase-pane">
              <p className="pane-title">Flashh builds</p>
              <div className="workflow-node"><span className="n-icon">⛳</span><span className="n-label">Trigger · New form submission</span><span className="n-status">✓</span></div>
              <div className="workflow-node"><span className="n-icon">🧾</span><span className="n-label">Action · Create CRM record</span><span className="n-status">✓</span></div>
              <div className="workflow-node"><span className="n-icon">✦</span><span className="n-label">AI · Enrich with company data</span><span className="n-status">✓</span></div>
              <div className="workflow-node"><span className="n-icon">🔀</span><span className="n-label">Logic · Target account?</span><span className="n-status">✓</span></div>
              <div className="workflow-node"><span className="n-icon">📣</span><span className="n-label">Action · Notify #sales on Slack</span><span className="n-status">✓</span></div>
              <div className="workflow-node"><span className="n-icon">✉️</span><span className="n-label">Action · Send follow-up email</span><span className="n-status">✓</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
