import React from 'react';

const NeuronOligodendrocyte = ({ width = 350, height = 200, opacity = 1 }) => (
  <svg
    viewBox="0 0 350 200"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes myelinPulse {
        0%   { opacity: 0.4; }
        20%  { opacity: 1.0; }
        40%  { opacity: 0.4; }
        60%  { opacity: 1.0; }
        80%  { opacity: 0.4; }
        100% { opacity: 0.4; }
      }
      .svg-NeuronOligodendrocyte-myelin-1 { animation: myelinPulse 3s 0.0s ease-in-out infinite; }
      .svg-NeuronOligodendrocyte-myelin-2 { animation: myelinPulse 3s 0.5s ease-in-out infinite; }
      .svg-NeuronOligodendrocyte-myelin-3 { animation: myelinPulse 3s 1.0s ease-in-out infinite; }
      .svg-NeuronOligodendrocyte-myelin-4 { animation: myelinPulse 3s 1.5s ease-in-out infinite; }
      .svg-NeuronOligodendrocyte-myelin-5 { animation: myelinPulse 3s 2.0s ease-in-out infinite; }
    `}</style>

    {/* Central soma */}
    <circle cx="175" cy="100" r="20" fill="#FFD166" stroke="#FFD166" strokeWidth="1" opacity="0.9" />

    {/* Process + axon + internodes: radiating in 5 directions */}

    {/* Process 1 — up-left */}
    <line x1="160" y1="86" x2="60" y2="30" stroke="#1A2A0A" strokeWidth="1.5" />
    <g className="svg-NeuronOligodendrocyte-myelin-1">
      <ellipse cx="130" cy="65" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 130 65)" />
      <ellipse cx="104" cy="51" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 104 51)" />
      <ellipse cx="78"  cy="37" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 78 37)" />
    </g>

    {/* Process 2 — up-right */}
    <line x1="190" y1="86" x2="290" y2="30" stroke="#1A2A0A" strokeWidth="1.5" />
    <g className="svg-NeuronOligodendrocyte-myelin-2">
      <ellipse cx="220" cy="65" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 220 65)" />
      <ellipse cx="246" cy="51" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 246 51)" />
      <ellipse cx="272" cy="37" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 272 37)" />
    </g>

    {/* Process 3 — right */}
    <line x1="195" y1="100" x2="340" y2="100" stroke="#1A2A0A" strokeWidth="1.5" />
    <g className="svg-NeuronOligodendrocyte-myelin-3">
      <ellipse cx="235" cy="100" rx="14" ry="7" fill="#FFD166" opacity="0.85" />
      <ellipse cx="270" cy="100" rx="14" ry="7" fill="#FFD166" opacity="0.85" />
      <ellipse cx="308" cy="100" rx="14" ry="7" fill="#FFD166" opacity="0.85" />
    </g>

    {/* Process 4 — down-left */}
    <line x1="160" y1="114" x2="60" y2="170" stroke="#1A2A0A" strokeWidth="1.5" />
    <g className="svg-NeuronOligodendrocyte-myelin-4">
      <ellipse cx="130" cy="135" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 130 135)" />
      <ellipse cx="104" cy="149" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 104 149)" />
      <ellipse cx="78"  cy="163" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(30 78 163)" />
    </g>

    {/* Process 5 — down-right */}
    <line x1="190" y1="114" x2="290" y2="170" stroke="#1A2A0A" strokeWidth="1.5" />
    <g className="svg-NeuronOligodendrocyte-myelin-5">
      <ellipse cx="220" cy="135" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 220 135)" />
      <ellipse cx="246" cy="149" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 246 149)" />
      <ellipse cx="272" cy="163" rx="14" ry="7" fill="#FFD166" opacity="0.85" transform="rotate(-30 272 163)" />
    </g>
  </svg>
);

export default NeuronOligodendrocyte;
