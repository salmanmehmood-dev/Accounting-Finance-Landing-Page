"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ShapeType = "hexagon" | "diamond" | "circle" | "squircle" | "blob" | "polygon-scatter";

interface GeometricFrameProps {
  src: string;
  alt: string;
  shape?: ShapeType;
  className?: string;
  priority?: boolean;
}

export function GeometricFrame({
  src,
  alt,
  shape = "squircle",
  className,
  priority = false,
}: GeometricFrameProps) {
  
  const getShapeClass = (s: ShapeType) => {
    switch (s) {
      case "hexagon":
        return "clip-hexagon";
      case "diamond":
        return "clip-diamond";
      case "blob":
        return "border-radius-blob"; // CSS class for blobby border radius
      case "polygon-scatter":
        return "clip-polygon-scatter";
      case "circle":
        return "rounded-full";
      case "squircle":
      default:
        return "rounded-[2rem] rounded-tr-[5rem] rounded-bl-[5rem]"; // Asymmetric squircle
    }
  };

  return (
    <div className={cn("relative overflow-hidden group", className)}>
       {/* Background Glow for visual depth */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* The Image Container with Shape Mask */}
      <div 
        className={cn(
            "relative w-full h-full bg-card overflow-hidden shadow-xl transition-all duration-500", 
            getShapeClass(shape),
             // Premium border effect wrapper
            shape === 'squircle' ? "border-4 border-white/10" : ""
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Inner Shadow/Gradient Overlay for Skeuomorphic feel */}
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-60 pointer-events-none" />
      </div>

        {/* Decorative elements based on shape */}
        {shape === 'hexagon' && (
             <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary/20 backdrop-blur-md rounded-full z-10" />
        )}
    </div>
  );
}
