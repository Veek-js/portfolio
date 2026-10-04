import type { Project } from "@/lib/data/projects";
import { statusLabel } from "@/lib/data/projects";
import { ArrowUpRight } from "./ui";

export const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export function StatusTag({ status }: { status: Project["status"] }) {
  const live = status === "active";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
      {live && <span className="dot" />}
      {statusLabel[status]}
    </span>
  );
}

export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const num = String(index).padStart(2, "0");
  const features = featured ? project.features : project.features.slice(0, 3);

  return (
    <article
      className={`card flex h-full flex-col ${featured ? "p-7 md:p-10" : "p-6 md:p-7"}`}
      data-reveal
      style={delay(featured ? 0 : 60)}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted">
          {num} <span className="text-faint">/</span>{" "}
          <span className="text-blue">{project.category}</span>
        </span>
        <StatusTag status={project.status} />
      </div>

      <h3
        className={`mt-5 font-display tracking-tight ${
          featured ? "text-[clamp(2rem,3.6vw,3rem)]" : "text-[1.6rem]"
        }`}
      >
        {project.title}
      </h3>

      <p
        className={`mt-3 text-muted ${featured ? "text-lead max-w-2xl" : "text-[0.95rem] leading-relaxed"}`}
      >
        {project.description}
      </p>

      <ul className={`mt-6 space-y-2 ${featured ? "" : "hidden md:block"}`}>
        {features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[0.9rem] text-ink/85">
            <span className="mt-2 h-px w-4 shrink-0 bg-faint" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <div className="rule mb-5" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={`/projects/${project.slug}`} className="arrow-link">
            Read the case study <ArrowUpRight />
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-muted"
            >
              GitHub <ArrowUpRight />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link text-muted"
            >
              Live <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
