import React from 'react';

const NeuronAstrocyte = ({ width = 300, height = 300, opacity = 1 }) => (
  <svg
    viewBox="0 0 300 300"
    width={width}
    height={height}
    style={{ opacity }}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <style>{`
      @keyframes astrocyteBreath {
        0%, 100% { transform: scale(1); transform-origin: 150px 150px; }
        50%       { transform: scale(1.06); transform-origin: 150px 150px; }
      }
      .svg-NeuronAstrocyte-processes {
        animation: astrocyteBreath 4s ease-in-out infinite;
        transform-origin: 150px 150px;
      }
    `}</style>

    {/* Soma (rounded) */}
    <circle cx="150" cy="150" r="28" fill="#52B788" stroke="#52B788" strokeWidth="1" opacity="0.9" />

    {/* 10 processes radiating outward */}
    <g className="svg-NeuronAstrocyte-processes" stroke="#95D5B2" strokeWidth="2.5" fill="none">
      {/* Process 1 — 0° */}
      <path d="M 150 122 Q 155 90 158 60" />
      <path d="M 158 60 Q 165 45 175 35" />
      <path d="M 158 60 Q 150 42 145 28" />
      <path d="M 158 60 Q 148 52 138 45" />

      {/* Process 2 — 36° */}
      <path d="M 173 130 Q 202 108 228 85" />
      <path d="M 228 85 Q 242 75 255 68" />
      <path d="M 228 85 Q 235 72 230 58" />

      {/* Process 3 — 72° */}
      <path d="M 178 155 Q 212 150 245 148" />
      <path d="M 245 148 Q 260 148 272 142" />
      <path d="M 245 148 Q 258 158 265 168" />

      {/* Process 4 — 108° */}
      <path d="M 172 174 Q 198 198 218 225" />
      <path d="M 218 225 Q 228 238 232 252" />
      <path d="M 218 225 Q 230 220 240 218" />

      {/* Process 5 — 144° */}
      <path d="M 152 178 Q 155 212 155 242" />
      <path d="M 155 242 Q 152 258 148 272" />
      <path d="M 155 242 Q 165 255 170 265" />
      <path d="M 155 242 Q 143 255 135 265" />

      {/* Process 6 — 180° */}
      <path d="M 128 170 Q 100 192 72 214" />
      <path d="M 72 214 Q 58 226 45 232" />
      <path d="M 72 214 Q 65 228 60 242" />

      {/* Process 7 — 216° */}
      <path d="M 122 152 Q 90 152 58 148" />
      <path d="M 58 148 Q 42 146 28 140" />
      <path d="M 58 148 Q 44 158 35 168" />

      {/* Process 8 — 252° */}
      <path d="M 126 130 Q 98 110 72 88" />
      <path d="M 72 88 Q 58 75 45 65" />
      <path d="M 72 88 Q 60 80 52 70" />

      {/* Process 9 — 288° */}
      <path d="M 140 122 Q 130 88 118 60" />
      <path d="M 118 60 Q 110 44 100 32" />
      <path d="M 118 60 Q 125 45 132 35" />

      {/* Process 10 — 324° */}
      <path d="M 162 126 Q 180 96 195 68" />
      <path d="M 195 68 Q 205 52 212 38" />
      <path d="M 195 68 Q 205 70 212 75" />
    </g>
  </svg>
);

export default NeuronAstrocyte;
