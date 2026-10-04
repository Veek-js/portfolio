"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button type="button" onClick={copy} className="btn btn--ghost" aria-live="polite">
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
