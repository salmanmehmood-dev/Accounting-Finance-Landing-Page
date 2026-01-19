"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col  min-h-[100vh] items-center justify-center bg-background text-foreground transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            "filter blur-[100px] pointer-events-none absolute -inset-[100%] opacity-50",
            '[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]',
            '[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-500)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]',
            '[background-image:var(--dark-gradient),var(--aurora)]',
            '[background-size:300%,_200%]',
            '[background-position:50%_50%,50%_50%]',
            "invert dark:invert-0",
            "after:content-[''] after:absolute after:inset-0 after:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference",
            "dark:after:mix-blend-overlay"
          )}
        ></div>
        {/* Customized aurora colors for our theme */}
         <div
          className={cn(
            "filter blur-[100px] pointer-events-none absolute -inset-[100%] opacity-50 will-change-transform",
            '[--aurora:repeating-linear-gradient(100deg,var(--primary)_10%,var(--secondary)_15%,var(--accent)_20%,var(--primary)_25%,var(--secondary)_30%)]',
            '[background-image:var(--aurora)]',
            '[background-size:300%,_200%]',
            '[background-position:50%_50%,50%_50%]',
            "animate-aurora after:content-[''] after:absolute after:inset-0 after:[background-image:var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed]",
             "dark:mix-blend-overlay mix-blend-multiply"
          )}
        ></div>
      </div>
      {showRadialGradient && (
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_100%)] pointer-events-none" />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
