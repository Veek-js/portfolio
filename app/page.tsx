import ProjectCard, { delay } from "@/components/ProjectCard";
import ExperienceList from "@/components/ExperienceList";
import StackGrid from "@/components/StackGrid";
import ArchiveList from "@/components/ArchiveList";
import CopyEmail from "@/components/CopyEmail";
import { SectionHeading, ArrowUpRight } from "@/components/ui";
import { getFeaturedProject, getSecondaryProjects } from "@/lib/data/projects";
import { experiences } from "@/lib/data/experience";
import { capabilities } from "@/lib/data/stack";
import { archiveProjects } from "@/lib/data/archive";
import { site } from "@/lib/site";

const featured = getFeaturedProject();
const secondary = getSecondaryProjects();

const now = [
  { key: "Building", value: "Vanilla-Core" },
  { key: "Based in", value: site.location },
  { key: "Focus", value: "Minecraft · Discord · Web" },
  { key: "Open to", value: "Collaborations & contracts" },
];

const workflow = [
  { num: "01", title: "Build", desc: "Start with something useful, not something impressive." },
  { num: "02", title: "Test", desc: "Use the thing myself and find where it breaks." },
  { num: "03", title: "Refine", desc: "Cut the unnecessary complexity, keep the feel." },
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="wrap pb-[clamp(3rem,7vw,5rem)] pt-[clamp(6.5rem,13vw,9.5rem)] text-center">
        <div data-reveal>
          <span className="pill">
            <span className="dot" />
            Available for new work
          </span>
        </div>

        <h1 className="mx-auto mt-7 max-w-4xl font-display text-hero" data-reveal style={delay(60)}>
          I build things
          <br />
          that actually run.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lead text-muted" data-reveal style={delay(140)}>
          Minecraft plugins, Discord bots, web tools, and the infrastructure behind
          them. I ship code that powers real communities.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" data-reveal style={delay(220)}>
          <a href="#work" className="btn btn--primary">
            See selected work <ArrowUpRight />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link"
          >
            GitHub <ArrowUpRight />
          </a>
        </div>

        <aside className="card mx-auto mt-12 max-w-3xl p-6 text-left md:p-8" data-reveal style={delay(260)}>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {now.map((row) => (
              <div key={row.key}>
                <dt className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-faint">
                  {row.key}
                </dt>
                <dd className="mt-1.5 text-[0.95rem] font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-line-soft pt-5">
            {["Java", "TypeScript", "Astro", "Discord.js", "Docker"].map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </aside>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="section section-alt border-t border-line">
        <div className="wrap">
          <SectionHeading
            label="02 — Selected Work"
            title={<>Things I&apos;ve actually built.</>}
            intro="Plugins running in production, bots handling real communities, web tools people use daily. Not prototypes — products."
          />

          <div className="grid gap-5">
            {featured && <ProjectCard project={featured} index={1} featured />}
            <div className="grid gap-5 md:grid-cols-2">
              {secondary.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section border-t border-line">
        <div className="wrap">
          <SectionHeading
            label="03 — Experience"
            title={<>Where I&apos;ve built and operated.</>}
            intro="Running servers, building plugins, shipping bots — the work behind the projects."
          />
          <ExperienceList experiences={experiences} />
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" className="section section-alt border-t border-line">
        <div className="wrap">
          <SectionHeading
            label="04 — Stack"
            title={<>What I build with.</>}
            intro="Tools change. The ability to build with them matters more."
          />
          <StackGrid capabilities={capabilities} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section border-t border-line">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <span className="label">05 — About</span>
            <h2 className="mt-6 font-display text-title leading-[1.1]">
              The person
              <br />
              behind the projects.
            </h2>

            <dl className="mt-8 max-w-sm border-t border-line pt-4">
              {[
                { k: "Name", v: "Veekshith" },
                { k: "Based", v: site.location },
                { k: "Focus", v: "Software · communities" },
                { k: "Building", v: "Minecraft · Discord · Web" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-5 border-b border-line-soft py-2.5 last:border-0"
                >
                  <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-faint">
                    {row.k}
                  </dt>
                  <dd className="text-right text-[0.9rem]">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div data-reveal style={delay(90)}>
            <p className="prose-quiet">
              I build software around online communities — Minecraft systems, Discord
              tools, web applications, and the infrastructure that keeps them running.
            </p>
            <p className="prose-quiet">
              I like taking an idea from "this would be useful" to something people
              actually use, on a Tuesday, without thinking about it.
            </p>

            <blockquote className="mt-8 border-l-2 border-line pl-5 font-display text-[1.25rem] leading-snug text-ink">
              I care more about useful software than impressive-looking software.
            </blockquote>

            <div className="mt-9">
              <span className="label label--plain">How I work</span>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {workflow.map((step) => (
                  <div key={step.num} className="border-t border-line pt-3">
                    <div className="text-[0.68rem] tracking-[0.16em] text-faint">
                      {step.num}
                    </div>
                    <div className="mt-2 font-display text-[1.15rem]">{step.title}</div>
                    <p className="mt-1 text-[0.85rem] leading-relaxed text-muted">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARCHIVE ── */}
      <section id="archive" className="section border-t border-line">
        <div className="wrap">
          <SectionHeading
            label="06 — Archive"
            title={<>Things that didn&apos;t stay.</>}
            intro="Experiments, old builds and things that taught me something. Tap a row to expand."
          />
          <ArchiveList projects={archiveProjects} />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section section-alt border-t border-line">
        <div className="wrap text-center">
          <div data-reveal>
            <span className="label">07 — Contact</span>
            <h2 className="mt-6 font-display text-hero">
              Let&apos;s make something useful.
            </h2>
            <p className="mt-6 max-w-md mx-auto text-lead text-muted">
              Got a project in mind, or just want to talk shop? I&apos;m always open to
              new collaborations and interesting problems.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3" data-reveal style={delay(90)}>
            <a href={`mailto:${site.email}`} className="btn btn--primary">
              Email me <ArrowUpRight />
            </a>
            <CopyEmail />
            <a
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Discord <ArrowUpRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}