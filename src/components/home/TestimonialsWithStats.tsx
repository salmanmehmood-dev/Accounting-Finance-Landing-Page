"use client";

import React from "react";
import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-content";
import { ArrowRight, Globe2, TrendingUp, Users } from "lucide-react";

export function TestimonialsWithStats() {
  const testimonials = siteConfig.testimonials.slice(0, 3); // Take top 3 for the map display

  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Stats */}
          <div className="flex flex-col gap-8">
            <div>
               <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                Testimonials
               </span>
               <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tight leading-tight">
                Lets Hear From Our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Clients</span>
               </h2>
               <p className="mt-4 text-lg text-muted-foreground max-w-md">
                 See how we've helped businesses like yours achieve financial clarity and success.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm flex flex-col items-start gap-3">
                     <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Globe2 className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold font-heading text-foreground">240+</h3>
                        <p className="text-sm text-muted-foreground">Clients Served <br/> Worldwide</p>
                     </div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm flex flex-col items-start gap-3">
                     <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                        <TrendingUp className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-bold font-heading text-foreground">870M+</h3>
                        <p className="text-sm text-muted-foreground">Funding Raised <br/> Across Sectors</p>
                     </div>
                </div>
            </div>

            <Button size="lg" className="w-fit rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
               Let's Talk
            </Button>
          </div>

          {/* Right Column: World Map & Floating Cards */}
          <div className="relative h-[600px] w-full flex items-center justify-center">
              <div className="absolute inset-0 z-0">
                  <WorldMap 
                    dots={[
                        { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } }, // Alaska -> LA
                        { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } }, // Alaska -> Brazil
                        { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } }, // Brazil -> Lisbon
                        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: 43.1332, lng: 131.9113 } }, // New Delhi -> Vladivostok
                        { start: { lat: 28.6139, lng: 77.2090 }, end: { lat: -1.2921, lng: 36.8219 } },  // New Delhi -> Nairobi
                    ]}
                    lineColor="var(--primary)"
                  />
              </div>

              {/* Floating Testimonial Cards */}
              <div className="relative z-10 w-full h-full">
                  {testimonials.map((t, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                        className={cn(
                            "absolute p-6 rounded-2xl bg-card/80 backdrop-blur-md border border-border/50 shadow-xl max-w-sm",
                            i === 0 ? "top-10 right-0 md:right-10" : 
                            i === 1 ? "top-1/2 left-0 -translate-y-1/2 z-20" : 
                            "bottom-20 right-10"
                        )}
                      >
                         <div className="flex gap-1 mb-2">
                            {[1,2,3,4,5].map(star => (
                                <svg key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                         </div>
                         <p className="text-sm font-medium text-foreground mb-4 leading-relaxed">
                            "{t.quote}"
                         </p>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-foreground">{t.name}</p>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{t.location}</p>
                            </div>
                         </div>
                      </motion.div>
                  ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}
