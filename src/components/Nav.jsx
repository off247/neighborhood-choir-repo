import { useState } from 'react';
import Button from './Button.jsx';

const ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Calendar' },
  { id: 'join', label: 'Join' },
  { id: 'about', label: 'About' },
];

export default function Nav({ current, onNav }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    onNav(id);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <button type="button" className="nav-brand" onClick={() => go('home')}>
          <span>the neighborhood choir</span>
        </button>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {ITEMS.map((i) => (
            <a
              key={i.id}
              className={`nav-link ${current === i.id ? 'active' : ''}`}
              onClick={() => go(i.id)}
            >
              {i.label}
            </a>
          ))}
          <Button variant="primary" onClick={() => go('join')}>
            Sing with us
          </Button>
        </div>
      </div>
    </nav>
  );
}
