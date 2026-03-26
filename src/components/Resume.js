import React, { useEffect, useRef } from 'react';

/**
 * GeneBar — a single animated skill bar that fills on scroll-reveal.
 */
function GeneBar({ name, level }) {
    const fillRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = fillRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    el.style.width = level;
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el.parentElement);
        return () => observer.disconnect();
    }, [level]);

    return (
        <li className="gene-bar-item reveal">
            <div className="gene-bar-label">
                <span className="gene-bar-name">{name}</span>
                <span className="gene-bar-level">{level}</span>
            </div>
            <div className="gene-bar-track">
                <div ref={fillRef} className="gene-bar-fill" />
            </div>
        </li>
    );
}

export default function Resume(props) {
    let skillmessage = '';
    let education    = null;
    let work         = null;
    let skills       = null;

    if (props.data) {
        skillmessage = props.data.skillmessage;

        education = props.data.education.map(function (edu) {
            return (
                <div key={edu.school} className="timeline-item reveal">
                    <span className="timeline-dot" aria-hidden="true"></span>
                    <h3>{edu.school}</h3>
                    <p className="timeline-role">{edu.degree}</p>
                    <p className="timeline-date">{edu.graduated}</p>
                    <p>{edu.description}</p>
                </div>
            );
        });

        work = props.data.work.map(function (job) {
            return (
                <div key={job.company} className="timeline-item reveal">
                    <span className="timeline-dot" aria-hidden="true"></span>
                    <h3>{job.company}</h3>
                    <p className="timeline-role">{job.title}</p>
                    <p className="timeline-date">{job.years}</p>
                    <p>{job.description}</p>
                </div>
            );
        });

        skills = props.data.skills.map(function (skill) {
            return (
                <GeneBar key={skill.name} name={skill.name} level={skill.level} />
            );
        });
    }

    return (
        <section id="resume">
            <div className="resume-inner">
                {/* ── Skills – Los Genes ── */}
                <div className="skills-section reveal">
                    <span className="section-chapter">Los Genes · The Genes</span>
                    <h2 className="section-title">Research Skills</h2>
                    <p className="section-subtitle">
                        {skillmessage}
                    </p>
                    <ul className="gene-bars">
                        {skills}
                    </ul>
                </div>

                <hr className="theme-divider" style={{ maxWidth: '100%', opacity: 0.2 }} />

                {/* ── Education – El Legado ── */}
                <div className="timeline-section">
                    <span className="section-chapter">El Legado · The Legacy</span>
                    <h2 className="section-title">Education</h2>
                    <div className="timeline">
                        {education}
                    </div>
                </div>

                {/* ── Work Experience ── */}
                <div className="timeline-section">
                    <h2 className="section-title" style={{ marginTop: '48px' }}>Experience</h2>
                    <div className="timeline">
                        {work}
                    </div>
                </div>
            </div>
        </section>
    );
}

