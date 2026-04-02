import React, { useState, useEffect } from 'react';
import './Nav.css';

const NAV_LINKS = [
  { label: 'Field Notes', href: '#about' },
  { label: 'Specimens',   href: '#skills' },
  { label: 'Journals',    href: '#projects' },
  { label: 'Scatter',     href: '#umap' },
  { label: 'Log',         href: '#timeline' },
  { label: 'Contact',     href: '#contact' },
];

const SECTION_IDS = ['about', 'skills', 'projects', 'umap', 'timeline', 'contact'];

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive]   = useState('');

  // Show nav after scrolling past viewport height
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.35 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav
      className={`cinematic-nav${visible ? ' cinematic-nav--visible' : ''}`}
      aria-label="Chapter navigation"
    >
      <a href="#home" className="cinematic-nav__wordmark" aria-label="Back to top">
        Victor Banerjee
      </a>

      <ul className="cinematic-nav__links">
        {NAV_LINKS.map(({ label, href }) => {
          const id = href.slice(1);
          return (
            <li key={id}>
              <a
                href={href}
                className={`cinematic-nav__link${active === id ? ' cinematic-nav__link--active' : ''}`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
