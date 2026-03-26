import React from 'react';

const SynapseConnection = ({ width = 300, height = 200, opacity = 1 }) => (
  <svg
    viewBox="0 0 300 200"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes synapticRelease {
        0%   { transform: translateX(0);   opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 1; }
        100% { transform: translateX(52px); opacity: 0; }
      }
      .svg-SynapseConnection-nt1 { animation: synapticRelease 2s 0.0s ease-in-out infinite; }
      .svg-SynapseConnection-nt2 { animation: synapticRelease 2s 0.5s ease-in-out infinite; }
      .svg-SynapseConnection-nt3 { animation: synapticRelease 2s 1.0s ease-in-out infinite; }
      .svg-SynapseConnection-nt4 { animation: synapticRelease 2s 1.5s ease-in-out infinite; }
    `}</style>

    {/* Pre-synaptic terminal bulb */}
    <ellipse cx="90" cy="100" rx="55" ry="60" fill="rgba(241,250,238,0.06)" stroke="#F1FAEE" strokeWidth="1.5" />

    {/* Vesicles inside terminal */}
    <circle cx="70"  cy="85"  r="7" fill="#FFD166" opacity="0.85" />
    <circle cx="90"  cy="78"  r="7" fill="#FFD166" opacity="0.85" />
    <circle cx="110" cy="88"  r="7" fill="#FFD166" opacity="0.85" />
    <circle cx="75"  cy="108" r="7" fill="#FFD166" opacity="0.85" />
    <circle cx="100" cy="112" r="7" fill="#FFD166" opacity="0.85" />
    <circle cx="85"  cy="130" r="7" fill="#FFD166" opacity="0.85" />

    {/* Pre-synaptic membrane */}
    <line x1="145" y1="55" x2="145" y2="145" stroke="#F1FAEE" strokeWidth="2.5" />

    {/* Synaptic cleft (gap visible) */}

    {/* Post-synaptic membrane (thickened) */}
    <line x1="195" y1="55" x2="195" y2="145" stroke="#F1FAEE" strokeWidth="3.5" />

    {/* Receptors on post-synaptic density */}
    <rect x="195" y="68"  width="8" height="14" rx="2" fill="rgba(241,250,238,0.5)" />
    <rect x="195" y="90"  width="8" height="14" rx="2" fill="rgba(241,250,238,0.5)" />
    <rect x="195" y="112" width="8" height="14" rx="2" fill="rgba(241,250,238,0.5)" />
    <rect x="195" y="134" width="8" height="12" rx="2" fill="rgba(241,250,238,0.5)" />

    {/* Neurotransmitter dots crossing the cleft */}
    <circle className="svg-SynapseConnection-nt1" cx="148" cy="75"  r="4" fill="#FFD166" />
    <circle className="svg-SynapseConnection-nt2" cx="148" cy="95"  r="4" fill="#FFD166" />
    <circle className="svg-SynapseConnection-nt3" cx="148" cy="115" r="4" fill="#FFD166" />
    <circle className="svg-SynapseConnection-nt4" cx="148" cy="135" r="4" fill="#FFD166" />

    {/* Labels */}
    <text x="90"  y="176" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#F1FAEE" opacity="0.5" textAnchor="middle">Pre-synaptic</text>
    <text x="215" y="176" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#F1FAEE" opacity="0.5" textAnchor="middle">Post-synaptic</text>
  </svg>
);

export default SynapseConnection;
