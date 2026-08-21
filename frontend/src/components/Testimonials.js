import React from 'react';
import useReveal from '../hooks/useReveal';

const QUOTES = [
  { name: 'Priya Sharma', role: 'Head of Growth, Lumina', stars: 5, text: 'I automated our entire lead-routing flow in one afternoon. I still can't believe I did it myself without writing a single line of code.' },
  { name: 'Marcus Chen', role: 'Staff Engineer, Vertex', stars: 5, text: 'As an engineer, I expected to outgrow it. Instead I use Flashh to draft workflows and then extend them in code. It's genuinely the fastest path I've found.' },
  { name: 'Dana Okafor', role: 'Ops Lead, Northwind', stars: 5, text: 'The conversational builder is magical. I described a messy, three-step process and Flashh built something cleaner than what we had documented.' },
  { name: 'Tomás Rivera', role: 'Founder, Kite', stars: 5, text: 'We replaced three tools and a part-time contractor with Flashh. ROI was visible in the first week.' },
  { name: 'Aisha Malik', role: 'Product Manager, Fable', stars: 5, text: 'Finally, an automation tool my whole team actually uses. The non-technical folks are the ones building now.' },
  { name: 'Jonas Weber', role: 'RevOps, Orbit', stars: 5, text: 'Setup that used to take a sprint now takes minutes. Our sales team ships their own automations.' },
];

export default function Testimonials() {
  const [ref, inView] = useReveal({ threshold: 0.05 });
  return (
    <section className="section" id="testimonials">
      <div className="container center">
        <span className="eyebrow">Customers</span>
        <h2 className="h2">Loved by builders, <span className="gradient-text">and non-builders</span></h2>
        <p className="lede">Thousands of teams describe their ideas and let Flashh do the rest.</p>

        <div ref={ref} className="testimonial-grid" style={{ textAlign: 'left' }}>
          {QUOTES.map((q, i) => (
            <figure
              key={q.name}
              className={`testimonial-card reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="stars" aria-label={`${q.stars} out of 5 stars`}>{'★'.repeat(q.stars)}</div>
              <blockquote>"{q.text}"</blockquote>
              <figcaption className="quote-author">
                <span className="avatar" aria-hidden="true">{q.name.charAt(0)}</span>
                <span>
                  <span className="name">{q.name}</span>
                  <br />
                  <span className="role">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
