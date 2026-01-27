"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-foreground">
                Ready to optimize your <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">financial future?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join high-growth startups and established businesses that trust ElevareHub for their accounting and advisory needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                 <Button size="lg" className="rounded-full px-10 text-lg h-16 bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/30 transition-all group w-full sm:w-auto" asChild>
                    <Link href="/contact">
                         Get Your Financial Health Check
                         <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-16 bg-transparent border-primary/20 hover:bg-primary/5 text-foreground w-full sm:w-auto" asChild>
                    <Link href="/services">
                        View Services
                    </Link>
                </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
                No commitment required • Free initial consultation
            </p>
        </div>
      </div>
    </section>
  );
}
