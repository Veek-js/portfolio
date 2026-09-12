export interface StackCapability {
  id: string;
  num: string;
  title: string;
  description: string;
  technologies: StackTechnology[];
  projects?: string[];
}

export interface StackTechnology {
  name: string;
  context: string;
}

export const capabilities: StackCapability[] = [
  {
    id: 'minecraft',
    num: '01',
    title: 'Minecraft',
    description: 'Server systems, plugins and mod infrastructure for SMP communities.',
    technologies: [
      { name: 'Java', context: 'Primary language for server-side development' },
      { name: 'Paper', context: 'Performance-optimized server API' },
      { name: 'Fabric', context: 'Lightweight mod loader' },
      { name: 'Spigot', context: 'Bukkit-based server platform' },
      { name: 'SQLite', context: 'Embedded data persistence' },
      { name: 'Mixin', context: 'Runtime bytecode injection for mods' },
    ],
    projects: ['vanilla-core', 'apex-building-bot', 'donuttools'],
  },
  {
    id: 'discord',
    num: '02',
    title: 'Discord',
    description: 'Bots, automation and community management tooling.',
    technologies: [
      { name: 'TypeScript', context: 'Type-safe bot development' },
      { name: 'Node.js', context: 'JavaScript runtime for bots' },
      { name: 'Discord.js', context: 'Discord API wrapper' },
      { name: 'better-sqlite3', context: 'Synchronous SQLite driver' },
    ],
    projects: ['apex-building-bot'],
  },
  {
    id: 'web',
    num: '03',
    title: 'Web',
    description: 'Interfaces, 3D applications and static sites.',
    technologies: [
      { name: 'Astro', context: 'Static site generation' },
      { name: 'Three.js', context: 'WebGL 3D rendering' },
      { name: 'CSS', context: 'Custom properties and layout' },
    ],
    projects: ['minecraft-skin-gallery'],
  },
  {
    id: 'infrastructure',
    num: '04',
    title: 'Infrastructure',
    description: 'Deployment, process management and operations.',
    technologies: [
      { name: 'Linux', context: 'Server environment' },
      { name: 'PM2', context: 'Node.js process management' },
      { name: 'Gradle', context: 'Build automation' },
      { name: 'Git', context: 'Version control' },
    ],
    projects: ['apex-building-bot', 'vanilla-core'],
  },
];

export const stackGroups = [
  {
    label: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Frameworks / Runtimes',
    items: ['Node.js', 'Astro', 'Paper', 'Fabric', 'Spigot'],
  },
  {
    label: 'Data',
    items: ['SQLite', 'better-sqlite3'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Gradle', 'Linux', 'PM2'],
  },
];
