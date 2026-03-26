import React, { useEffect, useRef } from 'react';
import { NeuronMicroglia, NeuronAstrocyte, NeuronPyramidal, NeuronOligodendrocyte, NeuronGliomaStemCell } from '../assets/svg';
import './Skills.css';

const SKILLS = [
  { name: 'R',              level: 95, icon: NeuronMicroglia },
  { name: 'Python',         level: 90, icon: NeuronAstrocyte },
  { name: 'Seurat',         level: 95, icon: NeuronPyramidal },
  { name: 'scRNA-seq',      level: 95, icon: NeuronGliomaStemCell },
  { name: 'NMF',            level: 85, icon: NeuronOligodendrocyte },
  { name: 'GSEA / GSEApy',  level: 80, icon: NeuronMicroglia },
  { name: 'Bioconductor',   level: 85, icon: NeuronAstrocyte },
  { name: 'ggplot2 / Scanpy', level: 80, icon: NeuronPyramidal },
  { name: 'GitHub',         level: 85, icon: NeuronOligodendrocyte },
  { name: 'JupyterLab',     level: 85, icon: NeuronGliomaStemCell },
  { name: 'Linux / HPC',    level: 80, icon: NeuronMicroglia },
];

const CIRCLE_R = 36;
const CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

const SkillCard = ({ name, level, Icon }) => {
  const circleRef = useRef(null);
  const cardRef   = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && circleRef.current) {
          const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;
          circleRef.current.style.strokeDashoffset = offset;
        }
      },
      { threshold: 0.4 }
    );
    const el = cardRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [level]);

  return (
    <div className="skill-card reveal" ref={cardRef}>
      <div className="skill-card__icon">
        <Icon width={50} height={50} opacity={0.7} />
      </div>
      <div className="skill-card__ring">
        <svg viewBox="0 0 88 88" width="88" height="88">
          <circle cx="44" cy="44" r={CIRCLE_R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <circle
            ref={circleRef}
            cx="44"
            cy="44"
            r={CIRCLE_R}
            fill="none"
            stroke="var(--color-leaf-mid)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
            transform="rotate(-90 44 44)"
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)' }}
          />
          <text x="44" y="48" textAnchor="middle" fontFamily="var(--font-code)" fontSize="12" fill="var(--color-synapse-gold)">{level}%</text>
        </svg>
      </div>
      <h3 className="skill-card__name">{name}</h3>
      <div className="skill-card__ribbon">Specimen</div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="skills-section theme-section">
    <div className="skills-inner">
      <span className="section-chapter">§ II · Species Catalog</span>
      <h2 className="section-title">Species Catalog</h2>
      <p className="section-subtitle">Pinned computational specimens from field research</p>

      <div className="skills-grid">
        {SKILLS.map(({ name, level, icon: Icon }) => (
          <SkillCard key={name} name={name} level={level} Icon={Icon} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
