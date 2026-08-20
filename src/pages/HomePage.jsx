import Overline from '../components/Overline.jsx';
import Button from '../components/Button.jsx';
import EventCard from '../components/EventCard.jsx';
import PullQuote from '../components/PullQuote.jsx';
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
          </div>
        </div>
        <img
          className="hero-illo"
          src={heroIllustration}
          alt="Choir members rehearsing together, sheet music in hand"
          style={{ height: 340 }}
        />
      </section>

      <section className="section harriet">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <Overline color="var(--color-porchlight-soft)">next up</Overline>
              <h2>what we&apos;re singing this season</h2>
            </div>
          </div>
          <div className="event-list">
            <EventCard
              date="JAN 21 · WED"
              title="flagstone senior living"
              blurb="A show for residents at Flagstone Senior Living, Eden Prairie."
              where="8350 Commonwealth Dr, Eden Prairie, MN 55344"
              time=""
              tag="for residents only"
            />
            <EventCard
              date="JAN 28 · WED"
              title="friends and family concert"
              blurb="Our winter concert for friends and family."
              where="Lutheran Church of the Good Shepherd, 4801 France Ave S, Minneapolis, MN 55410"
              time="7:00pm"
              tag="Free"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="join-card">
          <div>
            <Overline>join us</Overline>
            <h2 style={{ margin: '0 0 16px' }}>
              If you&apos;ve been thinking about it, this is the season.
            </h2>
            <p className="lead" style={{ marginBottom: 24, maxWidth: 'none' }}>
              No audition. Thursdays, 6:30pm, Friends Meetinghouse Minneapolis.
            </p>
            <Button variant="primary" onClick={() => onNav('join')}>
              Register here
            </Button>
          </div>
          <PullQuote by="Sue, alto, six seasons in">
            There is nothing more powerful than 80 people singing together as one voice.
          </PullQuote>
        </div>
      </section>
    </>
  );
}
