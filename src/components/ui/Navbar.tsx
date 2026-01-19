"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site-content";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "Why Us", href: "/#value" },
        { name: "About Us", href: "/about" },
        { name: "Testimonials", href: "/testimonials" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-white/10 shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center gap-2">
                   <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-foreground">
                        Elevare<span className="text-primary">Hub</span>
                   </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium shadow-lg hover:shadow-primary/25 transition-all">
                        <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 text-foreground hover:bg-muted rounded-full transition-colors relative z-50"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-lg font-medium text-foreground py-2 border-b border-white/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full justify-center mt-4 rounded-full">
                                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                                    Get Started
                                </Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
