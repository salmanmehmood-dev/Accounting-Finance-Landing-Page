"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  icon: string; // Icon name from site-content
  className?: string;
  index?: number;
}

import Link from "next/link";

// ... (imports)

export function ServiceCard({
  title,
  description,
  image,
  icon,
  className,
  index,
}: ServiceCardProps) {
  return (
    <Link 
      href="/services" 
      className={cn(
        "group relative h-full min-h-[350px] w-full overflow-hidden rounded-[2.5rem] bg-neutral-900 shadow-2xl transition-all duration-500 hover:shadow-primary/20 block",
        className
      )}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Gradient Overlays */}
      {/* Gradient Overlays */}
      {/* Base overlay for readability - Darkened Theme Color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/90 dark:via-primary/40 dark:to-primary/90 dark:brightness-[0.4] transition-all duration-300 group-hover:opacity-100" />
      
      {/* Hover reveal overlay - Rich Theme Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/90 to-transparent dark:from-primary dark:via-primary/80 dark:brightness-[0.3] opacity-90 translate-y-[20%] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="relative z-10 transform transition-all duration-500 ease-out group-hover:-translate-y-4">
          
          {/* Icon Badge */}
          <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md p-3 text-white border border-white/30 shadow-lg">
             <IconComponent iconName={icon} className="h-6 w-6" />
          </div>

          {/* Title */}
          <h3 className="font-heading text-3xl font-bold text-white leading-tight tracking-tight mb-2 drop-shadow-md">
            {title}
          </h3>

          {/* Description - Hidden by default, reveals on hover */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4">
             <div className="overflow-hidden">
                <p className="text-neutral-200 text-base leading-relaxed font-medium drop-shadow-sm pr-4">
                    {description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary-foreground font-semibold text-sm uppercase tracking-wider">
                     <span>Explore Service</span>
                     <IconArrowRight className="h-4 w-4" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Simple internal icon mapper to avoid prop drilling complex nodes if we just have strings
import {
  IconChartPie,
  IconReceipt,
  IconWorld,
  IconShieldLock,
  IconActivity,
  IconClipboardData,
  IconFileAnalytics
} from "@tabler/icons-react";

const IconComponent = ({ iconName, className }: { iconName: string; className?: string }) => {
    switch (iconName) {
        case "chart": return <IconChartPie className={className} />;
        case "book": return <IconReceipt className={className} />;
        case "globe": return <IconWorld className={className} />;
        case "shield": return <IconShieldLock className={className} />;
        case "activity": return <IconActivity className={className} />;
        case "audit": return <IconClipboardData className={className} />; // Assuming 'audit' might be a key
        default: return <IconFileAnalytics className={className} />;
    }
};
