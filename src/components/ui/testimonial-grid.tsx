"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const TestimonialGrid = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    src?: string;
  }[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollY = useScroll().scrollY;
  
  // Parallax transforms for columns
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves opposite/slower
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Split items into 3 columns for desktop, 2 for tablet, 1 for mobile
  // Since we want responsive, we can't easily change the number of columns with purely JS slicing without hydration mismatches or complex hooks.
  // For a robust parallax, we often force a structure.
  // Let's stick to a grid that becomes 1 col on mobile and 3 on desktop, but apply parallax only on desktop.
  
  const third = Math.ceil(items.length / 3);
  const firstPart = items.slice(0, third);
  const secondPart = items.slice(third, 2 * third);
  const thirdPart = items.slice(2 * third);

  return (
    <div 
        ref={containerRef}
        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8 max-w-7xl mx-auto px-4", className)}
    >
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="grid gap-8">
            {firstPart.map((item, idx) => (
                <TestimonialCard key={"col1" + idx} item={item} />
            ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="grid gap-8 md:mt-12">
            {secondPart.map((item, idx) => (
                <TestimonialCard key={"col2" + idx} item={item} />
            ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="grid gap-8">
             {thirdPart.map((item, idx) => (
                <TestimonialCard key={"col3" + idx} item={item} />
            ))}
        </motion.div>
    </div>
  );
};

const TestimonialCard = ({ item }: { item: { quote: string; name: string; title: string; src?: string } }) => {
    return (
        <div className="break-inside-avoid">
            {/* Speech Bubble */}
            <div className="relative bg-card border border-border/50 p-8 rounded-3xl rounded-bl-sm shadow-sm hover:shadow-md transition-shadow">
                <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                    "{item.quote}"
                </p>
                {/* Tail */}
                <div className="absolute -bottom-[10px] left-8 w-6 h-6 bg-card border-b border-r border-border/50 transform rotate-45"></div>
                 {/* Cover top of tail to merge with card */}
                <div className="absolute bottom-[2px] left-8 w-6 h-4 bg-card transform rotate-45"></div>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 mt-6 ml-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <img 
                        src={item.src || `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} 
                        alt={item.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="font-heading font-bold text-foreground text-base">
                        {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                        {item.title}
                    </p>
                </div>
            </div>
        </div>
    );
}
