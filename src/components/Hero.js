import React, { useState, useEffect, useMemo } from 'react';
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
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

/* Stable particle data — computed once so Math.random() doesn't re-run on every render */
const PARTICLES_DESKTOP = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  left: `${(i * 1.667) % 100}%`,
  top:  `${(i * 2.3 + 7) % 100}%`,
  size: `${2 + (i % 5)}px`,
  delay: `${(i * 0.17) % 10}s`,
  duration: `${10 + (i % 8)}s`,
  color: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ffd166' : 'rgba(255,255,255,0.6)',
}));

const PARTICLES_MOBILE = PARTICLES_DESKTOP.slice(0, 18);

/* Neuron forest positions for mid-ground layer */
const NEURON_FOREST = [
  { Component: NeuronPyramidal,       size: 130, top: '12%', left:  '6%', opacity: 0.11 },
  { Component: NeuronAstrocyte,       size: 190, top: '22%', left: '17%', opacity: 0.09 },
  { Component: NeuronMicroglia,       size:  85, top:  '8%', left: '33%', opacity: 0.13 },
  { Component: NeuronOligodendrocyte, size: 150, top: '38%', left: '68%', opacity: 0.10 },
  { Component: NeuronPyramidal,       size: 110, top: '58%', left: '79%', opacity: 0.08 },
  { Component: NeuronAstrocyte,       size: 170, top: '18%', left: '84%', opacity: 0.12 },
  { Component: NeuronGliomaStemCell,  size:  95, top: '53%', left:  '4%', opacity: 0.09 },
  { Component: SynapseConnection,     size:  75, top: '68%', left: '44%', opacity: 0.11 },
  { Component: NeuronMicroglia,       size: 140, top: '32%', left: '53%', opacity: 0.07 },
  { Component: NeuronOligodendrocyte, size:  65, top: '78%', left: '23%', opacity: 0.10 },
];

