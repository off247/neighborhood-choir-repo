import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  const [current, setCurrent] = useState('home');

  const onNav = (id) => {
    setCurrent(id);
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
