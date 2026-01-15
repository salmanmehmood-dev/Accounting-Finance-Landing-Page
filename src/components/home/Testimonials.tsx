import * as React from "react";

import {
  InfiniteMovingCards,
  type InfiniteMovingCardItem,
} from "@/components/aceternity/infinite-moving-cards";
import { siteConfig } from "@/data/site-content";

export function Testimonials() {
  const items: InfiniteMovingCardItem[] = siteConfig.testimonials.map((t) => ({
    name: t.name,
    title: t.location,
    quote: t.quote,
  }));

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Testimonials
          </h2>
          <p className="mt-3 text-muted-foreground">
            Social proof from clients who value clarity, compliance, and growth.
          </p>
        </div>

        <div className="mt-10">
          <InfiniteMovingCards items={items} />
        </div>
      </div>
    </section>
  );
}
