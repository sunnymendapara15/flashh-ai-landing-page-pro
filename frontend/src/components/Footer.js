import React from 'react';

const COLUMNS = [
  { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Customers', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'API reference', 'Community', 'Templates', 'Status'] },
];

const SOCIALS = [
  { label: 'X', href: '#' },
  { label: 'GH', href: '#' },
  { label: 'in', href: '#' },
  { label: '▶', href: '#' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo" aria-label="Flashh AI home">
              <span className="logo-mark" aria-hidden="true">F</span>
              Flashh
            </a>
            <p>Describe your idea. Flashh builds the workflow. The simplest way to automate work — for everyone.</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Flashh AI, Inc. All rights reserved.</span>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label}>{s.label}</a>
            ))}
          </div>
          <span>
            <a href="#" style={{ color: 'var(--text-muted)' }}>Privacy</a>
            {' · '}
            <a href="#" style={{ color: 'var(--text-muted)' }}>Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
