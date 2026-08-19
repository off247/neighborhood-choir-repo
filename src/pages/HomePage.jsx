import Overline from '../components/Overline.jsx';
import Button from '../components/Button.jsx';
import EventCard from '../components/EventCard.jsx';
import PullQuote from '../components/PullQuote.jsx';
import Stat from '../components/Stat.jsx';
import heroIllustration from '../assets/hero-illustration.webp';

export default function HomePage({ onNav }) {
  return (
    <>
      <section className="hero">
        <div>
          <Overline>fall 2026 · we&apos;re back</Overline>
          <h1>the sound of showing up.</h1>
          <p className="lead">
            The Neighborhood Choir is a community choral group in South Minneapolis. No
            audition, no experience necessary — just show up. We&apos;ll save you a chair.
          </p>
          <div className="hero-ctas">
            <Button variant="primary" onClick={() => onNav('join')}>
              Come sing with us
            </Button>
            <Button variant="ghost" onClick={() => onNav('events')}>
              See upcoming concerts →
            </Button>
          </div>
        </div>
        <img
          className="hero-illo"
          src={heroIllustration}
          alt="Choir members rehearsing together, sheet music in hand"
          style={{ height: 340 }}
        />
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <Overline>about</Overline>
            <h2>A choir for the block, the bus stop, the bungalow next door.</h2>
          </div>
          <Button variant="ghost" onClick={() => onNav('about')}>
            Read more →
          </Button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 64,
            alignItems: 'center',
          }}
        >
          <p className="lead" style={{ maxWidth: 'none' }}>
            We started before the pandemic, went quiet for a while, and have been back for a
            few good seasons. We&apos;re 50 to 100 voices on any given Tuesday — sopranos,
            altos, tenors, basses, teenagers, retirees, a couple of dogs that have learned to
            be patient. Repertoire ranges from choral standards to folk to whatever&apos;s
            stuck in the director&apos;s head this week.
          </p>
          <PullQuote by="Beth, alto, three seasons in">
            I came once to try it. I&apos;ve been here three years.
          </PullQuote>
        </div>
      </section>

      <section className="section harriet">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <Overline color="var(--color-porchlight-soft)">upcoming</Overline>
              <h2>What we&apos;re singing this season</h2>
            </div>
            <Button variant="accent" onClick={() => onNav('events')}>
              All events
            </Button>
          </div>
          <div className="event-list">
            <EventCard
              dark
              date="OCT 11 · SAT"
              title="songs from the porch"
              blurb="An evening of folk, choral standards, and a few surprises in Linden Hills Park."
              where="Linden Hills Park"
              time="4:00pm"
              tag="Free"
            />
            <EventCard
              dark
              date="NOV 22 · SAT"
              title="fall concert"
              blurb="Our full fall program in the sanctuary at Lake Harriet UMC. Bring a friend."
              where="Lake Harriet UMC"
              time="7:30pm"
              tag="Free · offering to charity"
            />
            <EventCard
              dark
              date="DEC 14 · SUN"
              title="winter sing-along"
              blurb="A short set, then we open the doors and everyone sings. Cocoa after."
              where="Linden Hills Library"
              time="3:00pm"
              tag="All ages"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div
          style={{
            background: 'var(--color-paper)',
            borderRadius: 14,
            padding: '56px 48px',
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: 48,
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(42,38,32,.06)',
          }}
        >
          <div>
            <Overline>join us</Overline>
            <h2 style={{ margin: '0 0 16px' }}>
              If you&apos;ve been thinking about it, this is the season.
            </h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              Fall sign-ups are open. Tuesdays, 7pm, the church basement on 43rd. Drop in for
              one rehearsal before you commit. We&apos;ll save you a chair.
            </p>
            <div className="hero-ctas">
              <Button variant="primary" onClick={() => onNav('join')}>
                Start the conversation
              </Button>
              <Button variant="secondary" href="mailto:theneighborhoodchoir@outlook.com">
                Email the director
              </Button>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            <div className="stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <Stat n="50–100" l="voices each season" />
              <Stat n="2017" l="first rehearsal" />
              <Stat n="8" l="years on 43rd" />
              <Stat n="0" l="auditions to inquire" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
