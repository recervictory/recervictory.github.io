import React, { useEffect, useRef, useState } from 'react';
import { UmapScatter, BrainStemCell } from '../assets/svg';
import './UmapGallery.css';

const LEGEND = [
  { color: '#EF476F', label: 'Glioma Stem Cell'   },
  { color: '#06D6A0', label: 'Reactive Astrocyte'  },
  { color: '#FFD166', label: 'Microglia / TAM'     },
  { color: '#7B2FBE', label: 'Oligodendrocyte'     },
  { color: '#118AB2', label: 'T-cell'              },
  { color: '#52B788', label: 'Endothelial'         },
];

const UmapGallery = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.25 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="umap" className="umap-section theme-section" ref={sectionRef}>
      {/* Watermark */}
      <div className="umap-watermark">
        <BrainStemCell width={80} height={340} opacity={0.05} />
      </div>

      <div className="umap-inner">
        <span className="section-chapter">§ IV · The Scatter Fields</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>The Scatter Fields</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>
          Six cell populations mapped across a shared transcriptional landscape
        </p>

        {/* Leaf-corner framed UMAP */}
        <div className="umap-frame">
          <span className="umap-corner umap-corner--tl">❧</span>
          <span className="umap-corner umap-corner--tr">❧</span>
          <span className="umap-corner umap-corner--bl">❧</span>
          <span className="umap-corner umap-corner--br">❧</span>
          <UmapScatter width={800} height={650} animate={visible} opacity={1} />
        </div>

        {/* Legend */}
        <div className="umap-legend">
          {LEGEND.map(({ color, label }) => (
            <div className="umap-legend__item" key={label}>
              <span className="umap-legend__dot" style={{ background: color }} />
              <span className="umap-legend__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UmapGallery;
