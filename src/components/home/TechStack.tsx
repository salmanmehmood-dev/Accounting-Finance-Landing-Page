"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-content";

export function TechStack() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tech Stack</span>
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
          We use the latest tools to enhance financial processes, streamline workflows, and provide faster, smarter solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {siteConfig.techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ y: 0 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2, // Stagger effect
              }}
            >
              <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-card border border-border/50 shadow-lg flex items-center justify-center p-4 hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="relative w-full h-full">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              {/* Tooltip-ish name on hover (optional, but nice) */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium text-muted-foreground whitespace-nowrap">
                  {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
