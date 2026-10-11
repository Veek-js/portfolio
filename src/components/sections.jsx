import { useState } from 'react';
import { DM_URL, DISCORD_USER, EMAIL, FINE_PRINT, GITHUB, INVITE, PRICING, PROJECTS } from '../data';
import { CopyId, Footer, TopButton } from './chrome';

function Magnetic({ children, href }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = ''; };
  return (
    <a href={href} target="_blank" rel="noopener"
      className="magnetic" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <p className="hero-kicker reveal">Minecraft · Discord · Web — 2024 to now</p>
      <h1 className="reveal">
        I build servers, bots <span className="amp">&</span> websites that{' '}
        <em>stay up.</em>
      </h1>
      <div className="hero-row">
        <div className="reveal">
          <p className="lede">
            I'm Veekshith, writing from India. For two years I've been building
            Minecraft plugins, Discord bots and small websites — the kind that has
            to hold together while fifty people are online at once. Everything
            filed below runs somewhere real.
          </p>
          <div className="hero-actions">
            <Magnetic href={DM_URL}><span className="btn-solid">DM me on Discord ↗</span></Magnetic>
            <Magnetic href={GITHUB}><span className="btn-ghost">GitHub ↗</span></Magnetic>
          </div>
        </div>
        <aside className="marginalia reveal">
          <div><span className="lbl">At present</span><p>Vanilla-Core updates, the Apex bot live, two open slots.</p></div>
          <div><span className="lbl">Base</span><p>India (UTC+5:30), working worldwide.</p></div>
          <div><span className="lbl">Terms</span><p>Fixed quotes, 50% to start, seven days of fixes free.</p></div>
        </aside>
        <div className="stamp reveal" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
            <text><textPath href="#circ">SET BY HAND • NO TEMPLATES • SET BY HAND •</textPath></text>
            <text x="50" y="58" textAnchor="middle" className="star">✳</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Preview({ kind, num, title }) {
  return (
    <span className={`preview ${kind}`} aria-hidden="true">
      <span className="plate-cap">Fig. {num} — {title}</span>
      {kind === 'p1' && <span className="p1-ui"><b /><i /><i /><em /></span>}
      {kind === 'p2' && <><span className="p2-moon" /><span className="p2-lines"><b /><b /><b /></span></>}
      {kind === 'p5' && <span className="p5-tix"><b /><b /><b /></span>}
      {kind === 'p4' && <span className="p4-cols"><b /><b /><b /></span>}
    </span>
  );
}

export function Work() {
  return (
    <section className="work" id="work">
      <div className="work-head">
        <h2><em>01</em> Selected work <sup>(04)</sup></h2>
        <p>Hover an entry to inspect its plate. Every link goes somewhere real.</p>
      </div>
      {PROJECTS.map((p) => (
        <article className="row reveal" key={p.num}>
          <span className="num">Fig. {p.num}</span>
          <span className="title">
            <a href={p.href} target="_blank" rel="noopener">{p.title}</a>{' '}
            <i className="serif-i">{p.sub}</i>
          </span>
          <span className="meta">{p.meta}</span>
          <span className="arrow">{p.arrow ?? '↗'}</span>
          <span className="row-links">
            {p.privateNote && <span className="priv">* {p.privateNote}</span>}
            {p.links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener">{l.label}</a>
            ))}
            {p.num === '01' && <a href={DM_URL} target="_blank" rel="noopener">want one? dm me →</a>}
          </span>
          <Preview kind={p.preview} num={p.num} title={p.title} />
        </article>
      ))}
      <p className="arch-note reveal">
        * Earlier filings — DonutTools (fabric mod, '24) · early mod bots · smp plugin
        experiments · ticket prototypes. Ask in DMs for a tour.
      </p>
    </section>
  );
}

const CARDS = [
  ['A/ PRODUCTION FIRST', 'Everything filed here runs somewhere real — SMPs, live servers, deployed sites. No mockups, no concept shots.'],
  ['B/ FIXED QUOTES', 'Scope it in DMs, price settled up front, half to begin. If it proves harder than it looks, I say so before you pay.'],
  ['C/ DMS OVER EMAIL', 'It is where my clients already live. Faster than threads — and you can see my work inside the servers I run.'],
];

const TICKER = [
  ['Currently', <>Vanilla-Core updates<br />Apex bot live · 2 slots open</>],
  ['Servers', <>Apex (lead) · Shape<br />Vanilla · Papaya · Allay/Blossom</>],
  ['Stack', <>Java · Paper · TS · discord.js<br />Astro · SQLite · Linux · Docker</>],
  ['Base', <>India · works worldwide<br />replies in ~24h</>],
];

export function How() {
  return (
    <section className="manifesto" id="how">
      <h2 className="reveal">
        Most servers don't need <em>more</em> plugins.<br />
        They need <span className="serif-i lime">fewer, better ones.</span>
      </h2>
      <div className="mani-grid">
        {CARDS.map(([h, p]) => (
          <div className="mani-card reveal" key={h}><h3>{h}</h3><p>{p}</p></div>
        ))}
      </div>
      <div className="ticker reveal">
        {TICKER.map(([h, p]) => (
          <div key={h}><strong>{h}</strong><p>{p}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const [open, setOpen] = useState(0);
  return (
    <section className="services" id="pricing">
      <h2><em>03</em> Commissions</h2>
      <p className="services-sub reveal">A short ledger. Tap a line to expand — everything ordered over Discord DMs.</p>
      <div className="acc">
        {PRICING.map((s, i) => (
          <button
            key={s.name}
            className={`acc-item reveal${open === i ? ' open' : ''}`}
            onClick={(e) => { if (!e.target.closest('a')) setOpen(open === i ? -1 : i); }}
          >
            <span className="acc-top">
              <span>{s.name} <sup>{s.range}</sup></span>
              <span className="plus">{open === i ? '−' : '+'}</span>
            </span>
            <span className="acc-body">
              <span className="tiers">
                {s.tiers.map(([price, desc]) => (
                  <span key={price}><b>{price}</b> — {desc}</span>
                ))}
              </span>
              <a href={DM_URL} target="_blank" rel="noopener">order in dms →</a>
            </span>
          </button>
        ))}
      </div>
      <div className="fine">
        {FINE_PRINT.map(([h, p]) => (
          <div className="reveal" key={h}><strong>{h}</strong><p>{p}</p></div>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="c-kicker reveal">Correspondence — DMs open · {DISCORD_USER}</p>
      <a href={DM_URL} target="_blank" rel="noopener" className="giant reveal">
        <em>Write to me</em><span>↗</span>
      </a>
      <p className="c-sub reveal">
        No need for a formal brief — send what you need, your server's size, and
        your deadline. I reply within a day.
      </p>
      <div className="c-row">
        <CopyId />
        <div className="c-socials">
          <a href={GITHUB} target="_blank" rel="noopener">github</a>
          <a href={INVITE} target="_blank" rel="noopener">server</a>
          <a href={`mailto:${EMAIL}`}>email</a>
        </div>
        <TopButton />
      </div>
      <Footer />
    </section>
  );
}
