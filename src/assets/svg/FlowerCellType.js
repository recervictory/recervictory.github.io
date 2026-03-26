import React from 'react';

const FlowerCellType = ({ width = 400, height = 400, opacity = 1 }) => {
  const petals = [
    { color: '#EF476F', label: 'Glioma Cell',      angle: 0   },
    { color: '#06D6A0', label: 'Astrocyte',         angle: 60  },
    { color: '#FFD166', label: 'Microglia',         angle: 120 },
    { color: '#7B2FBE', label: 'Oligodendrocyte',   angle: 180 },
    { color: '#118AB2', label: 'T-cell / TAM',      angle: 240 },
    { color: '#52B788', label: 'Endothelial',       angle: 300 },
  ];

  return (
    <svg
      viewBox="0 0 400 400"
      width={width}
      height={height}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        @keyframes flowerSpin {
          0%   { transform: rotate(0deg);   transform-origin: 200px 200px; }
          25%  { transform: rotate(2deg);   transform-origin: 200px 200px; }
          75%  { transform: rotate(-2deg);  transform-origin: 200px 200px; }
          100% { transform: rotate(0deg);   transform-origin: 200px 200px; }
        }
        .svg-FlowerCellType-petals {
          animation: flowerSpin 8s ease-in-out infinite;
          transform-origin: 200px 200px;
        }
      `}</style>

      <g className="svg-FlowerCellType-petals">
        {petals.map(({ color, label, angle }) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 200 + Math.cos(rad) * 90;
          const cy = 200 + Math.sin(rad) * 90;
          const lx = 200 + Math.cos(rad) * 148;
          const ly = 200 + Math.sin(rad) * 148 + 4;
          return (
            <g key={angle}>
              <ellipse
                cx={cx}
                cy={cy}
                rx="55"
                ry="32"
                fill={color}
                opacity="0.85"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
              <text
                x={lx}
                y={ly}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="9"
                fill={color}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {label}
              </text>
            </g>
          );
        })}
      </g>

      {/* Center soma/nucleus */}
      <circle cx="200" cy="200" r="32" fill="#F1FAEE" opacity="0.95" />
      <circle cx="200" cy="200" r="20" fill="rgba(241,250,238,0.4)" stroke="#F1FAEE" strokeWidth="0.8" />
    </svg>
  );
};

export default FlowerCellType;
