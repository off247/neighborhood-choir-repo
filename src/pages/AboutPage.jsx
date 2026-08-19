import Overline from '../components/Overline.jsx';

export default function AboutPage() {
  return (
    <div
      className="page"
      style={{
        minHeight: 420,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Overline>about</Overline>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '3rem',
          textTransform: 'lowercase',
          letterSpacing: '-0.015em',
          margin: '8px 0 12px',
        }}
      >
        coming soon.
      </h1>
      <p style={{ fontSize: 18, color: 'var(--color-ink-soft)', maxWidth: '40ch' }}>
        We&apos;re still writing this page. Check back soon to meet the choir.
      </p>
    </div>
  );
}
