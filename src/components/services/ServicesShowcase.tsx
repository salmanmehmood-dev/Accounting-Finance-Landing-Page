"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site-content";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { BarChart3, BookOpen, Globe, Shield, Activity, ArrowRight, X } from "lucide-react";
import Image from "next/image";

const iconMap = {
  chart: BarChart3,
  book: BookOpen,
  globe: Globe,
  shield: Shield,
  activity: Activity,
};

export function ServicesShowcase() {
  const [selectedService, setSelectedService] = useState<(typeof siteConfig.services)[0] | null>(null);

  return (
    <section id="services-showcase" className="py-24 bg-background relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left: Services Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
                {siteConfig.services.map((service, index) => {
                    const Icon = iconMap[service.icon] || Activity;
                    return (
                        <motion.div
                            key={index}
                            layoutId={`card-${service.title}-${index}`}
                            onClick={() => setSelectedService(service)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:bg-accent/5 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full min-h-[280px] cursor-pointer"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-border/10 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Learn more <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Right: Sticky Content */}
            <div className="lg:sticky lg:top-32 pt-12 self-start">
                <div className="mb-6 h-1 w-20 bg-primary/50 rounded-full" />
                <span className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-4 block">
                    Our Services
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
                    We Can Help You Solve Your Problem Through <span className="text-primary">Our Services</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We are a financial strategy and digital advisory agency with over a decade of experience, crafting solutions that resonate with market demands and deliver tangible results.
                    <br /><br />
                    From intricate compliance audits to day-to-day bookkeeping, our expert team ensures your numbers tell a success story.
                </p>
            </div>
        </div>
      </div>

        {/* Modal Overlay */}
        <AnimatePresence>
            {selectedService && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedService(null)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center p-4 sm:p-6"
                    >
                        <motion.div
                            layoutId={`modal-${selectedService.title}`}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-4xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
                            >
                                <X className="w-5 h-5 text-foreground" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                                <Image
                                    src={selectedService.image || "https://images.unsplash.com/photo-1554224155-297c560deb7f?q=80&w=800&auto=format&fit=crop"}
                                    alt={selectedService.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                                     <h2 className="text-3xl font-bold text-white font-heading">{selectedService.title}</h2>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4 hidden md:block">
                                    {selectedService.title}
                                </h2>
                                
                                <div className="mb-6 flex items-center gap-2">
                                     <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {React.createElement(iconMap[selectedService.icon] || Activity, { size: 20 })}
                                     </div>
                                     <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Service Details</span>
                                </div>

                                <div className="prose prose-sm dark:prose-invert text-muted-foreground">
                                    <p className="text-lg leading-relaxed mb-6">
                                        {selectedService.description}
                                    </p>
                                    <p>
                                        Our <strong>{selectedService.title}</strong> service is designed to bring clarity, efficiency, and growth to your business. We go beyond basic execution to provide strategic insights that matter.
                                    </p>
                                    <h4 className="font-semibold text-foreground mt-6 mb-2">Key Benefits:</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Tailored solutions for your industry</li>
                                        <li>Dedicated expert support tailored to your needs</li>
                                        <li>Real-time reporting and analytics</li>
                                        <li>Compliance and risk management assurance</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </section>
  );
}
