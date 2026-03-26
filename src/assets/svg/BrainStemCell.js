import React from 'react';

const BrainStemCell = ({ width = 120, height = 500, opacity = 1 }) => (
  <svg
    viewBox="0 0 120 500"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes nucleusPulse {
        0%, 100% { opacity: 0.6; }
        50%       { opacity: 1.0; }
      }
      @keyframes daughterAppear {
        0%   { opacity: 0; }
        50%  { opacity: 0; }
        100% { opacity: 1; }
      }
      .svg-BrainStemCell-nucleus {
        animation: nucleusPulse 3s ease-in-out infinite;
      }
      .svg-BrainStemCell-daughter {
        animation: daughterAppear 4s ease-in-out infinite;
      }
    `}</style>

    {/* Apical process (upward) */}
    <line x1="60" y1="20"  x2="60" y2="200" stroke="#00E5FF" strokeWidth="2" />

    {/* Apical endfeet fan */}
    <line x1="60" y1="20"  x2="30" y2="8"   stroke="#00E5FF" strokeWidth="1.5" />
    <line x1="60" y1="20"  x2="45" y2="5"   stroke="#00E5FF" strokeWidth="1.2" />
    <line x1="60" y1="20"  x2="60" y2="2"   stroke="#00E5FF" strokeWidth="1.2" />
    <line x1="60" y1="20"  x2="75" y2="5"   stroke="#00E5FF" strokeWidth="1.2" />
    <line x1="60" y1="20"  x2="90" y2="8"   stroke="#00E5FF" strokeWidth="1.5" />
    {/* Endfeet expansion */}
    <ellipse cx="30" cy="6"  rx="10" ry="4" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" strokeWidth="0.8" />
    <ellipse cx="90" cy="6"  rx="10" ry="4" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" strokeWidth="0.8" />

    {/* Cell body */}
    <ellipse cx="60" cy="250" rx="18" ry="26" fill="rgba(0,229,255,0.08)" stroke="#00E5FF" strokeWidth="1.5" />

    {/* Nucleus */}
    <ellipse
      className="svg-BrainStemCell-nucleus"
      cx="60" cy="250" rx="10" ry="14"
      fill="rgba(0,229,255,0.25)"
      stroke="#00E5FF"
      strokeWidth="1"
    />

    {/* Basal process (descending) */}
    <line x1="60" y1="276" x2="60" y2="480" stroke="#00E5FF" strokeWidth="2" />
    {/* Basal foot */}
    <ellipse cx="60" cy="482" rx="14" ry="5" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" strokeWidth="0.8" />

    {/* Daughter cell budding asymmetrically */}
    <g className="svg-BrainStemCell-daughter">
      <ellipse cx="86" cy="248" rx="12" ry="16" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" strokeWidth="1.2" />
      <ellipse cx="86" cy="248" rx="6"  ry="8"  fill="rgba(0,229,255,0.2)"  stroke="#00E5FF" strokeWidth="0.8" />
      <line x1="78" y1="248" x2="72" y2="248" stroke="#00E5FF" strokeWidth="0.8" />
    </g>
  </svg>
);

export default BrainStemCell;
