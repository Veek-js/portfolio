import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAllProjects,
  getAdjacentProjects,
  getProjectBySlug,
} from "@/lib/data/projects";
import { ArrowLeft, ArrowUpRight, SectionHeading } from "@/components/ui";
import { StatusTag, delay } from "@/components/ProjectCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-5 border-b border-line-soft py-2.5 last:border-0">
      <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
        {label}
      </dt>
      <dd className="text-right text-[0.9rem]">{value}</dd>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const index = getAllProjects().findIndex((p) => p.slug === slug);
  const num = String(index + 1).padStart(2, "0");

  return (
    <main>
      {/* hero */}
      <section className="wrap pb-[clamp(2.5rem,6vw,4rem)] pt-[clamp(2rem,5vw,3.5rem)]">
        <a href="/#work" className="arrow-link text-muted">
          <ArrowLeft /> All work
        </a>

        <div className="mt-9 grid gap-10 lg:grid-cols-[1.5fr_.75fr] lg:items-end">
          <div>
            <span className="label" data-reveal>
              {num} — {project.category}
            </span>

            <h1
              className="mt-6 font-display text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.03] tracking-tight"
              data-reveal
              style={delay(60)}
            >
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lead text-muted" data-reveal style={delay(120)}>
              {project.longDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-2" data-reveal style={delay(180)}>
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3" data-reveal style={delay(240)}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Source <ArrowUpRight />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost"
                >
                  Open live <ArrowUpRight />
                </a>
              )}
            </div>
          </div>

          <aside className="card p-6" data-reveal style={delay(200)}>
            <div className="mb-3 flex items-center justify-between gap-4">
              <span className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
                Status
              </span>
              <StatusTag status={project.status} />
            </div>
            <dl>
              {project.role && <Meta label="Role" value={project.role} />}
              {project.year && <Meta label="Year" value={project.year} />}
              <Meta label="Type" value={project.category} />
              <Meta label="Stack" value={project.technologies.join(", ")} />
            </dl>
          </aside>
        </div>
      </section>

      {/* overview + sidebar */}
      {(project.overview || project.problem) && (
        <section className="section section-alt border-t border-line">
          <div className="wrap section grid gap-12 lg:grid-cols-[1.6fr_.6fr]">
            <div>
              {project.overview && (
                <div data-reveal>
                  <span className="label">Overview</span>
                  <p className="prose-quiet mt-5 max-w-2xl">{project.overview}</p>
                </div>
              )}

              {project.problem && (
                <div className="mt-12" data-reveal style={delay(80)}>
                  <span className="label">The problem</span>
                  <p className="prose-quiet mt-5 max-w-2xl">{project.problem}</p>
                </div>
              )}
            </div>

            {project.results && project.results.length > 0 && (
              <aside className="card h-fit p-6" data-reveal style={delay(120)}>
                <span className="label label--plain">Results</span>
                <ul className="mt-4 space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex gap-3 text-[0.9rem] leading-relaxed">
                      <span className="mt-2 h-px w-4 shrink-0 bg-clay/70" aria-hidden="true" />
                      {result}
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </section>
      )}

      {/* what I built */}
      {project.work && project.work.length > 0 && (
        <section className="section border-t border-line">
          <div className="wrap section">
            <SectionHeading label="What I built" title="The work, piece by piece." />
            <ol className="grid gap-0 border-t border-line">
              {project.work.map((item, i) => (
                <li
                  key={item.title}
                  className="grid gap-x-8 gap-y-2 border-b border-line py-7 md:grid-cols-[4rem_1fr]"
                  data-reveal
                  style={delay(i * 50)}
                >
                  <span className="text-[0.72rem] tracking-[0.16em] text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="max-w-2xl">
                    <h3 className="font-display text-[1.35rem] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">
                      {item.content}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* technical */}
      {project.technical && project.technical.length > 0 && (
        <section className="section section-alt border-t border-line">
          <div className="wrap section">
            <SectionHeading
              label="Technical"
              title="How it's put together."
              intro="The decisions underneath — architecture, data, tooling."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {project.technical.map((group, i) => (
                <div key={group.label} className="card p-6" data-reveal style={delay(i * 60)}>
                  <div className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-clay">
                    {group.label}
                  </div>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-line-soft pb-3 text-[0.88rem] leading-relaxed last:border-0 last:pb-0"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-clay/70" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* lessons */}
      {project.lessons && (
        <section className="section border-t border-line">
          <div className="wrap section">
            <div className="max-w-3xl" data-reveal>
              <span className="label">What I learned</span>
              <p className="mt-6 font-display text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.45] tracking-tight">
                {project.lessons}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* prev / next */}
      <nav className="section border-t border-line" aria-label="Project navigation">
        <div className="wrap grid gap-px sm:grid-cols-2">
          {prev ? (
            <a href={`/projects/${prev.slug}`} className="group py-8 sm:pr-6">
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-faint">
                ← Previous
              </span>
              <div className="mt-2 font-display text-[1.5rem] tracking-tight transition-colors group-hover:text-clay">
                {prev.title}
              </div>
              <div className="text-[0.82rem] text-muted">{prev.category}</div>
            </a>
          ) : (
            <span />
          )}

          {next && (
            <a
              href={`/projects/${next.slug}`}
              className="group border-t border-line py-8 sm:border-0 sm:pl-6 sm:text-right"
            >
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-faint">
                Next →
              </span>
              <div className="mt-2 font-display text-[1.5rem] tracking-tight transition-colors group-hover:text-clay">
                {next.title}
              </div>
              <div className="text-[0.82rem] text-muted">{next.category}</div>
            </a>
          )}
        </div>
      </nav>
    </main>
  );
}