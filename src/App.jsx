import { useState } from 'react';
import { useIstStatus, useRevealRoot } from './hooks';
import { Contact, Hero, How, Pricing, Work } from './components/sections';
import { Cursor, Grain, Loader, Marquee, MenuOverlay, Nav } from './components/chrome';

export default function App() {
  const [menu, setMenu] = useState(false);
  const { time, awake } = useIstStatus();
  const rootRef = useRevealRoot();

  return (
    <>
      <Grain />
      <Cursor />
      <Loader />
      <Nav time={time} awake={awake} onMenu={() => setMenu(true)} />
      <MenuOverlay open={menu} onClose={() => setMenu(false)} />
      <main id="top" ref={rootRef}>
        <Hero />
        <Marquee />
        <Work />
        <How />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
