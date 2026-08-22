import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Award,
  Boxes,
  Building2,
  CheckCircle,
  ClipboardCheck,
  Cog,
  Disc3,
  FileCheck2,
  FileSearch,
  Flame,
  Globe2,
  Layers,
  LineChart,
  ListChecks,
  ListOrdered,
  Recycle,
  Ruler,
  RotateCw,
  ShieldCheck,
  Users2,
  Drill,
  CheckCircle2,
  Zap
} from 'lucide-react';

const stats = [
  { value: '02', label: 'Manufacturing Plants', icon: Building2 },
  { value: 'Tier-2', label: 'OEM Supply Chain', icon: Award },
  { value: 'Domestic + Export', label: 'Business Markets', icon: Globe2 },
  { value: 'ISO 9001 / IATF 16949', label: 'Documentation Alignment', icon: ShieldCheck }
];

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

const products = [
  {
    title: 'Machined Retainer Washers',
    description: 'Precision-machined retainer washers in multiple sizes, produced from bar stock and forgings.',
    image: '/images/product-retainer-washers.jpg'
  },
  {
    title: 'Brake Pedal Sub-Assembly',
    description: 'Fabricated sub-assembly components shown in their final in-vehicle application.',
    image: '/images/product-brake-pedal.jpg'
  },
  {
    title: 'Cold-Forged Fastener Range',
    description: 'Flange nuts, castle nuts, clevis pins, splined shafts, and hex bolts — cold-forged to spec.',
    image: '/images/product-cold-forged-fasteners.jpg'
  },
  {
    title: 'Carriage Bolt & Nut Sets',
    description: 'Cold-forged carriage bolts with matched nut and washer assemblies.',
    image: '/images/product-carriage-bolts.jpg'
  },
  {
    title: 'Fire Safety Components',
    description: 'Magnetic door holders and lock assemblies engineered for fire safety applications.',
    image: '/images/product-fire-safety.jpg'
  },
  {
    title: 'Bar-Route Turned Parts',
    description: 'Hex socket plugs, standoffs, and collar rings precision-turned directly from bar stock.',
    image: '/images/product-bar-route-parts.jpg'
  }
];

const productionSystems = [
  { title: 'JIT', description: 'Just-in-Time production principles.', icon: Zap },
  { title: 'Kanban', description: 'Visual pull-based production control.', icon: ListChecks },
  { title: 'Batch Production', description: 'Controlled batch manufacturing.', icon: Boxes },
  { title: 'Lean Manufacturing', description: 'Waste reduction and process efficiency.', icon: Recycle },
  { title: 'FIFO', description: 'First-In First-Out material discipline.', icon: ListOrdered },
  { title: 'Traceability', description: 'Controlled production and quality traceability.', icon: FileSearch }
];

const qualityTools = [
  { title: 'APQP', description: 'Advanced Product Quality Planning', icon: ClipboardCheck },
  { title: 'PPAP', description: 'Production Part Approval Process', icon: FileCheck2 },
  { title: 'PFMEA', description: 'Process risk analysis', icon: ShieldCheck },
  { title: 'MSA', description: 'Measurement System Analysis', icon: Ruler },
  { title: 'SPC', description: 'Statistical Process Control', icon: LineChart },
  { title: 'AIAG Control Plan', description: 'Structured process control', icon: ListChecks },
  { title: '7 QC Tools', description: 'Quality analysis and problem solving', icon: FileSearch },
  { title: '8D Methodology', description: 'Structured corrective action', icon: Award }
];

const productRange = [
  'Special Fasteners',
  'Brake Pedal',
  'Shafts',
  'Retainers',
  'Slack Adjuster',
  'Plain Washers',
  'Hardened Washers',
  'Studs for Power Trains',
  'Claw Machining'
];

const materialRoutes = ['Castings', 'Forgings', 'Cold Forging', 'Bar Stock'];

const machiningFacility = [
  'CNC Turning Centers',
  'CNC Turnmill Centre',
  'CNC Single Spindle Automats',
  'Tapping',
  'Precision Cutting Machine — PLC Controlled',
  'PLC Controlled Auto Drilling with Hydraulic Collet',
  'BFW Milling Machine',
  'Rotary Welding Machine'
];

const inspectionFacility = [
  'Digital Linear Height Gauge',
  'Profile Projector',
  'Granite Surface Table',
  'Digital Micrometers',
  'Digital Vernier Caliper',
  'Thread Ring Gauges',
  'Thread Plug Gauges'
];

const customers = [
  'DENO Manufacturing Solutions Pvt Ltd',
  'Triveni Engineering & Industries Ltd',
  'TVS Motor Company',
  'Mypol',
  'V.S.T. Tillers Tractors Ltd',
  'AT & S',
  'LGB Forge Limited',
  'CIEL & TERRE India'
];

const commitments = ['Quality', 'Innovation', 'Reliability'];

