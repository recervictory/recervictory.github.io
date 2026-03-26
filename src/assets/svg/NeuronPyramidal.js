import React from 'react';

const NeuronPyramidal = ({ width = 200, height = 400, opacity = 1, color = '#F1FAEE' }) => (
  <svg
    viewBox="0 0 200 400"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes pyramidalPulse {
        0%, 100% { opacity: 0.6; }
        50%       { opacity: 1.0; }
      }
      .svg-NeuronPyramidal-soma {
        animation: pyramidalPulse 3s ease-in-out infinite;
      }
    `}</style>

    {/* Apical dendrite (upward) */}
    <line x1="100" y1="140" x2="100" y2="20" stroke={color} strokeWidth="1.5" fill="none" />
    {/* Apical tuft branches */}
    <line x1="100" y1="50" x2="75"  y2="20"  stroke={color} strokeWidth="1" fill="none" />
    <line x1="100" y1="50" x2="125" y2="20"  stroke={color} strokeWidth="1" fill="none" />
    <line x1="100" y1="30" x2="88"  y2="10"  stroke={color} strokeWidth="0.8" fill="none" />
    <line x1="100" y1="30" x2="112" y2="10"  stroke={color} strokeWidth="0.8" fill="none" />
    <line x1="75"  y1="20" x2="60"  y2="8"   stroke={color} strokeWidth="0.7" fill="none" />
    <line x1="125" y1="20" x2="140" y2="8"   stroke={color} strokeWidth="0.7" fill="none" />

    {/* Oblique apical dendrites */}
    <line x1="100" y1="100" x2="65"  y2="65"  stroke={color} strokeWidth="1" fill="none" />
    <line x1="65"  y1="65"  x2="50"  y2="45"  stroke={color} strokeWidth="0.8" fill="none" />
    <line x1="65"  y1="65"  x2="40"  y2="60"  stroke={color} strokeWidth="0.7" fill="none" />
    <line x1="100" y1="100" x2="135" y2="65"  stroke={color} strokeWidth="1" fill="none" />
    <line x1="135" y1="65"  x2="150" y2="45"  stroke={color} strokeWidth="0.8" fill="none" />
    <line x1="135" y1="65"  x2="158" y2="60"  stroke={color} strokeWidth="0.7" fill="none" />

    {/* Triangular soma */}
    <polygon
      className="svg-NeuronPyramidal-soma"
      points="100,140 65,210 135,210"
      fill="rgba(241,250,238,0.08)"
      stroke={color}
      strokeWidth="1.5"
    />

    {/* Basal dendrites (downward from base) */}
    <line x1="75"  y1="210" x2="50"  y2="255" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="50"  y1="255" x2="30"  y2="275" stroke={color} strokeWidth="1" fill="none" />
    <line x1="50"  y1="255" x2="55"  y2="280" stroke={color} strokeWidth="0.8" fill="none" />
    <line x1="75"  y1="210" x2="68"  y2="260" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="68"  y1="260" x2="55"  y2="285" stroke={color} strokeWidth="1" fill="none" />
    <line x1="100" y1="210" x2="100" y2="260" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="100" y1="260" x2="90"  y2="285" stroke={color} strokeWidth="1" fill="none" />
    <line x1="100" y1="260" x2="110" y2="285" stroke={color} strokeWidth="1" fill="none" />
    <line x1="125" y1="210" x2="132" y2="260" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="132" y1="260" x2="145" y2="285" stroke={color} strokeWidth="1" fill="none" />
    <line x1="125" y1="210" x2="150" y2="255" stroke={color} strokeWidth="1.2" fill="none" />
    <line x1="150" y1="255" x2="170" y2="275" stroke={color} strokeWidth="1" fill="none" />
    <line x1="150" y1="255" x2="145" y2="280" stroke={color} strokeWidth="0.8" fill="none" />

    {/* Axon (long, descending) */}
    <line x1="100" y1="210" x2="100" y2="340" stroke={color} strokeWidth="1.5" fill="none" />
    {/* Axon collaterals */}
    <line x1="100" y1="270" x2="70"  y2="300" stroke={color} strokeWidth="0.9" fill="none" />
    <line x1="70"  y1="300" x2="55"  y2="315" stroke={color} strokeWidth="0.7" fill="none" />
    <line x1="100" y1="310" x2="128" y2="335" stroke={color} strokeWidth="0.9" fill="none" />
    <line x1="128" y1="335" x2="145" y2="348" stroke={color} strokeWidth="0.7" fill="none" />
    {/* Axon terminal */}
    <line x1="100" y1="340" x2="82"  y2="370" stroke={color} strokeWidth="0.9" fill="none" />
    <line x1="100" y1="340" x2="100" y2="378" stroke={color} strokeWidth="0.9" fill="none" />
    <line x1="100" y1="340" x2="118" y2="370" stroke={color} strokeWidth="0.9" fill="none" />
  </svg>
);

export default NeuronPyramidal;
