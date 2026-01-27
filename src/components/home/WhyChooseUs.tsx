"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site-content";
import Image from "next/image";

const features = [
  {
    title: "Expert CFO Advisory",
    description: "Strategic financial guidance that goes beyond the numbers. We act as your fractional CFO, helping you make data-driven decisions to scale operations and secure funding.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Seamless Compliance",
    description: "Navigate complex tax regulations and IFRS standards with ease. Our team ensures you stay compliant across jurisdictions, minimizing risk and penalties.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Tech-Driven Efficiency",
    description: "We leverage modern accounting stacks (Xero, QuickBooks, NetSuite) and automation to streamline your bookkeeping, reducing manual errors and saving time.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
  },
];

export function WhyChooseUs() {
  return (
    <section id="value" className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-24 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 theme-text-shadow">
                Why Partner With <span className="theme-gradient-text">Elevare?</span>
            </h2>
             <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                We combine financial expertise with modern technology to deliver results that matter.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col gap-24">
            {features.map((feature, index) => (
                <div key={index} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    {/* Text Content */}
                    <div className={cn("order-2", index % 2 === 1 ? "md:order-2" : "md:order-1")}>
                         <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-2xl shadow-sm">
                            {index + 1}
                         </div>
                        <h3 className="text-3xl font-bold font-heading text-foreground mb-4">
                            {feature.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                        
                        <div className="mt-8 h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
                    </div>

                    {/* Image Card */}
                    <div className={cn("relative h-[300px] md:h-[450px] w-full group order-1", index % 2 === 1 ? "md:order-1" : "md:order-2")}>
                         <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/10">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                         </div>
                         
                         {/* Decor Elements */}
                         <div className="absolute -z-10 top-[10%] -right-[5%] w-40 h-40 bg-primary/30 rounded-full blur-3xl opacity-50" />
                         <div className="absolute -z-10 bottom-[10%] -left-[5%] w-40 h-40 bg-secondary/30 rounded-full blur-3xl opacity-50" />
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
