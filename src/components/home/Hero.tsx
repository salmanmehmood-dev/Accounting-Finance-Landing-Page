"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { HeroHighlight } from "@/components/aceternity/hero-highlight";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Hero() {
  const primaryCta = siteConfig.hero.ctas[0];
  const secondaryCta = siteConfig.hero.ctas[1];

  return (
    <section id="home" className="border-b border-brand-icy/10">
      <HeroHighlight>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              <span className="bg-linear-to-r from-brand-icy to-brand-bell bg-clip-text text-transparent">
                {siteConfig.hero.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
              className="mt-7 max-w-175 text-pretty text-lg leading-8 text-muted-foreground"
            >
              {siteConfig.hero.subHeadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              {primaryCta ? (
                <Button
                  asChild
                  className={cn(
                    "bg-brand-bell text-white hover:bg-brand-sky",
                    "shadow-[0_0_24px_rgba(29,157,221,0.35)]",
                    "active:scale-[0.98]"
                  )}
                >
                  <a href={primaryCta.href}>{primaryCta.label}</a>
                </Button>
              ) : null}

              {secondaryCta ? (
                <Button
                  asChild
                  variant="outline"
                  className="border-brand-icy/40 bg-transparent"
                >
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              ) : null}
            </motion.div>
          </div>
        </div>
      </HeroHighlight>
    </section>
  );
}
