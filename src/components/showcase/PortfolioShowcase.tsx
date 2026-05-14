import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Github,
  Sparkles,
} from "lucide-react";
import { filters, projects, type ProjectFilter } from "@/data/projects";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

const accentText = {
  cyan: "text-vault-cyan",
  pink: "text-vault-pink",
  lime: "text-vault-lime",
  amber: "text-vault-amber",
};

const accentBg = {
  cyan: "bg-vault-cyan",
  pink: "bg-vault-pink",
  lime: "bg-vault-lime",
  amber: "bg-vault-amber",
};

export function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const activeProject = visibleProjects[activeIndex] ?? visibleProjects[0];

  const setFilter = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setActiveIndex(0);
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      const next = current + direction;
      if (next < 0) return visibleProjects.length - 1;
      if (next >= visibleProjects.length) return 0;
      return next;
    });
  };

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#03050a] text-vault-text"
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_15%_18%,rgba(0,229,255,0.18),transparent_34rem),radial-gradient(ellipse_at_88%_10%,rgba(255,43,214,0.16),transparent_32rem),radial-gradient(ellipse_at_54%_92%,rgba(182,255,59,0.08),transparent_34rem),linear-gradient(135deg,#03050a,#080713_42%,#071017_72%,#03050a)]" />
      <div className="pointer-events-none fixed inset-0 bg-[conic-gradient(from_140deg_at_52%_48%,rgba(0,229,255,0.09),rgba(255,43,214,0.11),rgba(255,209,102,0.06),rgba(0,229,255,0.09))] opacity-60 mix-blend-screen" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.09] [background-image:linear-gradient(115deg,rgba(255,255,255,0.52)_1px,transparent_1px),linear-gradient(25deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:140px_140px,220px_220px]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(3,5,10,0.72)_78%)]" />

      <section className="relative mx-auto grid min-h-screen max-w-[1680px] grid-rows-[auto_1fr_auto] px-4 py-4 sm:px-6 lg:px-8">
        <header className="z-20 flex items-center justify-between rounded-[8px] border border-white/12 bg-white/[0.045] px-4 py-3 backdrop-blur-2xl">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-[8px] border border-vault-cyan/45 bg-vault-cyan/10">
              <span className="size-2 rounded-full bg-vault-cyan shadow-[0_0_18px_rgba(0,229,255,0.95)]" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-white">
                VibeVault
              </p>
              <p className="hidden text-xs uppercase tracking-[0.18em] text-vault-muted sm:block">
                AI Product Builder
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  activeFilter === filter
                    ? "bg-white text-vault-void"
                    : "text-vault-muted hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <a
            href="https://github.com/XmchxUp"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white transition hover:border-vault-cyan/45 hover:bg-white/[0.09]"
          >
            <Github className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </header>

        {activeProject ? (
          <div className="z-10 grid items-center gap-5 py-5 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-6">
            <div className="relative min-h-[52vh] overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.045] shadow-[0_40px_160px_rgba(0,0,0,0.48)] backdrop-blur-2xl lg:min-h-[76vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.012 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <ProjectPreview project={activeProject} stage />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/78 backdrop-blur-xl sm:left-6 sm:top-6">
                <Sparkles className="size-3.5 text-vault-lime" aria-hidden="true" />
                Work display
              </div>

              <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-2 backdrop-blur-xl sm:bottom-6 sm:left-6">
                <span
                  className={`h-2 w-10 rounded-full ${accentBg[activeProject.accent]}`}
                />
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  0{activeIndex + 1} / {visibleProjects.length} /{" "}
                  {activeProject.category}
                </span>
              </div>
            </div>

            <aside className="grid min-h-0 gap-4 lg:max-h-[76vh] lg:grid-rows-[auto_minmax(0,1fr)]">
              <div className="rounded-[8px] border border-white/12 bg-white/[0.06] p-5 backdrop-blur-2xl sm:p-6">
                <p
                  className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${accentText[activeProject.accent]}`}
                >
                  Featured Project
                </p>
                <h1 className="mb-5 font-display text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-[0.9] tracking-normal text-white">
                  {activeProject.title}
                </h1>
                <p className="text-base leading-7 text-white/82">
                  {activeProject.description}
                </p>
                <p className="mt-5 border-l border-white/16 pl-4 text-sm leading-6 text-vault-muted">
                  {activeProject.vibe}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-xs text-vault-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={activeProject.demoUrl ?? activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-vault-cyan px-5 py-3 text-sm font-semibold text-vault-void transition hover:bg-white"
                  >
                    {activeProject.demoLabel ?? "Demo"}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <a
                    href={activeProject.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white transition hover:border-vault-pink/45 hover:bg-white/[0.08]"
                  >
                    <Github className="size-4" aria-hidden="true" />
                    Source
                  </a>
                </div>
              </div>

              <div className="min-h-0 overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.04] p-3 backdrop-blur-2xl">
                <div className="mb-3 flex items-center justify-between px-2 pt-1">
                  <p className="text-xs uppercase tracking-[0.22em] text-vault-muted">
                    Index
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => move(-1)}
                      className="flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-white transition hover:border-vault-cyan/45"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="size-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => move(1)}
                      className="flex size-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-white transition hover:border-vault-cyan/45"
                      aria-label="Next project"
                    >
                      <ChevronRight className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="grid max-h-[520px] gap-2 overflow-y-auto pr-1 lg:max-h-full">
                  {visibleProjects.map((project, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`group grid grid-cols-[72px_1fr] gap-3 rounded-[8px] border p-2 text-left transition ${
                          isActive
                            ? "border-vault-cyan/55 bg-vault-cyan/10"
                            : "border-white/8 bg-white/[0.025] hover:border-white/18 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="aspect-[16/10] overflow-hidden rounded-[6px] bg-vault-night">
                          <ProjectPreview project={project} compact />
                        </div>
                        <div className="min-w-0 self-center">
                          <p className="truncate font-display text-sm font-semibold text-white">
                            {project.title}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-vault-muted">
                            0{index + 1} / {project.category}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        ) : null}

        <div className="z-10 flex flex-wrap items-center justify-between gap-3 pb-1 text-xs uppercase tracking-[0.2em] text-vault-muted">
          <span>AI Era Creations</span>
          <span>Built with Codex & Claude in 2026</span>
        </div>
      </section>
    </main>
  );
}
