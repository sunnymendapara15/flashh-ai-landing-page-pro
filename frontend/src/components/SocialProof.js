import React from 'react';
import useReveal from '../hooks/useReveal';

const LOGOS = ['Acme Corp', 'Northwind', 'Lumina', 'Vertex', 'Fable', 'Kite', 'Orbit', 'Nimbus'];

export default function SocialProof() {
  const [ref, inView] = useReveal({ threshold: 0.1 });
  return (
    <section className="social-proof" aria-label="Trusted by teams">
      <div className="container">
        <div ref={ref} className={`reveal ${inView ? 'is-visible' : ''}`}>
          <p>Trusted by modern teams at</p>
          <ul className="logo-strip">
            {LOGOS.map((logo) => (
              <li key={logo} className="logo-item">{logo}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
