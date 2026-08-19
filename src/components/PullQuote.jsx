export default function PullQuote({ children, by }) {
  return (
    <blockquote className="pullquote">
      &quot;{children}&quot;
      <div className="pullquote-by">— {by}</div>
    </blockquote>
  );
}
