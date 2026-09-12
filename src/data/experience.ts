export interface Experience {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  link?: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'apex-smp',
    organization: 'Apex SMP',
    role: 'Lead Developer',
    period: '2025 — Present',
    type: 'Minecraft',
    description: 'Lead dev for the server — building and maintaining the custom plugins that run the whole SMP, and managing the dev side of the community. Anything that needs to be coded, I build and ship it.',
    technologies: ['Java', 'Paper', 'SQLite'],
    highlights: [
      'Built and maintain the core server plugin infrastructure',
      'Manage development roadmap and feature priorities',
      'Handle all custom plugin development end-to-end',
    ],
    link: 'https://discord.gg/MvwdNzwcxX',
    current: true,
  },
  {
    id: 'papaya-smp',
    organization: 'Papaya SMP',
    role: 'Discord Developer',
    period: '2025 — Present',
    type: 'Discord',
    description: 'Built the server\'s ticket bot from the ground up to handle support and staff workflows, and keep the community tooling running smoothly as a Discord dev.',
    technologies: ['TypeScript', 'Discord.js', 'SQLite'],
    highlights: [
      'Designed and built the ticket system from scratch',
      'Automated community management workflows',
    ],
    link: 'https://discord.gg/8FDwDXbMmm',
    current: true,
  },
  {
    id: 'shapesmp',
    organization: 'ShapeSMP',
    role: 'Developer & Manager',
    period: '2025 — Present',
    type: 'Minecraft',
    description: 'Private SMP where I handle all of the management and build custom plugins whenever something is needed. End-to-end ownership of the server backend and tooling.',
    technologies: ['Java', 'Paper', 'Plugin Development'],
    highlights: [
      'Full ownership of server backend and custom plugins',
      'Handle all management and operational decisions',
    ],
    link: 'https://discord.gg/gXbPPdSUEJ',
    current: true,
  },
  {
    id: 'vanilla-smp',
    organization: 'Vanilla SMP',
    role: 'Admin / Developer',
    period: '2025 — Present',
    type: 'Minecraft',
    description: 'Ran the server backend, built custom plugins for the survival experience, and kept things running on the admin side. Handled everything from plugin configs to player reports to making sure the server didn\'t lag itself to death when folks started building crazy farms.',
    technologies: ['Java', 'Spigot', 'Server Administration'],
    current: true,
  },
  {
    id: 'allay-blossom',
    organization: 'Allay SMP / Blossom SMP',
    role: 'Developer',
    period: '2025 — Present',
    type: 'Minecraft',
    description: 'Came up through these servers building Discord bots and learning the ropes of Minecraft plugin dev. Made moderation bots, ticket systems, and a bunch of small plugins that taught me how to actually ship stuff that people use.',
    technologies: ['Java', 'TypeScript', 'Discord.js'],
  },
];
