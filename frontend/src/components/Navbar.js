import React, { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#showcase', label: 'Product' },
  { href: '#benefits', label: 'Why Flashh' },
  { href: '#testimonials', label: 'Customers' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo" aria-label="Flashh AI home">
          <span className="logo-mark" aria-hidden="true">F</span>
          Flashh
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <div className="nav-cta desktop">
            <a href="#cta" className="btn btn-primary">Start free</a>
          </div>
          <button
            type="button"
            className={`nav-toggle ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#cta" className="btn btn-primary" onClick={() => setOpen(false)}>Start free</a>
        </nav>
      )}
    </header>
  );
}
