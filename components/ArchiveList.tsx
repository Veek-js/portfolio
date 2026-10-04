import type { ArchiveProject } from "@/lib/data/archive";
import { ArrowUpRight, Plus } from "./ui";
import { delay } from "./ProjectCard";

const statusTone: Record<ArchiveProject["status"], string> = {
  archived: "text-muted",
  replaced: "text-muted",
  discontinued: "text-blue",
  experimental: "text-blue",
};

export default function ArchiveList({ projects }: { projects: ArchiveProject[] }) {
  return (
    <div data-reveal style={delay(40)}>
      {projects.map((project) => (
        <details key={project.id} className="disclosure">
          <summary>
            <span className="w-7 font-mono text-[0.72rem] tracking-widest text-faint">
              {project.num}
            </span>

            <span className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <span className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-display text-[1.3rem] tracking-tight">
                  {project.title}
                </span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">
                  {project.category}
                </span>
              </span>

              <span className="flex items-baseline gap-4 font-mono text-[0.7rem] uppercase tracking-[0.14em]">
                <span className={statusTone[project.status]}>{project.status}</span>
                <span className="text-faint">{project.year}</span>
              </span>
            </span>

            <Plus className="disclosure-plus" />
          </summary>

          <div className="disclosure-body">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
              <div className="max-w-2xl">
                <p className="text-[0.95rem] leading-relaxed text-muted">
                  {project.description}
                </p>
                {project.reason && (
                  <p className="mt-3 font-display text-[1.02rem] text-muted">
                    {project.reason}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

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
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
