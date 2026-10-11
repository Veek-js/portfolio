import { useEffect, useRef, useState } from 'react';

/** Adds .in to .reveal elements on scroll. Returns a ref to attach to a wrapper. */
export function useRevealRoot(deps = []) {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

/** IST clock + awake/asleep status. Humane touch: honest about being offline. */
export function useIstStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(t);
  }, []);
  let time = now.toTimeString().slice(0, 5);
  let hour = now.getHours();
  try {
    time = now.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false,
    });
    const parts = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false,
    }).formatToParts(now);
    hour = Number(parts.find((p) => p.type === 'hour')?.value ?? hour);
  } catch { /* fallback stays local */ }
  const awake = hour >= 9 && hour < 24;
  return { time, awake };
}

/** Fake-but-fast loader counter that resolves when it hits 100. */
export function useLoader() {
  const [n, setN] = useState(0);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setN((v) => {
        const next = v + Math.floor(Math.random() * 12) + 4;
        if (next >= 100) {
          clearInterval(t);
          setTimeout(() => setGone(true), 1400);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(t);
  }, []);
  return { n, gone, done: n >= 100 };
}
