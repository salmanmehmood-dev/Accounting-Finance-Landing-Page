"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingContactButton() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-center">
      <Link 
        href="/contact"
        className={cn(
          "group flex flex-col items-center justify-center bg-primary text-primary-foreground py-3 px-1.5 rounded-l-lg shadow-2xl transition-all duration-300 hover:bg-primary/90 hover:pr-2 hover:pl-2",
          "translate-x-0" 
        )}
      >
        <span className="sr-only">Contact Us</span>
        
        {/* Icon */}
        <Mail className="w-4 h-4 mb-2" />
        
        {/* Vertical Text */}
        <div style={{ writingMode: 'vertical-rl' }} className="rotate-180 font-bold text-xs tracking-wider uppercase whitespace-nowrap">
            Contact Us
        </div>
      </Link>
    </div>
  );
}
