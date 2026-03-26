import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { UmapScatter, NeuronGliomaStemCell } from '../assets/svg';
import './Projects.css';

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  React.useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

const PROJECTS = [
  {
    title: 'Pediatric Glioma Single-Cell Atlas',
    description:
      'scRNA-seq profiling of pediatric high-grade gliomas, integrating cell type deconvolution and ' +
      'annotation across 40,000+ cells. Reveals tumor heterogeneity at single-cell resolution.',
    category: 'Single-Cell Genomics',
  },
  {
    title: 'NMF Signature Discovery',
    description:
      'Identifying transcriptional programs in tumor cells via non-negative matrix factorization. ' +
      'Links NMF signatures to clinical subtypes and patient outcomes in pediatric glioma cohorts.',
    category: 'Computational Biology',
  },
  {
    title: 'Tumor Microenvironment Mapping',
    description:
      'Characterizing TAM polarization states, T-cell exhaustion trajectories, and stromal remodeling ' +
      'in pediatric gliomas using multi-modal single-cell data.',
    category: 'Immunology',
  },
  {
    title: 'Cell State Transition Analysis',
    description:
      'Pseudotime trajectory and lineage tracing in glioma stem cells using diffusion maps and ' +
      'RNA velocity, revealing developmental origins of tumor aggression.',
    category: 'Trajectory Analysis',
  },
];

const Projects = () => {
  const isMobile = useIsMobile();
  return (
    <section id="projects" className="projects-section theme-section">
      {/* Background parallax element */}
      <Parallax speed={-8} disabled={isMobile} className="projects-bg-neuron">
        <NeuronGliomaStemCell width={300} height={300} opacity={0.06} />
      </Parallax>

      <div className="projects-inner">
        <span className="section-chapter">§ III · Expedition Journals</span>
        <h2 className="section-title">Expedition Journals</h2>
        <p className="section-subtitle">Documented forays into the cellular wilderness</p>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <article className="project-card reveal" key={project.title} style={{ '--card-rotation': `${i % 2 === 0 ? -1 : 1}deg` }}>
              <div className="project-card__umap">
                <UmapScatter width={180} height={150} animate={false} opacity={0.85} />
              </div>
              <div className="project-card__body">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
