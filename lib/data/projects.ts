export interface ProjectSection {
  title: string;
  content: string;
}

export interface ProjectTechDetail {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "active" | "released" | "alpha" | "archived";
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  year?: string;
  featured?: boolean;

  role?: string;
  overview?: string;
  problem?: string;
  work?: ProjectSection[];
  technical?: ProjectTechDetail[];
  lessons?: string;
  results?: string[];
}

export const projects: Project[] = [
  {
    slug: "vanilla-core",
    title: "Vanilla-Core",
    category: "Minecraft Infrastructure",
    status: "active",
    description:
      "All-in-one SMP plugin. Essentials commands, staff tools, economy — the backbone for a survival server.",
    longDescription:
      "Vanilla-Core is a comprehensive Minecraft server plugin that handles everything a survival SMP needs. From player essentials like homes, warps and teleportation to staff moderation tools, player economy and world management — it's designed to be the single plugin a server needs. Currently live and under active development.",
    features: [
      "Homes, warps, tpa with SQLite persistence",
      "Staff tools: freeze, vanish, invsee, staff chat",
      "Player economy — balance, pay, shop commands",
      "Spawn and random tps with cooldowns",
    ],
    technologies: ["Java", "Paper", "SQLite", "Gradle"],
    github: "https://github.com/veekshith177-bot/Vanilla-Core.git",
    year: "2025",
    featured: true,

    role: "Lead Developer",
    overview:
      "Vanilla-Core started as a response to running multiple SMPs and watching each one accumulate a different stack of plugins. Players had to learn different commands on different servers, staff juggled separate tools, and when one plugin broke the whole experience suffered. The goal was a single reliable plugin for the essentials — homes, warps, teleportation, economy, moderation — lightweight enough for small servers and extensible enough for growing ones.",
    problem:
      "Running a growing SMP requires more than individual plugins stitched together. Systems need to work together without creating unnecessary complexity for players or staff. Every separate plugin is another dependency, another config file, another thing that can break at 2 AM while a server full of players is trying to play. Vanilla-Core consolidates the core SMP experience into one cohesive system.",
    work: [
      {
        title: "Core Systems",
        content:
          "Built the foundational infrastructure — SQLite-backed persistence, a command registration system and event-driven architecture. Every command registers through a centralised path that handles permissions, cooldowns and error handling uniformly. Player data is cached in memory and written to disk asynchronously to avoid lag spikes.",
      },
      {
        title: "Player Experience",
        content:
          "Designed player-facing commands to be consistent. /home, /warp, /tpa, /spawn all follow the same syntax. TPA includes configurable cooldowns and timeouts so players can't spam requests. Homes and warps survive restarts through SQLite. Random TP distributes players fairly across the world.",
      },
      {
        title: "Staff Tools",
        content:
          "Built the moderation toolkit staff actually need in production: /freeze for holding suspicious players in place, /vanish for observing unseen, /invsee for checking inventories during investigations, and a staff chat channel that keeps admin conversations out of public chat.",
      },
      {
        title: "Economy",
        content:
          "Implemented a player economy with /balance, /pay and basic shop commands. SQLite for persistence, configurable starting balances. Simple enough for vanilla-style servers while still giving SMPs the transaction tracking they need.",
      },
    ],
    technical: [
      {
        label: "Architecture",
        items: [
          "Event-driven command system with centralised permission handling",
          "Modular design — homes, economy and moderation stay isolated",
          "SQLite with an async write queue for persistence",
          "Paper API for performance over vanilla Spigot",
        ],
      },
      {
        label: "Data",
        items: [
          "Player data in SQLite with in-memory caching",
          "Asynchronous disk writes to prevent tick lag",
          "Automatic migrations on plugin startup",
        ],
      },
      {
        label: "Build",
        items: [
          "Gradle with the Paper API dependency",
          "Single JAR output — one file, one plugin",
          "Configurable through one YAML config",
        ],
      },
    ],
    lessons:
      "An all-in-one plugin teaches you the value of API boundaries. When every system shares a codebase it's tempting to let them leak into each other. Keeping homes separate from economy separate from moderation meant each one could be tested and changed without breaking the others. Persistence was the other lesson — SQLite is simple, but getting async writes right so the server never lags during saves took more iteration than expected.",
    results: [
      "Running in production on active SMP servers",
      "One plugin replacing 4–5 separate dependencies",
      "Under active development with regular additions",
    ],
  },
  {
    slug: "apex-building-bot",
    title: "Apex Building Bot",
    category: "Discord Automation",
    status: "released",
    description:
      "Discord bot for ticketing, moderation, giveaways and builder ratings. Running in production across multiple servers.",
    longDescription:
      "A full-featured Discord bot for community management in SMP servers. Handles support ticket workflows, moderation actions, automated giveaways with a split-or-steal mechanic, and a DM-based builder rating system for staff. Currently running in production.",
    features: [
      "Ticket panels: General, Build, Digout, Refund, Regear",
      "Moderation: warn, mute, tempban, slowmode, lock",
      "Split or Steal giveaways with daily auto runs",
      "DM-based builder ratings for staff review",
    ],
    technologies: ["TypeScript", "Node.js", "Discord.js v14", "better-sqlite3"],
    github: "https://github.com/veekshith177-bot/Apex-Building-Bot",
    live: "https://discord.gg/n7qY76PMH7",
    year: "2025",

    role: "Bot Developer",
    overview:
      "Apex Building Bot was built to solve the community management overhead that comes with a growing SMP. Manually handling tickets, tracking moderation, running giveaways and evaluating builders was eating the time that should have gone into the server itself. The bot automated the repetitive parts and kept human judgement where it mattered.",
    problem:
      "Managing a Discord community means a constant stream of support requests, moderation issues and events — on top of actually developing the server. Staff were spending more time on Discord logistics than on the work that brought players in. The bot handles the structured, repeatable workflows so staff can focus on what needs a person.",
    work: [
      {
        title: "Ticket System",
        content:
          "A complete ticket workflow with categorised panels — General, Build, Digout, Refund and Regear. Each category opens a private channel with the right staff role pinged. Tickets track status, support notes and closure reasons. Self-service for players, full context for staff.",
      },
      {
        title: "Moderation",
        content:
          "Warn, mute, tempban, slowmode and channel lock, each logged to a mod log channel with timestamps and reasons. Permission checks stop junior mods from reaching commands above their level.",
      },
      {
        title: "Giveaway System",
        content:
          "The Split or Steal mechanic — winners choose to split the prize or try to steal all of it. Daily auto-runs keep engagement up without manual setup. Entries, edge cases and public results all handled.",
      },
      {
        title: "Builder Ratings",
        content:
          "A DM-based rating system where staff evaluate builders privately. Ratings live in a database and surface through a leaderboard command, anonymous so people can be honest without public pressure.",
      },
    ],
    technical: [
      {
        label: "Stack",
        items: [
          "TypeScript for type safety across a large command set",
          "Discord.js v14 with slash commands and interaction handlers",
          "better-sqlite3 for tickets, ratings and mod logs",
          "Deployed on a Linux VPS under PM2",
        ],
      },
      {
        label: "Architecture",
        items: [
          "Command handler with automatic registration from file structure",
          "Event-driven interactions for buttons, menus and modals",
          "Separate tables for tickets, ratings and mod logs",
          "Environment-based config for multi-server deployment",
        ],
      },
    ],
    lessons:
      "Designing for real Discord usage was the big one — players don't read instructions, they click buttons and expect things to work. Every interaction had to be self-explanatory through labels and embeds. Staff tools also have to be fast: when a mod is dealing with a disruptive player there's no time for a three-step confirmation flow. Short commands with sensible defaults beat comprehensive options.",
    results: [
      "Running in production on Apex SMP and Donut SMP",
      "Handles daily ticket workflows and moderation",
      "Giveaways run on schedule without anyone touching them",
    ],
  },
  {
    slug: "minecraft-skin-gallery",
    title: "Minecraft Skin Gallery",
    category: "Web Application",
    status: "released",
    description:
      "Type any Minecraft username and see their skin rendered in 3D with animations and cape support.",
    longDescription:
      "A web application that fetches any Minecraft player's skin and renders it in real-time 3D. Six animations, automatic Alex vs Steve arm detection, and capes when they exist. Built as a lightweight, fast tool for communities.",
    features: [
      "Real-time 3D rendering with skinview3d + Three.js",
      "Six animations: walk, run, fly, wave, crouch, swim",
      "Auto-detects Alex vs Steve arm models",
      "Cape support when available",
    ],
    technologies: ["Astro", "Three.js", "skinview3d", "PlayerDB API"],
    github: "https://github.com/veekshith177-bot/Minecraft-Skin-Gallery",
    live: "https://minecraft-skin-gallery.netlify.app",
    year: "2025",

    role: "Developer",
    overview:
      "Built as a tool for SMP communities. Players wanted a quick way to check how a skin looked in 3D without logging into a server. Existing viewers were ad-heavy, slow, or missing capes and animations. The goal was something fast, clean and focused.",
    problem:
      "Communities needed a quick way to preview skins — builder applications, server branding, or just showing off a new one. Existing tools were cluttered or required downloads. A lightweight viewer that works for any username solves it without friction.",
    work: [
      {
        title: "3D Rendering Pipeline",
        content:
          "Three.js and skinview3d: fetch skin data from the PlayerDB API, load the texture, render in a WebGL viewport with configurable camera angles and lighting. Handles both classic (Steve) and slim (Alex) arms automatically.",
      },
      {
        title: "Animation System",
        content:
          "Six animation presets — walk, run, fly, wave, crouch, swim — running in real time with smooth transitions. Users switch animations without reloading the skin.",
      },
      {
        title: "Cape Rendering",
        content:
          "The API response is checked for cape textures; when one exists it renders on the back with its own animation layer. A feature most viewers skip.",
      },
      {
        title: "Interface",
        content:
          "Search bar, 3D viewport, animation selector and skin info, responsive across desktop and mobile. Any valid username works — no account linking.",
      },
    ],
    technical: [
      {
        label: "Stack",
        items: [
          "Astro for static generation and fast loads",
          "Three.js for WebGL rendering",
          "skinview3d for models and animations",
          "PlayerDB API for skin textures",
        ],
      },
      {
        label: "Performance",
        items: [
          "Static pages that load instantly",
          "Lazy-loaded 3D viewport — WebGL only starts when visible",
          "Minimal bundle, no heavy framework",
          "Textures cached after first load",
        ],
      },
    ],
    lessons:
      "WebGL in a constrained environment is its own discipline. The win wasn't polygon count — Minecraft skins are already low-poly — it was lazy-loading the Three.js context and only rendering when the viewport was on screen. The other lesson: PlayerDB occasionally goes down, so graceful error states matter more than you'd think.",
    results: [
      "Deployed on Netlify with automatic GitHub builds",
      "Works for any valid username, no account required",
      "Lightweight enough to run on a phone without lag",
    ],
  },
];