const certifications = ['ISO 9001', 'IATF 16949'];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-navy">
        <Image
          src="/images/hero-components.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/50" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-brand-accent font-semibold mb-6 border border-white/10 bg-white/5 rounded-full px-4 py-2">
              INNOVATE &middot; AUTOMATE &middot; TRANSFORM
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.1] text-balance">
              Precision Components.
              <br />
              <span className="bg-gradient-to-r from-brand-accent to-white bg-clip-text text-transparent">
                Engineering Confidence.
              </span>
            </h1>
            <p className="mt-6 text-white/70 text-lg max-w-xl">
              Elixir Tec Corporation is a Mysuru-based Tier-2 manufacturing partner specializing in high
              precision machining components for Automotive and Non-Automotive OEM customers across
              domestic and export markets.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/rfq"
                className="group inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3.5 rounded-md font-semibold shadow-glow hover:bg-brand-accent hover:text-brand-navy transition-all"
              >
                Submit RFQ
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Explore Capabilities
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
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-4">
              ENGINEERING-LED PRECISION MANUFACTURING
            </h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
              A technically driven organization focused on process discipline and quality.
            </p>
            <p className="mt-5 text-brand-steel leading-relaxed">
              Elixir Tec Corporation operates from Mysuru, Karnataka with two manufacturing plants
              supporting precision machining requirements. The company serves as a Tier-2 supplier to
              OEM-linked Automotive and Non-Automotive customers, supporting domestic as well as export
              business — backed by a strong technical and engineering background across process planning,
              manufacturing, quality systems and continual improvement.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-brand-navy/10 p-4 shadow-card">
                  <s.icon size={18} className="text-brand-blue mb-2" />
                  <div className="font-display font-bold text-brand-navy">{s.value}</div>
                  <div className="text-xs text-brand-steel mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card-hover">
            <Image
              src="/images/about-fasteners.jpg"
              alt="Cold-forged fasteners produced at the Elixir Tec Mysuru facility"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-brand-navy text-white px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] font-semibold text-brand-accent mb-3">
              MANUFACTURING CAPABILITIES
            </h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-balance">
              Multi-process precision machining
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

      {/* PRODUCT GALLERY */}
      <section id="products" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-3">PRODUCT GALLERY</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
              Precision components, by manufacturing route
            </p>
            <p className="mt-3 text-brand-steel max-w-2xl mx-auto">
              Real production photography from our Mysuru facility — machined parts, cold-forged fasteners,
              bar-route components, and fire-safety engineered parts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="group rounded-xl overflow-hidden border border-brand-navy/10 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display font-semibold text-brand-navy">{p.title}</div>
                  <p className="text-sm text-brand-steel mt-1">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTION SYSTEMS */}
      <section id="systems" className="bg-brand-light px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-3">PRODUCTION SYSTEMS</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
              Disciplined manufacturing execution
            </p>
            <p className="mt-3 text-brand-steel max-w-2xl mx-auto">
              Production systems structured around flow, traceability, inventory discipline and
              operational efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {productionSystems.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                  <s.icon size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-brand-navy">{s.title}</div>
                  <p className="text-sm text-brand-steel mt-1">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY BACKGROUND */}
      <section id="quality" className="bg-brand-navy text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] font-semibold text-brand-accent mb-3">QUALITY BACKGROUND</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-balance">
              Quality tools supporting process control
            </p>
            <p className="mt-3 text-white/60 max-w-2xl mx-auto">
              Documentation and review practices aligned with ISO 9001 and IATF 16949 requirements,
              supported by recognized automotive quality tools and methodologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {qualityTools.map((q) => (
              <div
                key={q.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-brand-accent/30 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent mb-3">
                  <q.icon size={16} />
                </div>
                <div className="font-display font-semibold">{q.title}</div>
                <p className="text-xs text-white/50 mt-1">{q.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO */}
      <section className="px-6 py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-4">PRODUCTS RANGE</h2>
            <p className="font-display text-2xl font-bold text-brand-navy mb-6">What we manufacture</p>
            <div className="flex flex-wrap gap-2.5">
              {productRange.map((p) => (
                <span
                  key={p}
                  className="text-sm font-medium text-brand-navy bg-white border border-brand-navy/10 rounded-full px-4 py-2 shadow-card"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-4">PRODUCT TECHNOLOGY</h2>
            <p className="font-display text-2xl font-bold text-brand-navy mb-6">Manufactured from</p>
            <div className="flex flex-wrap gap-2.5">
              {materialRoutes.map((m) => (
                <span
                  key={m}
                  className="text-sm font-medium text-white bg-brand-navy rounded-full px-4 py-2"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-brand-blue font-semibold mb-3">OUR FACILITY</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-brand-navy text-balance">
              Machining &amp; inspection equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-brand-navy/10 p-6 md:p-8 shadow-card">
              <div className="font-display font-semibold text-brand-navy mb-4">Machining Facility</div>
              <ul className="space-y-2.5">
                {machiningFacility.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-steel">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-brand-navy/10 p-6 md:p-8 shadow-card">
              <div className="font-display font-semibold text-brand-navy mb-4">Inspection Facility</div>
              <ul className="space-y-2.5">
                {inspectionFacility.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-brand-steel">
                    <CheckCircle size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="bg-brand-navy px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] font-semibold text-brand-accent mb-3">OUR CUSTOMERS</h2>
            <p className="font-display text-2xl md:text-3xl font-bold text-white text-balance">
              Trusted by leading OEMs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {customers.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center text-center rounded-xl border border-white/10 bg-white/5 px-4 py-6 min-h-[88px] text-sm font-medium text-white/80 hover:border-brand-accent/30 hover:text-white transition-colors"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl bg-brand-navy p-8 md:p-12">
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-[80px]" />
          <div className="relative max-w-2xl">
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
      </section>

      {/* CTA BANNER */}
      <section id="rfq" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy px-8 py-14 md:px-16 md:py-16 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="relative">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-white text-balance">
              Request for Quotation
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Share your component requirement — submit your RFQ details and technical documents for
              review by the Elixir Tec team.
            </p>
            <Link
              href="/rfq"
              className="group mt-8 inline-flex items-center gap-2 bg-white text-brand-navy px-7 py-3.5 rounded-md font-semibold hover:bg-brand-accent transition-colors"
            >
              Submit RFQ
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
