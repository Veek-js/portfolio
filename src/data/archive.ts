export type ArchiveStatus = 'archived' | 'discontinued' | 'replaced' | 'experimental';

export interface ArchiveProject {
  id: string;
  num: string;
  title: string;
  category: string;
  year: string;
  status: ArchiveStatus;
  description: string;
  reason?: string;
  technologies: string[];
  github?: string;
}

export const archiveProjects: ArchiveProject[] = [
  {
    id: 'donuttools',
    num: '01',
    title: 'DonutTools',
    category: 'Fabric Mod',
    year: '2024',
    status: 'archived',
    description: 'A bundled Fabric mod for Donut SMP with survival QoL tools — shard pickaxe, tree chopper, and automation helpers.',
    reason: 'Source code was lost. Design concepts influenced later projects.',
    technologies: ['Java', 'Fabric', 'Mixin'],
  },
  {
    id: 'early-mod-bots',
    num: '02',
    title: 'Early Mod Bots',
    category: 'Discord Bots',
    year: '2025',
    status: 'replaced',
    description: 'Moderation bots for small SMP communities — warn, mute, kick with basic logging. Simple tools that taught the fundamentals of Discord bot development.',
    reason: 'Concepts merged into the Apex Building Bot.',
    technologies: ['TypeScript', 'Discord.js'],
  },
  {
    id: 'smp-plugins-v1',
    num: '03',
    title: 'SMP Plugin Experiments',
    category: 'Minecraft Plugins',
    year: '2025',
    status: 'experimental',
    description: 'Small plugins built while learning server development — teleportation, basic commands, and player management. Rough but functional.',
    reason: 'Superseded by Vanilla-Core.',
    technologies: ['Java', 'Spigot'],
  },
  {
    id: 'ticket-prototypes',
    num: '04',
    title: 'Ticket Prototypes',
    category: 'Discord Bot',
    year: '2025',
    status: 'replaced',
    description: 'Early ticket system prototypes for community support panels with staff role routing. First version of what became the production ticket system.',
    reason: 'Evolved into the Apex Building Bot ticket system.',
    technologies: ['TypeScript', 'Node.js', 'Discord.js'],
  },
];
