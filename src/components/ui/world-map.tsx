"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { DottedMap } from "@/components/ui/dotted-map"; // We will create this SVG map helper
import { cn } from "@/lib/utils";

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
  className,
}: {
  dots?: Array<{
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }>;
  lineColor?: string;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className={cn("relative w-full h-full bg-transparent aspect-[2/1] pointer-events-none select-none", className)}>
       {/* Background World Map SVG */}
       <DottedMap className="w-full h-full opacity-[0.15] dark:opacity-[0.3] text-foreground" />
       
       {/* Animated Beams (Simplified for performance) */}
       <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none">
          {dots.map((dot, i) => (
             <motion.path
                key={i}
                d={createCurvedPath(dot.start, dot.end)}
                fill="none"
                stroke={lineColor}
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: i * 0.5
                }}
             />
          ))}
       </svg>
    </div>
  );
}

// Helper to project lat/lng to animated curved paths (Mercator-ish approximation for visuals)
function createCurvedPath(start: { lat: number; lng: number }, end: { lat: number; lng: number }) {
    // Map lat/lng (-90..90, -180..180) to SVG coordinates (0..800, 0..400)
    // This is a rough visualization projection
    const project = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = ((-lat) + 90) * (400 / 180);
        return { x, y };
    };

    const s = project(start.lat, start.lng);
    const e = project(end.lat, end.lng);
    
    // Create a quadratic bezier curve
    const midX = (s.x + e.x) / 2;
    const midY = Math.min(s.y, e.y) - 50; // Curve upwards

    return `M ${s.x} ${s.y} Q ${midX} ${midY} ${e.x} ${e.y}`;
}
