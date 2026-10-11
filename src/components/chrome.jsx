import { useEffect, useRef, useState } from 'react';
import { useLoader } from '../hooks';
import { DISCORD_ID, DISCORD_USER } from '../data';

export function Grain() {
  return <div className="grain" aria-hidden="true" />;
}

export function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cx = -100, cy = -100, tx = -100, ty = -100, raf = 0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const over = (e) => {
      if (e.target.closest('a, button, .row')) el.classList.add('grow');
    };
    const out = () => el.classList.remove('grow');
    const loop = () => {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      el.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div className="cursor" aria-hidden="true" ref={ref} />;
}

export function Loader() {
  const { n, gone, done } = useLoader();
  if (gone) return null;
  return (
    <div className={`loader${done ? ' done' : ''}`} aria-hidden="true">
      <div className="loader-top"><span>VEEKSHITH</span><span>SETTING TYPE…</span></div>
      <div className="loader-count">{String(n).padStart(3, '0')}</div>
      <div className="loader-bar"><i style={{ width: `${n}%` }} /></div>
    </div>
  );
}

export function Nav({ time, awake, onMenu }) {
  return (
    <header className="nav">
      <a href="#top" className="brand">Veekshith<sup>_</sup></a>
      <div className="nav-mid">
        <span className="dot" />
        <span>India · {time} IST · {awake ? 'awake' : 'asleep'}</span>
      </div>
      <button className="menu-trigger" onClick={onMenu}>Menu +</button>
    </header>
  );
}

const MENU_LINKS = [
  ['#work', '01', 'Selected Work'],
  ['#how', '02', 'How I Work'],
  ['#pricing', '03', 'Commissions'],
  ['#contact', '04', 'Correspondence'],
];

export function MenuOverlay({ open, onClose }) {
  return (
    <div className={`menu-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
      <button className="menu-close" onClick={onClose}>Close ×</button>
      <nav>
        {MENU_LINKS.map(([href, n, label]) => (
          <a key={href} href={href} onClick={onClose} tabIndex={open ? 0 : -1}>
            <em>{n}</em> {label}
          </a>
        ))}
      </nav>
      <div className="menu-foot">
        <span>discord: {DISCORD_USER}</span>
        <span>replies in ~24h</span>
      </div>
    </div>
  );
}

const ITEMS = ['Set by hand', 'No templates', 'MC · Discord · Web', 'DMs open'];

export function Marquee() {
  const row = (key) => (
    <span key={key}>
      {ITEMS.map((t, i) => (
        <span key={i} className={i % 2 ? 'serif' : ''}>{t} <b>✳</b> </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{row('a')}{row('b')}</div>
    </div>
  );
}

export function CopyId({ className = 'copy-btn', idle = 'copy discord id' }) {
  const [label, setLabel] = useState(idle);
  const copy = async () => {
    try { await navigator.clipboard.writeText(DISCORD_ID); setLabel('copied ✓'); }
    catch { setLabel(DISCORD_ID); }
    setTimeout(() => setLabel(idle), 2000);
  };
  return <button className={className} onClick={copy}>{label}</button>;
}

export function Footer() {
  return (
    <div className="c-foot">
      <span>© {new Date().getFullYear()} Veekshith · India</span>
      <span className="colophon">Set in Instrument Serif & Space Grotesk · built with React + Vite</span>
    </div>
  );
}

export function TopButton() {
  return (
    <button id="topBtn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      Top ↑
    </button>
  );
}
