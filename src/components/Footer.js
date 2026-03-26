import React from 'react';
import FireflyCanvas from './FireflyCanvas';

export default function Footer(props) {
    let networks = null;

    if (props.data) {
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
        <footer id="contact">
            <FireflyCanvas count={35} color="#D4A843" accentColor="#00E5FF" />

            <div className="footer-inner">
                <p className="footer-chapter">El Fin · The End</p>
                <h2 className="footer-title">Let's Connect</h2>
                <p className="footer-subtitle">
                    "There is always something left to love." — G.G. Márquez
                </p>

                <ul className="social-links">
                    {networks}
                </ul>

                <ul className="copyright">
                    <li>&copy; {new Date().getFullYear()} Victor Banerjee</li>
                    <li>
                        Design by{' '}
                        <a
                            title="recervictory"
                            href="https://github.com/recervictory"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Recervictory
                        </a>
                    </li>
                </ul>

                <div id="go-top">
                    <a
                        className="smoothscroll"
                        title="Back to Top"
                        href="#home"
                        aria-label="Back to top"
                    >
                        <i className="icon-up-open"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

