import { TerminalSquare } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectPreviewProps {
  project: Project;
  compact?: boolean;
  stage?: boolean;
}

export function ProjectPreview({
  project,
  compact = false,
  stage = false,
}: ProjectPreviewProps) {
  const isLarge = stage && !compact;
  const terminalLines = project.previewLines ?? [
    "$ cutline check project.toml",
    "valid plan: 3 clips / 00:13:45.500",
    "$ cutline render project.toml",
    "cache/opening.mp4 ........ ready",
    "cache/break.mp4 .......... muted",
    "cache/main-topic.mp4 ..... blur pass",
    "dist/output.mp4 generated",
  ];
  const terminalMetrics =
    project.previewMetrics ??
    [
      { label: "Opening", value: "01" },
      { label: "Break", value: "02" },
      { label: "Main topic", value: "03" },
    ];

  if (project.format === "phone" && stage) {
    const gallery = project.gallery?.filter(Boolean) ?? [project.cover].filter(Boolean);

    return (
      <div className="relative flex h-full min-h-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_22%,rgba(255,43,214,0.22),transparent_24rem),radial-gradient(circle_at_30%_80%,rgba(0,229,255,0.13),transparent_22rem),#090b14] p-6">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(120deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative grid w-full max-w-[820px] grid-cols-2 items-center justify-center gap-3 sm:flex sm:gap-4">
          {gallery.map((src, index) => {
            const midpoint = (gallery.length - 1) / 2;
            const offset = index - midpoint;
            const isCenter = Math.abs(offset) < 0.6;

            return (
              <div
                key={src}
                className={`overflow-hidden rounded-[22px] border border-white/18 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:rounded-[28px] ${
                  isCenter ? "sm:z-10 sm:w-[30%]" : "sm:w-[24%] sm:opacity-78"
                }`}
                style={{
                  transform: `rotate(${offset * 4.2}deg) translateY(${
                    Math.abs(offset) * 18
                  }px)`,
                }}
              >
                <img
                  src={src}
                  alt={`${project.title} mobile preview ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (project.format === "phone" && compact) {
    return (
      <div className="relative h-full min-h-[118px] overflow-hidden bg-[#10101b]">
        <img
          src={project.cover}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vault-void/70 to-transparent" />
      </div>
    );
  }

  if (project.previewMode === "workflow" || project.previewMode === "registry") {
    const metrics = project.previewMetrics ?? [
      { label: "Drafts", value: "ready" },
      { label: "Policy", value: "gated" },
      { label: "Runtime", value: "local" },
    ];
    const steps =
      project.previewLines ?? [
        "Draft -> Evaluation",
        "Policy gate -> Publication",
        "Lockfile -> Deployment",
        "Invocation -> Trace",
      ];
    const isRegistry = project.previewMode === "registry";

    return (
      <div
        className={`relative h-full overflow-hidden bg-[#070b12] ${
          compact ? "min-h-[118px] p-3" : stage ? "min-h-full p-5 sm:p-7" : "min-h-[230px] p-5"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,229,255,0.18),transparent_20rem),radial-gradient(circle_at_78%_16%,rgba(255,43,214,0.14),transparent_22rem),linear-gradient(145deg,rgba(255,255,255,0.045),transparent)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative flex h-full flex-col">
          <div
            className={`grid gap-2 ${
              compact ? "grid-cols-3" : "grid-cols-3"
            }`}
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className={`rounded-[7px] border border-white/10 bg-white/[0.055] ${
                  compact ? "p-2" : "p-3 sm:p-4"
                }`}
              >
                <p
                  className={`truncate font-display font-semibold text-white ${
                    compact ? "text-sm" : isLarge ? "text-2xl" : "text-lg"
                  }`}
                >
                  {metric.value}
                </p>
                <p
                  className={`mt-1 truncate uppercase tracking-[0.14em] text-vault-muted ${
                    compact ? "text-[8px]" : "text-[10px]"
                  }`}
                >
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`mt-4 grid flex-1 gap-3 ${
              compact ? "mt-3" : isLarge ? "sm:grid-cols-[0.9fr_1.1fr]" : ""
            }`}
          >
            {!compact ? (
              <div className="rounded-[7px] border border-white/10 bg-black/22 p-4">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-vault-muted">
                  {isRegistry ? "Supply Chain" : "Live Session"}
                </p>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-3">
                      <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-vault-cyan/35 bg-vault-cyan/10 font-mono text-[10px] text-vault-cyan">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-white/78">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="relative overflow-hidden rounded-[7px] border border-white/10 bg-[#05070d]/82 p-3 font-mono">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-vault-pink" />
                  <span className="size-2 rounded-full bg-vault-amber" />
                  <span className="size-2 rounded-full bg-vault-lime" />
                </div>
                <TerminalSquare className="size-4 text-vault-cyan" aria-hidden="true" />
              </div>
              <div
                className={`space-y-2 text-vault-muted ${
                  compact ? "text-[9px] leading-4" : isLarge ? "text-sm leading-6" : "text-xs leading-5"
                }`}
              >
                {(compact ? steps.slice(0, 3) : steps).map((line, index) => (
                  <p key={`${line}-${index}`} className={index === 0 ? "text-vault-cyan" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewMode === "terminal") {
    return (
      <div
        className={`relative flex h-full flex-col overflow-hidden bg-[#080b10] ${
          compact ? "min-h-[118px] p-3" : stage ? "min-h-full p-6 sm:p-8" : "min-h-[230px] p-5"
        }`}
      >
        <div
          className={`flex items-center justify-between border-b border-white/10 ${
            compact ? "mb-3 pb-2" : stage ? "mb-8 pb-4" : "mb-5 pb-3"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className={compact ? "size-2 rounded-full bg-vault-pink" : "size-2.5 rounded-full bg-vault-pink"} />
            <span className={compact ? "size-2 rounded-full bg-vault-amber" : "size-2.5 rounded-full bg-vault-amber"} />
            <span className={compact ? "size-2 rounded-full bg-vault-lime" : "size-2.5 rounded-full bg-vault-lime"} />
          </div>
          <TerminalSquare className="size-4 text-vault-amber" aria-hidden="true" />
        </div>

        <div
          className={`font-mono text-vault-muted ${
            compact
              ? "text-[9px] leading-4"
              : stage
                ? "text-sm leading-8 sm:text-base"
                : "text-[11px] leading-6 sm:text-xs"
          }`}
        >
          {(compact ? terminalLines.slice(0, 3) : terminalLines).map((line, index) => (
            <p
              key={`${line}-${index}`}
              className={
                line.includes("generated") || line.includes("blocked")
                  ? "text-vault-amber"
                  : line.includes("valid") || line.includes("answer:")
                    ? "text-vault-cyan"
                    : undefined
              }
            >
              {line.startsWith("$") ? <span className="text-vault-lime">$</span> : null}
              {line.startsWith("$") ? line.slice(1) : line}
            </p>
          ))}
        </div>

        <div className={compact ? "mt-auto pt-3" : stage ? "mt-auto pt-8" : "mt-auto pt-5"}>
          <div className="grid grid-cols-3 gap-2">
            {terminalMetrics.map((metric) => (
              <div
                key={metric.label}
                className={`rounded-[6px] border border-vault-amber/30 bg-vault-amber/10 ${
                  compact ? "h-5 p-1" : "h-10 p-2"
                }`}
              >
                <div className="h-1.5 rounded-full bg-vault-amber/80" />
                {!compact ? (
                  <p className="mt-2 truncate font-mono text-[10px] text-vault-muted">
                    {metric.value} {metric.label}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,209,102,0.18),transparent_18rem)]" />
      </div>
    );
  }

  return (
    <div
      className={`relative h-full overflow-hidden bg-vault-night ${
        compact ? "min-h-[118px]" : stage ? "min-h-full" : "min-h-[230px]"
      }`}
    >
      <img
        src={project.cover}
        alt={`${project.title} preview`}
        loading="lazy"
        className={`h-full w-full transition duration-700 group-hover:scale-[1.02] ${
          compact || stage ? "object-cover object-left-top" : "object-contain"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-0 ${
          stage
            ? "bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_28rem)]"
            : "bg-gradient-to-t from-vault-void via-vault-void/12 to-transparent opacity-80"
        }`}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}
