import Overline from '../components/Overline.jsx';
import EventCard from '../components/EventCard.jsx';

const upcoming = [
  {
    date: 'SEP 10 · THU',
    title: 'first rehearsal',
    blurb:
      'Kickoff for the fall session. Come meet the section, learn the first pieces, and get settled.',
    where: 'Friends Meetinghouse',
    time: '6:30pm',
    tag: 'New members welcome',
  },
  {
    date: 'SEP 13 · SUN',
    title: 'potluck',
    blurb: 'Food and singing. Bring a dish to share — sign up for what to bring.',
    where: '4730 Park Commons Drive, St Louis Park',
    time: '5:00pm',
    tag: 'Sign up sheet →',
    tagHref:
      'https://docs.google.com/spreadsheets/d/1xPk3Co0B1dnA1ipa6FEm42dKSujS0oMXqY-_XjUJ99M/edit?usp=sharing',
  },
  {
    date: 'JAN 21 · WED',
    title: 'flagstone senior living',
    blurb: 'A show for residents at Flagstone Senior Living, Eden Prairie.',
    where: '8350 Commonwealth Dr, Eden Prairie, MN 55344',
    time: '',
    tag: 'For residents only',
  },
  {
    date: 'JAN 28 · WED',
    title: 'friends and family concert',
    blurb: 'Our winter concert for friends and family.',
    where: 'Lutheran Church of the Good Shepherd, 4801 France Ave S, Minneapolis, MN 55410',
    time: '7:00pm',
    tag: 'Free',
  },
];

const past = [
  {
    date: 'WINTER 2026',
    title: 'friends and family concert',
    videos: ['https://www.youtube.com/watch?v=3fd0TcNETe8&t=628s'],
  },
  {
    date: 'SPRING 2025',
    title: 'friends and family concert',
    videos: ['https://www.youtube.com/watch?v=Mlo5gUBwCRU&t=22s'],
  },
  {
    date: 'WINTER 2025',
    title: 'friends and family concert',
    videos: ['https://www.youtube.com/watch?v=ZPA9SlT7RqU&t=251s'],
  },
  {
    date: 'SPRING 2024',
    title: 'friends and family concert',
    videos: ['https://www.youtube.com/watch?v=1vKfjuz3Bhs&t=259s'],
  },
  {
    date: 'WINTER 2024',
    title: 'friends and family concert',
    videos: [
      'https://www.youtube.com/watch?v=ANAaeYiv_Xo',
      'https://www.youtube.com/watch?v=WsREHSIkjV8',
    ],
  },
];

export default function EventsPage() {
  return (
    <div className="page">
      <Overline>upcoming · 2026 →</Overline>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 700,
          fontSize: '3rem',
          textTransform: 'lowercase',
          letterSpacing: '-0.015em',
          margin: '8px 0 24px',
          lineHeight: 1.05,
        }}
      >
        important dates for this season
      </h1>
      <p
        className="lead"
        style={{ color: 'var(--color-ink-soft)', fontSize: 18, lineHeight: 1.55, marginBottom: 48 }}
      >
        Concert dates, social activities, and the other dates worth marking down — for anyone
        singing with us and anyone coming to listen.
      </p>
      <div
        className="event-list"
        style={{ gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: 80 }}
      >
        {upcoming.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </div>

      <div className="section-head" style={{ marginTop: 80 }}>
        <div>
          <Overline>previously</Overline>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 700,
              fontSize: '2rem',
              margin: 0,
              textTransform: 'lowercase',
              letterSpacing: '-0.01em',
            }}
          >
            past concerts
          </h2>
        </div>
      </div>

      <div className="event-list">
        {past.map((e) => (
          <div
            key={e.date}
            style={{
              display: 'grid',
              gridTemplateColumns: '100px 1fr',
              gap: 18,
              padding: '20px 0',
              borderBottom: '1px solid var(--color-paper-edge)',
            }}
          >
            <div className="event-date">
              {e.date.includes(' ') ? (
                <>
                  {e.date.split(' ')[0]}
                  <br />
                  {e.date.split(' ')[1]}
                </>
              ) : (
                e.date
              )}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: 20,
                  margin: '0 0 4px',
                  textTransform: 'lowercase',
                  letterSpacing: '-0.01em',
                }}
              >
                {e.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--color-ink-soft)', margin: 0 }}>
                {e.blurb}
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 6 }}>
                {(e.videos || []).map((v, i) => (
                  <a
                    key={v}
                    href={v}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--color-porchlight)',
                      textDecoration: 'none',
                    }}
                  >
                    {e.videos.length > 1 ? `Watch part ${i + 1} →` : 'Watch on YouTube →'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