/* ─── Hero Component ──────────────────────────────────────────────────── */
const Hero = () => {
  const isMobile = useIsMobile();
  const particles = isMobile ? PARTICLES_MOBILE : PARTICLES_DESKTOP;

  /* Memoize foreground neurons to avoid recomputing on scroll events */
  const foregroundNeurons = useMemo(() => [
    { Component: NeuronGliomaStemCell, size: 160, bottom: '5%',  left:  '3%', opacity: 0.22 },
    { Component: NeuronMicroglia,      size: 120, bottom: '2%',  left: '88%', opacity: 0.20 },
    { Component: NeuronPyramidal,      size: 100, bottom: '8%',  left: '42%', opacity: 0.18 },
    { Component: SynapseConnection,    size:  90, bottom: '15%', left: '72%', opacity: 0.25 },
    { Component: NeuronAstrocyte,      size: 140, bottom: '0%',  left: '58%', opacity: 0.16 },
  ], []);

  return (
    <section id="home" className="hero-section" aria-label="Hero section">

      {/* ── Layer 1 (speed -2): Deep gradient sky — slowest ─────────── */}
      <Parallax speed={-2} disabled={isMobile} className="hero-layer hero-layer--sky">
        <div className="hero-sky-gradient" aria-hidden="true" />
      </Parallax>

      {/* ── Layer 2 (speed -5): Distant synapse starfield ───────────── */}
      <Parallax speed={-5} disabled={isMobile} className="hero-layer hero-layer--starfield">
        <svg
          className="hero-svg-starfield"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Distant synaptic nodes — tiny glowing dots */}
          {PARTICLES_DESKTOP.map(p => (
            <circle
              key={p.id}
              cx={`${parseFloat(p.left)  * 14.4}`}
              cy={`${parseFloat(p.top)   *  9}`}
              r={parseFloat(p.size) * 0.6}
              fill={p.color}
              opacity="0.35"
              className={`hero-star hero-star--${p.id % 3}`}
            />
          ))}
          {/* Axon connection lines */}
          <line x1="72"  y1="54"  x2="288" y2="162" stroke="#00ffff" strokeWidth="0.4" opacity="0.12" />
          <line x1="432" y1="108" x2="576" y2="270" stroke="#00ffff" strokeWidth="0.4" opacity="0.12" />
          <line x1="864" y1="54"  x2="1008" y2="216" stroke="#ffd166" strokeWidth="0.4" opacity="0.12" />
          <line x1="1152" y1="162" x2="1296" y2="90" stroke="#00ffff" strokeWidth="0.4" opacity="0.12" />
          <line x1="216"  y1="450" x2="432"  y2="360" stroke="#ffd166" strokeWidth="0.4" opacity="0.10" />
          <line x1="720"  y1="540" x2="1008" y2="450" stroke="#00ffff" strokeWidth="0.4" opacity="0.10" />
        </svg>
      </Parallax>

      {/* ── Layer 3 (speed -11): Far brain hemisphere horizon ──────── */}
      <Parallax speed={-11} disabled={isMobile} className="hero-layer hero-layer--horizon">
        <svg
          className="hero-svg-horizon"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="horizonFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#0d3320" stopOpacity="0" />
              <stop offset="100%" stopColor="#0a2518" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="tumorGlow" cx="50%" cy="65%" r="35%">
              <stop offset="0%"   stopColor="#ff8c42" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#ff8c42" stopOpacity="0"    />
            </radialGradient>
          </defs>
          {/* Amber tumor-warmth glow */}
          <rect width="1440" height="900" fill="url(#tumorGlow)" />
          {/* Brain hemisphere silhouette — far distance */}
          <path
            d="M0,720 C120,680 240,640 360,660 C480,680 540,620 660,600
               C720,590 780,590 840,600 C960,620 1020,680 1140,660
               C1260,640 1380,680 1440,720 L1440,900 L0,900 Z"
            fill="url(#horizonFill)"
            opacity="0.7"
          />
          {/* Second ridge — brain corpus callosum suggestion */}
          <path
            d="M0,760 C80,740 200,720 340,730 C480,740 560,710 680,700
               C760,695 800,695 880,700 C1000,710 1080,740 1200,730
               C1320,720 1400,740 1440,760 L1440,900 L0,900 Z"
            fill="#071a10"
            opacity="0.85"
          />
        </svg>
      </Parallax>

      {/* ── Layer 4 (speed -16): Mid-ground neuron forest ──────────── */}
      {!isMobile && (
        <Parallax speed={-16} disabled={isMobile} className="hero-layer hero-layer--forest">
          {NEURON_FOREST.map(({ Component, size, top, left, opacity }, idx) => (
            <div key={idx} className="hero-forest-neuron" style={{ top, left }}>
              <Component width={size} height={size} opacity={opacity} />
            </div>
          ))}
        </Parallax>
      )}

      {/* ── Layer 5 (speed -5): Brain stem central landmark ────────── */}
      <Parallax speed={-5} disabled={isMobile} className="hero-layer hero-layer--centerpiece">
        <div className="hero-brain-cluster" aria-hidden="true">
          <BrainStemCell     width={260} height={260} opacity={0.30} />
          <NeuronAstrocyte   width={220} height={220} opacity={0.28} />
        </div>
      </Parallax>

      {/* ── Layer 6 (speed 5): Hero title / content ────────────────── */}
      <Parallax speed={5} disabled={isMobile} className="hero-layer hero-layer--text">
        <div className="hero-content">
          <p className="hero-tagline">PhD Researcher · Neuro-Oncology · Single-Cell Genomics</p>
          <h1 className="hero-name">Victor Banerjee</h1>
          <p className="hero-subtitle">
            Single-Cell Neuro-Oncologist · Mapping the unseen forests of the pediatric brain
          </p>
          <a href="#about" className="hero-cta" aria-label="Scroll to about section">
            <span className="hero-cta__label">Explore Research</span>
            <span className="hero-cta__arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </Parallax>

      {/* ── Layer 7 (speed 20): Foreground neurons — fastest ───────── */}
      {!isMobile && (
        <Parallax speed={20} disabled={isMobile} className="hero-layer hero-layer--foreground">
          {foregroundNeurons.map(({ Component, size, bottom, left, opacity }, idx) => (
            <div key={idx} className="hero-fg-neuron" style={{ bottom, left }}>
              <Component width={size} height={size} opacity={opacity} />
            </div>
          ))}
        </Parallax>
      )}

      {/* ── Particle overlay (no parallax — ambient drift only) ─────── */}
      <div className="hero-layer hero-layer--particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="hero-particle"
            style={{
              left:              p.left,
              top:               p.top,
              width:             p.size,
              height:            p.size,
              background:        p.color,
              animationDelay:    p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
