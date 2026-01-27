"use client";

import React from "react";
import { siteConfig } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Floating Feature Card Component
const FeatureCard = ({ icon: Icon, label, subLabel, delay, x, y }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="absolute bg-background/90 backdrop-blur-md border border-border/50 p-4 rounded-2xl shadow-xl flex items-center gap-3 w-auto min-w-[160px] z-20"
    style={{ top: y, left: x }}
  >
    <div className="p-2 rounded-full bg-primary/10 text-primary">
      <Icon className="w-5 h-5" />
    </div>
    <div>
        <div className="text-sm font-bold text-foreground">{label}</div>
        <div className="text-xs text-muted-foreground">{subLabel}</div>
    </div>
  </motion.div>
);

export function Hero() {
  const primaryCta = siteConfig.hero.ctas[0];

  return (
    <section className="w-full py-0 px-0 2xl:px-8 bg-background">
      {/* Framed Hero Container */}
      <div className="relative w-full min-h-screen rounded-none 2xl:rounded-[3rem] overflow-hidden bg-[url('/hero-section/background-light.png')] dark:bg-[url('/hero-section/background-dark.png')] bg-cover bg-center bg-no-repeat transition-all duration-500 flex items-start justify-center shadow-2xl border-b 2xl:border border-border/50">
          
        <div className="container mx-auto px-4 md:px-8 lg:px-12 pt-32 md:pt-40 pb-20 z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-md text-[10px] sm:text-xs font-medium shadow-sm w-fit text-secondary"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    Trusted by 50+ Growth Startups
                </motion.div>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] tracking-tight text-balance"
              >
                {siteConfig.hero.title}{" "}
                <span className="block mt-2 theme-gradient-text animate-gradient-x">
                   Financial Clarity.
                </span>
              </motion.h1>

              <motion.p
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="max-w-xl text-base sm:text-lg md:text-xl text-slate-700 dark:text-muted-foreground leading-relaxed text-pretty"
              >
                {siteConfig.hero.subHeadline}
              </motion.p>
              
              {/* Email Input Form */}
              <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.3 }}
                 className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md bg-white dark:bg-card/50 p-1.5 sm:p-2 rounded-2xl sm:rounded-full border border-border/50 shadow-lg backdrop-blur-sm"
              >
                <input 
                  type="email" 
                  placeholder="Your work email address" 
                  className="flex-1 bg-transparent border-none outline-none px-4 py-3 sm:py-2 text-foreground placeholder:text-muted-foreground bg-transparent w-full text-base"
                />
                <Button size="lg" className="rounded-xl sm:rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all w-full sm:w-auto font-semibold text-base">
                     Get Started
                </Button>
              </motion.div>
              
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.5 }}
                 className="flex flex-wrap gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-muted-foreground mt-4"
               >
                   <span className="flex items-center gap-1.5 sm:gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-3 py-1.5 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" /> CFO Advisory</span>
                   <span className="flex items-center gap-1.5 sm:gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-3 py-1.5 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" /> Tax Compliance</span>
                   <span className="flex items-center gap-1.5 sm:gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 px-3 py-1.5 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" /> Bookkeeping</span>
               </motion.div>
            </div>

            {/* Right Column: Visual Elements */}
            <div className="relative w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
               {/* Main Visual Container */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[380px] h-[480px] rounded-[2.5rem] bg-gradient-to-b from-white/40 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/20 shadow-2xl overflow-hidden flex flex-col"
             >
                {/* Visual Header */}
                <div className="p-6 border-b border-white/20 flex justify-between items-center bg-white/5">
                    <div className="flex gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-400/80 shadow-inner" />
                         <div className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-inner" />
                         <div className="w-3 h-3 rounded-full bg-green-400/80 shadow-inner" />
                    </div>
                    <div className="flex gap-2">
                        <div className="h-2 w-16 rounded-full bg-white/20" />
                        <div className="h-2 w-8 rounded-full bg-white/10" />
                    </div>
                </div>

                {/* Animated Chart Area */}
                <div className="flex-1 p-6 relative flex flex-col justify-end pb-8 group">
                     {/* Background Grid Dots */}
                     <div className="absolute inset-0 p-6 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                     {/* Main Area Chart */}
                     <div className="absolute inset-x-6 bottom-12 h-[200px] pointer-events-none">
                         <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                             <defs>
                                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                     <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-secondary" />
                                     <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-secondary" />
                                 </linearGradient>
                             </defs>
                             <motion.path
                                 d="M0,100 L0,100 L0,80 Q25,75 50,45 T100,15 L100,100 Z"
                                 fill="url(#chartGradient)"
                                 initial={{ opacity: 0, pathLength: 0 }}
                                 animate={{ opacity: 1, pathLength: 1 }}
                                 transition={{ duration: 1.5, ease: "easeOut" }}
                             />
                             <motion.path
                                 d="M0,80 Q25,75 50,45 T100,15"
                                 fill="none"
                                 stroke="currentColor" 
                                 strokeWidth="3"
                                 className="text-secondary drop-shadow-lg"
                                 initial={{ pathLength: 0 }}
                                 animate={{ pathLength: 1 }}
                                 transition={{ duration: 1.5, ease: "easeOut" }}
                             />
                         </svg>
                     </div>

                     {/* Secondary Bar Chart (Mini) */}
                     <div className="absolute top-8 left-8 flex items-end gap-1 h-16 w-24">
                         {[40, 70, 50, 90, 60, 80].map((h, i) => (
                             <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                                className="flex-1 bg-primary/40 rounded-t-sm hover:bg-primary/60 transition-colors"
                             />
                         ))}
                     </div>

                     {/* Floating Stats Badge */}
                     <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute top-1/3 right-8 bg-background/90 backdrop-blur-md p-4 rounded-2xl border border-border/50 shadow-xl"
                     >
                        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                            Net Revenue
                        </div>
                        <div className="text-3xl font-bold text-foreground">
                            $124.5k
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                             <span className="flex items-center gap-1 text-xs text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded-md">
                                <TrendingUp className="w-3 h-3" /> +12.5%
                            </span>
                            <span className="text-[10px] text-muted-foreground/80">vs last month</span>
                        </div>
                     </motion.div>
                </div>
             </motion.div>
               {/* Floating Feature Bubbles */}
               <FeatureCard 
                  icon={TrendingUp} 
                  label="Growth" 
                  subLabel="+128% vs Last Year"
                  delay={0.6}
                  x="5%" 
                  y="20%" 
               />
               <FeatureCard 
                  icon={ShieldCheck} 
                  label="Compliance" 
                  subLabel="Startups & LLCs"
                  delay={0.8}
                  x="60%" 
                  y="15%" 
               />
               <FeatureCard 
                  icon={PieChart} 
                  label="Clarity" 
                  subLabel="Real-time Insights"
                  delay={1.0}
                  x="-5%" 
                  y="60%" 
               />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

