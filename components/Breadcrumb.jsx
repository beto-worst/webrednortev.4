import Link from 'next/link';

// items: [{ label, href? }] — the last item has no href (current page).
export default function Breadcrumb({ items }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-inner">
        <Link href="/">Inicio</Link>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>›</span>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
