'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from './BrandMark';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <BrandMark className="h-9 w-9 shrink-0 rounded-lg shadow-card transition-transform group-hover:scale-105" />
          <span className="leading-tight">
            <span className="block font-display font-bold text-brand-navy tracking-wide">
              ELIXIR TEC <span className="font-medium text-brand-steel">CORPORATION</span>
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] text-brand-steel/70">
              INNOVATE &middot; AUTOMATE &middot; TRANSFORM
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-brand-steel">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="relative py-1 transition-colors hover:text-brand-blue">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/rfq"
            className="hidden sm:inline-flex bg-brand-blue text-white text-sm px-5 py-2.5 rounded-md font-medium shadow-card hover:bg-brand-navy hover:shadow-card-hover transition-all"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-navy/10 text-brand-navy hover:bg-brand-light transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-navy/10 bg-white px-6 py-4">
          <nav className="flex flex-col gap-1 text-sm font-medium text-brand-steel">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 hover:bg-brand-light hover:text-brand-blue transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/rfq"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-blue text-white text-center px-4 py-2.5 rounded-md font-medium hover:bg-brand-navy transition-colors"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
