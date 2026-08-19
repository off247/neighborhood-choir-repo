export default function MarkArcs({ size = 96, height = 66 }) {
  return (
    <svg width={size} height={height} viewBox="0 0 160 110" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeLinecap="round">
        <path d="M 10 88 L 10 56 L 32 36 L 54 56 L 54 88 Z" strokeWidth="2.4" />
        <path d="M 40 41 L 40 28 L 47 28 L 47 47" strokeWidth="1.8" />
        <path d="M 26 88 L 26 68 L 38 68 L 38 88" strokeWidth="1.7" />
        <circle cx="36" cy="79" r="0.9" fill="currentColor" stroke="none" />
        <path d="M 14 64 L 14 52 L 22 52 L 22 64 Z" strokeWidth="1.4" />
        <line x1="18" y1="52" x2="18" y2="64" strokeWidth="1" />
        <line x1="14" y1="58" x2="22" y2="58" strokeWidth="1" />
        <path d="M 54 88 L 54 50 L 80 24 L 106 50 L 106 88 Z" strokeWidth="2.4" />
        <circle cx="80" cy="44" r="3.4" strokeWidth="1.4" />
        <path d="M 62 70 L 62 58 L 72 58 L 72 70 Z" strokeWidth="1.4" />
        <line x1="67" y1="58" x2="67" y2="70" strokeWidth="1" />
        <line x1="62" y1="64" x2="72" y2="64" strokeWidth="1" />
        <path d="M 88 70 L 88 58 L 98 58 L 98 70 Z" strokeWidth="1.4" />
        <line x1="93" y1="58" x2="93" y2="70" strokeWidth="1" />
        <line x1="88" y1="64" x2="98" y2="64" strokeWidth="1" />
        <path d="M 75 88 L 75 76 L 85 76 L 85 88" strokeWidth="1.7" />
        <path d="M 106 88 L 106 60 L 124 44 L 142 60 L 142 88 Z" strokeWidth="2.4" />
        <path d="M 110 78 L 110 66 L 122 66 L 122 78 Z" strokeWidth="1.4" />
        <line x1="116" y1="66" x2="116" y2="78" strokeWidth="1" />
        <circle cx="116" cy="72" r="1.4" fill="currentColor" stroke="none" opacity="0.7" />
        <path d="M 128 88 L 128 72 L 138 72 L 138 88" strokeWidth="1.7" />
        <path d="M 4 92 Q 26 94 50 92 Q 78 90 108 93 Q 132 95 152 92" strokeWidth="2" />
      </g>
    </svg>
  );
}
