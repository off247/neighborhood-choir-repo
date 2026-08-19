export default function PersonAvatar({ color }) {
  return (
    <div className="person-avatar" style={{ background: color }}>
      <svg viewBox="0 0 60 60">
        <circle cx="30" cy="22" r="10" fill="rgba(255,255,255,0.85)" />
        <path d="M 8 56 Q 30 36 52 56 Z" fill="rgba(255,255,255,0.85)" />
      </svg>
    </div>
  );
}
