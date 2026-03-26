import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { LeafNeuronHybrid, NeuronPyramidal, UmapScatter } from '../assets/svg';
import './Hero.css';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

const PARTICLE_COUNT = 30;

const Hero = () => {
  const isMobile = useIsMobile();

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top:  `${Math.random() * 100}%`,
    size: `${4 + Math.random() * 4}px`,
    delay: `${Math.random() * 8}s`,
    duration: `${6 + Math.random() * 4}s`,
  }));

  return (
    <section id="home" className="hero-section">
      {/* Layer 1 — UMAP watermark */}
      <Parallax speed={-15} disabled={isMobile} className="hero-layer hero-layer--umap">
        <UmapScatter width={900} height={750} opacity={0.06} animate={false} />
      </Parallax>

      {/* Layer 2 — Leaf SVGs */}
      <Parallax speed={-10} disabled={isMobile} className="hero-layer hero-layer--leaves">
        <LeafNeuronHybrid width={400} height={667} opacity={0.25} className="hero-leaf hero-leaf--left" />
        <LeafNeuronHybrid width={300} height={500} opacity={0.25} className="hero-leaf hero-leaf--right" />
        <LeafNeuronHybrid width={250} height={417} opacity={0.20} className="hero-leaf hero-leaf--br" />
      </Parallax>

      {/* Layer 3 — Pyramidal neurons */}
      <Parallax speed={-5} disabled={isMobile} className="hero-layer hero-layer--neurons">
        <NeuronPyramidal width={140} height={280} opacity={0.15} className="hero-neuron hero-neuron--left" />
        <NeuronPyramidal width={140} height={280} opacity={0.15} className="hero-neuron hero-neuron--right" />
      </Parallax>

      {/* Layer 4 — Floating cell particles (fixed) */}
      <div className="hero-layer hero-layer--particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left: p.left,
              top:  p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Layer 5 — Text content */}
      <Parallax speed={5} disabled={isMobile} className="hero-layer hero-layer--text">
        <div className="hero-content">
          <p className="hero-tagline">PhD Researcher · Neuro-Oncology · Single-Cell Genomics</p>
          <h1 className="hero-name">Victor Banerjee</h1>
          <p className="hero-subtitle">
            Single-Cell Neuro-Oncologist · Mapping the unseen forests of the pediatric brain
          </p>
          <a href="#about" className="hero-scroll-down" aria-label="Scroll down">
            <span className="hero-chevron">&#8964;</span>
          </a>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;