export const archivedProjects: Project[] = [
  {
    slug: "donuttools",
    title: "DonutTools",
    category: "Fabric Mod",
    status: "archived",
    description:
      "A bundled Fabric mod for Donut SMP with survival QoL tools. Source lost, but the ideas persist.",
    longDescription:
      "DonutTools packed survival quality-of-life features into one mod for Donut SMP — a shard pickaxe that breaks 9x9 areas, a tree chopper, and automation helpers. The source was lost, but the design concepts influenced later projects.",
    features: [
      "Shard Pickaxe — breaks a 9x9 area in one swing",
      "Tree Chopper — fells whole trees in one hit",
      "Heavy Logics — automation and logic helpers",
      "Configurable time limits for powerful tools",
    ],
    technologies: ["Java", "Fabric", "Mixin"],
    year: "2024",

    role: "Mod Developer",
    overview:
      "A Fabric mod for Donut SMP packing multiple survival QoL features into one download. Give players tools that make survival less tedious without breaking the vanilla feel — a 9x9 pickaxe, a one-hit tree chopper, and custom time limits to prevent abuse.",
    work: [
      {
        title: "Shard Pickaxe",
        content:
          "A tool that breaks a 9x9 area of blocks in a single swing, with a configurable cooldown so it breaks after a set number of uses.",
      },
      {
        title: "Tree Chopper",
        content:
          "Fells an entire tree in one hit by detecting connected log blocks, under the same cooldown system.",
      },
      {
        title: "Bundled Utilities",
        content:
          "Logic gates, redstone helpers and small QoL features — minor individually, together they made survival smoother.",
      },
    ],
    technical: [
      {
        label: "Stack",
        items: [
          "Java with the Fabric mod loader",
          "Mixin for injecting into block breaking",
          "Custom NBT data for tool durability",
        ],
      },
    ],
    lessons:
      "My first real mod. The lesson was understanding Minecraft internals — block states, entity data, the tick system. The source was eventually lost, but durability systems and area-breaking mechanics carried into everything I built after.",
  },
];

export function getAllProjects(): Project[] {
  return [...projects, ...archivedProjects];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const all = getAllProjects();
  const idx = all.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx > -1 && idx < all.length - 1 ? all[idx + 1] : null,
  };
}

export const statusLabel: Record<Project["status"], string> = {
  active: "Active",
  released: "Released",
  alpha: "Alpha",
  archived: "Archived",
};
