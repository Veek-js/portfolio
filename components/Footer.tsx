import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.75rem] leading-relaxed tracking-wide text-muted">
          © {year} {site.handle} · Set in Inter · Built with Next.js
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem] text-muted">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-clay"
          >
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-clay">
            Email
          </a>
          <a
            href={site.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-clay"
          >
            Discord
          </a>
          <a href="#top" className="transition-colors hover:text-clay">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}