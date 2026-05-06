import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { HeroScene } from "./HeroScene";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, 86]);
  const opacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const showcaseProjects = projects.slice(0, 3);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-vault-void px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
    >
      <HeroScene />

      <div className="pointer-events-none absolute inset-0 bg-radial-cyan" />
      <div className="pointer-events-none absolute inset-0 bg-radial-pink" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(182,255,59,0.1),transparent_23rem),linear-gradient(to_bottom,rgba(5,7,13,0.06),rgba(5,7,13,0.68)_72%,#05070D)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-vault-void to-transparent" />

      <motion.div
        style={{ y, opacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_0.78fr]"
      >
        <div className="flex flex-col items-start">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-vault-muted shadow-[0_0_40px_rgba(255,255,255,0.04)] backdrop-blur-2xl sm:text-sm"
          >
            <Sparkles className="size-4 text-vault-lime" aria-hidden="true" />
            Built with Codex & Claude in 2026
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-vault-cyan"
          >
            AI Product Builder Portfolio
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(4rem,11vw,10.5rem)] font-semibold leading-[0.82] tracking-normal text-white"
          >
            Vibe
            <span className="block bg-gradient-to-r from-white via-vault-cyan to-vault-pink bg-clip-text text-transparent">
              Vault
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-7 max-w-2xl border-l border-vault-cyan/50 pl-5 sm:mt-8 sm:pl-7"
          >
            <p className="font-display text-[clamp(1.55rem,4.2vw,3.9rem)] font-semibold leading-[1] tracking-normal text-white">
              AI Era Creations
            </p>
            <p className="mt-4 text-base leading-7 text-vault-muted sm:text-lg">
              by an <span className="text-vault-cyan">AI Product Builder</span>.
              A cinematic portfolio for shipped tools, dashboards, and writing
              systems built with agentic engineering.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <a href="#projects">
              <Button className="w-full sm:w-auto">
                View Work
                <ArrowDown className="size-4" aria-hidden="true" />
              </Button>
            </a>
            <a href="https://github.com/XmchxUp" target="_blank" rel="noreferrer">
              <Button variant="ghost" className="w-full sm:w-auto">
                <Github className="size-4" aria-hidden="true" />
                GitHub
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-[8px] border border-white/12 bg-white/10"
            aria-label="Portfolio signals"
          >
            {[
              ["04", "shipped works"],
              ["2026", "AI era build"],
              ["R3F", "motion stage"],
            ].map(([value, label]) => (
              <div key={label} className="bg-vault-void/72 p-4 backdrop-blur-2xl">
                <p className="font-display text-xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-vault-muted">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative hidden min-h-[560px] lg:block"
          aria-label="Featured project previews"
        >
          <div className="absolute right-0 top-0 h-full w-full rounded-[8px] border border-white/12 bg-white/[0.035] shadow-[0_0_120px_rgba(0,229,255,0.13)] backdrop-blur-2xl" />
          <div className="absolute inset-6 rounded-[8px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
          <div className="absolute left-11 top-11 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-vault-muted">
            <span className="size-2 rounded-full bg-vault-cyan shadow-[0_0_18px_rgba(0,229,255,0.9)]" />
            Selected Index
          </div>

          {showcaseProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.demoUrl ?? project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="group absolute block w-[78%] overflow-hidden rounded-[8px] border border-white/14 bg-vault-night shadow-[0_30px_90px_rgba(0,0,0,0.42)] transition duration-500 hover:z-20 hover:-translate-y-2 hover:border-vault-cyan/50"
              style={{
                top: `${88 + index * 126}px`,
                right: `${index * 34}px`,
                transform: `rotate(${index === 1 ? -2 : index === 2 ? 2.5 : 0}deg)`,
              }}
            >
              <div className="aspect-[16/9] overflow-hidden">
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                ) : (
                  <div className="h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,209,102,0.18),transparent_18rem),#080b10]" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-vault-void via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-vault-cyan">
                    {project.category}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    {project.title}
                  </p>
                </div>
                <ArrowUpRight className="size-5 text-white/80" aria-hidden="true" />
              </div>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
