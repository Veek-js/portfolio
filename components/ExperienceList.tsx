import type { Experience } from "@/lib/data/experience";
import { ArrowUpRight } from "./ui";
import { delay } from "./ProjectCard";

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <ol className="border-t border-line">
      {experiences.map((exp, i) => (
        <li
          key={exp.id}
          className="grid gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-[11rem_1fr]"
          data-reveal
          style={delay(i * 50)}
        >
          <div>
            <div className="font-mono text-[0.78rem] tracking-wide text-muted">
              {exp.period}
            </div>
            <div className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-faint">
              {exp.type}
            </div>
            {exp.current && (
              <span className="mt-3 inline-flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-green">
                <span className="dot" />
                current
              </span>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-[1.55rem] tracking-tight">
                {exp.organization}
              </h3>
              <span className="text-sm text-muted">{exp.role}</span>
            </div>

            <p className="mt-2.5 max-w-2xl text-[0.97rem] leading-relaxed text-muted">
              {exp.description}
            </p>

            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-[0.9rem] text-ink/85">
                    <span className="mt-2 h-px w-4 shrink-0 bg-clay/70" aria-hidden="true" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {exp.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link ml-1 text-muted"
                >
                  Join server <ArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
