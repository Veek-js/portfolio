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
  status: 'active' | 'released' | 'alpha' | 'archived';
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github?: string;
  live?: string;
  year?: string;
  visual: 'terminal' | 'discord' | 'browser' | 'code';
  featured?: boolean;
  heroImage?: string;

  // Case study fields (optional)
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
    slug: 'vanilla-core',
    title: 'Vanilla-Core',
    category: 'Minecraft Infrastructure',
    status: 'active',
    description: 'All-in-one SMP plugin. Essentials commands, staff tools, economy — the backbone for a survival server.',
    longDescription: 'Vanilla-Core is a comprehensive Minecraft server plugin that handles everything a survival SMP needs. From player essentials like homes, warps, and teleportation to staff moderation tools, player economy, and world management — it\'s designed to be the single plugin a server needs. Currently live and under active development with bug fixes and feature additions.',
    features: [
      'Homes, warps, tpa with SQLite persistence',
      'Staff tools: freeze, vanish, invsee, staff chat',
      'Player economy — balance, pay, shop commands',
      'Spawn and random tps with cooldowns',
    ],
    technologies: ['Java', 'Paper', 'SQLite', 'Gradle'],
    github: 'https://github.com/veekshith177-bot/Vanilla-Core.git',
    year: '2025',
    visual: 'terminal',
    featured: true,

    role: 'Lead Developer',
    overview: 'Vanilla-Core started as a response to running multiple SMPs and watching each one accumulate a different stack of plugins. Players had to learn different commands for different servers, staff had to juggle separate tools, and when one plugin broke, the whole experience suffered. The goal was to build a single, reliable plugin that handles the essentials — homes, warps, teleportation, economy, moderation — while staying lightweight enough for small servers and extensible enough for growing ones.',
    problem: 'Running a growing SMP requires more than individual plugins stitched together. Systems need to work together without creating unnecessary complexity for players or staff. Every separate plugin is another dependency, another config file, another thing that can break at 2 AM when a server full of players is trying to play. Vanilla-Core was built to solve that by consolidating the core SMP experience into one cohesive system.',
    work: [
      {
        title: 'Core Systems',
        content: 'Built the foundational infrastructure — SQLite-backed data persistence, command registration system, and event-driven architecture. Every command registers through a centralized system that handles permissions, cooldowns, and error handling uniformly. Player data is cached in memory and written to disk asynchronously to avoid lag spikes.',
      },
      {
        title: 'Player Experience',
        content: 'Designed the player-facing commands to be intuitive and consistent. /home, /warp, /tpa, /spawn — all follow the same syntax patterns. TPA includes configurable cooldowns and timeouts so players can\'t spam requests. Homes and warps persist across server restarts through SQLite. Random TP distributes players fairly across the world.',
      },
      {
        title: 'Staff Tools',
        content: 'Built the moderation toolkit that staff actually need in production: /freeze for holding suspicious players in place, /vanish for observing without being seen, /invsee for checking inventories during investigations, and a staff chat channel that keeps admin conversations separate from public chat.',
      },
      {
        title: 'Economy',
        content: 'Implemented a player economy with /balance, /pay, and basic shop commands. The system uses SQLite for persistence and supports configurable starting balances. Designed to be simple enough for vanilla-style servers while providing the transaction tracking that SMPs need.',
      },
    ],
    technical: [
      {
        label: 'Architecture',
        items: [
          'Event-driven command system with centralized permission handling',
          'Modular plugin design — each system (homes, economy, etc.) is isolated',
          'SQLite with async write queue for data persistence',
          'Paper API for performance optimizations over vanilla Spigot',
        ],
      },
      {
        label: 'Data',
        items: [
          'Player data stored in SQLite with in-memory caching',
          'Asynchronous disk writes to prevent tick lag',
          'Automatic database migrations on plugin startup',
        ],
      },
      {
        label: 'Build',
        items: [
          'Gradle build system with Paper API dependency',
          'Single JAR output — one file, one plugin',
          'Configurable through a single YAML config file',
        ],
      },
    ],
    lessons: 'Building an all-in-one plugin taught me the importance of API boundaries. When every system lives in the same codebase, it\'s tempting to let them leak into each other. Keeping homes separate from economy separate from moderation meant each system could be tested, debugged, and modified without breaking the others. The other major lesson was persistence — SQLite is simple but getting async writes right so the server doesn\'t lag during save operations took more iteration than expected.',
    results: [
      'Currently running in production on active SMP servers',
      'Single plugin replacing 4-5 separate plugin dependencies',
      'Under active development with regular feature additions',
    ],
  },
  {
    slug: 'apex-building-bot',
    title: 'Apex Building Bot',
    category: 'Discord Automation',
    status: 'released',
    description: 'Discord bot for ticketing, moderation, giveaways, and builder ratings. Running in production across multiple servers.',
    longDescription: 'A full-featured Discord bot built for community management in SMP servers. Handles support ticket workflows, moderation actions, automated giveaways with a split-or-steal mechanic, and a DM-based builder rating system for staff to evaluate builders. Currently running in production.',
    features: [
      'Ticket panels: General, Build, Digout, Refund, Regear',
      'Moderation: warn, mute, tempban, slowmode, lock',
      'Split or Steal giveaways with daily auto runs',
      'DM-based builder ratings for staff review',
    ],
    technologies: ['TypeScript', 'Node.js', 'Discord.js v14', 'better-sqlite3'],
    github: 'https://github.com/veekshith177-bot/Apex-Building-Bot',
    live: 'https://discord.gg/n7qY76PMH7',
    year: '2025',
    visual: 'discord',

    role: 'Bot Developer',
    overview: 'Apex Building Bot was built to solve the community management overhead that comes with running a growing SMP. Manually handling support tickets, tracking moderation actions, running giveaways, and evaluating builders was eating into the time that should have been spent building the server itself. The bot automated the repetitive parts while keeping the human judgment where it mattered.',
    problem: 'Managing a Discord community for an SMP means dealing with a constant stream of support requests, moderation issues, and community events — all on top of actually developing the server. Staff were spending more time on Discord logistics than on the projects that brought players in. The bot was built to handle the structured, repeatable workflows so staff could focus on the things that needed human attention.',
    work: [
      {
        title: 'Ticket System',
        content: 'Built a complete ticket workflow with categorized panels — General, Build, Digout, Refund, and Regear. Each category opens a private channel with the right staff role pinged. Tickets track status, support notes, and closure reasons. Designed to be self-service for players while giving staff full context when they pick up a ticket.',
      },
      {
        title: 'Moderation',
        content: 'Implemented a full moderation toolkit: warn, mute, tempban, slowmode, and channel lock. Each action logs to a mod log channel with timestamps and reasons. The system handles permission checks so junior mods can\'t use commands above their level.',
      },
      {
        title: 'Giveaway System',
        content: 'Built the Split or Steal giveaway mechanic — winners get a choice to split the prize or try to steal it all. Daily auto-runs keep engagement high without manual setup. The system tracks entries, handles edge cases, and announces results publicly.',
      },
      {
        title: 'Builder Ratings',
        content: 'Created a DM-based rating system where staff evaluate builders through private messages. Ratings are stored in a database and surfaced through a leaderboard command. Designed to be anonymous so staff can give honest feedback without public pressure.',
      },
    ],
    technical: [
      {
        label: 'Stack',
        items: [
          'TypeScript for type safety across a large command set',
          'Discord.js v14 with slash commands and interaction handlers',
          'better-sqlite3 for persistent data (tickets, ratings, mod logs)',
          'Deployed on a Linux VPS with PM2 process management',
        ],
      },
      {
        label: 'Architecture',
        items: [
          'Command handler with automatic registration from file structure',
          'Event-driven interaction system for buttons, menus, and modals',
          'SQLite database with separate tables for tickets, ratings, and mod logs',
          'Environment-based configuration for multi-server deployment',
        ],
      },
    ],
    lessons: 'The biggest lesson was designing for real Discord usage patterns. Players don\'t read instructions — they click buttons and expect things to work. Every interaction needed to be self-explanatory through button labels and embed descriptions. The other insight was that staff tools need to be fast. When a mod is dealing with a disruptive player, they can\'t wait for a 3-step confirmation flow. Short commands with sensible defaults matter more than comprehensive options.',
    results: [
      'Running in production on Apex SMP and Donut SMP',
      'Handles daily ticket workflows and moderation actions',
      'Automated giveaway system runs on schedule without manual intervention',
    ],
  },
  {
    slug: 'minecraft-skin-gallery',
    title: 'Minecraft Skin Gallery',
    category: 'Web Application',
    status: 'released',
    description: 'Type any Minecraft username and see their skin rendered in 3D with animations and cape support.',
    longDescription: 'A web application that fetches any Minecraft player\'s skin and renders it in real-time 3D. Supports 6 different animations, automatically detects Alex vs Steve arm models, and displays capes when available. Built as a lightweight, fast tool for communities.',
    features: [
      'Real-time 3D rendering with skinview3d + Three.js',
      '6 animations: Walk, Run, Fly, Wave, Crouch, Swim',
      'Auto-detects Alex vs Steve arm models',
      'Cape support when available',
    ],
    technologies: ['Astro', 'Three.js', 'skinview3d', 'PlayerDB API'],
    github: 'https://github.com/veekshith177-bot/Minecraft-Skin-Gallery',
    live: 'https://minecraft-skin-gallery.netlify.app',
    year: '2025',
    visual: 'browser',
    heroImage: '/projects/skin-gallery.png',

    role: 'Developer',
    overview: 'Minecraft Skin Gallery was built as a tool for SMP communities. Players wanted a quick way to check how their skins looked in 3D without logging into a server. Existing skin viewers were either cluttered with ads, slow to load, or missing features like cape support and animations. The goal was to build something fast, clean, and focused.',
    problem: 'Communities needed a quick way to preview Minecraft skins — for builder applications, server branding, or just showing off a new skin. Existing tools were either ad-heavy, slow, or required downloads. A lightweight web-based viewer that works for any username would solve this without adding friction.',
    work: [
      {
        title: '3D Rendering Pipeline',
        content: 'Built the rendering system using Three.js and skinview3d. The pipeline fetches skin data from the PlayerDB API, loads the texture, and renders it in a WebGL viewport with configurable camera angles and lighting. The renderer handles both classic (Steve) and slim (Alex) arm models automatically.',
      },
      {
        title: 'Animation System',
        content: 'Integrated 6 animation presets from skinview3d — Walk, Run, Fly, Wave, Crouch, and Swim. Each animation runs in real-time with smooth transitions between states. The animation selector lets users switch between animations without reloading the skin.',
      },
      {
        title: 'Cape Rendering',
        content: 'Added cape support by checking the PlayerDB API response for cape textures. When available, the cape renders on the back of the skin model with its own animation layer. This was a feature that existing viewers often missed.',
      },
      {
        title: 'Interface',
        content: 'Built a clean interface with a search bar, 3D viewport, animation selector, and skin info display. The layout works across desktop and mobile with responsive breakpoints. The search supports any valid Minecraft username — no account linking required.',
      },
    ],
    technical: [
      {
        label: 'Stack',
        items: [
          'Astro for static site generation and fast page loads',
          'Three.js for WebGL 3D rendering',
          'skinview3d library for Minecraft skin models and animations',
          'PlayerDB API for skin texture fetching',
        ],
      },
      {
        label: 'Performance',
        items: [
          'Static generation via Astro — pages load instantly',
          'Lazy-loaded 3D viewport — WebGL only initializes when visible',
          'Minimal JavaScript bundle — no heavy frameworks',
          'Skin textures cached after first load',
        ],
      },
    ],
    lessons: 'This project taught me how to work with WebGL in a constrained environment. The challenge was making 3D rendering feel fast on mobile devices where GPU power is limited. Keeping the polygon count low (Minecraft skins are inherently low-poly) helped, but the real performance win was lazy-loading the Three.js context and only rendering when the viewport was visible. The other lesson was API reliability — PlayerDB occasionally goes down, so graceful error states matter more than you\'d think.',
    results: [
      'Deployed on Netlify with automatic builds from GitHub',
      'Works for any valid Minecraft username — no account required',
      'Lightweight enough to load on mobile without lag',
    ],
  },
];

