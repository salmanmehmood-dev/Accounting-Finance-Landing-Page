"use client";
import React from "react";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { CallToAction } from "@/components/home/CallToAction";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
       <ServicesHero />
       <ServicesShowcase />
       <div className="-mt-12 relative z-10">
          <CallToAction />
       </div>
    </div>
  );
}
