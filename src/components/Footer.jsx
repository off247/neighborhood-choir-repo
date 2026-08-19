import { useState } from 'react';
import Button from './Button.jsx';

export default function Footer({ onNav }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | invalid | error

  const subscribe = async (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('done');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

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
          {status === 'done' ? (
            <p className="blurb" style={{ maxWidth: '28ch' }}>
              You&apos;re on the list — thanks!
            </p>
          ) : (
            <form className="footer-signup" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="you@somewhere.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'invalid' || status === 'error') setStatus('idle');
                }}
              />
              <Button
                variant="accent"
                onClick={subscribe}
                style={status === 'sending' ? { opacity: 0.6, pointerEvents: 'none' } : undefined}
              >
                {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
              </Button>
            </form>
          )}
          {status === 'invalid' && (
            <p style={{ fontSize: 13, color: 'var(--color-porchlight)', margin: '8px 0 0' }}>
              Please enter a valid email address.
            </p>
          )}
          {status === 'error' && (
            <p style={{ fontSize: 13, color: 'var(--color-porchlight)', margin: '8px 0 0' }}>
              Something went wrong — mind trying again?
            </p>
          )}
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
