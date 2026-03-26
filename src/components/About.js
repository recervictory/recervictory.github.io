import React from 'react';
import { FlowerCellType } from '../assets/svg';
import './About.css';

const About = () => (
  <section id="about" className="about-section theme-section">
    <div className="about-inner">
      <span className="section-chapter">§ I · Field Notes</span>
      <h2 className="section-title about-heading">Field Notes</h2>

      <div className="about-layout">
        {/* Left — FlowerCellType SVG */}
        <div className="about-svg-col">
          <FlowerCellType width={350} height={350} opacity={1} />
          <p className="about-svg-caption">
            Brain Cell Ecosystem — Pediatric Glioma Microenvironment
          </p>
        </div>

        {/* Right — Bio text */}
        <div className="about-bio-col">
          <div className="about-field-guide">
            <p className="about-bio-text">
              Victor Banerjee is a PhD candidate at University Hospital Münster (UKM),
              specializing in pediatric brain tumor genomics and single-cell RNA sequencing.
              His work maps the cellular ecosystems of pediatric gliomas — decoding the stories
              written in tumor cells using NMF signature discovery, UMAP dimensionality reduction,
              and tumor microenvironment analysis.
            </p>
            <p className="about-bio-text">
              At the intersection of computational biology and clinical neuro-oncology,
              his research illuminates the hidden forest of cell states that define tumor
              aggression, therapy resistance, and immune evasion in pediatric high-grade gliomas.
            </p>
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

export default About;
