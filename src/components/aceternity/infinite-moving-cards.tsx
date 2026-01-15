"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type InfiniteMovingCardItem = {
  quote: string;
  name: string;
  title?: string;
  location?: string;
};

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: InfiniteMovingCardItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const hasAnimated = React.useRef(false);

  const [start, setStart] = React.useState(false);

  React.useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((child) => {
      scrollerRef.current?.appendChild(child.cloneNode(true));
    });

    // Direction
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );

    // Speed
    containerRef.current.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
    );

    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused",
        )}
      >
        {items.map((item) => {
          const subtitle = item.title ?? item.location;

          return (
            <li
              key={`${item.name}-${item.quote.slice(0, 16)}`}
              className={cn(
                "relative w-87.5 max-w-full shrink-0 rounded-3xl border border-border/40 bg-card px-8 py-6 shadow-sm",
                "backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none",
                "md:w-112.5",
              )}
            >
              <blockquote>
                <span className="text-sm leading-[1.6] font-normal text-foreground/80 dark:text-brand-icy/80">
                  “{item.quote}”
                </span>

                <div className="mt-6 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-semibold text-foreground dark:text-brand-icy">
                      {item.name}
                    </span>
                    {subtitle ? (
                      <span className="text-sm leading-[1.6] font-normal text-muted-foreground dark:text-brand-icy/70">
                        {subtitle}
                      </span>
                    ) : null}
                  </span>
                </div>
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
