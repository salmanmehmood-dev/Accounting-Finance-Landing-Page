import React from "react";
import { ProcessWithBeam } from "@/components/home/ProcessWithBeam";

export function Process() {
  return (
    <div className="w-full bg-background py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] pointer-events-none" />
      <ProcessWithBeam />
    </div>
  );
}
