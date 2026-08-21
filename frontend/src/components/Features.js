import React from 'react';
import useReveal from '../hooks/useReveal';

const FEATURES = [
  { icon: '💬', title: 'Conversational builder', desc: 'Just describe what you want in plain words. Flashh turns your sentence into a working workflow — no drag-and-drop puzzle.' },
  { icon: '🧠', title: 'AI that understands intent', desc: 'Flashh reads between the lines, suggests missing steps, and asks smart questions until your idea is complete.' },
  { icon: '🔌', title: '200+ integrations', desc: 'Connect Gmail, Slack, Notion, Sheets, GitHub, and hundreds more. Flashh wires them together for you.' },
  { icon: '⚡', title: 'Build in seconds', desc: 'What used to take an afternoon now takes a sentence. Ship automations before your coffee cools.' },
  { icon: '🛡️', title: 'Enterprise-grade security', desc: 'SOC 2 Type II, end-to-end encryption, and granular permissions. Your data stays yours, always.' },
  { icon: '📈', title: 'Runs itself', desc: 'Schedules, retries, and error handling are automatic. Set it once and Flashh keeps it alive.' },
];

export default function Features() {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  return (
    <section className="section" id="features">
      <div className="container center">
        <span className="eyebrow">Features</span>
        <h2 className="h2">Everything you need,<br /><span className="gradient-text">nothing you don't</span></h2>
        <p className="lede">
          Powerful automation, wrapped in the simplest interface you've ever used — for engineers and
          non-engineers alike.
        </p>

        <div ref={ref} className="features-grid" style={{ textAlign: 'left' }}>
          {FEATURES.map((f, i) => (
            <article
              key={f.title}
              className={`feature-card reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="feature-icon" aria-hidden="true">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
