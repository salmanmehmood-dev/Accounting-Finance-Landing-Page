"use client";

import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { siteConfig } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const primaryCta = siteConfig.hero.ctas[0];
  const secondaryCta = siteConfig.hero.ctas[1];

  return (
    <AuroraBackground>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-8 pt-44 md:pt-64 pb-32">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center text-center space-y-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium shadow-lg"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    Trusted by 50+ Growth Startups
                </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight tracking-tight max-w-4xl"
              >
                {siteConfig.hero.title}{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                   Financial Clarity.
                </span>
              </motion.h1>

              <motion.p
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {siteConfig.hero.subHeadline}
              </motion.p>
              
              <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
                 className="flex flex-col sm:flex-row items-center gap-4 mt-4"
              >
                {primaryCta && (
                    <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 shadow-xl hover:shadow-primary/20 transition-all group" asChild>
                        <Link href={primaryCta.href}>
                             {primaryCta.label}
                             <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                )}
                {secondaryCta && (
                     <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-white/5 border-white/10 hover:bg-white/10 text-foreground backdrop-blur-sm" asChild>
                        <Link href={secondaryCta.href}>
                            {secondaryCta.label}
                        </Link>
                    </Button>
                )}
              </motion.div>
              
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-4 text-sm font-medium text-muted-foreground/80"
               >
                   <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> CFO Advisory</span>
                   <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Tax Compliance</span>
                   <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Bookkeeping</span>
               </motion.div>
            </div>
          }
        >
             {/* Dashboard Mockup - Replaced abstract with a cleaner UI representation */}
           <div className="relative w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
               <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
               </div>
               <div className="flex-1 p-6 grid grid-cols-12 gap-6 p-8">
                    {/* Fake Dashboard UI */}
                    <div className="col-span-3 space-y-4">
                        <div className="h-4 w-24 bg-white/10 rounded-full" />
                        <div className="space-y-2">
                             {[1,2,3,4,5].map(i => (
                                 <div key={i} className="h-8 w-full bg-white/5 rounded-lg flex items-center px-2">
                                     <div className={`w-2 h-2 rounded-full mr-2 ${i===1? 'bg-primary' : 'bg-white/10'}`} />
                                     <div className="h-2 w-16 bg-white/10 rounded-full opacity-50" />
                                 </div>
                             ))}
                        </div>
                    </div>
                    <div className="col-span-9 space-y-6">
                        <div className="grid grid-cols-3 gap-4">
                            {[1,2,3].map(i => (
                                <div key={i} className="h-32 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
                                     <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                        $
                                     </div>
                                     <div className="space-y-1">
                                         <div className="h-2 w-12 bg-white/10 rounded-full" />
                                         <div className="h-6 w-24 bg-white/20 rounded-md" />
                                     </div>
                                </div>
                            ))}
                        </div>
                        <div className="h-64 bg-white/5 border border-white/10 rounded-xl p-4 flex items-end gap-2">
                             {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90, 60, 50].map((h, i) => (
                                 <div key={i} className="flex-1 bg-gradient-to-t from-primary/50 to-secondary/50 rounded-t-sm hover:from-primary hover:to-secondary transition-colors" style={{ height: `${h}%` }} />
                             ))}
                        </div>
                    </div>
               </div>
           </div>
        </ContainerScroll>
      </div>
    </AuroraBackground>
  );
}
