import type { StackCapability } from "@/lib/data/stack";
import { stackGroups } from "@/lib/data/stack";
import { getProjectBySlug } from "@/lib/data/projects";
import { delay } from "./ProjectCard";

function TechIcon({ src }: { src: string }) {
  return (
    <span className="inline-flex shrink-0" aria-hidden="true">
      <img
        src={src}
        alt=""
        width="16"
        height="16"
        style={{ filter: "var(--icon-filter, none)" }}
        loading="lazy"
      />
    </span>
  );
}

export default function StackGrid({ capabilities }: { capabilities: StackCapability[] }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <article key={cap.id} className="card p-6 md:p-7" data-reveal style={delay(i * 60)}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-[1.5rem] tracking-tight">{cap.title}</h3>
              <span className="text-[0.7rem] tracking-[0.16em] text-blue">
                {cap.num}
              </span>
            </div>

            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{cap.description}</p>

            <dl className="mt-6 border-t border-line pt-4">
              {cap.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-baseline justify-between gap-5 border-b border-line-soft py-2.5 last:border-0"
                >
                  <dt className="text-[0.92rem] font-medium flex items-center gap-2">
                    {tech.icon && <TechIcon src={tech.icon} />}
                    {tech.name}
                  </dt>
                  <dd className="text-right text-[0.78rem] leading-snug text-faint">
                    {tech.context}
                  </dd>
                </div>
              ))}
            </dl>

            {cap.projects && cap.projects.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-[0.66rem] uppercase tracking-[0.16em] text-faint">
                  Used in
                </span>
                {cap.projects.map((slug) => {
                  const project = getProjectBySlug(slug);
                  if (!project) return null;
                  return (
                    <a
                      key={slug}
                      href={`/projects/${slug}`}
                      className="text-[0.85rem] text-muted underline decoration-line underline-offset-4 transition-colors hover:text-blue hover:decoration-blue"
                    >
                      {project.title}
                    </a>
                  );
                })}
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
        {stackGroups.map((group) => (
          <div key={group.label}>
            <div className="text-[0.66rem] uppercase tracking-[0.16em] text-blue">
              {group.label}
            </div>
            <ul className="mt-3 space-y-1.5 text-[0.88rem] text-muted">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}