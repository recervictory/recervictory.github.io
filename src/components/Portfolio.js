import React from 'react';

export default function Portfolio(props) {
    let projects = null;

    if (props.data) {
        projects = props.data.projects.map(function (project) {
            const projectImage = 'images/portfolio/' + project.image;

            return (
                <article key={project.title} className="manuscript-card reveal">
                    <div className="card-image">
                        <img src={projectImage} alt={project.title} />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-category">{project.category}</p>
                        <a
                            href={project.url}
                            className="card-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project →
                        </a>
                    </div>
                </article>
            );
        });
    }

    return (
        <section id="portfolio">
            <div className="portfolio-inner">
                <span className="section-chapter">Los Cuentos · The Stories</span>
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Each project a manuscript — data encoded, stories decoded.
                </p>
                <div id="portfolio-wrapper">
                    {projects}
                </div>
            </div>
        </section>
    );
}

