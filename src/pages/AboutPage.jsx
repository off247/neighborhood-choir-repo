import Overline from '../components/Overline.jsx';
import PersonAvatar from '../components/PersonAvatar.jsx';

export default function AboutPage() {
  return (
    <div className="page">
      <Overline>about</Overline>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '3rem',
          lineHeight: 1.05,
          textTransform: 'lowercase',
          letterSpacing: '-0.015em',
          margin: '8px 0 18px',
        }}
      >
        who we are.
      </h1>
      <p
        className="lead"
        style={{
          fontSize: 18,
          color: 'var(--color-ink-soft)',
          lineHeight: 1.55,
          maxWidth: '68ch',
          marginBottom: 64,
        }}
      >
        The Neighborhood Choir welcomes singers of all backgrounds and experience levels to
        experience the joy of making music together. At the heart of the choir is the simple
        pleasure of gathering each week, singing together, and building a sense of community.
        Our rehearsals are a place to learn, laugh, and connect — no audition or prior
        experience required.
      </p>

      <Overline>meet the leadership</Overline>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginTop: 8 }}>
        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ width: 140, flexShrink: 0 }}>
            <PersonAvatar color="var(--color-hearth)" />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, margin: '0 0 2px' }}>
              Nathan Knoll
            </h3>
            <p
              className="role"
              style={{
                fontSize: 13,
                color: 'var(--color-ink-quiet)',
                margin: '0 0 14px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Director
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink-soft)', margin: '0 0 16px', maxWidth: '60ch' }}>
              Nathan Knoll has directed The Neighborhood Choir since 2017, bringing a love of
              singing, community, and the shared experience of making music to each rehearsal.
              A music educator for more than 15 years, he taught vocal music in Minnesota and
              Colorado and has worked with singers at the university, high school and middle
              school levels. Throughout his teaching and conducting, he has been drawn to the
              way a choir can bring people together—creating something that belongs as much to
              the singers as it does to the conductor.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink-soft)', margin: 0, maxWidth: '60ch' }}>
              Nathan is proud to make his musical home with The Neighborhood Choir and the
              remarkable group of people who gather each week to sing. He lives in South
              Minneapolis with his two children, who keep life full and busy beyond the
              rehearsal room.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div style={{ width: 140, flexShrink: 0 }}>
            <PersonAvatar color="var(--color-harriet)" />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, margin: '0 0 2px' }}>
              Seth Engelby
            </h3>
            <p
              className="role"
              style={{
                fontSize: 13,
                color: 'var(--color-ink-quiet)',
                margin: '0 0 14px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Accompanist
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink-quiet)', fontStyle: 'italic', margin: 0 }}>
              Bio coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
