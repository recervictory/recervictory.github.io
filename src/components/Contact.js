import React, { useMemo } from 'react';
import { NeuronOligodendrocyte } from '../assets/svg';
import './Contact.css';

const FIREFLY_COUNT = 50;

const Contact = () => {
  const fireflies = useMemo(() =>
    Array.from({ length: FIREFLY_COUNT }, (_, i) => ({
      id: i,
      left:     `${Math.random() * 100}%`,
      top:      `${Math.random() * 100}%`,
      delay:    `${Math.random() * 10}s`,
      duration: `${6 + Math.random() * 6}s`,
    })),
  []);

  return (
    <footer id="contact" className="contact-section">
      {/* Firefly particles */}
      <div className="contact-fireflies" aria-hidden="true">
        {fireflies.map(f => (
          <span
            key={f.id}
            className="contact-firefly"
            style={{
              left:              f.left,
              top:               f.top,
              animationDelay:    f.delay,
              animationDuration: f.duration,
            }}
          />
        ))}
      </div>

      {/* Watermark */}
      <div className="contact-watermark">
        <NeuronOligodendrocyte width={400} height={228} opacity={0.04} />
      </div>

      <div className="contact-inner">
        <span className="section-chapter">§ VI · Send a Letter to the Field</span>
        <h2 className="contact-title">Send a Letter to the Field</h2>
        <p className="contact-subtitle">
          Reach out about research collaborations, single-cell genomics, or pediatric neuro-oncology.
        </p>

        {/* Wax-seal contact buttons */}
        <div className="contact-links">
          <a
            href="mailto:recervictory@gmail.com"
            className="contact-seal"
            aria-label="Email"
          >
            <span className="contact-seal__icon">✉</span>
            <span className="contact-seal__label">Email</span>
          </a>
          <a
            href="https://github.com/recervictory"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-seal"
            aria-label="GitHub"
          >
            <span className="contact-seal__icon">⌥</span>
            <span className="contact-seal__label">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/recervictory"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-seal"
            aria-label="LinkedIn"
          >
            <span className="contact-seal__icon">in</span>
            <span className="contact-seal__label">LinkedIn</span>
          </a>
        </div>

        <p className="contact-footer-text">
          Grown in Münster · Coded in the genome's margins
        </p>
      </div>
    </footer>
  );
};

export default Contact;
