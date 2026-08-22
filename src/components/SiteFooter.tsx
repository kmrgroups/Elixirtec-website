import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import BrandMark from './BrandMark';

const siteLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' }
];

const connectLinks = [
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
  { href: '/rfq', label: 'Request a Quote' }
];

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/80 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <BrandMark className="h-9 w-9 shrink-0 rounded-lg" />
            <span className="font-display font-bold text-white tracking-wide">
              ELIXIR TEC <span className="font-medium text-white/60">CORPORATION</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            High-precision machining components for Automotive and Non-Automotive OEM supply chains —
            manufactured in Mysuru, engineered for quality, automated for scale.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            {siteLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">Get in touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/70">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-accent" />
              <span>No. 225/2, 1st Cross, Hebbal Industrial Estate, Mysuru – 570016, Karnataka, India</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <Phone size={16} className="shrink-0 text-brand-accent" />
              <a href="tel:+919902009152" className="hover:text-white transition-colors">
                +91 99020 09152
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <Mail size={16} className="shrink-0 text-brand-accent" />
              <a href="mailto:Operations@elixirtec.com" className="hover:text-white transition-colors">
                Operations@elixirtec.com
              </a>
            </li>
            {connectLinks.map((l) => (
              <li key={l.href} className="pt-1">
                <Link href={l.href} className="text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>&copy; {year} Elixir Tec Corporation. All Rights Reserved.</span>
          <span>
            Powered By{' '}
            <a
              href="https://www.kmr-groups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              KMR Group of Companies
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
