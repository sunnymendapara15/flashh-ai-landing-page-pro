import React from 'react';
import useReveal from '../hooks/useReveal';

export default function Benefits() {
  const [aRef, aIn] = useReveal();
  const [bRef, bIn] = useReveal();
  const [cRef, cIn] = useReveal();

  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="benefit-row">
          <div ref={aRef} className={`benefit-copy reveal reveal-left ${aIn ? 'is-visible' : ''}`}>
            <span className="eyebrow">For non-technical teams</span>
            <h3>No code. No training. No blockers.</h3>
            <p>
              You know your process better than anyone. Now you can automate it without waiting on an
              engineer — just describe the task the way you'd explain it to a coworker.
            </p>
            <ul className="benefit-list">
              <li><span className="check">✓</span> Plain-English instructions, zero syntax</li>
              <li><span className="check">✓</span> Guided suggestions as you type</li>
              <li><span className="check">✓</span> Preview before anything goes live</li>
            </ul>
          </div>
          <div ref={aRef} className={`benefit-visual glass reveal reveal-right ${aIn ? 'is-visible' : ''}`}>
            <span className="big-word">Talk it out</span>
          </div>
        </div>

        <div className="benefit-row">
          <div ref={bRef} className={`benefit-visual glass reveal reveal-left ${bIn ? 'is-visible' : ''}`}>
            <span className="big-word">Ship it fast</span>
          </div>
          <div ref={bRef} className={`benefit-copy reveal reveal-right ${bIn ? 'is-visible' : ''}`}>
            <span className="eyebrow">For engineers</span>
            <h3>Prototype to production in one prompt.</h3>
            <p>
              Skip the boilerplate. Flashh generates clean, inspectable workflow logic you can extend
              with code when you want — or hand off to the team, fully documented.
            </p>
            <ul className="benefit-list">
              <li><span className="check">✓</span> Exportable, version-controlled workflows</li>
              <li><span className="check">✓</span> Custom code steps when you need them</li>
              <li><span className="check">✓</span> API, webhooks, and CI-friendly tooling</li>
            </ul>
          </div>
        </div>

        <div className="benefit-row">
          <div ref={cRef} className={`benefit-copy reveal reveal-left ${cIn ? 'is-visible' : ''}`}>
            <span className="eyebrow">Built to scale</span>
            <h3>From one task to a thousand, reliably.</h3>
            <p>
              Automatic retries, smart error handling, and real-time monitoring keep every workflow
              healthy — so your team can focus on the work that matters.
            </p>
            <ul className="benefit-list">
              <li><span className="check">✓</span> Live run history and logs</li>
              <li><span className="check">✓</span> Granular permissions &amp; approvals</li>
              <li><span className="check">✓</span> Scales to millions of runs</li>
            </ul>
          </div>
          <div ref={cRef} className={`benefit-visual glass reveal reveal-right ${cIn ? 'is-visible' : ''}`}>
            <span className="big-word">Run it all</span>
          </div>
        </div>
      </div>
    </section>
  );
}
