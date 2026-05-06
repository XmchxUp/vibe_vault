import { ArrowUpRight, Github } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const accentClasses: Record<Project["accent"], string> = {
  cyan: "text-vault-cyan border-vault-cyan/35 bg-vault-cyan/10",
  pink: "text-vault-pink border-vault-pink/35 bg-vault-pink/10",
  lime: "text-vault-lime border-vault-lime/35 bg-vault-lime/10",
  amber: "text-vault-amber border-vault-amber/35 bg-vault-amber/10",
};

const glowClasses: Record<Project["accent"], string> = {
  cyan: "group-hover:shadow-[0_0_70px_rgba(0,229,255,0.18)]",
  pink: "group-hover:shadow-[0_0_70px_rgba(255,43,214,0.18)]",
  lime: "group-hover:shadow-[0_0_70px_rgba(182,255,59,0.16)]",
  amber: "group-hover:shadow-[0_0_70px_rgba(255,209,102,0.16)]",
};

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-[8px] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] backdrop-blur-2xl transition duration-500 ${glowClasses[project.accent]}`}
    >
      <div
        className={`relative overflow-hidden border-b border-white/10 ${
          featured ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <ProjectPreview project={project} />
      </div>

      <div className={`relative ${featured ? "p-5 sm:p-7" : "p-5"}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-medium ${accentClasses[project.accent]}`}
          >
            {project.category}
          </span>
          <span className="text-xs text-vault-muted">0{index + 1}</span>
        </div>

        <h3 className="font-display text-2xl font-semibold tracking-normal text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-vault-muted sm:text-[15px]">
          {project.description}
        </p>
        <p className="mt-4 border-l border-white/14 pl-4 text-sm leading-6 text-white/78 sm:text-[15px]">
          {project.vibe}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-vault-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-vault-cyan/50 bg-vault-cyan px-4 py-2.5 text-sm font-medium text-vault-void transition hover:bg-white"
            >
              {project.demoLabel ?? "Demo"}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-vault-muted">
              Demo pending
            </span>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition hover:border-vault-pink/50 hover:bg-white/[0.08]"
          >
            <Github className="size-4" aria-hidden="true" />
            GitHub
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
