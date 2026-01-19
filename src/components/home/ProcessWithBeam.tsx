"use client";

import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function ProcessWithBeam() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-5xl mx-auto antialiased pt-4 relative">
        <div className="mb-12 text-center md:text-left">
             <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-4">
                How We Work
             </h2>
             <p className="text-lg text-muted-foreground">
                A simple, transparent process to elevate your business.
             </p>
        </div>

        {siteConfig.process.map((step, index) => (
          <div key={`content-${index}`} className="mb-24 group relative">
             {/* Step Number Badge - Positioned delicately */}
            <div className="absolute -left-12 top-0 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                {index + 1}
            </div>

            <div className="grid md:grid-cols-2 gap-24 items-center">
                {/* Content Side */}
                <div className="order-2 md:order-1">
                    <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
                        Step {index + 1}
                    </h3>
                    <h4 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                        {step.title}
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                    </p>
                </div>

                {/* Image Side */}
                <div className="order-1 md:order-2 relative h-64 md:h-72 w-full rounded-3xl overflow-hidden shadow-2xl border border-border/20 group-hover:-translate-y-2 transition-transform duration-500">
                     <Image
                        src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1460925895917-afdab827c52f' : '1554224155-8d04cb21cd6c'}?q=80&w=800&auto=format&fit=crop`}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
