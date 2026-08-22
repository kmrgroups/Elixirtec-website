import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elixir Tec Corporation',
  description: 'Precision manufacturing for Automotive & High-Tech industries.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-brand-navy antialiased">{children}</body>
    </html>
  );
}
