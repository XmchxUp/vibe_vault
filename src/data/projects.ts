export type ProjectCategory = "Web" | "AI" | "Tools" | "Experiments";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  cover?: string;
  repoUrl: string;
  demoUrl?: string;
  demoLabel?: "Demo" | "Preview";
  description: string;
  vibe: string;
  techStack: string[];
  accent: "cyan" | "pink" | "lime" | "amber";
  previewMode?: "image" | "terminal" | "workflow" | "registry" | "document";
  format?: "desktop" | "phone";
  gallery?: string[];
  previewLines?: string[];
  previewMetrics?: Array<{
    label: string;
    value: string;
  }>;
}

export const filters = ["All", "Web", "AI", "Tools", "Experiments"] as const;

export type ProjectFilter = (typeof filters)[number];

export const projects: Project[] = [
  {
    id: "mood-map-miniprogram",
    title: "Mood2Know",
    category: "Experiments",
    cover: "/project-covers/mood-map-1.png",
    gallery: [
      "/project-covers/mood-map-1.png",
      "/project-covers/mood-map-2.png",
      "/project-covers/mood-map-3.png",
      "/project-covers/mood-map-4.png",
    ],
    repoUrl: "https://github.com/XmchxUp/mood_map_miniprogram",
    demoUrl: "https://github.com/XmchxUp/mood_map_miniprogram#效果图",
    demoLabel: "Preview",
    description:
      "Anonymous WeChat mini program for mood check-ins, nearby emotional heatmaps, city stats, and local Go-backed JSON storage.",
    vibe:
      "A soft social atlas: map-first check-ins, anonymous nearby presence, 24-hour retention, city-level rankings, and shareable mood cards.",
    techStack: ["WeChat Mini Program", "JavaScript", "WXSS", "Go", "Geohash", "JSON"],
    accent: "pink",
    previewMode: "image",
    format: "phone",
  },
  {
    id: "bili-live-danmu-analyzer",
    title: "Bili Live Danmu Analyzer",
    category: "AI",
    cover: "/project-covers/bili-live-danmu-analyzer.png",
    repoUrl: "https://github.com/XmchxUp/bili-live-danmu-analyzer",
    demoUrl: "/project-covers/bili-live-danmu-analyzer.png",
    demoLabel: "Preview",
    description:
      "Local-first Bilibili live danmaku operations workbench with hybrid TCP/WSS ingest, realtime metrics, alerting, and analysis windows.",
    vibe:
      "A control-room dashboard for live operators: low-latency danmaku flow, high-frequency questions, host quality, AI-compatible analysis, and privacy-aware LLM boundaries.",
    techStack: [
      "TypeScript",
      "Vite",
      "React",
      "Tailwind",
      "Fastify",
      "WebSocket",
      "SQLite",
      "Recharts",
      "bilibili-live-ws",
    ],
    accent: "cyan",
    previewMode: "image",
    format: "desktop",
  },
  {
    id: "bili-live-asr",
    title: "Bili Live ASR",
    category: "AI",
    repoUrl: "https://github.com/xmchxup/bili_live_asr",
    demoUrl: "https://github.com/xmchxup/bili_live_asr#readme",
    demoLabel: "Preview",
    description:
      "Product and architecture blueprint for a local Bilibili knowledge-stream assistant with realtime subtitles, question aggregation, rolling summaries, and streamer prompt cards.",
    vibe:
      "A sidecar live-room copilot: observe audio and danmaku, keep streamer and audience modes separate, surface help without taking over the Bilibili account.",
    techStack: ["Product Design", "ADR", "Local Web App", "SQLite", "Cloud ASR", "LLM Prefilter"],
    accent: "pink",
    previewMode: "workflow",
    format: "desktop",
    previewMetrics: [
      { label: "Modes", value: "2" },
      { label: "ADR", value: "6" },
      { label: "Latency", value: "5-10s" },
    ],
    previewLines: [
      "Session Setup -> Active Live Room Session",
      "Live Audio + Danmaku Messages -> Transcript",
      "Question Aggregation Window -> Streamer Prompt Cards",
      "Audience Share Link -> Subtitles + Catch-Up Summary",
    ],
  },
  {
    id: "agent-skill-registry",
    title: "Agent Skill Registry",
    category: "AI",
    repoUrl: "https://github.com/xmchxup/agent_skill_registry",
    demoUrl: "https://github.com/xmchxup/agent_skill_registry#what-works",
    demoLabel: "Preview",
    description:
      "Runnable Go MVP for governed agent skill supply chains: drafts, evaluation, immutable publication, signed local artifacts, lockfiles, offline bundles, and runtime traces.",
    vibe:
      "A compact control plane slice for agent skills, modeling the path from workbench draft to policy-checked publication, customer import, revocation, and verified invocation.",
    techStack: ["Go", "Local Web UI", "JSON Store", "OCI-like Artifacts", "HMAC Signing", "Offline Bundles"],
    accent: "lime",
    previewMode: "registry",
    format: "desktop",
    previewMetrics: [
      { label: "Policy gates", value: "5" },
      { label: "Bundle flow", value: "offline" },
      { label: "Runtime", value: "verified" },
    ],
    previewLines: [
      "Draft -> Evaluate -> Publish immutable skill",
      "Community ingest -> Scan/license gate -> Re-sign",
      "Agent profile -> Lockfile -> Controller mount plan",
      "Invoke -> Trace -> Revoke digest",
    ],
  },
  {
    id: "enterprise-qa-skill",
    title: "Enterprise QA Skill",
    category: "AI",
    repoUrl: "https://github.com/xmchxup/enterprise-qa-skill",
    demoUrl: "https://github.com/xmchxup/enterprise-qa-skill#claude-code-skill",
    demoLabel: "Preview",
    description:
      "Deterministic Go Claude Code Skill and standalone CLI that answers enterprise exam questions from SQLite plus Markdown knowledge, with citations and SQL-like input blocking.",
    vibe:
      "A no-LLM baseline for enterprise QA: whitelisted query templates, local knowledge retrieval, reproducible fixtures, coverage targets, and explicit configuration precedence.",
    techStack: ["Go", "Claude Code Skill", "SQLite", "Markdown KB", "CLI", "modernc.org/sqlite"],
    accent: "amber",
    previewMode: "terminal",
    format: "desktop",
    previewMetrics: [
      { label: "Input", value: "Q" },
      { label: "Intent", value: "DB" },
      { label: "Answer", value: "Cite" },
    ],
    previewLines: [
      "$ enterprise-qa ask \"What is Zhang San's department?\"",
      "intent: employee_profile / source: enterprise.db",
      "answer: cites SQLite rows and Markdown sections",
      "blocked: arbitrary SQL-like input",
    ],
  },
  {
    id: "workout-page",
    title: "Workout Page",
    category: "Web",
    cover: "/project-covers/workout-page.png",
    repoUrl: "https://github.com/XmchxUp/workout_page",
    demoUrl: "https://xmchxup.github.io/workout_page/",
    demoLabel: "Demo",
    description:
      "Personal strength-training dashboard that turns Hevy workout history into calendars, PRs, muscle balance, load curves, readiness, and annual review views.",
    vibe:
      "A quantified-self fitness cockpit with sync scripts, 60+ achievements, E1RM tracking, fatigue curves, exercise co-matrices, and GitHub Pages automation.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Recharts",
      "Python",
      "Hevy API",
      "GitHub Actions",
    ],
    accent: "lime",
    previewMode: "image",
    format: "desktop",
  },
  {
    id: "blog",
    title: "Xmchx's Blog",
    category: "Web",
    cover: "/project-covers/blog.png",
    repoUrl: "https://github.com/XmchxUp/blog",
    demoUrl: "https://blog-697.pages.dev",
    demoLabel: "Demo",
    description:
      "A personal writing system for technology, life notes, Vibe Coding, cloud native practice, algorithms, and long-term archives.",
    vibe:
      "A clean knowledge archive that keeps writing, stats, comments, categories, and recent activity in one calm reading surface.",
    techStack: ["Astro", "MDX", "TypeScript", "CSS", "Cloudflare Pages"],
    accent: "pink",
    previewMode: "image",
    format: "desktop",
  },
  {
    id: "cutline",
    title: "Cutline",
    category: "Tools",
    repoUrl: "https://github.com/XmchxUp/cutline",
    demoUrl: "https://github.com/XmchxUp/cutline#example",
    demoLabel: "Preview",
    description:
      "Rust CLI for declarative video cutting, AutoCut plan generation, and reviewable StoryHighlightVideo draft packages with subtitles and source references.",
    vibe:
      "A precise terminal-native media workflow: check TOML plans, render cached clips, generate vertical previews, and keep creative pipeline steps reviewable.",
    techStack: ["Rust", "TOML", "ffmpeg", "ffprobe", "CLI", "AutoCut"],
    accent: "amber",
    previewMode: "terminal",
    format: "desktop",
    previewMetrics: [
      { label: "Clip", value: "01" },
      { label: "Break", value: "02" },
      { label: "Story", value: "03" },
    ],
    previewLines: [
      "$ cutline autocut examples/autocut.toml --json",
      "scene/audio analysis -> candidate clips",
      "$ cutline story examples/story.toml --render-preview",
      ".cutline/drafts/story/preview.mp4 generated",
    ],
  },
];
