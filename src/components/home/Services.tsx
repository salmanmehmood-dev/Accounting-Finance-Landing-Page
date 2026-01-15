import * as React from "react";
import {
  Activity,
  BarChart3,
  BookOpen,
  Globe,
  ShieldCheck,
} from "lucide-react";

import { BentoGrid } from "@/components/aceternity/bento-grid";
import { siteConfig, type ServiceItem } from "@/data/site-content";
import { cn } from "@/lib/utils";

const iconMap: Record<ServiceItem["icon"], React.ElementType> = {
  chart: BarChart3,
  book: BookOpen,
  globe: Globe,
  shield: ShieldCheck,
  activity: Activity,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = iconMap[service.icon];

  return (
    <div
      className={cn(
        "group rounded-3xl border border-border/40 bg-card p-6 text-card-foreground shadow-sm",
        "backdrop-blur-md dark:border-white/10 dark:bg-brand-ink/50 dark:shadow-none",
        "transition-transform duration-200",
        "hover:scale-[1.02] hover:border-brand-sky",
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
            "border border-border/40 bg-background/70 text-brand-bell",
            "dark:border-white/10 dark:bg-white/5 dark:text-brand-icy",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Modern accounting and advisory services designed to reduce stress,
            improve clarity, and keep you compliant.
          </p>
        </div>

        <div className="mt-10">
          <BentoGrid>
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}
