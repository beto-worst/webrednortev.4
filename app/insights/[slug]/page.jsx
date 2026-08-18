import { notFound } from 'next/navigation';

// Structure is ready (real URL, noindex, correct not-found handling) but
// there is no articles data source to render yet — every slug 404s until
// the user provides real content and this is wired to it.
export const metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return [];
}

export default function InsightPostPage() {
  notFound();
}
