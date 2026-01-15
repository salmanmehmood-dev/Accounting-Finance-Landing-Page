import * as React from "react";

import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-[1fr] grid-cols-1 gap-6 md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group rounded-3xl border border-brand-icy/10 bg-white/70 p-6 transition-transform duration-200",
        "hover:scale-[1.02] hover:border-brand-bell/60",
        "dark:bg-brand-deep/30",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-icy/15 bg-brand-icy/10 text-brand-bell dark:bg-white/5 dark:text-brand-icy">
            {icon}
          </div>
        ) : null}
        <div>
          <div className="text-lg font-semibold tracking-tight text-brand-ink dark:text-brand-icy">
            {title}
          </div>
          <div className="mt-2 text-sm leading-6 text-brand-ink/70 dark:text-brand-icy/70">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
