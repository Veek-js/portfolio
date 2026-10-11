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
    links: [{ label: 'code ↗', href: `${GITHUB}/Vanilla-Core` }],
    dm: true,
    preview: 'p1',
  },
  {
    num: '02',
    title: 'Apex Building Bot',
    sub: 'tickets, mods & giveaways',
    meta: 'Discord · TS · in production',
    href: `${GITHUB}/Apex-Building-Bot`,
    links: [
      { label: 'code ↗', href: `${GITHUB}/Apex-Building-Bot` },
      { label: 'see it live ↗', href: INVITE },
    ],
    preview: 'p2',
  },
  {
    num: '03',
    title: 'Blaze SMP Manager',
    sub: 'runs the server behind discord',
    meta: 'Discord · private build',
    href: DM_URL,
    privateNote: 'no public repo — management bot for Blaze SMP',
    links: [{ label: 'demo in dms →', href: DM_URL }],
    preview: 'p5',
    arrow: '→',
  },
  {
    num: '04',
    title: 'Skin Gallery',
    sub: 'type a name, see the skin',
    meta: 'Web · Astro · live',
    href: 'https://minecraft-skin-gallery.netlify.app',
    links: [
      { label: 'open site ↗', href: 'https://minecraft-skin-gallery.netlify.app' },
      { label: 'code ↗', href: `${GITHUB}/Minecraft-Skin-Gallery` },
    ],
    preview: 'p4',
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
