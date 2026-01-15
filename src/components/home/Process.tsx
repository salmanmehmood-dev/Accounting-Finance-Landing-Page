import * as React from "react";

import { siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Process
          </h2>
          <p className="mt-3 text-muted-foreground">
            A clear, repeatable workflow that turns financial stress into
            strategic success.
          </p>
        </div>

        <div className="relative mt-12">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-border/50 md:block" />

          <div className="grid gap-6 md:grid-cols-4">
            {siteConfig.process.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "relative rounded-3xl border border-border/40 bg-card p-6 shadow-sm",
                  "backdrop-blur-md dark:border-white/10 dark:bg-brand-ink/50 dark:shadow-none",
                )}
              >
                {/* Node on the timeline */}
                <div className="pointer-events-none absolute -top-3 left-6 hidden md:block">
                  <div className="h-6 w-6 rounded-full border border-border/40 bg-brand-bell dark:border-white/10 dark:bg-brand-deep" />
                </div>

                <div className="text-4xl font-semibold tracking-tight text-brand-sky">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
