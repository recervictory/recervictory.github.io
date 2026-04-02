import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './styles/theme.css';
import './styles/animations.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UmapGallery from './components/UmapGallery';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Nav />
      <ParallaxProvider>
        <div className="App">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <UmapGallery />
          <Timeline />
          <Contact />
        </div>
      </ParallaxProvider>
    </>
  );
}
