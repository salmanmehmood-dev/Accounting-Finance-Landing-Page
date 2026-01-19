"use client";

import { TestimonialGrid } from "@/components/ui/testimonial-grid";
import { siteConfig } from "@/data/site-content";
import { motion } from "framer-motion";

export default function TestimonialsPage() {
    const items = siteConfig.testimonials.map((t, i) => ({
        quote: t.quote,
        name: t.name,
        title: t.location,
        src: [
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop"
        ][i % 6], 
      }));

  return (
    <main className="min-h-screen bg-background pb-32">
       {/* Hero Section */}
       <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3456&auto=format&fit=crop" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-20 dark:opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground font-heading mb-6 tracking-tight">
                        Stories
                    </h1>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
                        Real experiences from professionals who trust Elevare with their financial growth.
                    </p>
                </motion.div>
            </div>
       </div>

       <div className="mb-20 pt-8">
        <TestimonialGrid items={items} />
       </div>
       
       <div className="max-w-4xl mx-auto px-4 mt-20 text-center">
            <h2 className="text-2xl font-bold text-foreground font-heading mb-6">
                Ready to write your own success story?
            </h2>
            <a href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-primary/25">
                Get in Touch
            </a>
       </div>
    </main>
  );
}
