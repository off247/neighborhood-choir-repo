import Tag from './Tag.jsx';

export default function EventCard({ date, title, blurb, where, time, dark = false, tag, tagHref }) {
  return (
    <article className={`event ${dark ? 'linden' : ''}`}>
      <div className="event-date">{date}</div>
      <h3>{title}</h3>
      <p>{blurb}</p>
      <div className="event-meta">
        <span>{where}</span>
        {time && <span>·</span>}
        {time && <span>{time}</span>}
        {tag && (
          <span style={{ marginLeft: 'auto' }}>
            {tagHref ? (
              <a href={tagHref} style={{ textDecoration: 'none' }}>
                <Tag kind="quiet">{tag}</Tag>
              </a>
            ) : (
              <Tag kind="quiet">{tag}</Tag>
            )}
          </span>
        )}
      </div>
    </article>
  );
}
