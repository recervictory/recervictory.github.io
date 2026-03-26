import React from 'react';

const NeuronGliomaStemCell = ({ width = 220, height = 220, opacity = 1 }) => (
  <svg
    viewBox="0 0 220 220"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes gliomaMorph {
        0%   { transform: scale(1)    skewX(0deg);  transform-origin: 110px 110px; }
        20%  { transform: scale(1.04) skewX(1.5deg); transform-origin: 110px 110px; }
        50%  { transform: scale(0.97) skewX(-1deg);  transform-origin: 110px 110px; }
        75%  { transform: scale(1.03) skewX(1deg);   transform-origin: 110px 110px; }
        100% { transform: scale(1)    skewX(0deg);  transform-origin: 110px 110px; }
      }
      .svg-NeuronGliomaStemCell-outer {
        animation: gliomaMorph 6s ease-in-out infinite;
        transform-origin: 110px 110px;
      }
    `}</style>

    {/* Outer irregular cytoplasm border — 12-point irregular polygon */}
    <g className="svg-NeuronGliomaStemCell-outer">
      <polygon
        points="
          110,42  130,52  155,48  168,65
          172,90  165,112 175,130 162,152
          145,168 120,172 96,175  70,162
          52,145  48,122  42,100  55,78
          62,58   82,45
        "
        fill="rgba(239,71,111,0.12)"
        stroke="#EF476F"
        strokeWidth="1.5"
      />
    </g>

    {/* 3 short pseudopodia */}
    <line x1="162" y1="152" x2="185" y2="172" stroke="#EF476F" strokeWidth="2" />
    <line x1="185" y1="172" x2="195" y2="180" stroke="#EF476F" strokeWidth="1.5" />
    <line x1="52"  y1="145" x2="30"  y2="160" stroke="#EF476F" strokeWidth="2" />
    <line x1="30"  y1="160" x2="18"  y2="170" stroke="#EF476F" strokeWidth="1.5" />
    <line x1="110" y1="42"  x2="108" y2="18"  stroke="#EF476F" strokeWidth="2" />
    <line x1="108" y1="18"  x2="106" y2="10"  stroke="#EF476F" strokeWidth="1.5" />

    {/* Nucleus — large, concentric ovals */}
    <ellipse cx="110" cy="108" rx="38" ry="33" fill="rgba(192,57,43,0.25)" stroke="#C0392B" strokeWidth="1.5" />
    <ellipse cx="110" cy="108" rx="26" ry="22" fill="rgba(192,57,43,0.35)" stroke="#C0392B" strokeWidth="1" />
    <ellipse cx="110" cy="108" rx="14" ry="12" fill="rgba(192,57,43,0.55)" stroke="#C0392B" strokeWidth="0.8" />
  </svg>
);

export default NeuronGliomaStemCell;
