export default function Tag({ kind = 'soprano', children }) {
  return <span className={`tag tag-${kind}`}>{children}</span>;
}
