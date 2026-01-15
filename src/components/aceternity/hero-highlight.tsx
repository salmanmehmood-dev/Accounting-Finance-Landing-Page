"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type HeroHighlightProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeroHighlight({ children, className }: HeroHighlightProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const onMove = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "relative overflow-hidden",
        "[--mx:50%] [--my:40%]",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(900px_circle_at_var(--mx)_var(--my),rgba(90,185,234,0.22),transparent_50%)]",
          "dark:bg-[radial-gradient(900px_circle_at_var(--mx)_var(--my),rgba(90,185,234,0.16),transparent_50%)]",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(29,157,221,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_30%,rgba(0,52,89,0.45),transparent_55%)]"
      />
      {children}
    </div>
  );
}
