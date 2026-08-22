import Link from 'next/link';

const specialisations = [
  { title: 'Turning' },
  { title: 'Milling' },
  { title: 'Grinding' },
  { title: 'Drill & Tap' },
  { title: 'Profile Machining' },
  { title: 'Special Processes', subtitle: 'Heat Treatment, with Global Vendor Partners' }
];

const strengths = [
  {
    title: 'Strong Technical Engineers',
    description: 'Global engineering expertise in complex process design and technology integration.'
  },
  {
    title: 'Quality Assured',
    description: 'Adhering to IATF 16949, ISO 9001 and emerging global standards.'
  },
  {
    title: 'Automated SPM Machine Manufacturing',
    description: 'Developing custom automation and intelligent systems for global scaling.'
  }
];

const verticals = [
  {
    title: 'Cutting Tools',
    description: 'Trading in all types of cutting tools for diverse machining requirements.'
  },
  {
    title: 'Grinding Wheels',
    description: 'Wide range of premium grinding wheels for precision and performance.'
  },
  {
    title: 'Lubrication Products',
    description: 'High-performance lubricants and coolants for enhanced tool life and efficiency.'
  }
];

const commitments = ['Quality', 'Innovation', 'Reliability'];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-light to-white px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm tracking-widest text-brand-blue font-semibold mb-4">
              INNOVATE &middot; AUTOMATE &middot; TRANSFORM
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-brand-navy leading-tight">
              Driving Global Innovation.
              <br />
              Accelerating Future Mobility.
            </h1>
            <p className="mt-6 text-brand-steel text-lg">
              Manufacturing Intelligent Machine Components for{' '}
              <span className="text-brand-blue font-medium">Automotive &amp; High-Tech Industries.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="bg-brand-blue text-white px-6 py-3 rounded font-medium hover:bg-brand-navy transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/about"
                className="border border-brand-navy text-brand-navy px-6 py-3 rounded font-medium hover:bg-brand-navy hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Real product photography goes here once uploaded to the Media Library */}
          <div className="hidden md:block aspect-video rounded bg-brand-navy/5 border border-brand-navy/10" />
        </div>
      </section>

      {/* SPECIALISATION */}
      <section className="bg-brand-navy text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm tracking-widest font-semibold mb-8">OUR SPECIALISATION</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {specialisations.map((s) => (
              <div
                key={s.title}
                className="bg-white/5 border border-white/10 rounded p-4 text-center flex flex-col justify-center min-h-[96px]"
              >
                <div className="text-sm font-medium">{s.title}</div>
                {s.subtitle && <div className="text-xs text-white/60 mt-1">{s.subtitle}</div>}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {strengths.map((s) => (
              <div key={s.title}>
                <div className="font-semibold mb-1">{s.title}</div>
                <p className="text-sm text-white/70">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS VERTICALS + COMMITMENT */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-sm tracking-widest text-brand-blue font-semibold mb-6">OUR BUSINESS VERTICALS</h2>
            <div className="space-y-6">
              {verticals.map((v) => (
                <div key={v.title} className="border-b border-brand-navy/10 pb-4">
                  <div className="font-semibold text-brand-navy">{v.title}</div>
                  <p className="text-sm text-brand-steel mt-1">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-light rounded p-8">
            <h2 className="text-sm tracking-widest text-brand-blue font-semibold mb-4">OUR COMMITMENT</h2>
            <p className="text-brand-navy">
              Driving excellence through innovation, automation &amp; precision to deliver value, reliability and
              long-term partnerships.
            </p>
            <div className="flex gap-6 mt-6">
              {commitments.map((c) => (
                <div key={c} className="text-sm font-medium text-brand-navy">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
