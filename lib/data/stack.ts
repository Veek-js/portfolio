export interface StackTechnology {
  name: string;
  context: string;
  icon?: string;
}

export interface StackCapability {
  id: string;
  num: string;
  title: string;
  description: string;
  technologies: StackTechnology[];
  projects?: string[];
}

export const capabilities: StackCapability[] = [
  {
    id: "minecraft",
    num: "01",
    title: "Minecraft",
    description: "Server systems, plugins and mod infrastructure for SMP communities.",
    technologies: [
      { name: "Java", context: "Primary language for server-side work", icon: "/icons/stack/java.svg" },
      { name: "Paper", context: "Performance-focused server API", icon: "/icons/stack/paper.svg" },
      { name: "Fabric", context: "Lightweight mod loader", icon: "/icons/stack/fabric.svg" },
      { name: "Spigot", context: "Bukkit-based server platform", icon: "/icons/stack/spigot.svg" },
      { name: "Mineflayer", context: "Bot framework for Minecraft", icon: "/icons/stack/mineflayer.svg" },
      { name: "SQLite", context: "Embedded persistence", icon: "/icons/stack/sqlite.svg" },
      { name: "Mixin", context: "Runtime bytecode injection", icon: "/icons/stack/mixin.svg" },
    ],
    projects: ["vanilla-core", "apex-building-bot", "donuttools"],
  },
  {
    id: "discord",
    num: "02",
    title: "Discord",
    description: "Bots, automation and community management tooling.",
    technologies: [
      { name: "TypeScript", context: "Type-safe bot development", icon: "/icons/stack/typescript.svg" },
      { name: "Node.js", context: "Runtime for long-lived bots", icon: "/icons/stack/nodejs.svg" },
      { name: "Discord.js", context: "Discord API wrapper", icon: "/icons/stack/discordjs.svg" },
      { name: "better-sqlite3", context: "Synchronous SQLite driver", icon: "/icons/stack/better-sqlite3.svg" },
    ],
    projects: ["apex-building-bot"],
  },
  {
    id: "web",
    num: "03",
    title: "Web",
    description: "Interfaces, 3D applications and static sites.",
    technologies: [
      { name: "React", context: "Component-driven UI", icon: "/icons/stack/react.svg" },
      { name: "Next.js", context: "React framework, this site", icon: "/icons/stack/nextjs.svg" },
      { name: "Astro", context: "Static site generation", icon: "/icons/stack/astro.svg" },
      { name: "Vite", context: "Fast build tooling", icon: "/icons/stack/vite.svg" },
      { name: "PrimeReact", context: "Rich UI component library", icon: "/icons/stack/primereact.svg" },
      { name: "Three.js", context: "WebGL 3D rendering", icon: "/icons/stack/threejs.svg" },
      { name: "Tailwind CSS", context: "Utility-first styling", icon: "/icons/stack/tailwindcss.svg" },
    ],
    projects: ["minecraft-skin-gallery"],
  },
  {
    id: "infrastructure",
    num: "04",
    title: "Infrastructure",
    description: "Deployment, process management and operations.",
    technologies: [
      { name: "Linux", context: "Server environment", icon: "/icons/stack/linux.svg" },
      { name: "PM2", context: "Node.js process management", icon: "/icons/stack/pm2.svg" },
      { name: "Gradle", context: "Build automation", icon: "/icons/stack/gradle.svg" },
      { name: "Git", context: "Version control", icon: "/icons/stack/git.svg" },
      { name: "Docker", context: "Containerization", icon: "/icons/stack/docker.svg" },
    ],
    projects: ["apex-building-bot", "vanilla-core"],
  },
];

export const stackGroups = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript"] },
  { label: "Frameworks / Runtimes", items: ["Node.js", "Next.js", "Astro", "Vite", "React", "PrimeReact", "Paper", "Fabric", "Spigot", "Mineflayer"] },
  { label: "Data", items: ["SQLite", "better-sqlite3"] },
  { label: "Tools", items: ["Git", "Gradle", "Linux", "PM2", "Docker", "Tailwind CSS", "Three.js"] },
];