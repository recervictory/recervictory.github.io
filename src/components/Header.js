import React from "react";
import FireflyCanvas from "./FireflyCanvas";

export default function Header(props) {
    let name     = '';
    let networks = null;

    if (props.data) {
        name = props.data.name;
        networks = props.data.social.map(function (network) {
            return (
                <li key={network.name}>
                    <a href={network.url} aria-label={network.name}>
                        <i className={network.className}></i>
                    </a>
                </li>
            );
        });
    }

    return (
        <header id="home">
            {/* Bioluminescent firefly particles */}
            <FireflyCanvas count={60} color="#00E5FF" accentColor="#D4A843" />

            {/* Navigation */}
            <nav id="nav-wrap" aria-label="Main navigation">
                <ul id="nav" className="nav">
                    <li className="current">
                        <a className="smoothscroll" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#about">About</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#resume">Research</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#portfolio">Projects</a>
                    </li>
                    <li>
                        <a className="smoothscroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Hero content */}
            <div className="row banner">
                <div className="banner-text">
                    <p className="hero-tagline">El principio · The Origin</p>
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>
                        Unraveling the stories written in tumor cells —{" "}
                        <span style={{ color: "var(--color-cyan)" }}>
                            pediatric brain tumor genomics
                        </span>
                        , single-cell RNA-seq &amp; NMF signatures.
                    </h3>
                    <hr className="theme-divider" />
                    <ul className="social-links" style={{ marginTop: '20px' }}>
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about" aria-label="Scroll down">
                    <i className="icon-down-circle"></i>
                </a>
            </p>
        </header>
    );
}

