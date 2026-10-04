import { ArrowLeft, ArrowUpRight } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[65vh] flex-col items-start justify-center py-24">
      <span className="label">404 — nothing here</span>
      <h1 className="mt-6 font-display text-hero">
        This page didn&apos;t
        <br />
        make it to prod.
      </h1>
      <p className="mt-6 max-w-md text-lead text-muted">
        The link is old, or the project moved. Everything real is still on the main
        page.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a href="/" className="btn btn--primary">
          <ArrowLeft /> Back home
        </a>
        <a href="/#work" className="btn btn--ghost">
          See the work <ArrowUpRight />
        </a>
      </div>
    </main>
  );
}
