"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";

import { siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-icy/10 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 dark:border-brand-icy/10 dark:bg-brand-deep/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          className="flex items-center gap-2 font-semibold tracking-tight text-brand-ink dark:text-brand-icy"
          onClick={() => setMobileOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-sky to-brand-bell text-white shadow-sm">
            E
          </span>
          <span className="hidden sm:inline">{siteConfig.general.name}</span>
          <span className="sm:hidden">Elevare</span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link href={link.href}>{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-icy/15 bg-white/60 text-brand-ink transition-colors hover:bg-white dark:bg-white/5 dark:text-brand-icy dark:hover:bg-white/10"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-icy/15 bg-white/60 text-brand-ink transition-colors hover:bg-white dark:bg-white/5 dark:text-brand-icy dark:hover:bg-white/10 md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/30 transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm border-l border-brand-icy/10 bg-white/90 p-4 backdrop-blur-md transition-transform dark:bg-brand-ink/80",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-brand-ink dark:text-brand-icy">
              Menu
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-icy/15 bg-white/60 text-brand-ink transition-colors hover:bg-white dark:bg-white/5 dark:text-brand-icy dark:hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 grid gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-brand-ink/90 transition-colors hover:bg-brand-icy/10 dark:text-brand-icy/90 dark:hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-brand-icy/10 bg-white/60 p-4 text-sm text-brand-ink/70 dark:bg-white/5 dark:text-brand-icy/70">
            {siteConfig.general.tagline}
          </div>
        </div>
      </div>
    </header>
  );
}
