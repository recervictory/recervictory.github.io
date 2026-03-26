import React from 'react';

const NeuronMicroglia = ({ width = 250, height = 250, opacity = 1, color = '#7B2FBE' }) => (
  <svg
    viewBox="0 0 250 250"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes microgliaWave {
        0%   { transform: rotate(0deg);   transform-origin: 125px 125px; }
        25%  { transform: rotate(2deg);   transform-origin: 125px 125px; }
        75%  { transform: rotate(-2deg);  transform-origin: 125px 125px; }
        100% { transform: rotate(0deg);   transform-origin: 125px 125px; }
      }
      .svg-NeuronMicroglia-branches {
        animation: microgliaWave 8s ease-in-out infinite;
        transform-origin: 125px 125px;
      }
    `}</style>

    {/* Small elongated soma */}
    <ellipse cx="125" cy="125" rx="10" ry="15" fill="rgba(123,47,190,0.2)" stroke={color} strokeWidth="0.9" />

    {/* Fractal processes — level 1 branches */}
    <g className="svg-NeuronMicroglia-branches" stroke={color} strokeWidth="0.8" fill="none">
      {/* Branch group 1 — top */}
      <line x1="125" y1="110" x2="120" y2="82" />
      <line x1="120" y1="82"  x2="110" y2="62" />
      <line x1="110" y1="62"  x2="100" y2="48" />
      <line x1="110" y1="62"  x2="115" y2="48" />
      <line x1="120" y1="82"  x2="128" y2="65" />
      <line x1="128" y1="65"  x2="122" y2="52" />
      <line x1="128" y1="65"  x2="135" y2="53" />

      {/* Branch group 2 — top-right */}
      <line x1="133" y1="115" x2="155" y2="92" />
      <line x1="155" y1="92"  x2="170" y2="75" />
      <line x1="170" y1="75"  x2="180" y2="60" />
      <line x1="170" y1="75"  x2="182" y2="78" />
      <line x1="155" y1="92"  x2="168" y2="100" />
      <line x1="168" y1="100" x2="180" y2="92" />
      <line x1="168" y1="100" x2="175" y2="110" />

      {/* Branch group 3 — right */}
      <line x1="135" y1="128" x2="162" y2="128" />
      <line x1="162" y1="128" x2="185" y2="120" />
      <line x1="185" y1="120" x2="200" y2="112" />
      <line x1="185" y1="120" x2="198" y2="128" />
      <line x1="162" y1="128" x2="182" y2="138" />
      <line x1="182" y1="138" x2="196" y2="132" />
      <line x1="182" y1="138" x2="192" y2="148" />

      {/* Branch group 4 — bottom-right */}
      <line x1="130" y1="140" x2="152" y2="162" />
      <line x1="152" y1="162" x2="165" y2="178" />
      <line x1="165" y1="178" x2="172" y2="192" />
      <line x1="165" y1="178" x2="178" y2="178" />
      <line x1="152" y1="162" x2="164" y2="170" />
      <line x1="164" y1="170" x2="178" y2="168" />

      {/* Branch group 5 — bottom */}
      <line x1="122" y1="140" x2="118" y2="168" />
      <line x1="118" y1="168" x2="108" y2="185" />
      <line x1="108" y1="185" x2="98"  y2="198" />
      <line x1="108" y1="185" x2="112" y2="200" />
      <line x1="118" y1="168" x2="125" y2="185" />
      <line x1="125" y1="185" x2="118" y2="200" />
      <line x1="125" y1="185" x2="133" y2="198" />

      {/* Branch group 6 — bottom-left */}
      <line x1="115" y1="135" x2="92"  y2="158" />
      <line x1="92"  y1="158" x2="76"  y2="174" />
      <line x1="76"  y1="174" x2="62"  y2="185" />
      <line x1="76"  y1="174" x2="72"  y2="188" />
      <line x1="92"  y1="158" x2="80"  y2="165" />
      <line x1="80"  y1="165" x2="68"  y2="172" />

      {/* Branch group 7 — left */}
      <line x1="112" y1="125" x2="85"  y2="122" />
      <line x1="85"  y1="122" x2="62"  y2="115" />
      <line x1="62"  y1="115" x2="45"  y2="108" />
      <line x1="62"  y1="115" x2="52"  y2="128" />
      <line x1="85"  y1="122" x2="70"  y2="132" />
      <line x1="70"  y1="132" x2="55"  y2="138" />
      <line x1="70"  y1="132" x2="58"  y2="145" />

      {/* Branch group 8 — top-left */}
      <line x1="115" y1="112" x2="95"  y2="90" />
      <line x1="95"  y1="90"  x2="80"  y2="72" />
      <line x1="80"  y1="72"  x2="68"  y2="58" />
      <line x1="80"  y1="72"  x2="70"  y2="76" />
      <line x1="95"  y1="90"  x2="85"  y2="98" />
      <line x1="85"  y1="98"  x2="72"  y2="100" />
      <line x1="85"  y1="98"  x2="74"  y2="108" />
    </g>
  </svg>
);

export default NeuronMicroglia;
