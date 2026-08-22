export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white/80 px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto text-sm">
        <div className="font-semibold text-white mb-2">ELIXIR TEC CORPORATION</div>
        <p className="max-w-md">
          Precision manufacturing for Automotive &amp; High-Tech industries — Mysuru, Karnataka, India.
        </p>
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-2">
          <span>&copy; {year} Elixir Tec Corporation. All Rights Reserved.</span>
          <span>
            Powered By{' '}
            <a
              href="https://www.kmr-groups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              KMR Group of Companies
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
