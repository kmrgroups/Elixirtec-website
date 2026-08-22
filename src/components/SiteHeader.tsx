import Link from 'next/link';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteHeader() {
  return (
    <header className="border-b border-brand-navy/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-brand-navy tracking-wide">
          ELIXIR TEC <span className="font-normal text-brand-steel">CORPORATION</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-brand-steel">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-blue transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/rfq"
          className="bg-brand-blue text-white text-sm px-4 py-2 rounded font-medium hover:bg-brand-navy transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
