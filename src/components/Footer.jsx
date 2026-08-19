import Button from './Button.jsx';

export default function Footer({ onNav }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="wm">the neighborhood choir</div>
          <p className="blurb">
            A community choral group in South Minneapolis. All ages, mixed music genres, no
            audition required to inquire.
          </p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <a onClick={() => onNav('home')}>Home</a>
            </li>
            <li>
              <a onClick={() => onNav('events')}>Calendar</a>
            </li>
            <li>
              <a onClick={() => onNav('join')}>Join the choir</a>
            </li>
            <li>
              <a onClick={() => onNav('about')}>About us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href="mailto:hello@theneighborhoodchoir.com">hello@theneighborhoodchoir.com</a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/SWCommunityChoir">Facebook</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p className="blurb" style={{ maxWidth: '28ch' }}>
            Rehearsal reminders and concert dates — join the list even if singing isn&apos;t your
            thing, just to stay in the loop.
          </p>
          {/* TODO: wire this up to a real mailing-list service (Mailchimp, Buttondown, etc.) */}
          <form className="footer-signup" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@somewhere.com" aria-label="Email address" />
            <Button variant="accent" onClick={() => {}}>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 The Neighborhood Choir</span>
        <span>
          Made with care by Grace —{' '}
          <a href="https://www.gracehomer.com" style={{ color: 'inherit' }}>
            www.gracehomer.com
          </a>
        </span>
      </div>
    </footer>
  );
}
