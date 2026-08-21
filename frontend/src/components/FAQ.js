import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';

const FAQS = [
  { q: 'Do I need to know how to code to use Flashh?', a: 'Not at all. Flashh is built for everyone. You describe what you want in plain language, and Flashh handles the technical details behind the scenes. If you do code, you can still dive in and customize workflows with custom steps.' },
  { q: 'Which apps can Flashh connect to?', a: 'Flashh integrates with 200+ tools including Gmail, Slack, Notion, Google Sheets, GitHub, Salesforce, HubSpot, and many more. New integrations are added regularly.' },
  { q: 'How does the conversational builder actually work?', a: 'You chat with Flashh just like you would with a teammate. Flashh interprets your intent, asks clarifying questions when needed, and assembles a complete workflow — trigger, logic, and actions — that you can preview and refine before activating.' },
  { q: 'Is my data secure?', a: 'Yes. Flashh is SOC 2 Type II compliant, encrypts data in transit and at rest, and never trains on your content. Granular permissions let you control exactly who can see and run each workflow.' },
  { q: 'Can I try Flashh for free?', a: 'Absolutely. The Starter plan is free forever — no credit card required. You get up to 100 workflow runs per month to explore and automate your first tasks.' },
  { q: 'Can I cancel or change plans anytime?', a: 'Yes, you can upgrade, downgrade, or cancel at any time from your billing settings. Changes take effect at the start of your next billing cycle.' },
];

function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <h3>
        <button
          type="button"
          className="faq-question"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {item.q}
          <span className="faq-icon" aria-hidden="true">+</span>
        </button>
      </h3>
      <div className="faq-answer" style={{ maxHeight: open ? 400 : 0 }} role="region">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  return (
    <section className="section" id="faq">
      <div className="container center">
        <span className="eyebrow">FAQ</span>
        <h2 className="h2">Questions? <span className="gradient-text">Answered.</span></h2>
        <div ref={ref} className={`faq-list reveal ${inView ? 'is-visible' : ''}`} style={{ textAlign: 'left' }}>
          {FAQS.map((item) => <FaqItem key={item.q} item={item} />)}
        </div>
      </div>
    </section>
  );
}
