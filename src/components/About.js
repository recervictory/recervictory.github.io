import React from 'react';

export default function About(props) {
    let name            = '';
    let profilepic      = '';
    let bio             = '';
    let street          = '';
    let city            = '';
    let state           = '';
    let websiteUrl      = '';
    let resumeDownload  = '';

    if (props.data) {
        name           = props.data.name;
        profilepic     = 'images/' + props.data.image;
        bio            = props.data.bio;
        street         = props.data.address.street;
        city           = props.data.address.city;
        state          = props.data.address.state;
        websiteUrl     = props.data.website || props.data.email || '#';
        resumeDownload = props.data.resumedownload;
    }

    return (
        <section id="about" className="theme-section">
            <div className="about-layout">
                {/* Left column – quote + profile */}
                <div className="about-quote-col reveal">
                    <img
                        className="profile-pic"
                        src={profilepic}
                        alt={`${name} profile`}
                    />

                    <blockquote className="about-quote">
                        "It's enough for me to be sure that you and I exist at this moment."
                    </blockquote>
                    <span className="about-quote-attr">
                        — Gabriel García Márquez
                    </span>

                    <p style={{
                        fontFamily: 'var(--font-code)',
                        fontSize: '12px',
                        marginTop: '24px',
                        color: 'var(--color-blood)',
                        letterSpacing: '1px'
                    }}>
                        {street} · {city}, {state}
                    </p>

                    <a
                        href={resumeDownload}
                        className="btn-download"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa fa-download" style={{ marginRight: '8px' }}></i>
                        Download CV
                    </a>
                </div>

                {/* Right column – bio */}
                <div className="reveal" style={{ transitionDelay: '0.15s' }}>
                    <span className="section-chapter">La Soledad · The Solitude</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle" style={{ fontStyle: 'italic' }}>
                        Where magical realism meets molecular biology
                    </p>
                    <p className="about-bio">{bio}</p>

                    <hr style={{
                        border: 'none',
                        borderTop: '1px solid rgba(192,57,43,0.3)',
                        margin: '28px 0',
                    }} />

                    <div className="contact-details">
                        <h2>Contact</h2>
                        <p className="address">
                            <span style={{ display: 'block' }}>{name}</span>
                            <a href={websiteUrl} style={{ color: 'var(--color-blood)' }}>
                                recervictory.github.io
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

