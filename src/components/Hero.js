import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import {
  NeuronPyramidal,
  NeuronAstrocyte,
  NeuronGliomaStemCell,
  NeuronMicroglia,
  NeuronOligodendrocyte,
  SynapseConnection,
  BrainStemCell,
} from '../assets/svg';
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

const PARTICLE_COUNT = 60;

const NEURON_FOREST = [
  { Component: NeuronPyramidal,       size: 120, top: '15%', left:  '8%', opacity: 0.10 },
  { Component: NeuronAstrocyte,       size: 180, top: '25%', left: '18%', opacity: 0.08 },
  { Component: NeuronMicroglia,       size:  80, top: '10%', left: '35%', opacity: 0.12 },
  { Component: NeuronOligodendrocyte, size: 140, top: '40%', left: '70%', opacity: 0.09 },
  { Component: NeuronPyramidal,       size: 100, top: '60%', left: '80%', opacity: 0.07 },
  { Component: NeuronAstrocyte,       size: 160, top: '20%', left: '85%', opacity: 0.11 },
  { Component: NeuronGliomaStemCell,  size:  90, top: '55%', left:  '5%', opacity: 0.08 },
  { Component: SynapseConnection,     size:  70, top: '70%', left: '45%', opacity: 0.10 },
  { Component: NeuronMicroglia,       size: 130, top: '35%', left: '55%', opacity: 0.06 },
  { Component: NeuronOligodendrocyte, size:  60, top: '80%', left: '25%', opacity: 0.09 },
];

const Hero = () => {
  const isMobile = useIsMobile();

  const particleCount = isMobile ? 15 : PARTICLE_COUNT;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top:  `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 4}px`,
    delay: `${Math.random() * 10}s`,
    duration: `${10 + Math.random() * 8}s`,
    color: i % 2 === 0 ? 'var(--color-data-cyan)' : 'var(--color-synapse-gold)',
  }));

  return (
    <section id="home" className="hero-section">
      {/* Layer 1 — Dark gradient background */}
      <Parallax speed={-20} disabled={isMobile} className="hero-layer hero-layer--bg">
        <div className="hero-bg-gradient" />
      </Parallax>

      {/* Layer 2 — Large brain outline */}
      {!isMobile && (
        <Parallax speed={-12} disabled={isMobile} className="hero-layer hero-layer--brain-outline">
          <BrainStemCell width={700} height={700} opacity={0.10} className="hero-brain-outline" />
        </Parallax>
      )}

      {/* Layer 3 — Neuron forest mid-ground */}
      {!isMobile && (
        <Parallax speed={-6} disabled={isMobile} className="hero-layer hero-layer--neuron-forest">
          {NEURON_FOREST.map(({ Component, size, top, left, opacity }, idx) => (
            <div key={idx} className="hero-forest-neuron" style={{ top, left }}>
              <Component width={size} height={size} opacity={opacity} />
            </div>
          ))}
        </Parallax>
      )}

      {/* Layer 4 — Floating synapse particles */}
      <div className="hero-layer hero-layer--particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="hero-synapse-particle"
            style={{
              left: p.left,
              top:  p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Centerpiece — Brain/neuron cluster at center-bottom */}
      <div className="hero-centerpiece" aria-hidden="true">
        <NeuronAstrocyte      width={280} height={280} opacity={0.38} className="hero-centerpiece__astrocyte" />
        <NeuronPyramidal      width={220} height={220} opacity={0.42} className="hero-centerpiece__pyramidal" />
        <NeuronGliomaStemCell width={180} height={180} opacity={0.45} className="hero-centerpiece__glia" />
        <NeuronMicroglia      width={160} height={160} opacity={0.35} className="hero-centerpiece__microglia" />
      </div>

      {/* Layer 5 — Text content (foreground) */}
      <Parallax speed={3} disabled={isMobile} className="hero-layer hero-layer--text">
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
