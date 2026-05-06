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
  previewMode?: "image" | "terminal";
  format?: "desktop" | "phone";
  gallery?: string[];
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
      "A WeChat mini program for anonymous mood check-ins, showing nearby emotional distribution on a live map with local Go server storage.",
    vibe:
      "A soft social atlas: emotional heat, anonymous presence, city-level stats, and shareable mood cards wrapped in a mobile-first interaction.",
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
      "Realtime Bilibili live danmaku command center for operators, aggregating interaction metrics, frequent questions, alert signals, and next-step prompts.",
    vibe:
      "A control-room dashboard for live operators: realtime signals, alerting, danmaku flow, and AI-compatible analysis providers.",
    techStack: [
      "TypeScript",
      "Vite",
      "React",
      "Tailwind",
      "Fastify",
      "WebSocket",
      "SQLite",
      "Recharts",
    ],
    accent: "cyan",
    previewMode: "image",
    format: "desktop",
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
      "A personal strength-training analytics site that turns Hevy history into frequency, PR, muscle coverage, load, and readiness views.",
    vibe:
      "A quantified-self fitness cockpit with heatmaps, radar charts, milestones, readiness scoring, and annual review views.",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Recharts",
      "Python",
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
      "A Rust video-cutting CLI that uses declarative TOML project files to render cached ffmpeg clips and concatenate final outputs.",
    vibe:
      "A precise terminal-native editing workflow: define clips, check the plan, cache renders, and concatenate the final output.",
    techStack: ["Rust", "TOML", "ffmpeg", "ffprobe", "CLI"],
    accent: "amber",
    previewMode: "terminal",
    format: "desktop",
  },
];
