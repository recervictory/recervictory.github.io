import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mock browser APIs not available in jsdom
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock react-scroll-parallax for jsdom (no ResizeObserver support)
jest.mock('react-scroll-parallax', () => ({
  ParallaxProvider: ({ children }) => children,
  Parallax: ({ children, className }) => {
    const React = require('react');
    return React.createElement('div', { className }, children);
  },
}));

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
