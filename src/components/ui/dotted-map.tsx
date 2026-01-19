"use client";

import { cn } from "@/lib/utils";

export function DottedMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="currentColor"
      className={cn("w-full h-full", className)}
    >
      {/* 
         This is a simplified abstract representation of a world map using dots. 
         Real production code would likely import a GeoJSON or a more complex SVG path.
         For the sake of this task and "Analyze Image" request, we simulate the *aesthetic* of a dotted map
         using a pattern of circles.
      */}
      <pattern id="dot-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
         <circle cx="2" cy="2" r="1" className="text-secondary/20" fill="currentColor" />
      </pattern>
      <rect width="800" height="400" fill="url(#dot-pattern)" />
      
      {/* 
        Ideally, we would mask this with a World Map shape.
        Since I cannot download a large SVG asset, I will use a few large ellipses 
        to approximate the 'continents' feeling for the background 
        or just leave it as a cool abstract abstract grid which fits the fintech vibe.
        
        However, to better match the "Globe" request, let's add a central refined shape.
      */}
       <mask id="world-mask">
          {/* Approximate Continents (Americas, Europe/Africa, Asia/Aus) using blobs */}
          <ellipse cx="200" cy="150" rx="80" ry="100" fill="white" /> {/* N. America */}
          <ellipse cx="250" cy="280" rx="40" ry="60" fill="white" /> {/* S. America */}
          <ellipse cx="420" cy="180" rx="60" ry="70" fill="white" /> {/* Europe/Africa */}
          <ellipse cx="450" cy="280" rx="50" ry="60" fill="white" /> {/* Africa */}
          <ellipse cx="600" cy="150" rx="100" ry="80" fill="white" /> {/* Asia */}
          <ellipse cx="650" cy="300" rx="60" ry="50" fill="white" /> {/* Aus */}
       </mask>
       
       <rect width="800" height="400" fill="currentColor" mask="url(#world-mask)" className="opacity-50" />
    </svg>
  );
}
