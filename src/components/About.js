import React, { useRef } from 'react';
import { FlowerCellType } from '../assets/svg';
import useReveal from '../hooks/useReveal';
import './About.css';

const BIO_TEXT_1 = 'Victor Banerjee is a PhD candidate at University Hospital Münster (UKM), specializing in pediatric brain tumor genomics and single-cell RNA sequencing. His work maps the cellular ecosystems of pediatric gliomas — decoding the stories written in tumor cells using NMF signature discovery, UMAP dimensionality reduction, and tumor microenvironment analysis.';
const BIO_TEXT_2 = 'At the intersection of computational biology and clinical neuro-oncology, his research illuminates the hidden forest of cell states that define tumor aggression, therapy resistance, and immune evasion in pediatric high-grade gliomas.';

function TypewriterParagraph({ text, active, baseDelay = 0 }) {
  const words = text.split(' ');
  return (
    <p className="about-bio-text" aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`about-word${active ? ' visible' : ''}`}
          style={{ transitionDelay: active ? `${baseDelay + i * 0.04}s` : '0s' }}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  );
}

const About = () => {
  const sectionRef = useRef(null);
  const visible    = useReveal(sectionRef, 0.15);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`about-section theme-section${visible ? ' section-entered' : ''}`}
    >
      <div className="about-inner">
        <span className="section-chapter">§ I · Field Notes</span>
        <h2 className="section-title about-heading">Field Notes</h2>

        <div className={`about-layout reveal-section${visible ? ' visible' : ''}`}>
          {/* Left — FlowerCellType SVG (slow-rotating via CSS) */}
          <div className="about-svg-col">
            <FlowerCellType width={350} height={350} opacity={1} />
            <p className="about-svg-caption">
              Brain Cell Ecosystem — Pediatric Glioma Microenvironment
            </p>
          </div>

          {/* Right — Bio text with typewriter effect */}
          <div className="about-bio-col">
            <div className="about-field-guide">
              <TypewriterParagraph text={BIO_TEXT_1} active={visible} baseDelay={0.3} />
              <TypewriterParagraph text={BIO_TEXT_2} active={visible} baseDelay={2.2} />
              <div className="about-contact-details">
                <p><span className="about-label">Email:</span> recervictory@gmail.com</p>
                <p><span className="about-label">Location:</span> Münster, Germany</p>
                <p><span className="about-label">Institute:</span> University Hospital Münster (UKM)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
