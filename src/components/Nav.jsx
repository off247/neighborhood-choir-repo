import Button from './Button.jsx';

const ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Calendar' },
  { id: 'join', label: 'Join' },
  { id: 'about', label: 'About' },
];

export default function Nav({ current, onNav }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button type="button" className="nav-brand" onClick={() => onNav('home')}>
          <span>the neighborhood choir</span>
        </button>
        <div className="nav-links">
          {ITEMS.map((i) => (
            <a
              key={i.id}
              className={`nav-link ${current === i.id ? 'active' : ''}`}
              onClick={() => onNav(i.id)}
            >
              {i.label}
            </a>
          ))}
          <Button variant="primary" onClick={() => onNav('join')}>
            Sing with us
          </Button>
        </div>
      </div>
    </nav>
  );
}
