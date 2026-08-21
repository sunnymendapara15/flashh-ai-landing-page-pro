import React from 'react';
import useReveal from '../hooks/useReveal';

const PLANS = [
  {
    name: 'Starter',
    desc: 'For trying Flashh on small personal projects.',
    price: '$0',
    period: '/month',
    cta: 'Start free',
    featured: false,
    features: ['Up to 100 workflow runs / month', '5 active workflows', '200+ integrations', 'Community support'],
  },
  {
    name: 'Pro',
    desc: 'For professionals shipping automations daily.',
    price: '$24',
    period: '/month',
    cta: 'Get started',
    featured: true,
    features: ['Unlimited workflow runs', 'Unlimited workflows', 'AI enrichment & suggestions', 'Custom code steps', 'Priority support'],
  },
  {
    name: 'Teams',
    desc: 'For teams automating across the org.',
    price: '$79',
    period: '/month',
    cta: 'Contact sales',
    featured: false,
    features: ['Everything in Pro', 'Shared workspaces', 'Granular permissions & approvals', 'SSO / SAML', 'Dedicated success manager'],
  },
];

export default function Pricing() {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  return (
    <section className="section" id="pricing">
      <div className="container center">
        <span className="eyebrow">Pricing</span>
        <h2 className="h2">Simple pricing, <span className="gradient-text">serious value</span></h2>
        <p className="lede">Start free. Upgrade when your automations start paying for themselves.</p>

        <div ref={ref} className="pricing-grid" style={{ textAlign: 'left' }}>
          {PLANS.map((p, i) => (
            <div
              key={p.name}
              className={`pricing-card reveal ${p.featured ? 'featured' : ''} ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 110}ms` }}
            >
              {p.featured && <span className="popular-badge">Most popular</span>}
              <h3 className="plan-name">{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <span className="amount">{p.price}</span>
                <span className="period">{p.period}</span>
              </div>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}><span className="check">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
