"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { siteConfig } from "@/data/site-content";
import { Menu as IconMenu, X } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem, CompactProductItem } from "./navbar-menu";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] px-4 w-full md:max-w-fit hover:md:max-w-5xl transition-[max-width] duration-300",
          className
        )}
      >
        <div className="flex items-center justify-between rounded-full border border-transparent dark:border-white/[0.2] bg-white dark:bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 w-full h-full">
            <Link
              href="/"
              className="font-bold text-brand-ink dark:text-brand-icy text-sm mr-4 shrink-0"
            >
              {siteConfig.general.name}
            </Link>

            <div className="hidden md:flex flex-1 justify-center items-center">
               <Menu setActive={setActive}>
                  <Link href="/" className="text-black dark:text-white text-sm font-medium hover:opacity-80">Home</Link>
                  <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="p-4 text-sm w-[22rem]">
                        <div className="grid grid-cols-1 gap-4">
                            {siteConfig.services.map((service, idx) => (
                                <CompactProductItem
                                    key={service.title}
                                    title={service.title}
                                    href="/services"
                                    src={`https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=100&auto=format&fit=crop`} 
                                />
                            ))}
                        </div>
                      <div className="border-t border-neutral-200 dark:border-white/[0.2] mt-4 pt-4 text-center">
                         <HoveredLink href="/services">View All Services</HoveredLink>
                      </div>
                    </div>
                  </MenuItem>
                  <Link href="/about" className="text-black dark:text-white text-sm font-medium hover:opacity-80">About</Link>
                  <Link href="/testimonials" className="text-black dark:text-white text-sm font-medium hover:opacity-80">Testimonials</Link>
                  <Link href="/contact" className="text-black dark:text-white text-sm font-medium hover:opacity-80">Contact</Link>
               </Menu>
            </div>

            <div className="flex items-center gap-2 shrink-0">
                <ThemeToggle />
                <button 
                    className="md:hidden p-2 text-brand-ink dark:text-brand-icy"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X size={20} /> : <IconMenu size={20} />}
                </button>
            </div>
        </div>
      </motion.div>

        {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed top-24 inset-x-4 md:hidden z-[4999] bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.2] rounded-2xl shadow-xl p-4 flex flex-col gap-4"
            >
                <Link href="/" onClick={() => setMobileOpen(false)} className="text-brand-ink dark:text-brand-icy font-medium py-2 px-4 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">Home</Link>
                <Link href="/services" onClick={() => setMobileOpen(false)} className="text-brand-ink dark:text-brand-icy font-medium py-2 px-4 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">Services</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="text-brand-ink dark:text-brand-icy font-medium py-2 px-4 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">About</Link>
                <Link href="/testimonials" onClick={() => setMobileOpen(false)} className="text-brand-ink dark:text-brand-icy font-medium py-2 px-4 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">Testimonials</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-brand-ink dark:text-brand-icy font-medium py-2 px-4 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-lg">Contact</Link>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
