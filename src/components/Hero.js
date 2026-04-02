import React, { useState, useEffect, useRef } from 'react';
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

/* ── Action-potential canvas background ─────────────────── */
function ActionPotentialCanvas() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width  = W;
    canvas.height = H;

    let t = 0;

    /* ── Action-potential wave constants ── */
    const AP_SPIKE_WIDTH    = 0.005; // Gaussian width of the spike envelope
    const AP_SPIKE_HEIGHT   = 40;    // px amplitude of the spike
    const AP_BASE_AMPLITUDE = 8;     // px amplitude of the background oscillation
    const AP_TRAVEL_SPEED   = 0.5;   // fraction of trace speed used for spike travel

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw 3 slow voltage-wave traces at different vertical positions
      const traces = [
        { y: H * 0.25, color: '#00E5FF', alpha: 0.06, speed: 0.003 },
        { y: H * 0.55, color: '#9B4DFF', alpha: 0.05, speed: 0.004 },
        { y: H * 0.78, color: '#1A8FFF', alpha: 0.04, speed: 0.002 },
      ];

      traces.forEach(tr => {
        ctx.beginPath();
        ctx.strokeStyle = tr.color;
        ctx.globalAlpha = tr.alpha;
        ctx.lineWidth = 1.5;

        for (let x = 0; x <= W; x += 2) {
          const phase = x / W * Math.PI * 6 - t * tr.speed * 300;
          // Action-potential shape: mostly flat, sharp spike
          const spikeEnvelope = Math.exp(-Math.pow((x / W - ((t * tr.speed * AP_TRAVEL_SPEED) % 1)), 2) / AP_SPIKE_WIDTH);
          const base  = Math.sin(phase) * AP_BASE_AMPLITUDE;
          const spike = spikeEnvelope * AP_SPIKE_HEIGHT;
          const y = tr.y + base + spike;

          if (x === 0) ctx.moveTo(x, y);
          else         ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      t++;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    function handleResize() {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W;
      canvas.height = H;
    }
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-ap-canvas"
      aria-hidden="true"
    />
  );
}

/* ── EEG indicator canvas ────────────────────────────────── */
function EegCanvas() {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = 80;
    const H = 30;
    canvas.width  = W;
    canvas.height = H;

    let frame = 0;
    const CYCLE = 120; // frames per spike cycle

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth   = 1.5;
      ctx.globalAlpha = 0.9;

      const pos = (frame % CYCLE) / CYCLE; // 0..1

      ctx.beginPath();
      for (let x = 0; x < W; x++) {
        const t = x / W;

        // Animate the spike travelling: shift the pattern by pos
        const shifted = ((t - pos + 1) % 1);
        let sy = H / 2;
        if (shifted >= 0.35 && shifted < 0.45) {
          sy = H / 2 - ((shifted - 0.35) / 0.10) * (H * 0.8);
        } else if (shifted >= 0.45 && shifted < 0.55) {
          sy = H / 2 - ((0.55 - shifted) / 0.10) * (H * 0.8) + H * 0.3;
        }

        if (x === 0) ctx.moveTo(x, sy);
        else         ctx.lineTo(x, sy);
      }
      ctx.stroke();

      frame++;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={80}
      height={30}
      className="hero-eeg-canvas"
      aria-hidden="true"
    />
  );
}

/* ── Neuron forest config ────────────────────────────────── */
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

/* ── Subtitle words for stagger ─────────────────────────── */
const SUBTITLE = 'Single-Cell Neuro-Oncologist · Mapping the unseen forests of the pediatric brain';

const Hero = () => {
  const isMobile = useIsMobile();

  // Axon-signal particles (directional left→right)
  const particleCount = isMobile ? 12 : 40;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    top:      `${10 + Math.random() * 80}%`,
    size:     `${2 + Math.random() * 3}px`,
    delay:    `${Math.random() * 14}s`,
    duration: `${8 + Math.random() * 10}s`,
    color:    i % 3 === 0 ? 'var(--color-data-cyan)'
            : i % 3 === 1 ? 'var(--color-axon-blue)'
            :                'var(--color-synapse-gold)',
  }));

  const subtitleWords = SUBTITLE.split(' ');

  return (
    <section id="home" className="hero-section">
      {/* Layer 0 — Action-potential canvas background */}
      <ActionPotentialCanvas />

      {/* Layer 1 — Dark gradient background */}
      <Parallax speed={-20} disabled={isMobile} className="hero-layer hero-layer--bg">
        <div className="hero-bg-gradient" />
      </Parallax>

      {/* Layer 2 — Large brain outline */}
      {!isMobile && (
        <Parallax speed={-12} disabled={isMobile} className="hero-layer hero-layer--brain-outline">
          <BrainStemCell width={700} height={700} opacity={0.08} className="hero-brain-outline" />
        </Parallax>
      )}

      {/* Layer 3 — Neuron forest (staggered materialise) */}
      {!isMobile && (
        <Parallax speed={-6} disabled={isMobile} className="hero-layer hero-layer--neuron-forest">
          {NEURON_FOREST.map(({ Component, size, top, left, opacity }, idx) => (
            <div
              key={idx}
              className="hero-forest-neuron"
              style={{
                top,
                left,
                animationDelay: `${idx * 0.18}s`,
              }}
            >
              <Component width={size} height={size} opacity={opacity} />
            </div>
          ))}
        </Parallax>
      )}

      {/* Layer 4 — Axon-signal directional particles */}
      <div className="hero-layer hero-layer--particles" aria-hidden="true">
        {particles.map(p => (
          <span
            key={p.id}
            className="hero-axon-particle"
            style={{
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

      {/* Centerpiece — slowly rotating brain cluster */}
      <div className="hero-centerpiece" aria-hidden="true">
        <NeuronAstrocyte      width={280} height={280} opacity={0.38} className="hero-centerpiece__astrocyte" />
        <NeuronPyramidal      width={220} height={220} opacity={0.42} className="hero-centerpiece__pyramidal" />
        <NeuronGliomaStemCell width={180} height={180} opacity={0.45} className="hero-centerpiece__glia" />
        <NeuronMicroglia      width={160} height={160} opacity={0.35} className="hero-centerpiece__microglia" />
      </div>

      {/* Layer 5 — Text content (three-beat reveal) */}
      <Parallax speed={3} disabled={isMobile} className="hero-layer hero-layer--text">
        <div className="hero-content">
          {/* Beat 1 — monospace file-header */}
          <p className="hero-tagline">
            Homo sapiens&nbsp;·&nbsp;Chr 7q34&nbsp;·&nbsp;BRAF fusion
          </p>

          {/* Beat 2 — name with gold glow */}
          <h1 className="hero-name">Victor Banerjee</h1>

          {/* Beat 3 — subtitle word-by-word stagger */}
          <p className="hero-subtitle" aria-label={SUBTITLE}>
            {subtitleWords.map((word, i) => (
              <span
                key={i}
                className="hero-subtitle-word"
                style={{ animationDelay: `${1.2 + i * 0.06}s` }}
              >
                {word}{' '}
              </span>
            ))}
          </p>

          {/* EEG scroll indicator */}
          <a href="#about" className="hero-scroll-indicator" aria-label="Scroll down">
            <EegCanvas />
          </a>
        </div>
      </Parallax>
    </section>
  );
};

export default Hero;
