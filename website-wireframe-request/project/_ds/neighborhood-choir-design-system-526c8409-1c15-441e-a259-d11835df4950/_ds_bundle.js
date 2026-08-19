/* @ds-bundle: {"format":4,"namespace":"NeighborhoodChoirDesignSystem_526c84","components":[],"sourceHashes":{"ui_kits/website/about-page.jsx":"07eaaf2e6d53","ui_kits/website/app.jsx":"3df66bf431d3","ui_kits/website/components.jsx":"ef28614828c8","ui_kits/website/events-page.jsx":"e9b7787c5c9b","ui_kits/website/home-page.jsx":"9e4f038c21fa","ui_kits/website/join-page.jsx":"a1c9ddd5d5c3","ui_kits/website/nav.jsx":"ef83b5ac78fc"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NeighborhoodChoirDesignSystem_526c84 = window.NeighborhoodChoirDesignSystem_526c84 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/about-page.jsx
try { (() => {
const AboutPage = () => {
  const people = [{
    name: "Nathan Knoll",
    role: "Director",
    color: "#bf6b4a"
  }, {
    name: "Seth Engelby",
    role: "Accompanist",
    color: "#2d3a4d"
  }, {
    name: "Liana K.",
    role: "Section lead · soprano",
    color: "#d9a648"
  }, {
    name: "Tom B.",
    role: "Section lead · bass",
    color: "#9c7d85"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page",
    style: { position: "relative" }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: { filter: "blur(6px)", userSelect: "none", pointerEvents: "none", maxHeight: 620, overflow: "hidden" }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "about"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.05,
      textTransform: "lowercase",
      letterSpacing: "-0.015em",
      margin: "8px 0 24px"
    }
  }, "we make music in south minneapolis."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.6,
      color: "var(--color-ink-soft)",
      maxWidth: "56ch"
    }
  }, "The Neighborhood Choir started in 2017 around a kitchen table on 41st Avenue. We rehearsed in a living room for the first season, then a church basement, then everything stopped for two years, and then it started again. We're glad about that.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 64,
      marginTop: 72,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "what we sing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.8rem",
      fontWeight: 700,
      margin: "8px 0 16px",
      letterSpacing: "-0.01em"
    }
  }, "Choral, contemporary, folk \u2014 in roughly that order."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--color-ink), max-width: 56ch"
    }
  }, "Our repertoire is eclectic on purpose. We've done Brahms next to The Wailin' Jennys next to a tune our director wrote on a Sunday. The throughline isn't genre \u2014 it's that the music is worth showing up for."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--color-ink)"
    }
  }, "We avoid sacred music as a default. Some pieces have sacred origins, and that's fine, but we're not a church choir and we don't program around the liturgical year.")), /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-illustration",
    shape: "rounded",
    radius: "14",
    placeholder: "Illustration: neighbors gathered, singing in Linden Hills Park",
    style: {
      width: "100%",
      height: 340,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "a short history"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.8rem",
      fontWeight: 700,
      margin: "8px 0 32px",
      letterSpacing: "-0.01em"
    }
  }, "eight years and counting."), /*#__PURE__*/React.createElement("ul", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2017"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "First rehearsal. Six people in a living room.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2018"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "Moved to the basement at Linden Hills Lutheran. We're still there.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2019"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "First full concert. About 40 voices. The sopranos were nervous.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2020"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "Hiatus. We sent each other recordings for a while, then stopped.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2023"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "Quietly started again. Smaller group, same idea.")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "yr"
  }, "2026"), /*#__PURE__*/React.createElement("span", {
    className: "ev"
  }, "First public website. You're on it.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "the regulars"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "1.8rem",
      fontWeight: 700,
      margin: "8px 0 32px",
      letterSpacing: "-0.01em"
    }
  }, "who runs this thing."), /*#__PURE__*/React.createElement("div", {
    className: "people"
  }, people.map(p => /*#__PURE__*/React.createElement("div", {
    className: "person",
    key: p.name
  }, /*#__PURE__*/React.createElement(PersonAvatar, {
    color: p.color
  }), /*#__PURE__*/React.createElement("h4", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: "role"
  }, p.role)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: "rgba(245,237,224,0.55)"
    }
  }, /*#__PURE__*/React.createElement(Overline, null, "about"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "3rem",
      textTransform: "lowercase",
      letterSpacing: "-0.015em",
      margin: "8px 0 12px"
    }
  }, "coming soon."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--color-ink-soft)",
      maxWidth: "40ch"
    }
  }, "We're still writing this page. Check back soon to meet the choir.")));
};
Object.assign(window, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/about-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
const App = () => {
  const [current, setCurrent] = React.useState("home");
  const onNav = id => {
    setCurrent(id);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "site",
    "data-screen-label": current
  }, /*#__PURE__*/React.createElement(Nav, {
    current: current,
    onNav: onNav
  }), current === "home" && /*#__PURE__*/React.createElement(HomePage, {
    onNav: onNav
  }), current === "events" && /*#__PURE__*/React.createElement(EventsPage, null), current === "join" && /*#__PURE__*/React.createElement(JoinPage, null), current === "about" && /*#__PURE__*/React.createElement(AboutPage, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: onNav
  }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared primitives for the website UI kit.

const MarkArcs = ({
  size = 96,
  height = 66
}) =>
/*#__PURE__*/
// Three-house mark — the brand's primary mark. Exported as `MarkArcs` for back-compat.
React.createElement("svg", {
  width: size,
  height: height,
  viewBox: "0 0 160 110",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("g", {
  fill: "none",
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 10 88 L 10 56 L 32 36 L 54 56 L 54 88 Z",
  strokeWidth: "2.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 40 41 L 40 28 L 47 28 L 47 47",
  strokeWidth: "1.8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 26 88 L 26 68 L 38 68 L 38 88",
  strokeWidth: "1.7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "36",
  cy: "79",
  r: "0.9",
  fill: "currentColor",
  stroke: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 14 64 L 14 52 L 22 52 L 22 64 Z",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "52",
  x2: "18",
  y2: "64",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "58",
  x2: "22",
  y2: "58",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 54 88 L 54 50 L 80 24 L 106 50 L 106 88 Z",
  strokeWidth: "2.4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "80",
  cy: "44",
  r: "3.4",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 62 70 L 62 58 L 72 58 L 72 70 Z",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "67",
  y1: "58",
  x2: "67",
  y2: "70",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "62",
  y1: "64",
  x2: "72",
  y2: "64",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 88 70 L 88 58 L 98 58 L 98 70 Z",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "93",
  y1: "58",
  x2: "93",
  y2: "70",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "88",
  y1: "64",
  x2: "98",
  y2: "64",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 75 88 L 75 76 L 85 76 L 85 88",
  strokeWidth: "1.7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 106 88 L 106 60 L 124 44 L 142 60 L 142 88 Z",
  strokeWidth: "2.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 110 78 L 110 66 L 122 66 L 122 78 Z",
  strokeWidth: "1.4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "116",
  y1: "66",
  x2: "116",
  y2: "78",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "116",
  cy: "72",
  r: "1.4",
  fill: "currentColor",
  stroke: "none",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 128 88 L 128 72 L 138 72 L 138 88",
  strokeWidth: "1.7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 4 92 Q 26 94 50 92 Q 78 90 108 93 Q 132 95 152 92",
  strokeWidth: "2"
})));
const Button = ({
  variant = "primary",
  children,
  onClick,
  ...rest
}) => /*#__PURE__*/React.createElement("a", _extends({
  className: `btn btn-${variant}`,
  onClick: onClick,
  role: "button",
  tabIndex: "0"
}, rest), children);
const Tag = ({
  kind = "soprano",
  children
}) => /*#__PURE__*/React.createElement("span", {
  className: `tag tag-${kind}`
}, children);
const Overline = ({
  children,
  color
}) => /*#__PURE__*/React.createElement("div", {
  className: "hero-eyebrow",
  style: color ? {
    color
  } : undefined
}, children);
const EventCard = ({
  date,
  title,
  blurb,
  where,
  time,
  dark = false,
  tag,
  tagHref
}) => /*#__PURE__*/React.createElement("article", {
  className: `event ${dark ? "linden" : ""}`
}, /*#__PURE__*/React.createElement("div", {
  className: "event-date"
}, date), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, blurb), /*#__PURE__*/React.createElement("div", {
  className: "event-meta"
}, /*#__PURE__*/React.createElement("span", null, where), time && /*#__PURE__*/React.createElement("span", null, "\xB7"), time && /*#__PURE__*/React.createElement("span", null, time), tag && /*#__PURE__*/React.createElement("span", {
  style: {
    marginLeft: "auto"
  }
}, tagHref ? /*#__PURE__*/React.createElement("a", {
  href: tagHref,
  style: { textDecoration: "none" }
}, /*#__PURE__*/React.createElement(Tag, {
  kind: "quiet"
}, tag)) : /*#__PURE__*/React.createElement(Tag, {
  kind: "quiet"
}, tag))));
const PullQuote = ({
  children,
  by
}) => /*#__PURE__*/React.createElement("blockquote", {
  className: "pullquote"
}, "\"", children, "\"", /*#__PURE__*/React.createElement("div", {
  className: "pullquote-by"
}, "\u2014 ", by));
const Stat = ({
  n,
  l
}) => /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "n"
}, n), /*#__PURE__*/React.createElement("div", {
  className: "l"
}, l));
const PersonAvatar = ({
  color,
  initial
}) => /*#__PURE__*/React.createElement("div", {
  className: "person-avatar",
  style: {
    background: color
  }
}, /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 60 60"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "30",
  cy: "22",
  r: "10",
  fill: "rgba(255,255,255,0.85)"
}), /*#__PURE__*/React.createElement("path", {
  d: "M 8 56 Q 30 36 52 56 Z",
  fill: "rgba(255,255,255,0.85)"
})));
Object.assign(window, {
  MarkArcs,
  Button,
  Tag,
  Overline,
  EventCard,
  PullQuote,
  Stat,
  PersonAvatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/events-page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const EventsPage = () => {
  const upcoming = [{
    date: "SEP 10 · THU",
    title: "first rehearsal",
    blurb: "Kickoff for the fall session. Come meet the section, learn the first pieces, and get settled.",
    where: "Friends Meetinghouse",
    time: "6:30pm",
    tag: "New members welcome"
  }, {
    date: "SEP 13 · SUN",
    title: "potluck",
    blurb: "Food and singing. Bring a dish to share — sign up for what to bring.",
    where: "4730 Park Commons Drive, St Louis Park",
    time: "5:00pm",
    tag: "Sign up sheet →",
    tagHref: "https://docs.google.com/spreadsheets/d/1xPk3Co0B1dnA1ipa6FEm42dKSujS0oMXqY-_XjUJ99M/edit?usp=sharing"
  }, {
    date: "JAN 21 · WED",
    title: "flagstone senior living",
    blurb: "A show for residents at Flagstone Senior Living, Eden Prairie.",
    where: "8350 Commonwealth Dr, Eden Prairie, MN 55344",
    time: "",
    tag: "For residents only"
  }, {
    date: "JAN 28 · WED",
    title: "friends and family concert",
    blurb: "Our winter concert for friends and family.",
    where: "Lutheran Church of the Good Shepherd, 4801 France Ave S, Minneapolis, MN 55410",
    time: "7:00pm",
    tag: "Free"
  }];
  const past = [{
    date: "WINTER 2026",
    title: "friends and family concert",
    videos: ["https://www.youtube.com/watch?v=3fd0TcNETe8&t=628s"]
  }, {
    date: "SPRING 2025",
    title: "friends and family concert",
    videos: ["https://www.youtube.com/watch?v=Mlo5gUBwCRU&t=22s"]
  }, {
    date: "WINTER 2025",
    title: "friends and family concert",
    videos: ["https://www.youtube.com/watch?v=ZPA9SlT7RqU&t=251s"]
  }, {
    date: "SPRING 2024",
    title: "friends and family concert",
    videos: ["https://www.youtube.com/watch?v=1vKfjuz3Bhs&t=259s"]
  }, {
    date: "WINTER 2024",
    title: "friends and family concert",
    videos: ["https://www.youtube.com/watch?v=ANAaeYiv_Xo", "https://www.youtube.com/watch?v=WsREHSIkjV8"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Overline, null, "upcoming \xB7 2026 \u2192"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "3rem",
      textTransform: "lowercase",
      letterSpacing: "-0.015em",
      margin: "8px 0 24px",
      lineHeight: 1.05
    }
  }, "important dates for this season"), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      color: "var(--color-ink-soft)",
      fontSize: 18,
      lineHeight: 1.55,
      marginBottom: 48
    }
  }, "Concert dates, social activities, and the other dates worth marking down — for anyone singing with us and anyone coming to listen."), /*#__PURE__*/React.createElement("div", {
    className: "event-list",
    style: {
      gridTemplateColumns: "repeat(2, 1fr)",
      marginBottom: 80
    }
  }, upcoming.map(e => /*#__PURE__*/React.createElement(EventCard, _extends({
    key: e.title
  }, e)))), /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "previously"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "2rem",
      margin: 0,
      textTransform: "lowercase",
      letterSpacing: "-0.01em"
    }
  }, "past concerts"))), /*#__PURE__*/React.createElement("div", {
    className: "event-list"
  }, past.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.title,
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: 18,
      padding: "20px 0",
      borderBottom: "1px solid var(--color-paper-edge)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "event-date"
  }, e.date.includes(" ") ? [e.date.split(" ")[0], /*#__PURE__*/React.createElement("br", {
    key: "br"
  }), e.date.split(" ")[1]] : e.date), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: 20,
      margin: "0 0 4px",
      textTransform: "lowercase",
      letterSpacing: "-0.01em"
    }
  }, e.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--color-ink-soft)",
      margin: 0
    }
  }, e.blurb, e.blurb && " \xB7 ", e.where, e.where && " \xB7 ", e.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 6
    }
  }, (e.videos || []).map((v, i) => /*#__PURE__*/React.createElement("a", {
    key: v,
    href: v,
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--color-porchlight)",
      textDecoration: "none"
    }
  }, e.videos.length > 1 ? `Watch part ${i + 1} \u2192` : "Watch on YouTube \u2192"))))))))
};
Object.assign(window, {
  EventsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/events-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home-page.jsx
try { (() => {
const HomePage = ({
  onNav
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
  className: "hero"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "summer 2025 \xB7 we're back"), /*#__PURE__*/React.createElement("h1", null, "sing with your neighbors."), /*#__PURE__*/React.createElement("p", {
  className: "lead"
}, "The Neighborhood Choir is a community choral group based in Linden Hills. Choral, contemporary, folk \u2014 mostly we just like making music together. No audition to inquire. Show up curious."), /*#__PURE__*/React.createElement("div", {
  className: "hero-ctas"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  onClick: () => onNav("join")
}, "Come sing with us"), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  onClick: () => onNav("events")
}, "See upcoming concerts \u2192"))), /*#__PURE__*/React.createElement("img", {
  className: "hero-illo",
  src: "../../assets/illo-gathering.svg",
  alt: "People gathered, singing in a park"
})), /*#__PURE__*/React.createElement("section", {
  className: "section"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "about"), /*#__PURE__*/React.createElement("h2", null, "A choir for the block, the bus stop, the bungalow next door.")), /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  onClick: () => onNav("about")
}, "Read more \u2192")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 64,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("p", {
  className: "lead",
  style: {
    maxWidth: "none"
  }
}, "We started before the pandemic, went quiet for a while, and have been back for a few good seasons. We're 50 to 100 voices on any given Tuesday \u2014 sopranos, altos, tenors, basses, teenagers, retirees, a couple of dogs that have learned to be patient. Repertoire ranges from choral standards to folk to whatever's stuck in the director's head this week."), /*#__PURE__*/React.createElement(PullQuote, {
  by: "Beth, alto, three seasons in"
}, "I came once to try it. I've been here three years."))), /*#__PURE__*/React.createElement("section", {
  className: "section harriet"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-inner"
}, /*#__PURE__*/React.createElement("div", {
  className: "section-head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, {
  color: "var(--color-porchlight-soft)"
}, "upcoming"), /*#__PURE__*/React.createElement("h2", null, "What we're singing this season")), /*#__PURE__*/React.createElement(Button, {
  variant: "accent",
  onClick: () => onNav("events")
}, "All events")), /*#__PURE__*/React.createElement("div", {
  className: "event-list"
}, /*#__PURE__*/React.createElement(EventCard, {
  dark: true,
  date: "OCT 11 \xB7 SAT",
  title: "songs from the porch",
  blurb: "An evening of folk, choral standards, and a few surprises in Linden Hills Park.",
  where: "Linden Hills Park",
  time: "4:00pm",
  tag: "Free"
}), /*#__PURE__*/React.createElement(EventCard, {
  dark: true,
  date: "NOV 22 \xB7 SAT",
  title: "fall concert",
  blurb: "Our full fall program in the sanctuary at Lake Harriet UMC. Bring a friend.",
  where: "Lake Harriet UMC",
  time: "7:30pm",
  tag: "Free \xB7 offering to charity"
}), /*#__PURE__*/React.createElement(EventCard, {
  dark: true,
  date: "DEC 14 \xB7 SUN",
  title: "winter sing-along",
  blurb: "A short set, then we open the doors and everyone sings. Cocoa after.",
  where: "Linden Hills Library",
  time: "3:00pm",
  tag: "All ages"
})))), /*#__PURE__*/React.createElement("section", {
  className: "section"
}, /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--color-paper)",
    borderRadius: 14,
    padding: "56px 48px",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 48,
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(42,38,32,.06)"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overline, null, "join us"), /*#__PURE__*/React.createElement("h2", {
  style: {
    margin: "0 0 16px"
  }
}, "If you've been thinking about it, this is the season."), /*#__PURE__*/React.createElement("p", {
  className: "lead",
  style: {
    marginBottom: 24
  }
}, "Fall sign-ups are open. Tuesdays, 7pm, the church basement on 43rd. Drop in for one rehearsal before you commit. We'll save you a chair."), /*#__PURE__*/React.createElement("div", {
  className: "hero-ctas"
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  onClick: () => onNav("join")
}, "Start the conversation"), /*#__PURE__*/React.createElement(Button, {
  variant: "secondary"
}, "Email the director"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    gap: 14
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "stats",
  style: {
    gridTemplateColumns: "1fr 1fr"
  }
}, /*#__PURE__*/React.createElement(Stat, {
  n: "50\u2013100",
  l: "voices each season"
}), /*#__PURE__*/React.createElement(Stat, {
  n: "2017",
  l: "first rehearsal"
}), /*#__PURE__*/React.createElement(Stat, {
  n: "8",
  l: "years on 43rd"
}), /*#__PURE__*/React.createElement(Stat, {
  n: "0",
  l: "auditions to inquire"
}))))));
Object.assign(window, {
  HomePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/join-page.jsx
try { (() => {
const JoinPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    part: "Not sure yet — help me figure it out",
    hasNameTag: "No",
    note: ""
  });
  const update = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  if (submitted) {
    return /*#__PURE__*/React.createElement("div", {
      className: "page-narrow",
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-block",
        padding: "8px 18px",
        background: "var(--color-harriet-soft)",
        color: "var(--color-harriet-deep)",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        marginBottom: 24
      }
    }, "got it"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 700,
        fontSize: "2.5rem",
        lineHeight: 1.1,
        textTransform: "lowercase",
        letterSpacing: "-0.015em",
        margin: "0 0 18px"
      }
    }, "we'll be in touch, ", form.firstName || "neighbor", "."), /*#__PURE__*/React.createElement("p", {
      className: "lead",
      style: {
        margin: "0 auto 32px",
        maxWidth: "50ch"
      }
    }, "Expect a friendly email from our director within a few days with rehearsal details and what to bring (mostly: a water bottle and an open mind)."), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setSubmitted(false)
    }, "\u2190 Submit another"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, /*#__PURE__*/React.createElement(Overline, null, "join the choir"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.05,
      textTransform: "lowercase",
      letterSpacing: "-0.015em",
      margin: "8px 0 18px"
    }
  }, "come sing with us this fall."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 48,
      fontSize: 18,
      color: "var(--color-ink-soft)",
      lineHeight: 1.55,
      maxWidth: "none"
    }
  }, "Come join The Neighborhood Choir! It's a great way to meet new people and dig into some fun, interesting music with our director, Nathan Knoll. No experience or audition needed \u2014 just a willingness to sing. Everyone is welcome!"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 48,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 6px"
    }
  }, "Thursdays, 6:30\u20138:30pm"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--color-ink-soft)",
      margin: 0
    }
  }, "Friends Meetinghouse, 4401 York Ave S. Enter on the York Ave side; street parking available.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 6px"
    }
  }, "Cost and commitment"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--color-ink-soft)",
      margin: 0
    }
  }, "$125 for the spring session, covering rent, music, and directing. Bring cash or a check (\u201cThe Neighborhood Choir\u201d) to your first rehearsal \u2014 no cards. Scholarships available: email theneighborhoodchoir@outlook.com.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 6px"
    }
  }, "Getting settled"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--color-ink-soft)",
      margin: 0
    }
  }, "If it's snowy, rainy, or muddy out, the Friends Meetinghouse asks that we remove our shoes at the entrance \u2014 slippers optional. If you're a former member with your old name tag, bring it along; we'll make new ones for new members."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper)",
      padding: 36,
      borderRadius: 14,
      boxShadow: "0 2px 8px rgba(42,38,32,.06)",
      maxWidth: 560,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-serif)",
      margin: "0 0 6px",
      fontSize: 22,
      fontWeight: 700
    }
  }, "Tell us a little about you"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 14,
      color: "var(--color-ink-quiet)",
      maxWidth: "none"
    }
  }, "We'll only email about choir news \u2014 rehearsals, shows, and the occasional update. Promise."), /*#__PURE__*/React.createElement("div", {
    className: "field-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "First name"), /*#__PURE__*/React.createElement("input", {
    value: form.firstName,
    onChange: e => update("firstName", e.target.value),
    placeholder: "Maya"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Last name"), /*#__PURE__*/React.createElement("input", {
    value: form.lastName,
    onChange: e => update("lastName", e.target.value),
    placeholder: "Hartwell"
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: form.email,
    onChange: e => update("email", e.target.value),
    placeholder: "you@somewhere.com"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "What do you usually sing?"), /*#__PURE__*/React.createElement("select", {
    value: form.part,
    onChange: e => update("part", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Soprano"), /*#__PURE__*/React.createElement("option", null, "Alto"), /*#__PURE__*/React.createElement("option", null, "Tenor"), /*#__PURE__*/React.createElement("option", null, "Baritone"), /*#__PURE__*/React.createElement("option", null, "Bass"), /*#__PURE__*/React.createElement("option", null, "Not sure yet \u2014 help me figure it out"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Do you already have a Neighborhood Choir name tag?"), /*#__PURE__*/React.createElement("select", {
    value: form.hasNameTag,
    onChange: e => update("hasNameTag", e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "No"), /*#__PURE__*/React.createElement("option", null, "Yes"))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Anything else you'd like us to know?"), /*#__PURE__*/React.createElement("textarea", {
    rows: "4",
    value: form.note,
    onChange: e => update("note", e.target.value),
    placeholder: "I haven't sung since high school but my neighbor told me to come."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setSubmitted(true)
  }, "Send it"))));
};
Object.assign(window, {
  JoinPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/join-page.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/nav.jsx
try { (() => {
const Nav = ({
  current,
  onNav
}) => {
  const items = [{
    id: "home",
    label: "Home"
  }, {
    id: "events",
    label: "Calendar"
  }, {
    id: "join",
    label: "Join"
  }, {
    id: "about",
    label: "About"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    onClick: () => onNav("home")
  }, /*#__PURE__*/React.createElement("span", null, "the neighborhood choir")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i.id,
    className: `nav-link ${current === i.id ? "active" : ""}`,
    onClick: () => onNav(i.id)
  }, i.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onNav("join")
  }, "Sing with us"))));
};
const Footer = ({
  onNav
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("div", {
  className: "footer-inner"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "wm"
}, "the neighborhood choir"), /*#__PURE__*/React.createElement("p", {
  className: "blurb"
}, "A community choral group in South Minneapolis. All ages, mixed music genres, no audition required to inquire.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Pages"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  onClick: () => onNav("home")
}, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  onClick: () => onNav("events")
}, "Calendar")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  onClick: () => onNav("join")
}, "Join the choir")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  onClick: () => onNav("about")
}, "About us")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Get in touch"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "hello@theneighborhoodchoir.com")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
  href: "https://www.facebook.com/groups/SWCommunityChoir"
}, "Facebook")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Newsletter"), /*#__PURE__*/React.createElement("p", {
  className: "blurb",
  style: {
    maxWidth: "28ch"
  }
}, "Rehearsal reminders and concert dates \u2014 join the list even if singing isn't your thing, just to stay in the loop."), /*#__PURE__*/React.createElement("form", {
  className: "footer-signup",
  onSubmit: e => e.preventDefault()
}, /*#__PURE__*/React.createElement("input", {
  type: "email",
  placeholder: "you@somewhere.com",
  "aria-label": "Email address"
}), /*#__PURE__*/React.createElement(Button, {
  variant: "accent",
  onClick: () => {}
}, "Subscribe")))), /*#__PURE__*/React.createElement("div", {
  className: "footer-bottom"
}, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The Neighborhood Choir"), /*#__PURE__*/React.createElement("span", null, "Made with care by Grace \u2014 ", /*#__PURE__*/React.createElement("a", {
  href: "https://www.gracehomer.com",
  style: {
    color: "inherit"
  }
}, "www.gracehomer.com")))));
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/nav.jsx", error: String((e && e.message) || e) }); }

})();
