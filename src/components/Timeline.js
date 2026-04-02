import React, { useRef, useState } from 'react';
import { LeafNeuronHybrid, SynapseConnection } from '../assets/svg';
import useReveal from '../hooks/useReveal';
import './Timeline.css';

const MILESTONES = [
  { year: '2018', title: 'BSc Bioinformatics', detail: 'Completed Bachelor\'s degree in Bioinformatics, building foundations in computational biology, statistics, and molecular biology.' },
  { year: '2020', title: 'MSc Molecular Biology', detail: 'Advanced training in molecular biology techniques, genomics, and computational analysis of biological data.' },
  { year: '2022', title: 'PhD Start — University Hospital Münster (UKM)', detail: 'Joined the neuro-oncology lab at UKM, focusing on pediatric brain tumor biology and single-cell RNA sequencing.' },
  { year: '2023', title: 'First Single-Cell Atlas — Pediatric Glioma', detail: 'Generated the first comprehensive single-cell transcriptomic atlas of pediatric high-grade glioma, profiling 40,000+ cells.' },
  { year: '2024', title: 'NMF Signature Paper in Preparation', detail: 'Manuscript describing novel NMF-derived transcriptional signatures in glioma stem cells linked to clinical outcomes.' },
  { year: '2025', title: 'Tumor Microenvironment Study Published', detail: 'Publication mapping TAM polarization and T-cell exhaustion states in the pediatric glioma immune microenvironment.' },
];

/* Small inline EEG waveform SVG */
function EegWaveform() {
  return (
    <svg
      className="timeline-eeg"
      viewBox="0 0 50 14"
      width="50"
      height="14"
      aria-hidden="true"
    >
      <polyline
        points="0,7 10,7 13,2 16,12 19,7 50,7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
    </svg>
  );
}

const Timeline = () => {
  const sectionRef = useRef(null);
  const stemRef    = useRef(null);
  const visible    = useReveal(sectionRef, 0.15);
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className={`timeline-section theme-section${visible ? ' section-entered' : ''}`}
    >
      <div className="timeline-inner">
        <span className="section-chapter">§ V · Botanical Log</span>
        <h2 className="section-title">Botanical Log</h2>
        <p className="section-subtitle">A living record of research milestones</p>

        <div className="timeline-track" ref={stemRef}>
          {/* SVG vertical stem — 3s draw with pause effect */}
          <svg className="timeline-stem" viewBox="0 0 6 600" preserveAspectRatio="none">
            <line
              x1="3" y1="0" x2="3" y2="600"
              stroke="#52B788"
              strokeWidth="3"
              strokeDasharray="600"
              strokeDashoffset={visible ? 0 : 600}
              style={{ transition: 'stroke-dashoffset 3s cubic-bezier(0.4, 0, 0.2, 1)' }}
            />
          </svg>

          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className={`timeline-item reveal ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
            >
              {/* Leaf node on stem */}
              <div className="timeline-leaf-node">
                <LeafNeuronHybrid width={50} height={83} opacity={0.7} />
              </div>

              {/* Card */}
              <button
                className="timeline-card"
                onClick={() => setExpanded(expanded === i ? null : i)}
                aria-expanded={expanded === i}
              >
                <span className="timeline-year">
                  {m.year}
                  <EegWaveform />
                </span>
                <h3 className="timeline-title">{m.title}</h3>

                {/* Smooth accordion */}
                <div className={`timeline-detail-wrapper${expanded === i ? ' open' : ''}`}>
                  <p className="timeline-detail">{m.detail}</p>
                </div>

                <span className="timeline-toggle">{expanded === i ? '▲' : '▼'}</span>
              </button>
            </div>
          ))}
        </div>

        {/* SynapseConnection decoration at bottom */}
        <div className="timeline-synapse">
          <SynapseConnection width={240} height={160} opacity={0.5} />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
