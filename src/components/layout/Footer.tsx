import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-content";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
  >
    {children}
    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
  </Link>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="font-heading font-bold text-2xl tracking-tight text-foreground">
                Elevare<span className="text-primary">Hub</span>
             </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.general.tagline}. We provide expert accounting & financial advisory
              services to help startups and businesses grow with confidence.
            </p>
            <div className="flex gap-4">
               {/* Placeholders for social icons if siteConfig had them, using generic for now */}
               <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
               <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <FooterLink href="/services">{service.title}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
              <li><FooterLink href="#faq">FAQ</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Contact Us</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={16} />
                </div>
                {siteConfig.contact.email}
              </a>
              {siteConfig.contact.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s|\//g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone size={16} />
                    </div>
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.general.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
