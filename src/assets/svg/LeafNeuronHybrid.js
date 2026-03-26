import React from 'react';

const LeafNeuronHybrid = ({ width = 300, height = 500, opacity = 1 }) => (
  <svg
    viewBox="0 0 300 500"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="leafVeinGlow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <style>{`
      @keyframes leafSway {
        0%, 100% { transform: rotate(0deg);   transform-origin: 150px 480px; }
        33%       { transform: rotate(3deg);   transform-origin: 150px 480px; }
        66%       { transform: rotate(-3deg);  transform-origin: 150px 480px; }
      }
      .svg-LeafNeuronHybrid-root {
        animation: leafSway 6s ease-in-out infinite;
        transform-origin: 150px 480px;
      }
    `}</style>

    <g className="svg-LeafNeuronHybrid-root">
      {/* Monstera leaf outline */}
      <path
        d="
          M 150 480
          C 50 400, 20 300, 30 220
          C 40 160, 60 120, 80 90
          C 60 80, 50 65, 55 50
          C 70 30, 95 20, 115 25
          C 120 10, 135 5, 150 8
          C 165 5, 180 10, 185 25
          C 205 20, 230 30, 245 50
          C 250 65, 240 80, 220 90
          C 240 120, 260 160, 270 220
          C 280 300, 250 400, 150 480
          Z
        "
        fill="rgba(45,106,45,0.15)"
        stroke="#2D6A2D"
        strokeWidth="2"
      />

      {/* Monstera fenestrations (holes) */}
      <ellipse cx="95"  cy="180" rx="18" ry="28" fill="#0B1A0E" stroke="#2D6A2D" strokeWidth="1" />
      <ellipse cx="205" cy="180" rx="18" ry="28" fill="#0B1A0E" stroke="#2D6A2D" strokeWidth="1" />
      <ellipse cx="80"  cy="250" rx="14" ry="22" fill="#0B1A0E" stroke="#2D6A2D" strokeWidth="1" />
      <ellipse cx="220" cy="250" rx="14" ry="22" fill="#0B1A0E" stroke="#2D6A2D" strokeWidth="1" />

      {/* Vein network — dendritic tree — with glow filter */}
      <g filter="url(#leafVeinGlow)" stroke="#7B2FBE" fill="none">
        {/* Primary midrib / axon (thick) */}
        <line x1="150" y1="480" x2="150" y2="30" stroke="#7B2FBE" strokeWidth="2.5" />

        {/* Secondary veins / primary dendrites */}
        <line x1="150" y1="380" x2="90"  y2="340" strokeWidth="1.6" />
        <line x1="150" y1="380" x2="210" y2="340" strokeWidth="1.6" />
        <line x1="150" y1="320" x2="75"  y2="270" strokeWidth="1.6" />
        <line x1="150" y1="320" x2="225" y2="270" strokeWidth="1.6" />
        <line x1="150" y1="250" x2="68"  y2="200" strokeWidth="1.6" />
        <line x1="150" y1="250" x2="232" y2="200" strokeWidth="1.6" />
        <line x1="150" y1="180" x2="100" y2="140" strokeWidth="1.4" />
        <line x1="150" y1="180" x2="200" y2="140" strokeWidth="1.4" />
        <line x1="150" y1="120" x2="118" y2="90"  strokeWidth="1.2" />
        <line x1="150" y1="120" x2="182" y2="90"  strokeWidth="1.2" />
        <line x1="150" y1="70"  x2="135" y2="50"  strokeWidth="1" />
        <line x1="150" y1="70"  x2="165" y2="50"  strokeWidth="1" />

        {/* Tertiary veins / dendritic spines */}
        <line x1="90"  y1="340" x2="68"  y2="320" strokeWidth="0.9" />
        <line x1="90"  y1="340" x2="80"  y2="315" strokeWidth="0.9" />
        <line x1="90"  y1="340" x2="72"  y2="345" strokeWidth="0.8" />
        <line x1="210" y1="340" x2="232" y2="320" strokeWidth="0.9" />
        <line x1="210" y1="340" x2="220" y2="315" strokeWidth="0.9" />
        <line x1="210" y1="340" x2="228" y2="345" strokeWidth="0.8" />

        <line x1="75"  y1="270" x2="55"  y2="255" strokeWidth="0.9" />
        <line x1="75"  y1="270" x2="60"  y2="265" strokeWidth="0.8" />
        <line x1="75"  y1="270" x2="58"  y2="278" strokeWidth="0.8" />
        <line x1="225" y1="270" x2="245" y2="255" strokeWidth="0.9" />
        <line x1="225" y1="270" x2="240" y2="265" strokeWidth="0.8" />
        <line x1="225" y1="270" x2="242" y2="278" strokeWidth="0.8" />

        <line x1="68"  y1="200" x2="52"  y2="188" strokeWidth="0.8" />
        <line x1="68"  y1="200" x2="54"  y2="205" strokeWidth="0.8" />
        <line x1="232" y1="200" x2="248" y2="188" strokeWidth="0.8" />
        <line x1="232" y1="200" x2="246" y2="205" strokeWidth="0.8" />

        <line x1="100" y1="140" x2="85"  y2="128" strokeWidth="0.7" />
        <line x1="100" y1="140" x2="88"  y2="138" strokeWidth="0.7" />
        <line x1="200" y1="140" x2="215" y2="128" strokeWidth="0.7" />
        <line x1="200" y1="140" x2="212" y2="138" strokeWidth="0.7" />
      </g>
    </g>
  </svg>
);

export default LeafNeuronHybrid;
