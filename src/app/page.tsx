import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Cog,
  Disc3,
  Droplets,
  Flame,
  Layers,
  Ruler,
  RotateCw,
  ShieldCheck,
  Users2,
  Wrench,
  Drill,
  CheckCircle2
} from 'lucide-react';

const specialisations = [
  { title: 'Turning', icon: RotateCw },
  { title: 'Milling', icon: Layers },
  { title: 'Grinding', icon: Disc3 },
  { title: 'Drill & Tap', icon: Drill },
  { title: 'Profile Machining', icon: Ruler },
  { title: 'Special Processes', subtitle: 'Heat Treatment, with Global Vendor Partners', icon: Flame }
];

const strengths = [
  {
    title: 'Strong Technical Engineers',
    description: 'Global engineering expertise in complex process design and technology integration.',
    icon: Users2
  },
  {
    title: 'Quality Assured',
    description: 'Adhering to IATF 16949, ISO 9001 and emerging global standards.',
    icon: ShieldCheck
  },
  {
    title: 'Automated SPM Machine Manufacturing',
    description: 'Developing custom automation and intelligent systems for global scaling.',
    icon: Cog
  }
];

const verticals = [
  {
    title: 'Cutting Tools',
    description: 'Trading in all types of cutting tools for diverse machining requirements.',
    icon: Wrench
  },
  {
    title: 'Grinding Wheels',
    description: 'Wide range of premium grinding wheels for precision and performance.',
    icon: Disc3
  },
  {
    title: 'Lubrication Products',
    description: 'High-performance lubricants and coolants for enhanced tool life and efficiency.',
    icon: Droplets
  }
];

const commitments = ['Quality', 'Innovation', 'Reliability'];

const certifications = ['ISO 9001', 'IATF 16949'];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-blue/30 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-accent/20 blur-[120px]" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 py-24 md:py-32">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-brand-accent font-semibold mb-6 border border-white/10 bg-white/5 rounded-full px-4 py-2">
              INNOVATE &middot; AUTOMATE &middot; TRANSFORM
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.1] text-balance">
              Driving Global Innovation.
              <br />
              <span className="bg-gradient-to-r from-brand-accent to-white bg-clip-text text-transparent">
                Accelerating Future Mobility.
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-lg">
              Manufacturing intelligent machine components for{' '}
              <span className="text-white font-medium">automotive &amp; high-tech industries.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="group inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3.5 rounded-md font-semibold shadow-glow hover:bg-brand-accent hover:text-brand-navy transition-all"
              >
                Request a Quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              {certifications.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 text-xs font-medium text-white/70 border border-white/10 rounded-full px-3.5 py-2"
                >
                  <Award size={14} className="text-brand-accent" />
                  {c} Certified
                </div>
              ))}
            </div>
          </div>

          {/* Abstract precision-engineering visual — real product photography to replace once uploaded to the Media Library */}
          <div className="relative hidden md:block h-[420px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute h-52 w-52 rounded-full border border-dashed border-white/10 animate-spin-reverse-slow" />
              <div className="absolute h-24 w-24 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-accent shadow-glow" />
            </div>
            <div className="absolute top-6 right-4 animate-float rounded-xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 shadow-card">
              <div className="text-[10px] tracking-widest text-white/50 uppercase">Precision</div>
              <div className="text-white font-display font-semibold">Micron-level Tolerance</div>
            </div>
            <div
              className="absolute bottom-8 left-0 animate-float rounded-xl bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 shadow-card"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="text-[10px] tracking-widest text-white/50 uppercase">Automation</div>
              <div className="text-white font-display font-semibold">Custom SPM Systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISATION */}
      <section className="bg-brand-navy text-white px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] font-semibold text-brand-accent mb-3">OUR SPECIALISATION</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-balance">
              End-to-end precision machining capability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {specialisations.map((s) => (
              <div
                key={s.title}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 text-center flex flex-col items-center justify-center gap-3 min-h-[128px] hover:bg-white/10 hover:border-brand-accent/30 hover:-translate-y-1 transition-all"
              >
                <s.icon size={22} className="text-brand-accent transition-transform group-hover:scale-110" />
                <div>
                  <div className="text-sm font-medium">{s.title}</div>
                  {s.subtitle && <div className="text-xs text-white/50 mt-1">{s.subtitle}</div>}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-accent/30 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue/20 text-brand-accent mb-4">
                  <s.icon size={20} />
                </div>
                <div className="font-display font-semibold mb-1.5">{s.title}</div>
                <p className="text-sm text-white/60 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VERTICALS + COMMITMENT */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-6">OUR BUSINESS VERTICALS</h2>
            <div className="space-y-5">
              {verticals.map((v) => (
                <div
                  key={v.title}
                  className="group flex items-start gap-4 rounded-xl border border-brand-navy/10 p-5 shadow-card hover:shadow-card-hover hover:border-brand-blue/20 transition-all"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <v.icon size={20} />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-brand-navy">{v.title}</div>
                    <p className="text-sm text-brand-steel mt-1">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-brand-navy p-8 md:p-10 flex flex-col justify-center">
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-[80px]" />
            <div className="relative">
              <h2 className="text-xs tracking-[0.2em] text-brand-accent font-semibold mb-4">OUR COMMITMENT</h2>
              <p className="text-white font-display text-xl md:text-2xl font-semibold leading-snug text-balance">
                Driving excellence through innovation, automation &amp; precision to deliver value, reliability and
                long-term partnerships.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
                {commitments.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm font-medium text-white">
                    <CheckCircle2 size={16} className="text-brand-accent" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy px-8 py-14 md:px-16 md:py-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-balance">
              Ready to accelerate your production line?
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Tell us about your machining requirements and our engineering team will get back to you with a
              tailored quote.
            </p>
            <Link
              href="/rfq"
              className="group mt-8 inline-flex items-center gap-2 bg-white text-brand-navy px-7 py-3.5 rounded-md font-semibold hover:bg-brand-accent transition-colors"
            >
              Request a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
