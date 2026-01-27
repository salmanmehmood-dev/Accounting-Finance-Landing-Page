"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { siteConfig } from "@/data/site-content";
import { ArrowRight } from "lucide-react";

export function ServicesHero() {
  return (
    <AuroraBackground className="min-h-[80vh] h-auto md:h-[90vh] justify-start">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col text-center md:text-left gap-4 items-center justify-center px-4 sm:px-6 md:px-10 w-full pt-32 md:pt-40"
      >
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-left w-full">
                <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider backdrop-blur-md border border-primary/20">
                    Let's Create Growth
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight mb-4 md:mb-6">
                    Innovative Solutions, <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Exceptional Experience
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl leading-relaxed">
                    Empowering businesses to thrive with bespoke financial services. Let us craft a strategy that delivers results and delights stakeholders.
                </p>
                <div className="flex flex-col w-full sm:flex-row gap-4">
                    <Button 
                        size="lg" 
                        className="rounded-full w-full sm:w-auto px-8 text-base h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                        onClick={() => document.getElementById("services-showcase")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Get Started
                    </Button>
                    <Button 
                        asChild
                        size="lg" 
                        variant="outline" 
                        className="rounded-full w-full sm:w-auto px-8 text-base h-12 bg-transparent border-primary/20 hover:bg-primary/5 text-foreground group"
                    >
                        <a href="/#process">
                            View Process <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                </div>
                
                {/* Trust Indicator */}
                <div className="mt-10 md:mt-12 flex items-center gap-4">
                    <div className="flex -space-x-4">
                        {[1, 2, 3].map((i) => (
                             <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative bg-muted">
                                <Image
                                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&w=100&q=80`}
                                    alt="User"
                                    fill
                                    className="object-cover"
                                />
                             </div>
                        ))}
                    </div>
                    <div className="text-sm">
                        <span className="font-bold text-foreground">100+ Happy Clients</span>
                        <div className="text-muted-foreground text-xs">Rated 4.9/5 (75+ Reviews)</div>
                    </div>
                </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[300px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2560&ixlib=rb-4.0.3"
                    alt="Team collaboration"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Play Button Overlay (Decorative) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform duration-300">
                         <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                </div>
            </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
