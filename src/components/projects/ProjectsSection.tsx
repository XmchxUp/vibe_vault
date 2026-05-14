import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { filters, projects, type ProjectFilter } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectPreview } from "./ProjectPreview";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);
  const featuredProject = visibleProjects[0];
  const galleryProjects = visibleProjects.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-vault-void px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(255,43,214,0.13),transparent_24rem),radial-gradient(circle_at_82%_18%,rgba(0,229,255,0.13),transparent_30rem),linear-gradient(to_bottom,#05070D,#071017_46%,#05070D)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 grid gap-7 lg:mb-14 lg:grid-cols-[0.75fr_0.55fr] lg:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-2 text-sm text-vault-muted backdrop-blur-xl">
              <Filter className="size-4 text-vault-cyan" aria-hidden="true" />
              Selected Work
            </div>
            <h2 className="font-display text-[clamp(2.75rem,7.5vw,6.5rem)] font-semibold leading-[0.9] tracking-normal text-white">
              Curated Builds
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-vault-muted sm:text-lg">
              Current builds presented as product stories: live analysis, agent
              skills, quantified self, writing infrastructure, and
              terminal-native media tooling.
            </p>
          </div>

          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-2xl lg:justify-self-end">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-w-fit rounded-full px-2.5 py-2 text-xs font-medium transition sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-vault-cyan text-vault-void shadow-glow"
                      : "text-vault-muted hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {featuredProject ? (
          <motion.div layout className="grid gap-6 lg:grid-cols-[1.08fr_0.72fr]">
            <ProjectCard project={featuredProject} index={0} featured />

            <div className="grid gap-4">
              {galleryProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  layout
                  href={project.demoUrl ?? project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.62,
                    delay: index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group grid gap-4 overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.045] p-3 backdrop-blur-2xl transition duration-500 hover:border-vault-cyan/45 hover:bg-white/[0.07] sm:grid-cols-[180px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] border border-white/10 bg-vault-night">
                    <ProjectPreview project={project} compact />
                  </div>

                  <div className="flex min-w-0 flex-col justify-between py-1">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs uppercase tracking-[0.18em] text-vault-muted">
                          0{index + 2} / {project.category}
                        </p>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-vault-cyan opacity-70 transition group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-normal text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-vault-muted">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-vault-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