export const archivedProjects: Project[] = [
  {
    slug: 'donuttools',
    title: 'DonutTools',
    category: 'Fabric Mod',
    status: 'archived',
    description: 'A bundled Fabric mod for Donut SMP with survival QoL tools. Source lost, but the ideas persist.',
    longDescription: 'DonutTools was a Fabric mod that packed multiple survival quality-of-life features into a single mod for Donut SMP. It included a shard pickaxe that breaks 9x9 areas, a tree chopper, and various automation helpers. The source code was lost, but the design concepts influenced later projects.',
    features: [
      'Shard Picaxe — breaks a 9x9 area in one swing',
      'Tree Chopper — fells whole trees in one hit',
      'Heavy Logics — automation and logic helpers',
      'Customizable time-limit for powerful tools',
    ],
    technologies: ['Java', 'Fabric', 'Mixin'],
    year: '2024',
    visual: 'code',

    role: 'Mod Developer',
    overview: 'DonutTools was a Fabric mod built for Donut SMP to pack multiple survival quality-of-life features into one downloadable mod. The idea was simple — give players tools that make survival less tedious without breaking the vanilla feel. The shard pickaxe broke 9x9 areas, the tree chopper felled whole trees, and custom time limits prevented abuse.',
    work: [
      {
        title: 'Shard Picaxe',
        content: 'Built a tool that breaks a 9x9 area of blocks in a single swing. Added a configurable cooldown timer so the tool breaks after a set number of uses, preventing it from being overpowered.',
      },
      {
        title: 'Tree Chopper',
        content: 'Implemented a tree-felling mechanic that breaks an entire tree in one hit by detecting connected log blocks. The same cooldown system applied here.',
      },
      {
        title: 'Bundled Utilities',
        content: 'Packed additional automation helpers into the mod — logic gates, redstone helpers, and small QoL features that individually were minor but together made survival gameplay smoother.',
      },
    ],
    technical: [
      {
        label: 'Stack',
        items: [
          'Java with Fabric mod loader',
          'Mixin for injecting into Minecraft\'s block breaking system',
          'Custom NBT data for tool durability tracking',
        ],
      },
    ],
    lessons: 'This was my first experience with mod development using Fabric and Mixin. The biggest lesson was understanding how Minecraft\'s internals work — block states, entity data, and the tick system. The source was eventually lost, but the concepts around tool durability systems and area-breaking mechanics carried forward into later projects.',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return [...projects, ...archivedProjects].find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.featured);
}

export function getSecondaryProjects(): Project[] {
  return projects.filter((p) => !p.featured);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const all = [...projects, ...archivedProjects];
  const idx = all.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? all[idx - 1] : null,
    next: idx < all.length - 1 ? all[idx + 1] : null,
  };
}
