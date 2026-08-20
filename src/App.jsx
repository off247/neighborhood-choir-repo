import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const PATH_TO_PAGE = { '/': 'home', '/calendar': 'events', '/join': 'join', '/about': 'about' };
const PAGE_TO_PATH = { home: '/', events: '/calendar', join: '/join', about: '/about' };

const pageForPath = (pathname) => PATH_TO_PAGE[pathname] || 'home';

export default function App() {
  const [current, setCurrent] = useState(() => pageForPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setCurrent(pageForPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const onNav = (id) => {
    setCurrent(id);
    const path = PAGE_TO_PATH[id] || '/';
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="site" data-screen-label={current}>
      <Nav current={current} onNav={onNav} />
      {current === 'home' && <HomePage onNav={onNav} />}
      {current === 'events' && <EventsPage />}
      {current === 'join' && <JoinPage />}
      {current === 'about' && <AboutPage />}
      <Footer onNav={onNav} />
    </div>
  );
}
