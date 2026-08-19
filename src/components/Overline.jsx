export default function Overline({ children, color }) {
  return (
    <div className="hero-eyebrow" style={color ? { color } : undefined}>
      {children}
    </div>
  );
}
