export const DM_URL = 'https://discord.com/users/1322117319060619307';
export const DISCORD_ID = '1322117319060619307';
export const DISCORD_USER = 'veekshith177';
export const GITHUB = 'https://github.com/veek-js';
export const EMAIL = 'veekshith177@gmail.com';
export const INVITE = 'https://discord.gg/n7qY76PMH7';

export const PROJECTS = [
  {
    num: '01',
    title: 'Vanilla-Core',
    sub: 'one jar, whole smp',
    meta: 'Minecraft · Java · active',
    href: `${GITHUB}/Vanilla-Core`,
    desc: 'One jar instead of six plugins — essentials, staff tools and economy for survival servers.',
    feats: [
      'Homes, warps, /tpa with SQLite persistence',
      'Staff tools — freeze, vanish, invsee, staff chat',
      'Player economy + spawn & random-tp with cooldowns',
    ],
    tech: ['java', 'paper', 'sqlite', 'gradle'],
    links: [{ label: 'code ↗', href: `${GITHUB}/Vanilla-Core` }],
  },
  {
    num: '02',
    title: 'Apex Building Bot',
    sub: 'tickets, mods & giveaways',
    meta: 'Discord · TS · in production',
    href: `${GITHUB}/Apex-Building-Bot`,
    desc: 'Ticketing, moderation, giveaways and builder ratings — live on multiple servers.',
    feats: [
      'Ticket panels — general, build, digout, refund, regear',
      'Moderation — warn, mute, tempban, slowmode, lock',
      'Split-or-Steal giveaways with daily auto runs',
    ],
    tech: ['typescript', 'node.js', 'discord.js v14', 'better-sqlite3'],
    links: [
      { label: 'code ↗', href: `${GITHUB}/Apex-Building-Bot` },
      { label: 'see it live ↗', href: INVITE },
    ],
  },
  {
    num: '03',
    title: 'Blaze SMP Manager',
    sub: 'runs the server behind discord',
    meta: 'Discord · private build',
    href: DM_URL,
    privateNote: 'no public repo — management bot for Blaze SMP',
    desc: 'Management bot for Blaze SMP — staff and support workflows run through Discord. Private build; walkthrough in DMs.',
    feats: [
      'Built for Blaze SMP staff + support workflows',
      'Private build — live demo in DMs',
    ],
    tech: ['typescript', 'discord.js', 'node.js'],
    links: [{ label: 'demo in dms →', href: DM_URL }],
  },
  {
    num: '04',
    title: 'Skin Gallery',
    sub: 'type a name, see the skin',
    meta: 'Web · Astro · live',
    href: 'https://minecraft-skin-gallery.netlify.app',
    desc: 'Type a username, get the skin in 3D — animations, capes, Alex/Steve auto-detect.',
    feats: [
      'Real-time 3D via skinview3d + three.js',
      '6 animations — walk, run, fly, wave, crouch, swim',
      'PlayerDB lookup + cape rendering',
    ],
    tech: ['astro', 'three.js', 'skinview3d', 'playerdb'],
    links: [
      { label: 'open site ↗', href: 'https://minecraft-skin-gallery.netlify.app' },
      { label: 'code ↗', href: `${GITHUB}/Minecraft-Skin-Gallery` },
    ],
  },
];

export const PRICING = [
  {
    name: 'Discord bots',
    range: '$4.99–19.99',
    tiers: [
      ['$4.99', 'starter: moderation + welcome + simple tickets'],
      ['$9.99', 'standard: panels, logging, roles, giveaways'],
      ['$19.99+', 'advanced: ratings, economy, auto-systems, multi-server'],
    ],
  },
  {
    name: 'Minecraft plugins & mods',
    range: '$9.99–49+',
    tiers: [
      ['$9.99', 'one plugin, one feature, done right'],
      ['$24.99', 'smp pack: essentials + staff + economy'],
      ['$49+', 'full backend: setup, migration, perf work'],
    ],
  },
  {
    name: 'Websites',
    range: '$14.99–59+',
    tiers: [
      ['$14.99', 'landing page, responsive, deployed'],
      ['$29.99', 'full site: server site / portfolio / docs'],
      ['$59+', 'web app: 3D, dashboards, APIs'],
    ],
  },
];

export const FINE_PRINT = [
  ['Timelines', 'Small bots 2–4 days, plugins 3–7, sites 2–5. You get a date before you pay anything.'],
  ['Payment', '50% to start, rest on delivery. PayPal / UPI. Fixed quote, no hourly fog.'],
  ['Fixes', '7 days of bug fixes free. Brand-new features get quoted separately.'],
  ['Install', 'Plugin config + install included. Help with PM2 / Docker / Linux, docs handed over.'],
];
