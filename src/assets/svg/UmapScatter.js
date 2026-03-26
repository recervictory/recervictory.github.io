import React from 'react';

// Seeded random for deterministic cluster layouts
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const clusters = [
  { name: 'Glioma Stem Cell',    color: '#EF476F', cx: 150, cy: 180, rx: 55, ry: 42 },
  { name: 'Reactive Astrocyte',  color: '#06D6A0', cx: 300, cy: 120, rx: 50, ry: 38 },
  { name: 'Microglia / TAM',     color: '#FFD166', cx: 450, cy: 200, rx: 55, ry: 42 },
  { name: 'Oligodendrocyte',     color: '#7B2FBE', cx: 200, cy: 350, rx: 52, ry: 38 },
  { name: 'T-cell',              color: '#118AB2', cx: 400, cy: 370, rx: 50, ry: 38 },
  { name: 'Endothelial',         color: '#52B788', cx: 520, cy: 300, rx: 48, ry: 36 },
];

function generateDots(cluster, count, rand) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    const angle = rand() * 2 * Math.PI;
    const r = rand();
    const x = cluster.cx + Math.cos(angle) * cluster.rx * Math.sqrt(r);
    const y = cluster.cy + Math.sin(angle) * cluster.ry * Math.sqrt(r);
    dots.push({ x, y });
  }
  return dots;
}

const UmapScatter = ({ width = 600, height = 500, animate = false, opacity = 1 }) => {
  const rand = seededRandom(42);
  return (
    <svg
      viewBox="0 0 600 500"
      width={width}
      height={height}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <style>{`
        @keyframes dotSettle {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }
        .svg-UmapScatter-dot {
          transform-box: fill-box;
          transform-origin: center;
        }
        .svg-UmapScatter-dot.animated {
          animation: dotSettle 0.6s ease forwards;
        }
      `}</style>

      {/* Background */}
      <rect width="600" height="500" fill="transparent" />

      {/* Axis lines */}
      <line x1="40" y1="460" x2="580" y2="460" stroke="#F1FAEE" strokeWidth="0.8" opacity="0.35" />
      <line x1="40" y1="460" x2="40"  y2="20"  stroke="#F1FAEE" strokeWidth="0.8" opacity="0.35" />

      {/* Axis labels */}
      <text x="300" y="490" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#F1FAEE" opacity="0.5" textAnchor="middle">UMAP-1</text>
      <text x="16"  y="240" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#F1FAEE" opacity="0.5" textAnchor="middle" transform="rotate(-90 16 240)">UMAP-2</text>

      {clusters.map((cluster) => {
        const dots = generateDots(cluster, 25, rand);
        return (
          <g key={cluster.name}>
            {/* Contour ellipse */}
            <ellipse
              cx={cluster.cx}
              cy={cluster.cy}
              rx={cluster.rx + 15}
              ry={cluster.ry + 15}
              fill="none"
              stroke={cluster.color}
              strokeWidth="1"
              opacity="0.15"
            />
            {/* Dots */}
            {dots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r="3.5"
                fill={cluster.color}
                opacity="0.85"
                className={`svg-UmapScatter-dot${animate ? ' animated' : ''}`}
                style={animate ? { animationDelay: `${i * 0.04}s` } : {}}
              />
            ))}
            {/* Cluster label */}
            <text
              x={cluster.cx}
              y={cluster.cy - cluster.ry - 20}
              fontFamily="'JetBrains Mono', monospace"
              fontSize="11"
              fill={cluster.color}
              textAnchor="middle"
              opacity="0.9"
            >
              {cluster.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default UmapScatter;
